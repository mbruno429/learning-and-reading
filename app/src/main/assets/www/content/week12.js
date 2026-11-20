window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[12] = {
  strategy: {
    name: 'Master Reader Game Plan',
    icon: '🏆',
    tagline: 'You have every tool. Now use them all together.',
    steps: [
      'Look at the title and the headings first. Is it a story, a poem, facts, or two texts to compare? (On a paper test, peek at the questions too.)',
      'Read the whole passage with care. Never answer from memory: look back and find the spot.',
      'Cross out the answers you know are wrong. Then choose the BEST answer that is left.',
      'Prove it. Point to the sentence that makes your answer right before you move on.'
    ],
    example: {
      text: 'Nadia checked the sky again. The clouds had turned the color of slate, and the flag by the school snapped in the wind. She tucked the picnic blanket back into the closet.',
      q: 'Why does Nadia put the blanket away?',
      a: 'Cross out any answer the text does not support. The dark clouds and the strong wind are your proof: Nadia expects a storm, so the picnic is off.'
    },
    practice: [
      {
        text: 'Omar set three alarm clocks the night before the science fair. He laid out his poster, his notes, and even his socks. "Nothing is going to go wrong," he told his cat.',
        q: 'Which answer can you prove from the text?',
        options: ['Omar wants to be ready and on time.', 'Omar won the science fair last year.', 'Omar does not care about the fair.'],
        why: 'Three alarms and everything laid out are the proof that Omar is getting ready with care. The text never mentions last year, and he clearly does care, so cross those two out.'
      },
      {
        text: 'For weeks, the pond behind the school had been shrinking. Cracked mud ringed its edges, and the frogs that once sang every evening had gone quiet. Then one gray afternoon, Priya heard a soft drumming on the roof. She ran to the window and grinned.',
        q: 'Why does Priya grin?',
        options: ['Rain has finally come after a long dry spell.', 'The frogs have started singing again.', 'School has let out early for the day.'],
        why: 'The shrinking pond and cracked mud prove it has been dry, and a "soft drumming on the roof" on a gray afternoon is rain. The text says the frogs are quiet and never mentions school ending, so cross those out.'
      }
    ]
  },
  sessions: [
    {
      id: 'w12d1',
      title: 'The Dance That Draws a Map',
      genre: 'info',
      sticker: { emoji: '🐝', name: 'Dancing Scout' },
      purpose: 'Read to find out how a honeybee tells her sisters where to find flowers.',
      stops: [
        { after: 2, q: 'What is the problem for the bees so far?', options: ['Telling others where far-off flowers are', 'Finding a safe place to build a hive', 'Keeping the hive warm in the dark'], say: 'Yes! Flowers can be miles away, so a scout needs a way to share where they are.' },
        { after: 5, q: 'Why does a scout sometimes dance with extra energy?', options: ['She has found an especially sweet patch', 'She is warning the hive of danger', 'She is worn out from a long flight'], say: 'Right! A livelier dance means better food, and it gets more workers to go.' }
      ],
      vocab: [
        { word: 'decoded', def: 'figured out the meaning of a secret message or pattern', ex: 'The spy decoded the note by swapping each number for a letter.' },
        { word: 'reveals', def: 'shows something that was hidden', ex: 'The last page reveals who took the necklace.' },
        { word: 'recruits', def: 'gets others to join in a task', ex: 'Our coach recruits new players every fall.' },
        { word: 'confirmed', def: 'showed that something was definitely true', ex: 'The test confirmed that the water was safe to drink.' }
      ],
      passage: [
        '## A Problem in the Hive',
        `Suppose you discovered a field bursting with wildflowers two miles from your home. You would want to tell thousands of your sisters exactly where it was. Now suppose you had to explain it in total darkness, without speaking a single word. For a honeybee, this is not a riddle. It is an ordinary afternoon.`,
        `A honeybee colony depends on nectar and pollen gathered from flowers, yet good flower patches can be scattered across miles of countryside. If every bee searched alone, the colony would squander enormous amounts of time and energy. Instead, when a scout finds a rich patch, she hurries home and shares the location with other workers. Her method of communicating is one of the most astonishing discoveries in the study of animals: she dances.`,
        '## Reading the Dance',
        `Inside the dark hive, the scout climbs onto the honeycomb, which hangs straight up and down like a wall. She runs forward in a short line, waggling her body rapidly from side to side. Then she circles back to her starting point and repeats the run. She loops first to the right and then to the left, so her path traces a figure eight.`,
        `Every part of this performance carries information. The direction of the waggle run reveals the direction of the flowers. If the scout runs straight up the comb, the food lies directly toward the sun. If she runs at an angle to the right of straight up, her sisters must fly at that same angle to the right of the sun. The length of the run indicates distance: the longer she waggles, the farther away the flowers are. A scout who has found an especially sweet patch dances with extra energy. She repeats her dance many times, which recruits more workers.`,
        `The surrounding bees cannot see the dancer in the dark, so they crowd close and follow her movements with their antennae. They also pick up the scent of the flowers clinging to her body. After following a few rounds, they zoom out of the hive and fly, with impressive accuracy, toward a place they have never visited.`,
        '## Cracking the Code',
        `For centuries, beekeepers noticed these odd wiggling movements without grasping their purpose. In the twentieth century, an Austrian scientist named Karl von Frisch spent decades observing bees through the glass walls of a special hive. He marked individual bees with tiny dots of paint, set out dishes of sugar water at measured distances, and recorded how the dancers behaved. Gradually he decoded the pattern. Many scientists doubted him at first. Such a complex language seemed impossible for an insect. Later experiments confirmed his conclusions, however, and he was awarded a Nobel Prize.`,
        `The next time a honeybee drifts past you in a garden, remember that she may have learned her route from a dance. Soon she may be drawing a map of her own.`
      ],
      questions: [
        { type: 'mc', skill: 'mainidea', q: 'Which sentence best states the central idea of the passage?', options: ['Honeybees share the location of food through a dance that scientists learned to decode.', 'A honeybee colony contains many thousands of worker bees that are all sisters to one another.', 'Karl von Frisch painted tiny dots on bees so that he could tell them apart inside the hive.', 'Honeybees locate flowers mainly by following the scent on another bee.'], hint: 'Some answers are only small details from one part. Which answer covers all three sections?', why: 'The first section gives the problem, the second explains the dance, and the third tells how it was decoded. Only one answer includes all of that.' },
        { type: 'order', skill: 'sequence', q: 'Put these steps in the order they happen.', items: ['A scout discovers a rich patch of flowers.', 'The scout returns to the dark hive.', 'The scout performs a waggle dance on the comb.', 'Nearby bees follow the dance with their antennae.', 'The bees fly out toward the flowers.'], hint: 'Follow the scout from the field back to the hive. The section "Reading the Dance" walks through the steps.', why: 'The scout finds food, hurries home, and dances. Her sisters follow the dance and then fly to the flowers.' },
        { type: 'mc', skill: 'inference', q: 'A scout performs a very SHORT waggle run that points straight up the comb. What can the other bees conclude?', options: ['The flowers are fairly close, in the direction of the sun.', 'The flowers are far away, in the direction of the sun.', 'The flowers are fairly close, directly away from the sun.', 'The flowers are far away and have very little nectar.'], para: 5, hint: 'You need two rules from the same paragraph: one about the direction of the run and one about its length. Apply both.', why: 'Straight up means "directly toward the sun." A longer waggle means farther, so a short one means the flowers are near.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence that best explains why bees must crowd close to the dancer in order to understand her.', answer: 'The surrounding bees cannot see the dancer in the dark, so they crowd close and follow her movements with their antennae.', hint: 'Find the sentence that contains a cause and an effect joined by the word "so."', why: 'The sentence gives the reason: the hive is dark, so the bees must feel the dance instead of watching it.' },
        { type: 'mc', skill: 'vocab', q: `If every bee searched alone, "the colony would squander enormous amounts of time and energy." What does "squander" mean?`, options: ['Waste', 'Save', 'Measure', 'Share'], para: 2, hint: 'The next sentence begins with "Instead" and describes a better plan. So was searching alone a good or bad use of time?', why: 'Searching alone would use up time and energy for nothing. "Squander" means to waste.' },
        { type: 'mc', skill: 'purpose', q: 'Why does the author begin by asking the reader to "suppose" they had to give directions in total darkness without words?', options: ['To help readers appreciate how difficult the task is', 'To prove that people give worse directions than bees', 'To explain how scientists first studied the hive', 'To persuade readers to become beekeepers'], para: 1, hint: 'How did you feel when you imagined doing it yourself? Authors choose openings to make readers think or feel something.', why: 'Imagining the challenge yourself makes it seem nearly impossible, so the bees\' solution feels all the more impressive.' }
      ],
      talk: 'Tell a grown-up: Explain how a bee "draws a map" with her dance. What does the direction of the run mean? What does its length mean?'
    },
    {
      id: 'w12d2',
      title: 'The Bridge of a Thousand Strands',
      genre: 'fable',
      sticker: { emoji: '🌉', name: 'Grass Bridge' },
      purpose: 'Read to find out what happens when the fastest weaver wants to build a bridge alone.',
      stops: [
        { after: 1, q: 'What is Illari unhappy about so far?', options: ['Having to wait for slower weavers', 'Having to cross the grass bridge', 'Having no one to teach her'], say: 'Yes! Illari is fast, and she thinks working with everyone else just slows her down.' },
        { after: 4, q: 'What happened when Sisa braided many cords together?', options: ['The rope held three baskets of stones', 'The rope snapped like a dry twig', 'The rope was too thick to tie'], say: 'Right! The thick braided rope only creaked, even under three heavy baskets.' }
      ],
      vocab: [
        { word: 'strands', def: 'thin threads or pieces that are twisted together to make rope', ex: 'She wove three strands of yarn into a bracelet.' },
        { word: 'custom', def: 'something a group of people has done for a long time', ex: 'It is a custom in my family to sing before dinner.' },
        { word: 'merely', def: 'only; nothing more than', ex: 'I was merely asking a question.' },
        { word: 'fragrant', def: 'having a sweet, pleasant smell', ex: 'The kitchen was fragrant with cinnamon.' }
      ],
      passage: [
        `High in the mountains, where the clouds drift below the footpaths, two villages faced each other across a canyon so deep that a dropped stone seemed to fall forever. A single bridge joined them, and it was made of nothing but grass. Traders, cousins, and schoolchildren crossed it daily, trusting their weight to its woven strands. Every spring, when the old bridge had grown brittle and its dry grass had begun to crack, the people of both villages gathered to weave a new one.`,
        `Illari was ten the year she decided this custom was foolish. She was the fastest twister of grass cord in her village, and her fingers flew like swallows while the younger children fumbled and the oldest grandmothers worked at the pace of melting snow. "Why must we wait for everyone?" she complained to Sisa, the elder who directed the weaving. "The little ones make cords as lumpy as porridge. I could twist enough for the entire bridge by myself if you gave me the summer."`,
        `Sisa studied her for a long moment, and the wrinkles around her eyes deepened. "Then begin," she said mildly. "Twist one cord, your very best, and bring it to me tomorrow."`,
        `Illari worked until the moon rose. Her cord was smooth, even, and as long as three men lying head to foot, and she carried it to the edge of the canyon with her chin held high. Sisa tied one end to a post and handed Illari the other. "Pull," she said. Illari pulled, and the cord held. Then Sisa hung a basket of stones from its middle, and the beautiful cord snapped like a dry twig.`,
        `Without a word, the elder gathered an armful of the children's lumpy cords and the grandmothers' slow ones. She braided them together with the broken halves of Illari's cord into a rope as thick as a wrist. This time, when the basket of stones was hung, the rope merely creaked. Sisa added a second basket, and then a third. The rope did not break.`,
        `"A single cord, however perfect, carries only its own strength," said Sisa. "Braided, each strand guards the weakness of its neighbor. The bridge has never been made of grass, child. It is made of us."`,
        `Illari's cheeks burned, but she did not argue. That spring she sat among the smallest children and showed them how to keep their twists tight, and she slowed her quick fingers to match the rhythm of the grandmothers so that their cords would braid evenly with hers. When the new bridge finally swayed above the canyon, golden and fragrant in the sunlight, she was the first to cross. Beneath her feet she could not tell which strands were hers, and she discovered, to her surprise, that she no longer cared to know.`
      ],
      questions: [
        { type: 'mc', skill: 'theme', q: 'Which statement best expresses a theme of the story?', options: ['People are stronger together than any one person is alone.', 'The fastest and most skilled worker deserves the greatest reward.', 'Old customs should be replaced with better ideas.', 'Slow, careful work is always better than fast work.'], hint: 'The theme is the lesson Illari learns. Think about what the rope could do that her single perfect cord could not.', why: 'One perfect cord snapped, but many imperfect cords braided together held three baskets of stones. Sisa says the bridge "is made of us."' },
        { type: 'evidence', skill: 'evidence', q: 'At the start, Illari is proud that HER cords are the best. Tap the sentence at the end of the story that shows how she feels about her own cords now.', answer: 'Beneath her feet she could not tell which strands were hers, and she discovered, to her surprise, that she no longer cared to know.', hint: 'Skip the sentences about what Illari DOES. Find the one, as she crosses the new bridge, that tells what she discovers about herself.', why: 'She once wanted credit for her own fast work. Now she does not even care which strands are hers, because the bridge belongs to everyone.' },
        { type: 'mc', skill: 'inference', part: 'A', q: 'Why does Sisa tell Illari to twist one cord and bring it to her?', options: ['She wants Illari to discover the lesson for herself.', 'She believes Illari really can build the whole bridge alone.', 'She needs one more cord to finish the bridge.', 'She wants to punish Illari for complaining.'], para: 2, hint: 'Sisa speaks "mildly" and does not argue. Think about what she does with the cord the next day.', why: 'Sisa does not lecture. She sets up a test so that Illari can see with her own eyes what a single cord can and cannot do.' },
        { type: 'mc', skill: 'evidence', part: 'B', q: 'Which sentence from the story best supports the answer to Part A?', options: [`"Then Sisa hung a basket of stones from its middle, and the beautiful cord snapped like a dry twig."`, `"Illari worked until the moon rose."`, `"Every spring, when the old bridge had grown brittle and its dry grass had begun to crack, the people of both villages gathered to weave a new one."`, `"Illari's cheeks burned, but she did not argue."`], hint: 'Which sentence shows Sisa actually carrying out her test?', why: 'Hanging the stones is the demonstration Sisa planned. It lets Illari watch her best cord fail instead of just being told.' },
        { type: 'mc', skill: 'vocab', q: `Each spring "the old bridge had grown brittle." What does "brittle" mean?`, options: ['Dry and easily broken', 'Heavy and hard to lift', 'Wet and slippery', 'Bright and colorful'], para: 0, hint: 'Read the rest of that sentence. What had the dry grass begun to do, and why would the villagers want a new bridge?', why: 'The sentence says the dry grass "had begun to crack." Old, dried grass cracks and snaps. A brittle bridge would be dangerous, so the villagers weave a new one.' },
        { type: 'mc', skill: 'figurative', q: `What does Sisa mean when she says, "The bridge has never been made of grass, child. It is made of us"?`, options: ['The bridge exists because the villagers work together.', 'The villagers must stand on the bridge to test it.', 'Grass is too weak to use for building anything.', 'Illari should stop helping with the weaving.'], para: 5, hint: 'The bridge really is made of grass, so Sisa is not speaking literally. What do the people give to the bridge every spring?', why: 'Grass alone is weak. The cooperation of every villager, fast and slow, is what truly holds the bridge up.' },
        { type: 'mc', skill: 'summary', q: 'Which is the best summary of the whole story?', options: ['Illari wants to weave the bridge alone, but Sisa shows her that braided cords are stronger, and she joins the others.', 'Illari twists the smoothest cord in her village, and Sisa hangs a basket of stones from its middle to see if it will hold.', 'Two mountain villages are joined by a bridge of grass, and every spring the people gather to weave a new one.', 'Illari proves she is the fastest weaver, so Sisa lets her build the new bridge by herself over the summer.'], hint: 'A good summary tells the problem, the turning point, and the ending. Cross out any answer that tells only one part or says something that did not happen.', why: 'The best summary has the beginning (Illari wants to work alone), the middle (Sisa\'s test), and the end (she joins in). Two answers give just one part, and Illari never builds the bridge by herself.' }
      ],
      talk: 'Tell a grown-up: What lesson did Illari learn? Summarize the story in three sentences, then tell about a time a team did something you could not do alone.'
    },
    {
      id: 'w12d3',
      title: 'Living in Orbit',
      genre: 'info',
      sticker: { emoji: '🛰️', name: 'Space Station' },
      purpose: 'Read to find out what daily life is like for people who live in space.',
      stops: [
        { after: 2, q: 'What is this part mostly about?', options: ['How floating changes everyday chores', 'How rockets carry crews to the station', 'Why astronauts dislike eating bread'], say: 'Yes! Sleeping, eating, and even pouring water all work differently when everything floats.' },
        { after: 8, q: 'How did floating feel to the letter writer at first?', options: ['Awkward, with lots of bumps and lost things', 'Easy, like gliding with one fingertip', 'Scary, because she might get hurt'], say: 'Right! She felt like a clumsy puppy at first, and gliding came later.' }
      ],
      vocab: [
        { word: 'continuously', def: 'without stopping', ex: 'The river flows continuously to the sea.' },
        { word: 'prevent', def: 'to stop something from happening', ex: 'Wash your hands to prevent the spread of germs.' },
        { word: 'recycles', def: 'cleans or changes something used so it can be used again', ex: 'Our town recycles old bottles into new glass.' },
        { word: 'suspect', def: 'to think that something is probably true', ex: 'I suspect that my sister ate the last cookie.' }
      ],
      passage: [
        '## Text 1: A Home That Circles the Earth',
        `About 250 miles above your head, a laboratory the size of a football field is racing around the planet. The International Space Station travels so fast that it circles Earth roughly every ninety minutes, which means its crew sees about sixteen sunrises and sixteen sunsets every single day. Astronauts from many nations have lived and worked aboard the station continuously for more than twenty years.`,
        `Life there is shaped by one strange condition: everything floats. The station and the people inside it are constantly falling around Earth together, so the astronauts feel weightless. This makes ordinary chores surprisingly complicated. Crew members sleep in sleeping bags fastened to the wall so that they will not drift into equipment. They eat tortillas instead of bread, because floating crumbs could clog air filters or sting someone's eyes. Even water behaves oddly, gathering into wobbling spheres rather than pouring.`,
        `Weightlessness also affects the human body. On Earth, muscles and bones stay strong partly because they work against gravity all day. In orbit, they have much less work to do, so they begin to weaken. To prevent this, astronauts exercise for about two hours daily on machines designed for space.`,
        `Nothing on the station is wasted. Because delivering supplies by rocket is extremely expensive, the station recycles most of its water, including moisture from the crew's breath and sweat. Above all, the station is a place for research. Scientists use it to study how plants, materials, and human beings respond to weightlessness. That knowledge will be essential if people ever journey to more distant worlds.`,
        '## Text 2: A Letter From Orbit',
        `Dear students of Room 12,`,
        `Thank you for your wonderful questions. I have taped your letters beside my sleeping bag, where they flutter slightly in the breeze from the air vents, and reading them is the best part of my evening, whenever "evening" is. Up here the sun rises and sets so often that I have stopped trusting the window and started trusting my watch.`,
        `Several of you asked what floating feels like. For the first few days, honestly, it felt like being a clumsy puppy. I bumped into walls, lost my spoon twice, and once chased a runaway sock across the entire laboratory. Now I glide from room to room with one fingertip, and I suspect that walking will seem like hard work when I return.`,
        `You also asked whether I get homesick. I do. I miss rain, the smell of cut grass, and the sound of my daughter laughing. But yesterday we passed over the ocean at night, and I watched lightning flicker inside the clouds like fireflies in a jar while a ribbon of green light shimmered along the edge of the planet. From here I cannot find any of the borders that are drawn on maps. Earth looks like one small, glowing home that all of us share, and I wish every person could see it this way just once.`,
        `Keep asking questions. Curiosity is how I got here.`,
        `Your friend in orbit, Dr. Amara Nwosu`
      ],
      questions: [
        { type: 'mc', skill: 'compare', q: 'How do the two texts differ in the way they describe life on the space station?', options: ['Text 1 explains facts, while Text 2 shares one person\'s experiences and feelings.', 'Text 1 is written by an astronaut, while Text 2 is written by a student.', 'Text 1 describes the dangers of space, while Text 2 claims that there are none at all.', 'Text 1 tells about the past, while Text 2 predicts the future.'], hint: 'Notice the word "I" in Text 2. Who is speaking in each text, and what is each one trying to do?', why: 'Text 1 informs with facts about the station. Text 2 is a personal letter that uses "I" and tells what one astronaut feels and misses.' },
        { type: 'evidence', skill: 'evidence', q: 'In Text 2, the astronaut suspects that "walking will seem like hard work" when she returns. Tap the sentence in Text 1 that explains why.', answer: 'In orbit, they have much less work to do, so they begin to weaken.', hint: 'Look in Text 1 for the paragraph about what weightlessness does to the body.', why: 'Text 1 explains that muscles and bones weaken in orbit. Weaker muscles would make walking on Earth feel difficult.' },
        { type: 'mc', skill: 'inference', q: `In Text 2, why has the astronaut "stopped trusting the window and started trusting my watch"?`, options: ['Sunrises and sunsets come too often to show the time of day.', 'The windows on the station are usually kept covered.', 'Her watch was a special gift from her daughter.', 'She is far too busy with experiments to look outside during the day.'], para: 7, hint: 'On Earth, the sun in the window tells you if it is morning or night. Use a fact from the first paragraph of Text 1 to see why that fails in orbit.', why: 'Text 1 says the crew sees about sixteen sunrises and sunsets a day. The sky cannot tell her when it is "evening," so she relies on her watch.' },
        { type: 'mc', skill: 'vocab', q: `Text 1 says this knowledge "will be essential if people ever journey to more distant worlds." What does "essential" mean?`, options: ['Necessary', 'Expensive', 'Unusual', 'Forgotten'], para: 4, hint: 'Could people safely travel much farther without knowing how bodies and plants react to weightlessness?', why: 'Travelers to distant worlds could not do without this knowledge. "Essential" means absolutely necessary.' },
        { type: 'multi', skill: 'compare', correct: 2, q: 'Which details are mentioned in BOTH texts? Choose TWO.', options: ['Astronauts use sleeping bags.', 'The sun rises and sets many times a day.', 'Astronauts exercise for two hours daily.', 'Lightning can be seen from orbit.', 'The station recycles its water.'], hint: 'Check each detail against BOTH texts. A detail that appears in only one text does not count.', why: 'Both texts mention sleeping bags and the frequent sunrises and sunsets. Exercise and recycling appear only in Text 1, and lightning only in Text 2.' },
        { type: 'mc', skill: 'theme', q: 'What does the astronaut most want the students to understand from her description of Earth?', options: ['All people on Earth share one planet as their home.', 'Space travel is too lonely to be worthwhile.', 'Storms look more dangerous from above.', 'Every country should build a space station.'], para: 9, hint: 'Reread the last two sentences of the paragraph about being homesick. What does she wish every person could see?', why: 'She cannot find any borders and says Earth "looks like one small, glowing home that all of us share."' }
      ],
      talk: 'Tell a grown-up: Name two things you learned from Text 1 and two things only the letter could tell you. Which text did you enjoy more, and why?'
    },
    {
      id: 'w12d4',
      title: 'The Bird That Chases Summer',
      genre: 'poem',
      sticker: { emoji: '🕊️', name: 'Summer Chaser' },
      purpose: 'Read to find out how one tiny seabird spends its whole life chasing summer.',
      stops: [
        { after: 2, q: 'What does the tern do when summer "shuts in the north"?', options: ['It sets off toward summer in the south', 'It hides until the cold has passed', 'It builds a warmer nest in the north'], say: 'Yes! When one summer closes like a door, the tern is already flying toward the next one.' },
        { after: 9, q: 'Why do terns make such a long trip?', options: ['To find plenty of food and long days', 'To get away from bigger birds', 'To teach their chicks how to dive'], say: 'Right! Polar summers offer seas full of fish and extra hours of light for hunting.' }
      ],
      vocab: [
        { word: 'migration', def: 'a long trip animals make from one region to another each year', ex: 'Each fall we watch the migration of geese overhead.' },
        { word: 'plentiful', def: 'existing in large amounts', ex: 'Apples are plentiful in the orchard this year.' },
        { word: 'precisely', def: 'exactly', ex: 'The train left at precisely nine o\'clock.' },
        { word: 'endure', def: 'to get through something hard or unpleasant', ex: 'The campers had to endure a cold, rainy night.' }
      ],
      passage: [
        '## Text 1: Arctic Tern',
        [
          'I am a scrap of white paper',
          'the wind forgot to put down,',
          'a needle stitching the top of the world',
          'to the bottom with one long thread.'
        ].join('\n'),
        [
          'Summer is a door that keeps closing.',
          'Each time it shuts in the north,',
          'I hear it creak open in the south,',
          'and I am already on my way.'
        ].join('\n'),
        [
          'The ocean below me is a rumpled blanket.',
          'Storms shake their gray fists.',
          'The wind is sometimes a wall and sometimes a hand,',
          'so I bend my road like a river',
          'and let the hand carry me.'
        ].join('\n'),
        [
          'I own nothing but hollow bones and hunger.',
          'I have no map except the one I was born with,',
          'folded small behind my eyes.',
          'Still, I have watched more sunlight',
          'than any king in any tower.'
        ].join('\n'),
        [
          'You who stand on the shore in your heavy shoes,',
          'do not pity me the distance.',
          'The sky is not the space between my homes.',
          'The sky is my home,',
          'and I have never once been lost.'
        ].join('\n'),
        '## Text 2: The Longest Journey on Earth',
        `The Arctic tern is a slender gray-and-white seabird with a black cap and a body that weighs only a few ounces. It does not look like a champion athlete. Nevertheless, this small bird completes the longest migration of any animal on Earth.`,
        `Arctic terns raise their chicks in the far north during the northern summer. As autumn approaches, the terns head south. They continue across the entire globe until they reach the icy waters surrounding Antarctica, arriving just as summer begins there. Along the way, they pause over rich feeding areas in the open ocean, where they dive for small fish and rebuild their strength. Months later, they turn around and fly all the way back.`,
        `Why would any animal make such an exhausting journey? The answer is food and light. During a polar summer, the sun barely sets, and the cold seas are crowded with small fish. Food is plentiful, and the long days give the birds extra hours to hunt. By trading one summer for another, the terns never have to endure a dark, hungry polar winter. Because they experience two summers each year, they probably see more daylight than any other creature.`,
        `For a long time, nobody knew precisely how far the birds traveled. Then researchers attached tiny tracking devices, each weighing about as much as a paper clip, to the legs of several terns. The results were startling. Instead of flying in a straight line, the birds followed a winding, S-shaped path over the ocean. The curving route allowed them to ride strong winds rather than struggle against them. Although the detour added thousands of miles, it saved the birds precious energy. In all, some terns flew more than forty thousand miles in a single year.`,
        `An Arctic tern can live for thirty years or longer. Over such a lifetime, the miles it flies would be enough to carry it to the moon and back about three times. That is a remarkable achievement for a bird light enough to perch on your hand.`
      ],
      questions: [
        { type: 'mc', skill: 'figurative', q: `In the first stanza, the tern calls itself "a needle stitching the top of the world / to the bottom with one long thread." What does this metaphor describe?`, options: ['Its flight path from the Arctic to Antarctica', 'Its sharp beak catching fish in the sea', 'Its nest, which is built from thread and grass', 'Its feathers, which are sewn tight by the wind'], para: 1, hint: 'What is at the "top of the world" and at the "bottom"? Text 2 names both places. What would the "thread" be?', why: 'Text 2 says terns fly from the far north to Antarctica. The bird is the needle, and its long flight path is the thread joining the two ends of Earth.' },
        { type: 'evidence', skill: 'evidence', q: `The poem says, "so I bend my road like a river / and let the hand carry me." Tap the ONE sentence in Text 2 that explains both parts: the bending road AND the hand that carries the bird.`, answer: 'The curving route allowed them to ride strong winds rather than struggle against them.', hint: 'In the poem, the "hand" is a helpful wind and the "wall" is a wind that pushes back. Find the sentence in Text 2 that talks about the curving route AND the wind together.', why: 'A "bent road" is the curving, S-shaped route, and letting "the hand carry me" means riding the strong winds.' },
        { type: 'evidence', skill: 'evidence', q: 'Text 2 says terns "probably see more daylight than any other creature." Tap the line in the POEM that expresses the same idea.', answer: 'Still, I have watched more sunlight', hint: 'Look in the fourth stanza for a line about light.', why: 'The tern says it has "watched more sunlight / than any king in any tower," which matches the fact about two summers of daylight.' },
        { type: 'mc', skill: 'inference', q: 'In the last stanza, why does the tern tell the person on the shore, "do not pity me the distance"?', options: ['The tern feels at home in the air, so the long trip is no hardship.', 'The tern is too proud to admit that the long journey has left it tired.', 'The tern believes people could fly just as far.', 'The tern plans to stop migrating and stay on the shore.'], para: 5, hint: 'Keep reading to the end of the stanza. Where does the tern say its home is?', why: 'The tern says, "The sky is my home, / and I have never once been lost." If the journey itself is home, there is nothing to feel sorry about.' },
        { type: 'mc', skill: 'vocab', q: `Text 2 says, "Although the detour added thousands of miles, it saved the birds precious energy." What is a "detour"?`, options: ['A route that is longer than the direct way', 'A place to rest during a long trip', 'A strong wind that blows over the ocean', 'A device that measures distance'], para: 10, hint: 'Look at the two sentences before it. What did the birds do "instead of flying in a straight line"?', why: 'The terns took a winding path instead of a straight one, which "added thousands of miles." A detour is a longer, less direct route.' },
        { type: 'mc', skill: 'compare', q: 'What does the poem express that Text 2 does not?', options: ['How the tern might feel about its journey', 'Where the tern spends each summer', 'Why the tern follows a curving path', 'How scientists tracked the tern across the ocean'], hint: 'Text 2 is full of facts. Which answer is NOT a fact that Text 2 reports?', why: 'Only the poem speaks in the tern\'s own voice and shares feelings such as "The sky is my home." Text 2 sticks to facts.' },
        { type: 'sort', skill: 'compare', q: 'Where can you find each detail? Sort each one: only in the poem (Text 1), only in the article (Text 2), or in both.', cats: ['Text 1', 'Text 2', 'Both'], items: [{ t: 'The tern speaks for itself, using "I."', c: 0 }, { t: 'Trackers as light as a paper clip rode on terns.', c: 1 }, { t: 'The tern leaves the north when summer ends there.', c: 2 }, { t: 'The ocean is compared to a rumpled blanket.', c: 0 }, { t: 'The tern takes a curving path to use the wind.', c: 2 }], hint: 'Check each detail against the poem first, then the article. If you can point to it in both, choose "Both."', why: 'Only the poem uses "I" and the blanket picture. Only the article reports the tiny trackers. Both tell of leaving the north as summer ends and of a bending route that uses the wind.' }
      ],
      talk: 'Tell a grown-up: The poem says, "The sky is my home." What does the tern mean? Use one fact from Text 2 to back up your answer.'
    },
    {
      id: 'w12d5',
      boss: true,
      title: 'Looking Up: The Grand Finale',
      genre: 'fiction',
      sticker: { emoji: '🔭', name: 'Star Finder' },
      purpose: 'Read to find out what a cardboard telescope and a famous scientist have in common.',
      stops: [
        { after: 3, q: 'What is the problem so far?', options: ['Maya cannot get a clear, steady view', 'Maya has lost one of the lenses', 'Maya is not allowed outside at night'], say: 'Yes! After three nights of smears, clouds, and shaky hands, Maya is ready to give up.' },
        { after: 9, q: 'What did Galileo do with the new device that others did not?', options: ['He aimed it at the night sky', 'He used it to spot ships at sea', 'He sold it to eyeglass makers'], say: 'Right! Other people watched for ships, but Galileo looked up.' }
      ],
      vocab: [
        { word: 'demonstrated', def: 'showed how to do something', ex: 'The coach demonstrated the correct way to kick.' },
        { word: 'promptly', def: 'right away, without delay', ex: 'When the bell rang, the class promptly lined up.' },
        { word: 'rugged', def: 'rough and uneven, with rocks or hills', ex: 'We hiked slowly along the rugged mountain trail.' },
        { word: 'concluded', def: 'decided something after thinking about the facts', ex: 'After seeing the muddy paws, we concluded the dog had dug the hole.' }
      ],
      passage: [
        '## Text 1: The Cardboard Telescope',
        `The telescope Maya built in Ms. Tanaka's class was not much to look at. It was two cardboard tubes that slid inside each other, with a wide lens taped at one end and a small lens at the other, and Theo declared that it resembled a paper-towel roll wearing glasses. Maya did not care. Ms. Tanaka had promised that on a clear night it would reveal things no unaided eye could find.`,
        `On the first clear night, Maya aimed it at the brightest point in the sky and saw only a smear of gray. The second night, clouds rolled in like a curtain. On the third night she found the bright point again, but it skittered out of view every time her hands shook, and after an hour her neck ached and her patience was worn as thin as tissue.`,
        `"It's broken," she announced, marching inside. "Or else I am."`,
        `Grandma Rosa, who was visiting with Luis, looked up from her tea. "When I was learning to bake bread," she said, "I blamed the oven for a month. The oven was fine. I simply had not learned what the dough was telling me." She suggested that Maya stop holding the telescope and let something steadier do the job.`,
        `So on the fourth night, Maya propped the tube on the porch railing with a rolled towel beneath it. She slid the inner tube back and forth by tiny amounts, the way Ms. Tanaka had demonstrated, until the gray smear suddenly tightened into a sharp, creamy disk. Beside it, in a perfectly straight row, hung four pinpricks of light.`,
        `Maya forgot to breathe. Those specks were moons, entire worlds circling the planet Jupiter, and they had been there every night of her life without her knowing. She shouted for Theo and Luis, and the three of them took turns at the eyepiece until bedtime had been ignored for an hour. Nothing in the sky had changed that night; only Maya's way of looking had.`,
        '## Text 2: The Tube That Changed the Sky',
        `For most of human history, people studied the heavens with nothing but their eyes. They could count a few thousand stars and trace the wandering paths of five planets, yet they had no means of examining any of those lights closely. Most scholars believed that Earth sat motionless at the center of the universe while everything else revolved around it.`,
        `In the early 1600s, eyeglass makers in the Netherlands discovered that two lenses placed in a tube made distant objects appear nearer. News of the invention reached an Italian scientist named Galileo Galilei, who promptly constructed his own instruments and kept improving them until they magnified objects about twenty times. Other people used the new device to spot ships at sea. Galileo pointed his at the night sky.`,
        `What he observed astonished him. The moon was not a smooth, perfect globe, as people had assumed, but a rugged world of mountains and craters. The hazy band called the Milky Way dissolved into countless individual stars. Most surprising of all, four small points of light accompanied Jupiter, shifting position from night to night. Galileo sketched them patiently, night after night, and concluded that they were moons circling the planet.`,
        `This discovery mattered enormously. If moons could orbit Jupiter, then clearly not everything in the heavens revolved around Earth. Galileo's observations supported the idea that Earth itself travels around the sun. Many powerful people rejected his conclusions, and he faced serious trouble for defending them, but the evidence could not be erased. Anyone with a telescope could look and see for themselves.`,
        `Since then, telescopes have grown from hand-held tubes into enormous instruments on mountaintops and even in space. Still, their purpose remains what it was on Galileo's first night: to help us look more carefully and to let the evidence change our minds.`
      ],
      questions: [
        { type: 'mc', skill: 'theme', part: 'A', q: 'Which statement best expresses a theme of "The Cardboard Telescope"?', options: ['Patience and a fresh approach can uncover what frustration hides.', 'Homemade tools never work as well as expensive ones bought in a store.', 'It is wise to quit when a task becomes too difficult.', 'Grown-ups always understand more than children do.'], hint: 'Think about what almost made Maya quit on the third night, and what finally worked on the fourth.', why: 'Maya nearly gave up, but she kept trying and changed her method. Her patience and new approach let her see the moons.' },
        { type: 'mc', skill: 'evidence', part: 'B', q: 'Which sentence from the story best supports the answer to Part A?', options: [`"Nothing in the sky had changed that night; only Maya's way of looking had."`, `"The second night, clouds rolled in like a curtain."`, `"On the first clear night, Maya aimed it at the brightest point in the sky and saw only a smear of gray."`, `"Grandma Rosa, who was visiting with Luis, looked up from her tea."`], hint: 'Find the sentence that sums up WHY Maya finally succeeded.', why: 'The moons were always there. What changed was how Maya looked, which is exactly the lesson of the story.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of Maya\'s four nights in order.', items: ['Maya sees only a smear of gray.', 'Clouds cover the sky.', 'The bright point keeps slipping out of view.', 'Maya rests the telescope on the porch railing.', 'Maya sees four moons beside Jupiter.'], hint: 'Use the order words in the story: "first," "second," "third," and "fourth."', why: 'Night one was a gray smear, night two was cloudy, night three was shaky, and on night four she steadied the tube and saw the moons.' },
        { type: 'mc', skill: 'inference', q: 'Why does Grandma Rosa tell Maya about learning to bake bread?', options: ['To hint that the real problem is Maya\'s method', 'To convince Maya to give up stargazing and try baking instead', 'To prove that ovens are harder to use', 'To explain why she has come to visit'], para: 4, hint: 'In Grandma Rosa\'s story, what did she blame, and what was the true problem? Now match that to Maya and her telescope.', why: 'Grandma Rosa blamed a perfectly good oven. She is gently suggesting that the telescope is fine and Maya needs a better way to use it.' },
        { type: 'mc', skill: 'vocab', q: `Text 2 says Galileo improved his instruments "until they magnified objects about twenty times." What does "magnified" mean?`, options: ['Made to appear larger', 'Made to shine brighter', 'Moved farther away', 'Counted very carefully'], para: 9, hint: 'The sentence before says two lenses "made distant objects appear nearer." What would an even better telescope do to them?', why: 'A telescope makes faraway things look bigger and closer. "Magnified" means made to appear larger.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence in Text 2 that best explains WHY the discovery of Jupiter\'s moons was so important.', answer: 'If moons could orbit Jupiter, then clearly not everything in the heavens revolved around Earth.', hint: 'Find the paragraph that begins "This discovery mattered enormously." The reason comes right after.', why: 'People believed everything circled Earth. Moons circling Jupiter proved that belief wrong, and this sentence says so directly.' },
        { type: 'multi', skill: 'compare', correct: 2, q: 'In what ways are Maya and Galileo alike? Choose TWO.', options: ['Both observe moons circling Jupiter.', 'Both return to the sky night after night.', 'Both invent the very first telescope.', 'Both are punished for what they report.', 'Both build their telescopes at school.'], hint: 'Test each choice against BOTH texts. It must be true for Maya AND true for Galileo.', why: 'Each sees four points of light beside Jupiter, and each keeps observing over many nights. Neither invented the telescope, and only Galileo faced trouble.' },
        { type: 'mc', skill: 'mainidea', q: 'Which idea is developed in BOTH texts?', options: ['Looking carefully can change what a person understands.', 'Telescopes are too difficult for most people to use.', 'Jupiter is the most important planet in the sky.', 'Scientists are rarely believed during their lifetimes.'], hint: 'Reread the final sentence of each text. What do the two endings have in common?', why: 'Text 1 ends with Maya\'s new "way of looking," and Text 2 ends with looking "more carefully" and letting "the evidence change our minds."' },
        { type: 'mc', skill: 'summary', q: 'Which is the best summary of Text 2, "The Tube That Changed the Sky"?', options: ['Galileo aimed an improved telescope at the sky, and what he saw, such as Jupiter\'s moons, changed ideas about Earth\'s place.', 'Eyeglass makers in the Netherlands discovered that two lenses placed in a tube made distant objects appear nearer.', 'Galileo saw that the moon has mountains and craters and that the Milky Way is made of countless separate stars.', 'Galileo invented the very first telescope, and everyone quickly agreed with what he reported seeing.'], hint: 'A summary covers the whole text: what Galileo did, what he found, and why it mattered. Cross out answers that tell only one detail or get a fact wrong.', why: 'The best summary includes the telescope, the discoveries, and the change in thinking. Two answers are single details, and one is false: Galileo did not invent the telescope, and many people rejected his ideas.' }
      ],
      talk: 'Tell a grown-up: How are Maya and Galileo alike? How did "looking more carefully" change each of them? Then celebrate, because you finished the whole quest!'
    }
  ]
};
