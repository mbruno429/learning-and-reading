# Reading Quest

A 12-week reading comprehension program for one child. It starts at grade 2 and climbs, lesson by lesson, to grade 5+ text. It runs as a web app (GitHub Pages, installable to the home screen, works offline) and as an Android app built from the same files.

## What is in it

- **60 lessons** (12 weeks × 5 days, about 15 minutes each) with original passages and test-style questions, each with a hint and an explanation.
- **Four Reading Checks** (start, after weeks 4, 8 and 12): unseen texts at grade 2, grade 3 and grade 4–5 level, taken with no hints, no second tries and no read-aloud. These are the growth measure.
- **One-minute read** (fluency check) in the Grown-ups area: the child reads aloud, the parent taps missed words, the app reports words correct per minute.

| Week | Land | Skill | Text level |
|---|---|---|---|
| 1 | Sunny Shore | Key details (who, what, where, when, why) | Grade 2 |
| 2 | Tumble Trail | Sequence | Grade 2 |
| 3 | Big Idea Bay | Main idea | Grade 2–3 |
| 4 | Heartwood Forest | Characters | Grade 3 |
| 5 | Mystery Marsh | Inference | Grade 3 |
| 6 | Word Wizard Peaks | Word meaning (context clues, word parts) | Grade 3–4 |
| 7 | Thunder Canyon | Cause and effect, text structure | Grade 4 |
| 8 | Twin Rivers | Compare and contrast, paired texts | Grade 4 |
| 9 | Lantern Valley | Theme and summarizing | Grade 4–5 |
| 10 | Lookout Lighthouse | Point of view, author's purpose | Grade 5 |
| 11 | Crystal Caves | Text evidence, figurative language | Grade 5 |
| 12 | Summit of Stars | Mixed test-style review | Grade 5+ |

### Inside a lesson

1. **Power-Up**: the week's strategy with a worked example and two guided "you try" items (day 1; a one-line reminder on days 2–3; shown again after a failed lesson).
2. **Warm-up**: spaced review of earlier vocabulary, plus "second chance" questions the child missed on an earlier day.
3. **New words**, then a one-line **reading purpose**.
4. **Reading in parts** with unscored stop-and-think checks; optional read-aloud with the spoken word highlighted; tap a dotted word for its meaning.
5. **Questions**: multiple choice, choose TWO, put in order, sort into groups, tap the sentence that proves it, Part A / Part B. Look-back is always available. A miss gets a hint and a second try, then the explanation.
6. **Fix-it round**: anything not right on the first try comes back once before the rewards.
7. **Rewards and retell**: stars, sticker, gems, a "Tell a grown-up" prompt, and a one-sentence journal on Guardian days.

### How it adapts

- A lesson is passed with 60% of the points **and** at least half the questions right on the first try. Otherwise the child sees the strategy again, rereads and retries. After two tries the next lesson opens anyway.
- Support level (extra help / standard / independent) follows first-try results over the last three lessons.
- Three weak lessons in a row slow the pace to one new lesson a day and bring easier "comeback" lessons forward. The parent report flags it.
- From week 3, read-aloud opens after the child has had time to read alone (always available on extra help, or by parent setting).
- Answers given faster than the question could be read are flagged as rushed.

### Motivation

A quest map, a pet that hatches and grows with lessons finished, stickers, Guardian friends, a weekly goal of 5 reading days (weekends off are fine), a pet shop, and the Word Pop vocabulary game (which also counts as word review).

### Grown-ups area (behind a multiplication question)

Progress with alerts, a Growth tab (Reading Check chart and fluency trend), skill-by-skill report based on first tries only, the last lesson's passage and answers for talking it over, the plan, and settings (lessons per day, read-aloud, text size, Focus Lock screen pinning).

## Use it on the web (recommended)

The app is published with GitHub Pages at **https://mbruno429.github.io/learning-and-reading/**.

