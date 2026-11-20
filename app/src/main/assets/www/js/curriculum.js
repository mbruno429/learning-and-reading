/* The 12-week plan: one "land" per week. Content for each week lives in content/weekNN.js */
(function (root) {
  'use strict';

  var SKILLS = {
    detail:     { kid: 'Find the Facts', name: 'Key Details',        icon: '🔎', tip: 'Find the question word (who, what, where, when, why, how). Then go back and find the answer in the text.' },
    sequence:   { kid: 'What Comes Next', name: 'Sequence',           icon: '🔢', tip: 'Look for order words like first, next, then, after, and finally.' },
    mainidea:   { kid: 'The Big Idea', name: 'Main Idea',          icon: '☂️', tip: 'Ask: What is this MOSTLY about? The main idea covers all the details like an umbrella.' },
    character:  { kid: 'Know the Characters', name: 'Characters',         icon: '🎭', tip: 'Watch what a character says, does, and feels. Actions are clues.' },
    inference:  { kid: 'Clue Detective', name: 'Inference',          icon: '🕵️', tip: 'Text clues + what you already know = a smart guess the author did not say out loud.' },
    vocab:      { kid: 'Word Meaning', name: 'Word Meaning',       icon: '📖', tip: 'Read the sentences around the word. Try each answer in its place and see which one makes sense.' },
    cause:      { kid: 'Why It Happened', name: 'Cause & Effect',     icon: '⚡', tip: 'The cause is WHY it happened. The effect is WHAT happened. Look for because, so, and as a result.' },
    compare:    { kid: 'Same and Different', name: 'Compare & Contrast', icon: '⚖️', tip: 'Compare = how things are alike. Contrast = how they are different. Look for both, but, and however.' },
    theme:      { kid: 'The Lesson', name: 'Theme',              icon: '💡', tip: 'The theme is the big lesson. Ask: What did the character learn that I could use in my life?' },
    summary:    { kid: 'Tell It Short', name: 'Summarize',          icon: '📝', tip: 'A good summary tells only the most important parts, in order, in a few sentences.' },
    pov:        { kid: 'Who Is Telling', name: 'Point of View',      icon: '👀', tip: 'Ask: Who is telling this? What do they think or feel about it?' },
    purpose:    { kid: 'Why It Was Written', name: "Author's Purpose",   icon: '✍️', tip: 'Why did the author write this? To persuade, to inform, or to entertain?' },
    structure:  { kid: 'How It Is Built', name: 'Text Structure',     icon: '🏗️', tip: 'How is the text built? In time order, as a problem and solution, as cause and effect, or by comparing?' },
    features:   { kid: 'Text Helpers', name: 'Text Features',      icon: '🗂️', tip: 'Headings, bold words, and captions help you find information fast.' },
    figurative: { kid: 'Word Pictures', name: 'Figurative Language', icon: '🎨', tip: 'Writers paint pictures with words. Ask: What does it really mean, not just what it says?' },
    evidence:   { kid: 'Prove It', name: 'Text Evidence',      icon: '📌', tip: 'Prove it! Find the exact sentence in the text that shows your answer is right.' }
  };

  // words: allowed passage length. fk: allowed Flesch-Kincaid grade band (rough check).
  // q: questions in a regular session (boss sessions always have 8). vocab: words pre-taught per session.
  var WEEKS = [
    null,
    { n: 1,  land: 'Sunny Shore',        emoji: '🏖️', focus: ['detail'],               title: 'Detective Details',         grade: 'Grade 2',       words: [105, 160], fk: [0.3, 3.0], q: 5, vocab: 3, guardian: { name: 'Captain Crab',    emoji: '🦀' }, c1: '#ffb347', c2: '#ffd98a' },
    { n: 2,  land: 'Tumble Trail',       emoji: '🌄', focus: ['sequence'],             title: 'First, Next, Last',         grade: 'Grade 2',       words: [135, 190], fk: [1.0, 3.4], q: 5, vocab: 3, guardian: { name: 'Tick-Tock Tortoise', emoji: '🐢' }, c1: '#7ed957', c2: '#c5f2a8' },
    { n: 3,  land: 'Big Idea Bay',       emoji: '🌊', focus: ['mainidea'],             title: 'The Big Idea',              grade: 'Grade 2–3',     words: [165, 230], fk: [1.6, 4.0], q: 5, vocab: 3, guardian: { name: 'Wise Whale',      emoji: '🐋' }, c1: '#38b6ff', c2: '#a8e0ff' },
    { n: 4,  land: 'Heartwood Forest',   emoji: '🌳', focus: ['character'],            title: 'Getting to Know Characters', grade: 'Grade 3',      words: [205, 270], fk: [2.0, 4.4], q: 5, vocab: 3, guardian: { name: 'Big-Heart Bear',  emoji: '🐻' }, c1: '#2fa866', c2: '#9be0b8' },
    { n: 5,  land: 'Mystery Marsh',      emoji: '🕵️', focus: ['inference'],            title: 'Reading Between the Lines', grade: 'Grade 3',       words: [245, 310], fk: [2.4, 4.8], q: 6, vocab: 4, guardian: { name: 'Detective Fox',   emoji: '🦊' }, c1: '#8c6bdb', c2: '#cdbdf5' },
    { n: 6,  land: 'Word Wizard Peaks',  emoji: '🏔️', focus: ['vocab'],                title: 'Cracking Tricky Words',     grade: 'Grade 3–4',     words: [275, 340], fk: [2.8, 5.2], q: 6, vocab: 4, guardian: { name: 'Professor Owl',   emoji: '🦉' }, c1: '#5271ff', c2: '#b9c6ff' },
    { n: 7,  land: 'Thunder Canyon',     emoji: '⛈️', focus: ['cause', 'structure'],   title: 'Why Things Happen',         grade: 'Grade 4',       words: [305, 380], fk: [3.2, 5.8], q: 6, vocab: 4, guardian: { name: 'Storm Eagle',     emoji: '🦅' }, c1: '#ff7a59', c2: '#ffc2b0' },
    { n: 8,  land: 'Twin Rivers',        emoji: '🏞️', focus: ['compare'],              title: 'Alike and Different',       grade: 'Grade 4',       words: [335, 410], fk: [3.6, 6.2], q: 6, vocab: 4, guardian: { name: 'The Duck Twins',  emoji: '🦆' }, c1: '#00b3a4', c2: '#9ee8e1' },
    { n: 9,  land: 'Lantern Valley',     emoji: '🏮', focus: ['theme', 'summary'],     title: 'The Lesson of the Story',   grade: 'Grade 4–5',     words: [365, 440], fk: [3.8, 6.6], q: 6, vocab: 4, guardian: { name: 'Elder Deer',      emoji: '🦌' }, c1: '#ff5d8f', c2: '#ffb9cf' },
    { n: 10, land: 'Lookout Lighthouse', emoji: '🗼', focus: ['pov', 'purpose'],       title: 'Who Is Telling & Why',      grade: 'Grade 5',       words: [395, 470], fk: [4.2, 7.0], q: 6, vocab: 4, guardian: { name: 'Keeper Cat',      emoji: '🐈' }, c1: '#f2a900', c2: '#ffe08a' },
    { n: 11, land: 'Crystal Caves',      emoji: '💎', focus: ['evidence', 'figurative'], title: 'Prove It & Picture It',   grade: 'Grade 5',       words: [425, 510], fk: [4.5, 7.6], q: 6, vocab: 4, guardian: { name: 'Echo Bat',        emoji: '🦇' }, c1: '#b15cff', c2: '#e0bfff' },
    { n: 12, land: 'Summit of Stars',    emoji: '🌟', focus: ['evidence', 'inference', 'mainidea', 'theme', 'compare', 'vocab'], title: 'Master Reader Challenge', grade: 'Grade 5+', words: [455, 580], fk: [4.8, 8.2], q: 6, vocab: 4, guardian: { name: 'The Star Lion',   emoji: '🦁' }, c1: '#3d5afe', c2: '#ffd54f' }
  ];

  var GENRES = {
    fiction: 'Story', fable: 'Fable', info: 'Nonfiction', bio: 'Biography',
    poem: 'Poem', howto: 'How-To', letter: 'Letter', opinion: 'Opinion'
  };

  // Reading Checks (cold reads with no help): 1 = before week 1, then after weeks 4, 8 and 12.
  // Every form has one passage at each level, so results can be compared over time.
  var CHECKS = {
    after: [0, 0, 4, 8, 12],            // form n is due once this week is finished (form 1: at the start)
    levels: [
      { level: 2, label: 'Grade 2 text', words: [130, 185], fk: [1.4, 3.3] },
      { level: 3, label: 'Grade 3 text', words: [215, 285], fk: [2.9, 4.9] },
      { level: 5, label: 'Grade 4-5 text', words: [325, 425], fk: [4.8, 7.4] }
    ],
    blueprint: {                         // skill of each of the 5 questions, by level
      2: ['detail', 'sequence', 'vocab', 'mainidea', 'inference'],
      3: ['detail', 'vocab', 'inference', 'mainidea', 'evidence'],
      5: ['inference', 'vocab', 'theme|mainidea', 'evidence', 'compare|purpose|cause|detail|character']
    }
  };

  // Oral reading fluency, 50th percentile words correct per minute (Hasbrouck & Tindal, 2017): [fall, winter, spring]
  var FLUENCY_NORMS = { 2: [50, 84, 100], 3: [83, 97, 112], 4: [94, 120, 133], 5: [121, 133, 146] };
  var FLUENCY_BANDS = { 2: [1.4, 3.2], 3: [2.9, 4.7], 4: [3.9, 6.0], 5: [4.8, 7.2] };

  var api = { SKILLS: SKILLS, WEEKS: WEEKS, GENRES: GENRES, CHECKS: CHECKS, FLUENCY_NORMS: FLUENCY_NORMS, FLUENCY_BANDS: FLUENCY_BANDS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RQCurriculum = api;
})(typeof window !== 'undefined' ? window : this);
