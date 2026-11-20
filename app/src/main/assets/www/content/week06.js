window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[6] = {
  strategy: {
    name: 'Word Wizard',
    icon: '🔮',
    tagline: 'Stuck on a word? Use your magic tools!',
    steps: [
      'Clue hunt: read the sentences before and after the tricky word. Authors often hide the meaning nearby.',
      'Break it apart: look for word parts you know, like un- (not), re- (again), pre- (before), mis- (wrongly), -ful (full of), and -less (without).',
      'Some words have more than one meaning. Pick the meaning that fits THIS sentence.',
      'Swap test: put your guess in place of the word. Does the sentence still make sense?'
    ],
    example: {
      text: 'The puppy was fearless. It marched right up to the huge, roaring vacuum.',
      q: 'What does "fearless" mean?',
      a: 'Without fear. The ending -less means "without," and marching up to a roaring vacuum is a clue that the puppy was brave.'
    },
    practice: [
      {
        text: 'Ben was famished after soccer practice. He ate two bowls of soup and three rolls, and he still asked for more.',
        q: 'What does "famished" mean?',
        options: ['Very hungry', 'Very sleepy', 'Very proud'],
        why: 'Clue hunt: the next sentence says Ben ate a lot and still wanted more. Swap test: "Ben was very hungry after soccer practice" makes sense.'
      },
      {
        text: 'The hikers stopped at a spring to refill their bottles. The water bubbled up from the ground, cold and clear.',
        q: 'What does "spring" mean in this text?',
        options: ['Water that comes up from the ground', 'The season that comes after winter', 'A metal coil that bounces back'],
        why: '"Spring" has more than one meaning. You cannot refill a bottle at a season or a metal coil, and the next sentence says the water "bubbled up from the ground."'
      }
    ]
  },
  sessions: [
    {
      id: 'w6d1',
      title: 'The Walk That Led to an Invention',
      genre: 'bio',
      sticker: { emoji: '🔬', name: 'Curious Microscope' },
      purpose: 'Read to find out what one curious man discovered after a walk with his dog.',
      stops: [
        { after: 1, q: 'Why did George put a burr under his microscope?', options: ['He wondered why burrs were so hard to pull off.', 'He wanted to grow new plants from the seeds inside.', 'He thought the prickly burr had hurt his dog.'], say: 'Yes! George did not just grumble. He wanted to know why the burrs held on so tightly.' },
        { after: 3, q: 'What is this part mostly about?', options: ['George worked a long time to copy the burr.', 'George gave up when people laughed.', 'George found more burrs in the mountains.'], say: 'Right! Copying the burr was a hard job that took George many years.' }
      ],
      vocab: [
        { word: 'curious', def: 'wanting to know or learn more', ex: 'The curious kitten sniffed every box.' },
        { word: 'examined', def: 'looked at very closely', ex: 'The doctor examined my sore throat.' },
        { word: 'attempts', def: 'tries at doing something', ex: 'It took me three attempts to tie the knot.' },
        { word: 'firmly', def: 'in a strong, tight way', ex: 'Hold the railing firmly on the stairs.' }
      ],
      passage: [
        'Some of the best ideas begin with a small problem. In 1941, a Swiss engineer named George de Mestral took his dog for a walk in the mountains. When they got home, both of them were covered in burrs. Burrs are the prickly seed cases of some plants. They cling to almost anything that brushes past.',
        'Most people would have grumbled and picked the burrs off. George was curious instead. He wondered why they were so hard to pull off. He put one burr under his microscope, a tool that makes tiny things look much larger. Then he examined it closely.',
        'What he saw amazed him. Each burr was covered with hundreds of tiny hooks. The hooks had caught on the loops of thread in his pants and on the curly fur of his dog. Nature had made a fastener that held on tight. Yet it could be pulled apart and reused again and again.',
        'George decided to copy the burr. This was not a simple job. He needed one strip of cloth with tiny hooks and another with soft loops. His first attempts were unsuccessful. Some people thought the whole idea was foolish. George kept testing new ideas anyway. After many years of work, he made strips that stuck together firmly and peeled apart with a loud rip.',
        'He named his invention Velcro. The name joins parts of two French words: "velours," which means velvet, and "crochet," which means hook. Today, hook-and-loop fasteners are found on shoes, coats, and backpacks. Astronauts have even used them to keep tools from floating away in space.',
        'All of that began because one man was curious about something stuck to his dog. The next time a small problem bothers you, take a closer look. It might be hiding a wonderful idea.'
      ],
      questions: [
        { type: 'mc', skill: 'vocab', q: 'According to the passage, what is a "microscope"?', options: ['A tool that makes tiny things look larger', 'A plant with prickly seed cases', 'A strip of cloth with tiny hooks', 'A machine that sews thread into loops'], para: 1, hint: 'Sometimes an author explains a hard word right after it. Look at the words right after "microscope."', why: 'The text calls a microscope "a tool that makes tiny things look much larger."' },
        { type: 'mc', skill: 'vocab', q: 'George\'s first attempts were "unsuccessful." What does "unsuccessful" mean?', options: ['They did not work.', 'They worked right away.', 'They were finished quickly.', 'They were kept secret.'], para: 3, hint: 'Break the word apart. What does the beginning un- do to the word "successful"?', why: 'The word part un- means "not." His first tries were not successful, so they did not work.' },
        { type: 'mc', skill: 'vocab', q: 'The fastener "could be pulled apart and reused." What does the word part re- tell you about the word "reused"?', options: ['It can be used again.', 'It can never be used.', 'It was used the wrong way.', 'It was used before others.'], para: 2, hint: 'Think of words like "redo" and "reread." Then look at the words right after "reused."', why: 'Re- means "again." The words "again and again" in the sentence are another clue.' },
        { type: 'mc', skill: 'character', q: 'Which word best describes George de Mestral?', options: ['Determined', 'Impatient', 'Careless', 'Discouraged'], para: 3, hint: 'What did George do when his first tries failed and people called his idea foolish?', why: 'George "kept testing new ideas anyway" for many years. A person who does not give up is determined.' },
        { type: 'order', skill: 'sequence', q: 'Put the events in the order they happened.', items: ['George and his dog came home covered in burrs.', 'George looked at a burr under a microscope.', 'He saw hundreds of tiny hooks.', 'He worked for years to copy the burr.', 'His fasteners were used on shoes and in space.'], hint: 'Follow the passage from the mountain walk to today.', why: 'The burrs came first, then the microscope, the discovery of hooks, years of work, and finally the many uses.' },
        { type: 'mc', skill: 'mainidea', q: 'What is the main idea of this passage?', options: ['A small problem led to a useful invention.', 'Burrs are the seed cases of some plants.', 'Astronauts need special tools in space.', 'Dogs often pick up burrs on long walks.'], hint: 'Which answer tells about the whole passage, from the walk to the invention?', why: 'The whole passage explains how annoying burrs gave George the idea for a new fastener. The other choices are small details.' }
      ],
      talk: 'Tell a grown-up: Find a word around you that starts with un- or re-. What does it mean, and how does the word part help?'
    },
    {
      id: 'w6d2',
      title: 'The Unbeatable Kite',
      genre: 'fiction',
      sticker: { emoji: '🎀', name: 'Red Ribbon Tail' },
      purpose: 'Read to find out what happens to the kite Luis calls the Unbeatable.',
      stops: [
        { after: 3, q: 'What is the problem so far?', options: ['The kite is stuck in a tree.', 'The kite string snapped in two.', 'Biscuit ran away with the kite.'], say: 'Yes! The string is wrapped around a branch of the old oak tree.' },
        { after: 5, q: 'Why did Luis feel hopeless?', options: ['He could not climb up to the kite.', 'Maya and Theo laughed at him.', 'The wind had stopped blowing.'], say: 'Right! The lowest branch was too high, so climbing did not work.' }
      ],
      vocab: [
        { word: 'predicted', def: 'said what would happen before it did', ex: 'Mom predicted that it would rain by noon.' },
        { word: 'gust', def: 'a sudden, strong rush of wind', ex: 'A gust blew my hat across the yard.' },
        { word: 'swiftly', def: 'very quickly', ex: 'The deer ran swiftly into the woods.' },
        { word: 'admitted', def: 'said something was true, even though it was hard to say', ex: 'Jo admitted that she broke the cup.' }
      ],
      passage: [
        'Saturday was bright and breezy, the perfect day to test the kite Luis had built. He called it the Unbeatable, and it was shaped like a diamond with a long tail of red ribbons.',
        '"It will soar higher than the treetops," Luis predicted. To soar, he explained to Theo, meant to fly high in the air without any trouble at all.',
        'At the park, Maya held the spool of string while Luis ran. A gust lifted the kite, and it climbed swiftly into the sky. Theo cheered, and Biscuit began to bark and chase the dancing shadow of the kite across the grass. For a few wonderful minutes, the kite was only a red speck against the clouds.',
        'Then something went wrong. The kite dipped, spun, and dove straight into the old oak tree at the edge of the field. The string was wrapped around a branch, and the kite hung there like a strange red fruit.',
        'Luis groaned. "I was careless," he admitted. "I tied the tail in a hurry, and the knot came loose. Without a tail, a kite can\'t stay steady."',
        'He tried to climb after it, but the lowest branch was too high to reach, and the rough bark scraped his hands. He slid back down, feeling hopeless.',
        'Maya studied the tree thoughtfully. "We don\'t need to go up," she said. "We need the kite to come down." She gently wiggled the string left, then right, then left again. Little by little, the string began to unwind from the branch. With one last tug, the kite slipped free and floated into Theo\'s waiting arms.',
        'Luis found the fallen tail in the grass and sat right down to retie it. This time he made a double knot and tested it twice.',
        '"Ready for a second flight?" asked Maya.',
        '"Ready," said Luis, grinning. "But maybe we should rename it the Almost Unbeatable."'
      ],
      questions: [
        { type: 'mc', skill: 'vocab', q: 'What does "soar" mean in this story?', options: ['To fly high in the air', 'To fall to the ground', 'To spin in circles', 'To make a loud noise'], para: 1, hint: 'Luis explains this word to Theo. Reread the sentence right after he says it.', why: 'The story says, "To soar ... meant to fly high in the air without any trouble at all."' },
        { type: 'mc', skill: 'vocab', q: 'When Luis climbed the tree, "the rough bark scraped his hands." What does "bark" mean in this sentence?', options: ['The outer skin of a tree', 'The sound that a dog makes', 'A loud, sharp order', 'A kind of strong knot'], para: 5, hint: '"Bark" has more than one meaning. What is Luis touching in this sentence?', why: 'Luis is climbing a tree, so "bark" is the rough outside of the tree. Earlier, Biscuit\'s "bark" was a sound.' },
        { type: 'mc', skill: 'vocab', q: 'Luis said, "I was careless." What does "careless" mean?', options: ['Without enough care', 'Full of care', 'Caring once again', 'Caring ahead of time'], para: 4, hint: 'Look at the ending -less. Think of "hopeless" in the story. Then read what Luis says he did with the knot.', why: 'The ending -less means "without." Luis tied the tail "in a hurry," without enough care.' },
        { type: 'mc', skill: 'detail', q: 'Why did the kite crash into the tree?', options: ['The knot on its tail came loose.', 'The wind suddenly stopped.', 'Biscuit pulled on the string.', 'Maya dropped the spool.'], para: 4, hint: 'Luis explains what went wrong. Find the paragraph where he groans.', why: 'Luis says, "the knot came loose. Without a tail, a kite can\'t stay steady."' },
        { type: 'mc', skill: 'character', q: 'What does the way Maya frees the kite show about her?', options: ['She thinks calmly about a problem.', 'She is afraid to climb trees.', 'She wants to keep the kite.', 'She likes to tell Luis what to do.'], para: 6, hint: 'Luis rushed up the tree. What did Maya do first, before she touched the string?', why: 'Maya "studied the tree thoughtfully" and then found a clever, gentle way to get the kite down.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the story in order.', items: ['The kite climbed into the sky.', 'The kite crashed into the oak tree.', 'Luis tried to climb the tree.', 'Maya wiggled the string free.', 'Luis tied a double knot.'], hint: 'Picture the story like a movie, from the first flight to the fix.', why: 'The kite flew, crashed, Luis tried climbing, Maya freed the kite, and Luis retied the tail.' }
      ],
      talk: 'Tell a grown-up what "retie," "rename," and "unwind" mean. How do the word parts re- and un- help you?'
    },
    {
      id: 'w6d3',
      title: 'Riding the Wind in a Balloon',
      genre: 'info',
      sticker: { emoji: '🎈', name: 'Hot-Air Balloon' },
      purpose: 'Read to find out how a hot-air balloon flies without wings or an engine.',
      stops: [
        { after: 1, q: 'Why does a hot-air balloon float up?', options: ['Hot air is lighter than cool air.', 'Strong wind pushes it from below.', 'The cloth and paper weigh almost nothing.'], say: 'Yes! Warm air is lighter than the cool air around it, so it rises.' },
        { after: 3, q: 'What is this part mostly about?', options: ['How the pilot makes the balloon rise or sink', 'How the first balloon was built', 'Where the passengers stand during a ride'], say: 'Right! Heating the air and letting it cool changes how high the balloon floats.' }
      ],
      vocab: [
        { word: 'enormous', def: 'very, very big', ex: 'An enormous truck blocked the whole road.' },
        { word: 'drifts', def: 'moves slowly wherever the wind or water carries it', ex: 'A fallen leaf drifts down the stream.' },
        { word: 'descend', def: 'to go down', ex: 'The plane began to descend toward the airport.' },
        { word: 'skillful', def: 'very good at doing something', ex: 'The skillful artist drew a horse in one minute.' }
      ],
      passage: [
        'Long before airplanes, people dreamed of floating through the sky. In 1783, two French brothers built a giant balloon out of cloth and paper. Its first passengers were not people at all. They were a sheep, a duck, and a rooster! All three landed safely. The age of ballooning had begun.',
        'A hot-air balloon works because of one simple fact: hot air rises. Warm air is lighter than the cool air around it. So it floats up, just as a bubble rises in water.',
        'The colorful part of the balloon is called the envelope. You may know an envelope as a paper cover for a letter. The envelope of a balloon is an enormous cloth bag that holds hot air. Under it hangs a basket where the pilot and passengers stand. Above their heads is a burner. It shoots a roaring flame into the envelope.',
        'To ascend, or go up, the pilot fires the burner. The air inside grows hotter, and the balloon lifts. To descend, the pilot lets the air cool. The pilot can also open a small flap at the top to let some hot air out. Then the balloon sinks gently toward the ground.',
        'Steering is trickier. A balloon has no wheel and no engine, so it drifts where the wind takes it. But winds often blow different ways at different heights. A skillful pilot rises or sinks to find a wind that is headed the right way.',
        'Nobody knows just where a balloon will land, so a crew follows it in a truck. When the basket touches down at last, they help fold the envelope and carry it all home.',
        'The ride itself is peaceful and nearly noiseless, except for the whoosh of the burner. Passengers say it feels like standing still while the world slides by below.'
      ],
      questions: [
        { type: 'mc', skill: 'vocab', q: 'What does "ascend" mean?', options: ['To go up', 'To go down', 'To move sideways', 'To stay in place'], para: 3, hint: 'The author gives the meaning right after the word. Look for the little word "or."', why: 'The text says, "To ascend, or go up." The words after "or" explain the meaning.' },
        { type: 'mc', skill: 'vocab', q: 'Read this sentence: "It shoots a roaring flame into the envelope." Which meaning of "envelope" fits this sentence?', options: ['A huge bag that holds hot air', 'A paper cover for a letter', 'A basket that carries passengers', 'A flame that heats the air'], para: 2, hint: '"Envelope" has more than one meaning. The author mentions two of them. Which one is part of a balloon?', why: 'The text says the envelope of a balloon "is an enormous cloth bag that holds hot air."' },
        { type: 'mc', skill: 'vocab', q: 'The ride is "nearly noiseless." What does "noiseless" mean?', options: ['Without noise', 'Full of noise', 'Noisy again', 'Noisy before'], para: 6, hint: 'Look at the ending -less. Also notice the word "peaceful" in the same sentence.', why: 'The ending -less means "without." A noiseless ride is quiet, which fits with "peaceful."' },
        { type: 'multi', skill: 'detail', q: 'How can a pilot make the balloon go down? Choose TWO answers.', options: ['Let the air inside cool', 'Open a flap at the top', 'Fire the burner', 'Turn a steering wheel', 'Fold the envelope'], correct: 2, para: 3, hint: 'Find the sentence that begins "To descend." Read it and the sentence after it.', why: 'The text says the pilot "lets the air cool" and "can also open a small flap at the top to let some hot air out."' },
        { type: 'mc', skill: 'inference', q: 'What is the most likely reason the first balloon passengers were animals instead of people?', options: ['No one knew if flying was safe.', 'Animals weigh less than people.', 'The brothers owned a large farm.', 'Animals enjoy floating in the air.'], para: 0, hint: 'This was the very first flight with passengers. What might people have worried about?', why: 'Nothing like this had been tried before. The text points out that the animals "landed safely," a clue that safety was the big question.' },
        { type: 'mc', skill: 'detail', q: 'How does a skillful pilot steer a balloon?', options: ['By rising or sinking to find a different wind', 'By turning the basket with ropes', 'By pointing the burner left or right', 'By asking the crew to pull it'], para: 4, hint: 'Reread the paragraph that begins "Steering is trickier."', why: 'The text says winds blow different ways at different heights, so the pilot "rises or sinks to find a wind that is headed the right way."' }
      ],
      talk: 'Tell a grown-up: "Envelope" has two meanings. Can you think of two meanings for "bat" and for "ring"?'
    },
    {
      id: 'w6d4',
      title: 'The Mislabeled Jar',
      genre: 'fiction',
      sticker: { emoji: '🍪', name: 'Salty Cookie' },
      purpose: 'Read to find out what goes wrong when Luis and Maya bake cookies.',
      stops: [
        { after: 2, q: 'What do we know about the sugar and salt jars so far?', options: ['They look alike, and the labels are hard to read.', 'One jar is much bigger, and it has a bright new label.', 'Both jars are almost empty, so more must be bought.'], say: 'Yes! Matching jars with faded labels could be easy to mix up.' },
        { after: 5, q: 'What is the problem so far?', options: ['The cookies look perfect but taste salty.', 'The cookies burned in the oven.', 'There is not enough dough for everyone.'], say: 'Right! Luis says they taste like the ocean, and ocean water is salty.' }
      ],
      vocab: [
        { word: 'ingredients', def: 'the foods that are mixed together to make something', ex: 'We bought the ingredients for pizza.' },
        { word: 'faded', def: 'lost its color or brightness', ex: 'My old red shirt has faded to pink.' },
        { word: 'chuckle', def: 'to laugh quietly', ex: 'The joke made Grandpa chuckle.' },
        { word: 'disguise', def: 'something that hides what a thing really is', ex: 'The spy wore a wig as a disguise.' }
      ],
      passage: [
        'On rainy afternoons, the kitchen at Grandma Rosa\'s house was the coziest place on the whole street. Today she had promised to teach Luis and Maya how to make her famous cinnamon cookies, and the two friends could hardly wait.',
        '"First, we preheat the oven," Grandma Rosa said, turning the dial. "That way it will already be hot when the cookies are ready to bake."',
        'Maya read the recipe card aloud while Luis gathered the ingredients, the foods they would need to mix together: flour, butter, eggs, cinnamon, and sugar. The sugar and the salt sat side by side in matching glass jars. Each jar had a faded label in curly handwriting that was hard to read.',
        'Luis measured two heaping cups from the jar marked SUGAR. Maya stirred until her arm ached. Soon the dough was smooth, and the kitchen smelled wonderful. Twelve minutes later, the cookies came out of the oven golden and perfect.',
        'Maya took the first bite. Her eyes grew wide, and her mouth puckered as if she had bitten a lemon. "Delicious," she croaked, reaching for her glass of water.',
        'Luis tried one and gagged. "These are dreadful! They taste like the ocean!"',
        'Grandma Rosa dipped a fingertip into the SUGAR jar and tasted it. She began to chuckle. "Oh dear. I refilled these jars last week, and I must have mixed them up. They are mislabeled. This one is full of salt!"',
        'Luis looked sadly at the tray of beautiful, useless cookies. Even Biscuit sniffed one and backed away.',
        '"Well," said Grandma Rosa cheerfully, "a mistake is only a lesson wearing a disguise. Let\'s relabel the jars and begin again."',
        'This time, Luis tasted a pinch from the jar before he measured anything. The second batch was sweet, warm, and gone before the rain stopped.'
      ],
      questions: [
        { type: 'mc', skill: 'vocab', q: 'Grandma Rosa said, "First, we preheat the oven." What does "preheat" mean?', options: ['To heat before using', 'To heat a second time', 'To stop heating', 'To heat too much'], para: 1, hint: 'The word part pre- means "before." Now read what Grandma Rosa says next.', why: 'Pre- means "before." Grandma Rosa explains that the oven "will already be hot when the cookies are ready."' },
        { type: 'mc', skill: 'vocab', q: 'Grandma Rosa said the jars were "mislabeled." What does "mislabeled" mean?', options: ['Labeled the wrong way', 'Labeled once more', 'Missing a label', 'Labeled ahead of time'], para: 6, hint: 'Think of "misspell" and "mistake." What does mis- do to a word? What was really inside the SUGAR jar?', why: 'Mis- means "wrongly." The jar said SUGAR, but it held salt, so its label was wrong.' },
        { type: 'mc', skill: 'vocab', q: 'Luis said the cookies were "dreadful." Which word means almost the same as "dreadful"?', options: ['Terrible', 'Sweet', 'Crunchy', 'Pretty'], para: 5, hint: 'Luis gagged when he tasted one. What kind of word would he use next?', why: 'Luis gagged and said they "taste like the ocean." "Dreadful" means very bad or terrible.' },
        { type: 'mc', skill: 'inference', q: 'What is the most likely reason Maya said "Delicious" after her first bite?', options: ['She was trying to be polite.', 'She loved salty cookies.', 'She wanted Luis to eat them all.', 'She could not taste anything.'], para: 4, hint: 'Look at Maya\'s face and what she reaches for. Do her actions match her word?', why: 'Her mouth puckered, she croaked, and she grabbed water. She did not like the cookie but did not want to hurt anyone\'s feelings.' },
        { type: 'mc', skill: 'vocab', q: 'Grandma Rosa says, "a mistake is only a lesson wearing a disguise." What does she mean?', options: ['A mistake can teach you something.', 'People should hide their mistakes.', 'Costumes make baking more fun.', 'Lessons are hard to understand.'], para: 8, hint: 'A disguise hides what something really is. What does Grandma Rosa say is hiding inside a mistake?', why: 'She means a mistake is really a chance to learn. Luis learned it, too: next time he tasted before he measured.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the story in order.', items: ['Grandma Rosa preheated the oven.', 'Luis measured from the SUGAR jar.', 'Maya took the first bite.', 'Grandma Rosa tasted what was in the jar.', 'They baked a second batch.'], hint: 'Think about the steps of baking, then the surprise, then the fix.', why: 'The oven was heated, Luis measured, Maya tasted a cookie, Grandma Rosa found the mix-up, and they baked again.' }
      ],
      talk: 'Tell a grown-up what "preheat," "refilled," and "relabel" mean. Which word parts helped you?'
    },
    {
      id: 'w6d5',
      boss: true,
      title: 'The Lizard Full of Surprises',
      genre: 'info',
      sticker: { emoji: '🦎', name: 'Color Chameleon' },
      purpose: 'Read to find out what makes the chameleon one of the strangest lizards.',
      stops: [
        { after: 1, q: 'What do many people believe about chameleons?', options: ['They change color to match what is behind them.', 'They change color only in the dark of night.', 'They cannot change color at all, even a little.'], say: 'Yes, many people believe that. Read on to see why colors really change.' },
        { after: 4, q: 'What is this part mostly about?', options: ['How a chameleon catches an insect', 'How a chameleon stays warm', 'How a chameleon climbs trees'], say: 'Right! Sharp eyes and a speedy tongue work together to catch a meal.' }
      ],
      vocab: [
        { word: 'rivals', def: 'others who are trying to win the same thing', ex: 'The two teams have been rivals for years.' },
        { word: 'creeps', def: 'moves slowly and quietly', ex: 'The snail creeps across the wet path.' },
        { word: 'swivel', def: 'to turn around on one spot', ex: 'I can swivel my chair to face the window.' },
        { word: 'advantage', def: 'something that helps you do better than others', ex: 'Long legs are an advantage in a race.' }
      ],
      passage: [
        'If animals held a contest for the strangest body, the chameleon might win. This odd lizard has eyes like tiny towers and a tongue like a spring. Its skin can change color. About half of all the kinds of chameleons live on Madagascar, a large island near Africa.',
        'Many people think chameleons change color to match what is behind them. That idea is mostly a misunderstanding. Most chameleons are green or brown to begin with. Those colors help them blend in with leaves and branches. When their colors change, it is often for another reason: to send a message.',
        'A calm chameleon may be a pale, leafy green. An angry or excited male can flash bright yellow, orange, or red. The bold colors warn his rivals to stay away. Color also helps a chameleon stay warm. On a chilly morning, it may turn darker. Dark skin absorbs, or soaks up, more heat from the sun.',
        'The eyes of a chameleon are just as amazing. Each eye sits inside a cone of skin and can swivel on its own. That means one eye can look forward for food while the other looks backward for danger.',
        'When a chameleon spots an insect, both eyes lock onto the target. Then comes the tongue. It can be longer than the whole body of the lizard. It shoots out faster than you can blink. The sticky tip grabs the insect, and the tongue snaps back before the bug can move.',
        'Chameleons are built for a life in the trees. Their feet are shaped like tongs, so they can grip a branch firmly. Many have a tail that curls around twigs like an extra hand. They are not fast, though. A chameleon creeps along slowly, rocking back and forth like a leaf in the breeze. To a hungry bird, it hardly looks like an animal at all.',
        'The chameleon is slow, colorful, and very patient. It proves that being different can be a big advantage.'
      ],
      questions: [
        { type: 'mc', skill: 'vocab', q: 'Dark skin "absorbs" more heat from the sun. What does "absorbs" mean?', options: ['Soaks up', 'Pushes away', 'Shines back', 'Cools down'], para: 2, hint: 'The author tucks the meaning right after the word. Look for the little word "or."', why: 'The text says "absorbs, or soaks up." The words after "or" give the meaning.' },
        { type: 'mc', skill: 'vocab', q: 'The author says one idea about chameleons "is mostly a misunderstanding." What is a "misunderstanding"?', options: ['A wrong idea about something', 'A brand-new discovery', 'An idea that is understood again', 'A message sent with color'], para: 1, hint: 'Break the word apart. What does mis- mean in "misspell" or "mislabel"?', why: 'Mis- means "wrongly." A misunderstanding is something people understand wrongly. Chameleons do not usually change color just to match what is behind them.' },
        { type: 'mc', skill: 'vocab', q: 'Both eyes "lock onto the target." What does "lock" mean in this sentence?', options: ['To fix firmly on something', 'A metal object opened with a key', 'A small piece of hair', 'To shut a door tightly'], para: 4, hint: '"Lock" has several meanings. Try each one in the sentence. Which one fits what eyes can do?', why: 'Eyes cannot use a key or shut a door. Here, "lock" means the eyes stay fixed on the insect.' },
        { type: 'multi', skill: 'detail', q: 'According to the passage, why do chameleons change color? Choose TWO answers.', options: ['To send a message', 'To warm up on a chilly morning', 'To make their tongues longer', 'To see in two directions', 'To grip branches more tightly'], correct: 2, para: 2, hint: 'Reread the second and third paragraphs. The author gives two real reasons for color changes.', why: 'The text says colors change "to send a message," and a chameleon may turn darker on a chilly morning to soak up warmth.' },
        { type: 'evidence', skill: 'detail', q: 'Tap the sentence that shows a chameleon can look in two directions at the same time.', answer: 'That means one eye can look forward for food while the other looks backward for danger.', hint: 'Find the paragraph about eyes. Look for a sentence that mentions both food and danger.', why: 'This sentence explains that each eye can look in a different direction, one for food and one for danger.' },
        { type: 'order', skill: 'sequence', q: 'Put the steps of a chameleon catching an insect in order.', items: ['The chameleon spots an insect.', 'Both eyes lock onto the target.', 'The tongue shoots out.', 'The sticky tip grabs the insect.', 'The tongue snaps back.'], para: 4, hint: 'Reread the paragraph about the tongue. Follow the action step by step.', why: 'First the chameleon spots the insect, its eyes lock on, the tongue shoots out, the tip grabs the insect, and the tongue snaps back.' },
        { type: 'mc', skill: 'mainidea', q: 'Which sentence best states the main idea of the whole passage?', options: ['The unusual body of a chameleon helps it survive.', 'Chameleons live only on Madagascar.', 'Hungry birds like to hunt chameleons.', 'Chameleons are the fastest lizards on Earth.'], hint: 'Skin, eyes, tongue, feet, tail. What do all these parts have in common in this passage?', why: 'Each paragraph describes a strange body part and how it helps the chameleon. The last sentence says being different can be "a big advantage."' },
        { type: 'mc', skill: 'inference', q: 'A male chameleon suddenly turns bright red. What can the reader conclude?', options: ['It is probably angry or excited.', 'It is probably cold.', 'It is hiding from a hungry bird.', 'It has just eaten an insect.'], para: 2, hint: 'Find the sentence that lists bright colors. What mood goes with those colors?', why: 'The text says, "An angry or excited male can flash bright yellow, orange, or red."' }
      ],
      talk: 'Tell a grown-up three tricky words from this passage and the clues that helped you figure them out.'
    }
  ]
};
