#!/usr/bin/env bash
# Builds dist/ReadingQuest.apk. Installs the Android SDK command-line tools on first run.
set -euo pipefail
cd "$(dirname "$0")/.."

export ANDROID_HOME="${ANDROID_HOME:-$HOME/android-sdk}"
SDKM="$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager"

if [ ! -x "$SDKM" ]; then
  echo ">> Installing Android command-line tools into $ANDROID_HOME"
  mkdir -p "$ANDROID_HOME/cmdline-tools"
  curl -fL --retry 3 -o /tmp/cmdline-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
  rm -rf /tmp/cmdline-tools-unzip && mkdir /tmp/cmdline-tools-unzip
  unzip -q /tmp/cmdline-tools.zip -d /tmp/cmdline-tools-unzip
  rm -rf "$ANDROID_HOME/cmdline-tools/latest"
  mv /tmp/cmdline-tools-unzip/cmdline-tools "$ANDROID_HOME/cmdline-tools/latest"
fi

if [ ! -d "$ANDROID_HOME/platforms/android-35" ] || [ ! -d "$ANDROID_HOME/build-tools/35.0.0" ]; then
  echo ">> Installing SDK platform and build tools"
  yes | "$SDKM" --licenses >/dev/null || true
  "$SDKM" "platforms;android-35" "build-tools;35.0.0" "platform-tools"
fi

if [ ! -f keystore/readingquest.jks ]; then
  echo ">> Creating a new signing key in keystore/ (keep this folder safe and private: updates must be signed with the same key)"
  mkdir -p keystore
  PW="$(head -c 18 /dev/urandom | base64 | tr -dc 'A-Za-z0-9' | head -c 20)"
  keytool -genkeypair -keystore keystore/readingquest.jks -storepass "$PW" -keypass "$PW" \
    -alias readingquest -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Reading Quest"
  printf 'storePassword=%s\nkeyPassword=%s\nkeyAlias=readingquest\n' "$PW" "$PW" > keystore/keystore.properties
fi
if [ ! -f keystore/keystore.properties ]; then
  echo "keystore/readingquest.jks exists but keystore/keystore.properties is missing."
  echo "Create it with three lines: storePassword=..., keyPassword=..., keyAlias=readingquest"
  exit 1
fi

echo "sdk.dir=$ANDROID_HOME" > local.properties
node tools/make-sw.js >/dev/null
node tools/validate.js >/dev/null || { echo "Lesson content failed validation: run node tools/validate.js"; exit 1; }

if [ -x ./gradlew ]; then GRADLE=./gradlew; else GRADLE=gradle; fi
$GRADLE --no-daemon assembleRelease

mkdir -p dist
cp app/build/outputs/apk/release/app-release.apk dist/ReadingQuest.apk
"$ANDROID_HOME/build-tools/35.0.0/apksigner" verify --print-certs dist/ReadingQuest.apk | head -3
ls -la dist/ReadingQuest.apk