- Open that link in Chrome (Android, Chromebook, computer) or Safari (iPad, iPhone).
- **Put it on the home screen** so it opens full screen like an app: in Chrome, menu ⋮ → "Add to Home screen" / "Install app"; in Safari, Share → "Add to Home Screen".
- After the first visit it works **without internet**.
- Progress is stored in that browser on that device. Clearing the browser's site data erases it, so use **Grown-ups → Settings → Save a backup file** now and then; the same screen restores a backup (also the way to move to another device).
- Nothing about the child leaves the device: there is no account, no tracking and no server.
- For fewer distractions on Android, turn on "App pinning" in the device settings and pin Reading Quest before handing it over.

Every push to `main` republishes the site (`.github/workflows/pages.yml`): it checks the lesson content, rebuilds the offline file list and deploys `app/src/main/assets/www`.

## Install the Android app instead (APK)

The same files can be built into an Android app. It adds Focus Lock, a second copy of progress included in Android backup, and tighter control of the read-aloud voice.


1. Copy `ReadingQuest.apk` to the device (email, cloud drive, or USB) and tap it.
2. Android will ask to allow installs from that source; allow it once.
3. Requires Android 7.0 or newer with an up-to-date "Android System WebView" (update it in the Play Store on older devices).

Installing a newer `ReadingQuest.apk` over an older one keeps the child's progress. Progress is stored on the device (in two places, and included in Android's own backup if that is turned on). Uninstalling the app erases it.

**Sideloading is changing.** Google is rolling out "developer verification" for apps installed outside the Play Store on certified Android devices (already in a few countries in 2026, wider from 2027). If your device refuses the install, either install with `adb install ReadingQuest.apk` from a computer, or register the app (package `com.readingquest.app`, signed with `keystore/readingquest.jks`) in a free limited-distribution account in the Android Developer Console.

## Build it yourself

Open the folder in Android Studio, or from a terminal with the Android SDK installed:

```bash
./gradlew assembleRelease
```

The APK lands in `app/build/outputs/apk/release/`. `tools/build-apk.sh` does the same and also installs the SDK command-line tools on a fresh machine.

Updates must be signed with the same key, or Android will refuse to install over the old version. **The signing key is deliberately not in this repository** (`keystore/` is git-ignored): put your own copy at `keystore/readingquest.jks` before building, with its passwords in `keystore/keystore.properties` (three lines: `storePassword=…`, `keyPassword=…`, `keyAlias=readingquest`). Anyone holding that file can sign an "update" for this app, so keep it private. Without it, `tools/build-apk.sh` creates a new key, and an APK signed with a new key cannot be installed over an existing install. Raise `versionCode` in `app/build.gradle` for each new build. The app targets API 34 and is meant for sideloading; publishing on Google Play would need a higher target API, predictive-back support and edge-to-edge handling first.

## Project layout

- `app/src/main/assets/www/` — the app itself (HTML, CSS, JavaScript). Open `index.html` in any browser to try it on a computer.
  - `content/weekNN.js` — the lessons. `content/checkN.js` — Reading Check forms. `content/fluency.js` — one-minute read passages.
  - `js/curriculum.js` — the 12-week plan, skill list, Reading Check blueprint, fluency norms.
  - `js/store.js` — saved progress and every progression rule. `js/session.js` — the lesson engine.
- `app/src/main/java/.../MainActivity.java` — the Android wrapper (full screen, read-aloud voice, native copy of progress, Focus Lock).
- `tools/validate.js` — checks all content: structure, length, reading level, answer-length cues, evidence answers.
- `tools/blindquiz.js` — prints a week or Reading Check without the answer key, for review.
- `tools/playtest.js`, `tools/logictest.js`, `tools/bridgetest.js`, `tools/webtest.js` — automated tests in headless Chromium (`npm install playwright` first).
- `tools/make-sw.js` — rebuilds the offline file list (`www/sw.js`) for the hosted version; `js/web.js` holds the browser-only pieces.

```bash
node tools/validate.js
```

```bash
node tools/logictest.js
```

Fonts: Lexend and Baloo 2, both under the SIL Open Font License (license files in `www/fonts/`). Fluency norms: Hasbrouck & Tindal (2017).
