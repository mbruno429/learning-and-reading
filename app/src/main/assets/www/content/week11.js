window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[11] = {
  strategy: {
    name: 'Prove It & Picture It',
    icon: '📌',
    tagline: 'Strong readers point to proof and see the pictures that words paint.',
    steps: [
      `Answer the question in your head. Then ask yourself: "How do I know?"`,
      `Go back and find the exact sentence that proves your answer. That sentence is your evidence.`,
      `If words cannot be true exactly as written, the author is painting a picture. A simile compares with "like" or "as." A metaphor says one thing IS another. Personification makes a thing act like a person. An idiom is a common saying, like "raining cats and dogs," that does not mean what its words say.`,
      `Ask what the picture really means. What idea or feeling is the author showing you?`
    ],
    example: {
      text: `Jada's backpack weighed a ton. She dropped it by the door and sank into a chair with a groan.`,
      q: `What does "weighed a ton" really mean? Which words prove how Jada felt?`,
      a: `A backpack cannot really weigh a ton, so the author means it was very heavy. The evidence that Jada was worn out is that she "sank into a chair with a groan."`
    },
    practice: [
      {
        text: `The classroom was a zoo during indoor recess. Kids shouted across the room, a ball bounced off the wall, and Mr. Ortiz covered his ears.`,
        q: `What does "the classroom was a zoo" really mean?`,
        options: ['The room was loud and wild.', 'Animals were visiting the class.', 'The class was studying a zoo.'],
        why: `A classroom cannot really be a zoo, so this is a metaphor. The next sentence proves the meaning: kids shouted, a ball bounced, and the teacher covered his ears.`
      },
      {
        text: `Nora said she did not mind losing the race. But on the walk home she kicked every pebble in her path, and her answers to Dad were as short as a winter afternoon.`,
        q: `Which words are the best proof of how Nora really felt?`,
        options: [`"she kicked every pebble in her path"`, `"she did not mind losing the race"`, `"on the walk home"`],
        why: `Nora SAYS she does not mind, but her actions tell the truth. Kicking pebbles and giving answers "as short as a winter afternoon" prove that she was upset.`
      }
    ]
  },
  sessions: [
    {
      id: 'w11d1',
      title: 'Butterflies in Formation',
      genre: 'fiction',
      sticker: { emoji: '🦋', name: 'Brave Butterflies' },
      purpose: `Read to find out how Maya handles her nerves at Science Night.`,
      stops: [
        { after: 2, q: `What is Maya's problem so far?`, options: ['She is too nervous to give her speech.', 'Her water cycle model has stopped working.', 'She left her note cards at home.'], say: `Yes! Maya knows her speech well, but the big crowd has made her very nervous.` },
        { after: 4, q: `Why does Maya start by asking the child a question?`, options: [`She is trying Grandma Rosa's idea.`, 'She cannot get her lamp to turn on.', 'Ms. Tanaka told her to begin that way.'], say: `Right! Luis passed along his grandma's trick: begin with a question.` }
      ],
      vocab: [
        { word: 'recite', def: 'to say something aloud from memory', ex: 'Our class will recite a poem at the assembly.' },
        { word: 'formation', def: 'a group arranged in a neat, orderly pattern', ex: 'The geese flew over the lake in a V formation.' },
        { word: 'considered', def: 'thought carefully about something', ex: 'She considered both paths before choosing the shorter one.' },
        { word: 'murmured', def: 'said something in a soft, quiet voice', ex: 'He murmured a sleepy good night and closed his eyes.' }
      ],
      passage: [
        `For three weeks, Maya had practiced her speech for Science Night until she could recite it backward. She had built a model of the water cycle from a clear plastic box, a lamp, and a tray of ice, and it worked perfectly every single time. "Explaining it will be a piece of cake," she had told Luis on Monday, and she had truly believed it.`,
        `Now it was Thursday evening, the gym was packed with families, and Maya had butterflies in her stomach. Her hands were damp, her note cards trembled like leaves in a breeze, and the crowd in front of her table seemed to stretch on forever. When Ms. Tanaka whispered that she was next, Maya's mind went as blank as a freshly erased whiteboard.`,
        `"I can't do it," she murmured to Luis, who was waiting at the next table with his magnet experiment. "I'm getting cold feet, because I just know that I will forget everything while everybody stares at me."`,
        `Luis did not laugh at her. Instead, he held up his own hands, which were shaking even harder than hers. "We're in the same boat," he admitted. "I've rewritten my first sentence nine times. Grandma Rosa says the trick is to break the ice with a question, because once people answer you, they stop being a crowd and start being a conversation."`,
        `Maya considered this advice while a tall man and two small children stepped up to her table. Her memorized opening line had vanished completely, so she took a slow breath and tried Grandma Rosa's idea instead. "Have you ever wondered," she asked the smallest child, "where a puddle goes after the sun comes out?"`,
        `The little girl's eyes widened. "It goes into the ground?" she guessed.`,
        `"Some of it does," said Maya, switching on the lamp, "but watch what happens to the rest." As the water warmed, a faint mist crept up the inside of the box and gathered into droplets beneath the tray of ice. The children leaned closer, and suddenly the words Maya needed came tumbling back, not as a stiff speech but as an explanation for two curious people. She forgot to look at her note cards at all.`,
        `By the end of the evening, Maya had explained the water cycle eleven times, and her voice was nearly gone. Theo, who had been counting visitors on his fingers and toes, announced that her table had drawn the longest line in the gym. Maya floated home on cloud nine. The butterflies, she decided, had not actually disappeared; they had simply learned to fly in formation.`
      ],
      questions: [
        { type: 'mc', skill: 'figurative', q: `Luis tells Maya, "We're in the same boat." What does this idiom mean?`, options: ['He is facing the same problem she is.', 'He wants to share a table with her.', 'He built a project about water too.', 'He thinks they should leave together.'], para: 3, hint: 'Nobody is near a boat. Read what Luis shows Maya just before he says it.', why: 'Luis holds up his own shaking hands. He is nervous too, so the two friends share the same trouble.' },
        { type: 'mc', skill: 'figurative', q: `The last sentence says the butterflies "had simply learned to fly in formation." What does this suggest about Maya?`, options: ['She still felt nervous, but she had learned to manage it.', 'She no longer cared about speaking in public.', 'She planned to study insects for her next project.', 'She wished the evening had gone differently.'], para: 7, hint: 'Earlier, "butterflies in her stomach" meant nervous feelings. What would it mean if those butterflies got organized instead of leaving?', why: 'The butterflies "had not actually disappeared." Maya was still nervous, but her feelings were under control and working for her.' },
        { type: 'evidence', skill: 'evidence', q: 'Even before Luis says a word, the author shows that he is just as nervous as Maya. Tap the sentence that shows it.', answer: 'Instead, he held up his own hands, which were shaking even harder than hers.', hint: 'Look in the paragraph where Luis answers Maya. Find a sentence about what his body is doing.', why: 'Shaking hands are a sign of nerves, and his were "shaking even harder than hers."' },
        { type: 'mc', skill: 'vocab', q: `Maya's "memorized opening line had vanished completely." What does "vanished" mean?`, options: ['Disappeared', 'Strengthened', 'Repeated', 'Arrived'], para: 4, hint: 'Maya has to try a different idea "instead." What must have happened to the line she memorized?', why: 'Maya could not remember her line, so she tried something else. "Vanished" means disappeared.' },
        { type: 'mc', skill: 'character', part: 'A', q: 'How does Maya change between the moment Ms. Tanaka says she is next and the end of the evening?', options: ['She goes from fearful to confident.', 'She goes from bored to curious.', 'She goes from proud to embarrassed.', 'She goes from friendly to shy.'], hint: 'Compare how Maya acts in paragraph 2 with how she acts once the children lean in.', why: 'At first her mind goes blank and she says, "I can\'t do it." By the end she has explained her model eleven times.' },
        { type: 'mc', skill: 'evidence', part: 'B', q: 'Which sentence from the story best supports the answer to Part A?', options: [`"She forgot to look at her note cards at all."`, `"Luis did not laugh at her."`, `"The little girl's eyes widened."`, `"Theo, who had been counting visitors on his fingers and toes, announced that her table had drawn the longest line in the gym."`], hint: 'Pick the sentence that shows what MAYA herself is able to do after she changes.', why: 'A speaker who no longer needs her note cards has become confident. The other sentences are about other characters.' }
      ],
      talk: 'Tell a grown-up: Find three idioms in the story (like "a piece of cake") and explain what each one really means.'
    },
    {
      id: 'w11d2',
      title: 'Lanterns in the Dark',
      genre: 'info',
      sticker: { emoji: '🎣', name: 'Midnight Angler' },
      purpose: `Read to find out how animals survive in the darkest part of the ocean.`,
      stops: [
        { after: 2, q: 'Why can no plants grow in the midnight zone?', options: ['Sunlight never reaches it.', 'The water there is too salty.', 'Hungry fish eat them all.'], say: `Yes! Plants need sunlight, and no sunlight gets down that deep.` },
        { after: 5, q: `Why are the anglerfish's teeth angled inward?`, options: ['So a caught animal cannot get away', 'So she can crack hard shells', 'So her lure does not get bitten'], say: `Right! Prey can slide in past those teeth, but it cannot easily get back out.` }
      ],
      vocab: [
        { word: 'region', def: 'a large area or part of a place', ex: 'Very little rain falls in that region of the country.' },
        { word: 'remarkable', def: 'unusual and amazing', ex: 'The puppy made a remarkable leap over the fence.' },
        { word: 'prey', def: 'an animal that is hunted and eaten by another animal', ex: 'The owl swooped down on its prey.' },
        { word: 'expedition', def: 'a trip made to explore or study a place', ex: 'The expedition to the South Pole took many weeks.' }
      ],
      passage: [
        '## A World Without Sunrise',
        `Imagine sinking slowly through the ocean. Near the surface, sunlight dances on the waves and the water glows a cheerful blue. As you travel deeper, however, the colors drain away like paint rinsed from a brush. More than half a mile down, the last faint glimmer of sunlight disappears, and you enter a region that scientists call the midnight zone. Here it is always dark, the water is nearly freezing, and the weight of the ocean above presses down with enormous force. It is one of the harshest places on Earth. Still, animals live there.`,
        `Because sunlight never reaches this region, no plants can grow there. Much of the food that exists is "marine snow," tiny bits of dead plants and animals that drift down from the waters above. An animal in the midnight zone may wait days or even weeks between meals, so it cannot afford to waste energy chasing food across the dark. Down here, every bit of energy counts.`,
        '## A Fishing Pole That Glows',
        `The deep-sea anglerfish has solved this problem in a remarkable way: it carries its own fishing pole. A long spine grows from the top of a female anglerfish's head and dangles in front of her mouth. At the tip of the spine sits a small bulb filled with bacteria that produce a steady glow. She does not make this light herself. Her tiny passengers make it for her. In the endless blackness, that tiny light is as tempting as a candle in a window.`,
        `The anglerfish hangs almost motionless, wiggling only her lure the way a person might jiggle a worm on a hook. When a curious fish or shrimp swims close to investigate, she opens her enormous mouth and swallows it in an instant. Her teeth are long, thin, and angled inward, so prey can slide in but cannot easily escape. Her stomach can even stretch to hold a meal larger than her own body. Nothing that drifts her way is wasted.`,
        '## Light Is a Language',
        `The anglerfish is not the only creature that glows. In fact, scientists believe that most animals living in the deep ocean can make their own light. They do it with chemicals inside their bodies. Some use light to attract a meal, as the anglerfish does. Others flash brightly to startle an attacker, and still others glow in special patterns to signal to a mate. In a world without sunrise, light has become a kind of language.`,
        '## Still a Mystery',
        `People have explored only a small portion of the deep sea, because visiting it requires special vehicles strong enough to survive the crushing pressure. Much of it remains unknown. Nearly every expedition discovers animals that no one has ever seen before. The midnight zone may appear empty, but it is quietly sparkling with life, and with lanterns.`
      ],
      questions: [
        { type: 'mc', skill: 'figurative', q: `The author says the colors "drain away like paint rinsed from a brush." What does this simile help the reader understand?`, options: ['The colors fade little by little as the water gets deeper.', 'The water becomes dirty near the bottom of the sea.', 'Deep-sea animals are painted in bright colors.', 'Sunlight turns the ocean many different colors.'], para: 1, hint: 'Picture rinsing a paintbrush under a faucet. What happens to the color, and how fast?', why: 'Paint washes out of a brush gradually until none is left. In the same way, color fades as you sink until the water is dark.' },
        { type: 'mc', skill: 'figurative', q: `The author writes that the glowing bulb "is as tempting as a candle in a window." What does this suggest about the lure?`, options: ['Other animals are drawn toward it.', 'It gives off a great deal of heat.', 'It helps the anglerfish find her way home.', 'It burns out after a short time.'], para: 4, hint: 'Think about what a single light does to a traveler on a dark night. Then read what the fish and shrimp do in the next paragraph.', why: 'A candle in a window invites people closer. The next paragraph says a curious fish "swims close to investigate."' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence that best explains why a deep-sea animal should NOT chase its food.', answer: 'An animal in the midnight zone may wait days or even weeks between meals, so it cannot afford to waste energy chasing food across the dark.', hint: 'Look in the first section for a sentence about meals and energy.', why: 'This sentence gives the reason: meals are rare, so energy is too valuable to waste on chasing.' },
        { type: 'mc', skill: 'vocab', q: `"The anglerfish hangs almost motionless." What does "motionless" mean?`, options: ['Without moving', 'Without making noise', 'Without any light', 'Without feeling hungry'], para: 5, hint: 'Break the word into parts: "motion" plus the ending "-less." What does "-less" mean in words like "careless"?', why: '"Motion" means movement and "-less" means without. The anglerfish stays still and lets her lure do the work.' },
        { type: 'multi', skill: 'detail', correct: 2, q: 'According to the section "Light Is a Language," why do deep-sea animals make light? Choose TWO.', options: ['To startle an attacker', 'To signal to a mate', 'To warm the freezing water', 'To help plants grow', 'To guide vehicles sent by scientists'], para: 7, hint: 'Reread the section under that heading. Each reason is listed there, and you need two of them.', why: 'The section says some animals "flash brightly to startle an attacker" and others glow "to signal to a mate."' },
        { type: 'mc', skill: 'mainidea', q: 'Which sentence best states the main idea of the whole passage?', options: ['Deep-sea animals survive in darkness in surprising ways, including making light.', 'The anglerfish has the longest teeth of any fish in the sea.', 'Scientists should build stronger vehicles to explore the ocean floor.', 'Marine snow is the most important food in the entire ocean.'], hint: 'Read the four headings again. Which answer covers ALL of the sections like an umbrella?', why: 'Every section is about life in the dark midnight zone and how animals there, like the anglerfish, use light to survive.' },
        { type: 'mc', skill: 'features', q: 'A reader wants to find out how much of the deep sea people have explored. Which heading points to the right section?', options: ['Still a Mystery', 'A World Without Sunrise', 'A Fishing Pole That Glows', 'Light Is a Language'], para: 9, hint: 'Headings tell what each section is about. Which one hints at things people do not know yet?', why: 'A mystery is something not yet known. The section under that heading says people "have explored only a small portion of the deep sea."' }
      ],
      talk: 'Tell a grown-up: The author says "light has become a kind of language." What does that mean? Give two pieces of evidence from the text.'
    },
    {
      id: 'w11d3',
      title: 'River of Ice',
      genre: 'poem',
      sticker: { emoji: '❄️', name: 'Patient Glacier' },
      purpose: `Read to find out how a poem and an article describe the same slow giant.`,
      stops: [
        { after: 5, q: 'What happens to the speaker when warm years come?', options: ['It gets smaller and pulls back uphill.', 'It grows until it fills the valley.', 'It breaks into pieces of blue glass.'], say: `Yes! "I shrink toward the summit" means the ice melts back up the mountain.` },
        { after: 7, q: 'How does a glacier begin?', options: ['Snow piles up and is squeezed into ice.', 'A river freezes solid in one winter.', 'Rain fills a valley and turns cold.'], say: `Right! Layer after layer of snow presses down until the bottom layers become ice.` }
      ],
      vocab: [
        { word: 'sculptor', def: 'an artist who carves shapes out of stone, wood, or clay', ex: 'The sculptor chipped at the marble until a horse appeared.' },
        { word: 'dense', def: 'packed tightly together', ex: 'We could barely walk through the dense bushes.' },
        { word: 'summit', def: 'the very top of a mountain', ex: 'The climbers reached the summit just before noon.' },
        { word: 'transforms', def: 'changes something completely', ex: 'A coat of paint transforms a dull room.' }
      ],
      passage: [
        '## Text 1: River of Ice',
        [
          'I am a river that forgot how to hurry,',
          'a road of blue glass poured between the peaks.',
          'Snowflake by snowflake, winter by winter,',
          'I gathered myself for a thousand years.'
        ].join('\n'),
        [
          'You will not see me moving.',
          'I travel the way a shadow travels,',
          'the way the hour hand creeps around a clock,',
          'yet mountains step aside to let me pass.'
        ].join('\n'),
        [
          'I am a patient sculptor.',
          'My chisel is a boulder gripped in a frozen fist;',
          'I scrape, I polish, I carve the stubborn stone',
          'until the narrow valley opens like a bowl.'
        ].join('\n'),
        [
          'At night I groan and crack like an old staircase.',
          'By day I glitter like the back of a sleeping dragon,',
          'and the wind combs my snow as smooth as paper.'
        ].join('\n'),
        [
          'When warm years come, I shrink toward the summit,',
          'leaving my signatures behind me:',
          'a lake as bright as a dropped coin,',
          'a boulder resting where no boulder belongs,',
          'and a wide, quiet valley',
          'that remembers my shape',
          'long after I am gone.'
        ].join('\n'),
        '## Text 2: How Glaciers Shape the Land',
        `A glacier begins in a place so cold that more snow falls each winter than can melt each summer. Year after year, new layers of snow bury the old ones. The weight of the upper layers squeezes the snow underneath until it turns into dense, bluish ice. When the ice finally grows thick and heavy enough, gravity begins to pull it downhill, and a glacier is born.`,
        `Although a glacier is solid, it flows like an extremely slow river. Most glaciers creep forward so gradually that a person standing beside one would never notice the motion. Even so, a moving glacier is one of the most powerful forces in nature. As it slides, the ice freezes around loose rocks and drags them along. These trapped rocks scrape the ground beneath the glacier the way rough sandpaper scrapes a board.`,
        `Over thousands of years, this grinding transforms the landscape. A river usually cuts a narrow valley shaped like the letter V, but a glacier widens and deepens that valley until it is shaped like the letter U. Glaciers also scoop out hollows in the ground. When the climate warms and the ice melts, those hollows may fill with water and become lakes. The basins of the Great Lakes in North America were carved this way.`,
        `A melting glacier leaves other clues behind as well. It drops the rocks it was carrying, sometimes leaving a giant boulder alone in the middle of a field, far from any mountain. Scientists study clues like these to learn where ancient glaciers once traveled. Each one is a piece of a very old puzzle.`
      ],
      questions: [
        { type: 'mc', skill: 'figurative', q: `In the poem, the glacier calls itself "a river that forgot how to hurry." What does this metaphor suggest?`, options: ['A glacier flows, but extremely slowly.', 'A glacier used to be a rushing river.', 'A glacier is confused about where to go.', 'A glacier melts quickly every spring.'], para: 1, hint: 'A glacier is not really a river and cannot forget. What do a river and a glacier both do? Then think about what "forgot how to hurry" says about speed.', why: 'Like a river, a glacier flows downhill. "Forgot how to hurry" means it does so very slowly, which Text 2 confirms.' },
        { type: 'mc', skill: 'figurative', q: `In the third stanza, the speaker says, "I am a patient sculptor." What does this comparison show about the glacier?`, options: ['It slowly carves and shapes the rock beneath it.', 'It creates statues that people come to visit.', 'It is waiting for the weather to change.', 'It is formed by artists who work with ice.'], para: 3, hint: 'Read the next three lines of that stanza. What does a sculptor do to stone, and what tool does the glacier use?', why: 'The stanza says the glacier will "scrape," "polish," and "carve the stubborn stone" using a boulder as its chisel.' },
        { type: 'evidence', skill: 'evidence', q: 'Text 2 describes "a giant boulder alone in the middle of a field." Tap the line in the POEM that describes the same thing.', answer: 'a boulder resting where no boulder belongs,', hint: 'Look in the last stanza, where the glacier lists the "signatures" it leaves behind.', why: 'A boulder "where no boulder belongs" is the lonely rock a melting glacier drops far from any mountain.' },
        { type: 'mc', skill: 'compare', q: 'How do the two texts differ in the way they present glaciers?', options: ['Text 1 uses images and a speaking glacier, while Text 2 explains facts in order.', 'Text 1 gives scientific facts, while Text 2 tells a made-up story.', 'Text 1 warns that glaciers are harmful, while Text 2 praises them.', 'Text 1 describes one lake, while Text 2 describes many rivers.'], hint: 'Ask of each text: Who is "talking"? Is the goal to paint a picture or to explain how something works?', why: 'In the poem the glacier speaks as "I" with metaphors and similes. Text 2 explains step by step how glaciers form and shape land.' },
        { type: 'mc', skill: 'vocab', q: `Text 2 says glaciers creep forward "so gradually that a person standing beside one would never notice the motion." What does "gradually" mean?`, options: ['Slowly, little by little', 'Loudly and suddenly', 'Only once each winter', 'In a perfectly straight line'], para: 8, hint: 'If you could stand right next to something and never notice it moving, how must it be moving?', why: 'Motion nobody can notice must be very slow. "Gradually" means slowly, a little at a time.' },
        { type: 'evidence', skill: 'evidence', q: `The poem says the glacier carves "until the narrow valley opens like a bowl." Tap the sentence in Text 2 that explains the science behind this line.`, answer: 'A river usually cuts a narrow valley shaped like the letter V, but a glacier widens and deepens that valley until it is shaped like the letter U.', hint: 'Find the paragraph in Text 2 about valleys. Which sentence tells how a valley changes shape?', why: 'A valley that widens from a V into a U is one that "opens like a bowl." This sentence gives the facts behind the image.' },
        { type: 'sort', skill: 'compare', q: 'Where can you find each idea? Sort each one into Text 1 (the poem), Text 2 (the article), or Both.', cats: ['Text 1', 'Text 2', 'Both'], items: [{ t: 'The glacier speaks as "I."', c: 0 }, { t: 'Gravity pulls the ice downhill.', c: 1 }, { t: 'A boulder is left in a strange place.', c: 2 }, { t: 'The glacier glitters like a sleeping dragon.', c: 0 }, { t: 'The Great Lakes are named.', c: 1 }, { t: 'The glacier moves too slowly to notice.', c: 2 }], hint: 'Check each idea against both texts before you place it. If you can point to it in the poem AND the article, it goes in Both.', why: 'Only the poem has a speaking glacier and a dragon. Only the article names gravity and the Great Lakes. Both tell of a lonely boulder and of motion too slow to see.' }
      ],
      talk: 'Tell a grown-up: Pick your favorite line from the poem. Then find the sentence in Text 2 that explains the real science behind it.'
    },
    {
      id: 'w11d4',
      title: 'Two Poems: Things That Remember',
      genre: 'poem',
      sticker: { emoji: '📚', name: 'Whispering Books' },
      purpose: `Read to find out what a quiet library and a grandmother's hands have in common.`,
      stops: [
        { after: 6, q: 'What will happen in the library tomorrow?', options: ['Children will come back and read the books.', 'The books will be packed into suitcases.', 'The library will stay closed all day.'], say: `Yes! The doors open again, and small hands reach for the books.` },
        { after: 11, q: 'What do we know about the grandmother so far?', options: ['She worked hard and once moved far from home.', 'She has always lived in the same town.', 'She draws maps for a living.'], say: `Right! Her hands baked, gardened, and carried a suitcase across the sea.` }
      ],
      vocab: [
        { word: 'mutters', def: 'speaks in a low voice that is hard to hear', ex: 'My brother mutters to himself when he does math.' },
        { word: 'atlas', def: 'a book of maps', ex: 'We found the longest river in the atlas.' },
        { word: 'kneaded', def: 'pressed and folded dough with the hands', ex: 'Dad kneaded the pizza dough until it was smooth.' },
        { word: 'trembles', def: 'shakes a little', ex: 'The leaf trembles each time the wind blows.' }
      ],
      passage: [
        '## Text 1: The Library at Closing Time',
        [
          'When the last backpack bumps out the door',
          'and the clock clears its throat at six,',
          'the library lets out a long, slow breath',
          'and loosens the top button of the day.'
        ].join('\n'),
        [
          'The lamps are small moons going dim, one by one.',
          'The carpet keeps the footprints of the afternoon',
          'the way wet sand remembers a parade,',
          'and dust drifts down like quiet snow',
          'on the shoulders of the shelves.'
        ].join('\n'),
        [
          'Then the books begin to whisper.',
          'The atlas unfolds its oceans and yawns.',
          'A mystery clears a space for one more clue.',
          'The dictionary, that old know-it-all,',
          'mutters definitions in its sleep,',
          'while the skinny poems lean together',
          'like friends sharing a secret on the bus.'
        ].join('\n'),
        [
          'In the corner, the old globe turns a little,',
          'dreaming of every finger that has spun it,',
          'and the returned books, still warm from kitchens and buses,',
          'tell the others where they have been.'
        ].join('\n'),
        [
          'Every book is a door without a lock,',
          'a suitcase packed by a stranger just for you,',
          'a voice that waits a hundred years',
          'and never once gets tired of waiting.'
        ].join('\n'),
        [
          'Tomorrow the doors will swing wide again.',
          'Small hands will tug at tall spines,',
          'and the stories will wake and stretch like cats',
          'and climb, purring, into the lap of a reader.'
        ].join('\n'),
        `## Text 2: My Grandmother's Hands`,
        [
          `My grandmother's hands are two brown maps.`,
          'The lines across her palms are rivers;',
          'her knuckles rise like little hills,',
          'and every scar is a town with a story.'
        ].join('\n'),
        [
          'I trace those rivers with one finger',
          'and ask where each of them begins.',
          'She laughs, a sound like a screen door swinging,',
          'and tells me another piece of her life.'
        ].join('\n'),
        [
          'These hands have kneaded mountains of dough',
          'and coaxed tomatoes out of stubborn dirt.',
          'They have braided my hair into ropes of night',
          'and buttoned a thousand winter coats.'
        ].join('\n'),
        [
          'They have waved goodbye from a crowded dock',
          'and carried one small suitcase across the sea.',
          'They have counted coins at a kitchen table',
          'and never let me see them worry.'
        ].join('\n'),
        [
          'When I was sick, her palm on my forehead',
          'was a cool cloth, a harbor, a hush.',
          'When I was frightened, her fingers found mine',
          'and the dark shrank back to its ordinary size.'
        ].join('\n'),
        [
          'Now her hands move slower, like tired sparrows.',
          'They flutter and rest, flutter and rest,',
          'and sometimes a teacup trembles in their grip.',
          'So I thread her needles. I open her jars.'
        ].join('\n'),
        [
          'She says my hands are blank pages still,',
          'smooth as the first clean snow of the year.',
          '"Keep them busy with kindness," she tells me,',
          '"and one day they will be maps as well."'
        ].join('\n')
      ],
      questions: [
        { type: 'mc', skill: 'figurative', q: `In Text 1, the library "lets out a long, slow breath / and loosens the top button of the day." What does this personification suggest?`, options: ['The library relaxes once the busy day is over.', 'The library becomes too warm in the evening.', 'The librarian is tired of working there.', 'The building is old and falling apart.'], para: 1, hint: 'A building cannot breathe or unbutton a collar. When does a PERSON sigh and loosen a top button?', why: 'People sigh and loosen a collar when work is done. The poet gives the library those human actions to show it relaxing at closing time.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the line in Text 1 that uses a simile to compare stories to animals waking up.', answer: 'and the stories will wake and stretch like cats', hint: 'A simile uses "like" or "as." Look in the last stanza of the first poem.', why: 'The line says the stories "wake and stretch like cats," comparing stories to sleepy cats with the word "like."' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the line in Text 2 that uses a simile to show the grandmother is growing older.', answer: 'Now her hands move slower, like tired sparrows.', hint: 'Find the stanza that begins with the word "Now." Which line compares her hands to something using "like"?', why: 'Comparing her hands to "tired sparrows" shows they have become slow and weary with age.' },
        { type: 'mc', skill: 'inference', q: `In Text 2, why does the speaker say, "So I thread her needles. I open her jars"?`, options: ['The speaker now helps the grandmother who once did the helping.', 'The speaker is taking lessons in sewing and cooking from a neighbor.', 'The grandmother has given the speaker extra chores.', 'The speaker wants to prove who is stronger.'], para: 13, hint: 'The line begins with "So," which signals a result. Read the three lines before it, then recall what those hands once did for the speaker.', why: 'The grandmother\'s hands buttoned coats and comforted the speaker. Now those hands shake, so the speaker lovingly does small tasks for her.' },
        { type: 'mc', skill: 'vocab', q: `In Text 2, the grandmother's hands "coaxed tomatoes out of stubborn dirt." What does the word "coaxed" suggest about how she gardened?`, options: ['She worked gently and patiently.', 'She gave up after a short time.', 'She gardened only when forced to.', 'She rushed to finish the job.'], para: 10, hint: 'The dirt is called "stubborn." How do you get something stubborn to cooperate without forcing it?', why: 'To coax is to get something to happen gently and patiently. She kept caring for the plants until the stubborn dirt gave her tomatoes.' },
        { type: 'mc', skill: 'compare', q: 'Which idea is found in BOTH poems?', options: ['Everyday things can hold stories and memories.', 'Old things should be replaced with new ones.', 'Quiet places are lonely after dark.', 'Children learn more from books than from people.'], hint: 'Think about what the books "tell the others" in Text 1 and what every scar is in Text 2.', why: 'In Text 1 the carpet "keeps the footprints of the afternoon" and the returned books "tell the others where they have been." In Text 2 each scar is "a town with a story." Both poems treat ordinary things as keepers of stories.' }
      ],
      talk: 'Tell a grown-up: Which comparison in the poems did you like best? Explain which two things are compared and what it means. Then invent a metaphor for your own hands.'
    },
    {
      id: 'w11d5',
      boss: true,
      title: 'Mae Jemison: Reaching for the Stars',
      genre: 'bio',
      sticker: { emoji: '🚀', name: 'Endeavour' },
      purpose: `Read to find out how a girl who loved the stars reached them.`,
      stops: [
        { after: 2, q: 'Why did Mae think the people choosing astronauts were making a mistake?', options: ['No astronauts were women or looked like her.', 'They picked people who were too young.', 'They sent too many shuttles into space.'], say: `Yes! Mae saw nobody like herself on television and decided that was the mistake.` },
        { after: 5, q: 'How hard was it to get into the astronaut program?', options: ['Very hard: only a few were chosen.', 'Easy: everyone who applied got in.', 'Closed: only doctors could apply.'], say: `Right! Thousands wanted the job, and Mae was one of the small group selected.` }
      ],
      vocab: [
        { word: 'intended', def: 'planned to do something', ex: 'I intended to finish my book before dinner.' },
        { word: 'insisted', def: 'said something firmly and would not give in', ex: 'Grandpa insisted that we wear our helmets.' },
        { word: 'resembled', def: 'looked like someone or something else', ex: 'The cloud resembled a sleeping dog.' },
        { word: 'conducting', def: 'carrying out an activity, such as a test', ex: 'The class is conducting a survey about recess.' }
      ],
      passage: [
        '## A Girl Who Looked Up',
        `As a little girl in Chicago, Mae Jemison spent many evenings staring at the stars. She wondered what it would be like to travel among them. Her curiosity was a fire that never burned out. She filled her days with library books about astronomy, science experiments, and dance classes. She saw no reason why one person could not love all of those things at once.`,
        `Not everyone shared her confidence. When Mae announced in kindergarten that she intended to become a scientist, her teacher asked whether she really meant a nurse. Mae politely insisted that she meant exactly what she had said. Years later, she watched astronauts on television. None of them were women, and none of them looked like her. Instead of deciding that space was not meant for her, Mae decided that the people choosing astronauts were making a mistake.`,
        '## Many Paths, One Dream',
        `Mae raced through school like a comet. She entered college at the age of sixteen and studied engineering. Afterward she earned a medical degree and became a doctor. She then traveled to West Africa. For more than two years she worked there as a medical officer, caring for the health of volunteers. These experiences might seem unrelated to space travel, but each one sharpened skills an astronaut needs: solving problems under pressure, working with people from different cultures, and staying calm when plans fall apart.`,
        `Eventually Mae applied to the astronaut program. Thousands of people wanted the job, and only a small group was selected. Mae was one of them. She trained for years, studying every system on the space shuttle until she knew the spacecraft like the back of her hand.`,
        '## Liftoff',
        `In September 1992, the space shuttle Endeavour thundered into the sky with Mae aboard. She had become the first African American woman to travel into space. For about eight days she circled Earth, conducting experiments on how living things respond to weightlessness. When she looked out the window, she later said, the first place she recognized was her hometown of Chicago. She thought of the little girl who used to stare up at the stars from that very city. That girl, she knew, would have been thrilled.`,
        '## Opening the Door Wider',
        `Mae did not treat her flight as a finish line. To her, it was a starting line. After leaving the astronaut program, she started a science camp for young people and spoke to students around the world. She often reminds audiences not to let anyone else's limited imagination shrink their own dreams. Mae Jemison once looked up at the stars and saw no astronaut who resembled her. Today, because of her, countless children look up and see an open door.`
      ],
      questions: [
        { type: 'mc', skill: 'figurative', q: `The author writes that Mae's "curiosity was a fire that never burned out." What does this metaphor mean?`, options: ['She never stopped wanting to learn.', 'She was often in trouble at school.', 'She enjoyed experiments that used heat.', 'She grew tired of studying the stars.'], para: 1, hint: 'Curiosity is not really a fire. Think about what a fire that keeps burning and Mae\'s wish to know things have in common.', why: 'A fire that never burns out keeps going strong. Mae\'s desire to learn kept going too, through books, experiments, and classes.' },
        { type: 'mc', skill: 'figurative', q: `The final sentence says that children now "look up and see an open door." What does this phrase suggest?`, options: ['Mae showed others that their dreams are possible.', 'Mae plans to return to space with students.', 'Children are now allowed to visit the space shuttle.', 'Science camps are open to every child for free.'], para: 9, hint: 'There is no real door in the sky. Compare this sentence with the one just before it about what Mae saw as a girl.', why: 'Mae once saw no astronaut who resembled her. Because she went first, children can now imagine themselves going too. The "open door" is that possibility.' },
        { type: 'mc', skill: 'character', part: 'A', q: 'Which word best describes Mae as a young child?', options: ['Determined', 'Cautious', 'Obedient', 'Carefree'], hint: 'Look at how Mae responds when an adult doubts her plan in the second paragraph.', why: 'Even in kindergarten, Mae held on to her goal when her teacher questioned it. That is determination.' },
        { type: 'mc', skill: 'evidence', part: 'B', q: 'Which sentence from the passage best supports the answer to Part A?', options: [`"Mae politely insisted that she meant exactly what she had said."`, `"Not everyone shared her confidence."`, `"Thousands of people wanted the job, and only a small group was selected."`, `"For about eight days she circled Earth, conducting experiments on how living things respond to weightlessness."`], hint: 'Choose the sentence that shows something Mae herself said or did while she was still a small child.', why: 'When her teacher suggested "nurse," Mae "politely insisted" on "scientist." Refusing to back down shows she was determined.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence that best supports the idea that Mae\'s work as a doctor helped prepare her to be an astronaut.', answer: 'These experiences might seem unrelated to space travel, but each one sharpened skills an astronaut needs: solving problems under pressure, working with people from different cultures, and staying calm when plans fall apart.', hint: 'Look in the section "Many Paths, One Dream" for a sentence that connects her earlier jobs to astronaut skills.', why: 'This sentence says directly that her experiences "sharpened skills an astronaut needs" and lists those skills.' },
        { type: 'multi', skill: 'detail', correct: 2, q: 'How has Mae encouraged young people since her flight? Choose TWO.', options: ['She started a science camp.', 'She spoke to students around the world.', 'She trained new astronauts for many years.', 'She wrote library books about astronomy.', 'She built a telescope in Chicago.'], para: 9, hint: 'Reread the last section, "Opening the Door Wider." Two actions are named in one sentence.', why: 'The text says "she started a science camp for young people and spoke to students around the world."' },
        { type: 'mc', skill: 'vocab', q: `Mae's earlier experiences "might seem unrelated to space travel." What does "unrelated" mean?`, options: ['Not connected', 'Not important', 'Not finished', 'Not difficult'], para: 4, hint: 'The prefix "un-" means "not." Also notice the word "but" in the sentence: it signals that the truth is the opposite of how things seem.', why: '"Un-" means not, so "unrelated" means not related, or not connected. The sentence goes on to show the experiences WERE connected after all.' },
        { type: 'order', skill: 'sequence', q: 'Put these events from Mae Jemison\'s life in order.', items: ['Mae tells her teacher she will be a scientist.', 'Mae earns a medical degree.', 'Mae works as a medical officer in West Africa.', 'Mae flies aboard the space shuttle Endeavour.', 'Mae starts a science camp for young people.'], hint: 'The passage is told in time order. Use the four headings and words like "Afterward," "then," and "After leaving" to help you.', why: 'She spoke up in kindergarten, became a doctor, worked in West Africa, flew on Endeavour in 1992, and later started a science camp.' }
      ],
      talk: 'Tell a grown-up: What kind of person is Mae Jemison? Prove it with three pieces of evidence from the text.'
    }
  ]
};
