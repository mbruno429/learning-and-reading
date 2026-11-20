window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[7] = {
  strategy: {
    name: 'The Why Chain',
    icon: '⚡',
    tagline: 'Every "what happened" has a "why."',
    steps: [
      'The EFFECT is what happened. The CAUSE is why it happened. Ask "What happened?" and then "Why?"',
      'Watch for signal words: because, so, since, as a result, therefore, and that is why.',
      'One effect can become the next cause, like dominoes falling in a row. Follow the chain.',
      'Notice how the whole text is built: in time order, as cause and effect, or as a problem and its solution.'
    ],
    example: {
      text: 'It had not rained for weeks, so the pond dried up. As a result, the ducks moved to the river.',
      q: 'Why did the ducks move to the river?',
      a: 'Because the pond dried up. The words "as a result" point to the effect. And the dry pond had its own cause: no rain!'
    },
    practice: [
      { text: 'Jada left her bike out in the rain all week. As a result, the chain turned orange with rust.', q: 'Why did the bike chain rust?', options: ['The bike sat out in the rain.', 'Jada rode the bike too fast.', 'Someone painted the chain orange.'], why: 'The words "as a result" point to the effect: a rusty chain. The cause comes just before them: the bike sat in the rain all week.' },
      { text: 'A heavy branch fell on the fence in the night and made a gap. Because of the gap, the goats wandered out. That is why Mr. Park spent his morning chasing goats down the road.', q: 'What was the FIRST cause in this chain?', options: ['A branch fell on the fence.', 'The goats wandered out of the pen.', 'Mr. Park chased goats down the road.'], why: 'Follow the chain backward. Mr. Park chased goats because they got out. They got out because of the gap, and the falling branch made the gap. The branch started it all.' }
    ]
  },
  sessions: [
    {
      id: 'w7d1',
      title: 'How a Volcano Erupts',
      genre: 'info',
      sticker: { emoji: '🌋', name: 'Rumbling Volcano' },
      purpose: 'Read to find out what makes a quiet mountain suddenly blow its top.',
      stops: [
        { after: 1, q: 'What do we know about magma so far?', options: ['It is melted rock that slowly rises.', 'It is cold rock that sinks deeper.', 'It is hot water inside a mountain.'], say: 'Yes! Magma is melted rock, and it slowly rises into a big underground pool.' },
        { after: 5, q: 'What is the section "After the Eruption" about so far?', options: ['What lava does once it is out', 'How scientists warn people nearby', 'Why magma stays deep underground'], say: 'Right! This part tells how lava flows, cools, and hardens after an eruption.' }
      ],
      vocab: [
        { word: 'pressure', def: 'a steady pushing force', ex: 'Too much air pressure can pop a balloon.' },
        { word: 'eventually', def: 'after a long time; in the end', ex: 'Eventually the snow melted, and we saw grass again.' },
        { word: 'erupts', def: 'bursts out suddenly with great force', ex: 'The crowd erupts in cheers after every goal.' },
        { word: 'predict', def: 'to say what will happen before it happens', ex: 'Dark clouds help us predict that rain is coming.' }
      ],
      passage: [
        '## Deep Underground',
        'A volcano may look like an ordinary mountain, but it hides a secret far below. Deep inside the Earth, it is so hot that some rock melts. The melted rock is a thick, glowing liquid called magma. Because magma is lighter than the solid rock around it, it slowly rises. It gathers in a huge underground pool called a magma chamber. It may sit there quietly for a very long time.',
        '## Pressure Builds',
        'Magma is full of trapped gases. Think about what happens when you shake a bottle of soda. The bubbles push outward, and pressure builds inside the bottle. If you twist the cap, the soda bursts out. Something like that happens under a volcano. As more magma squeezes into the chamber, the gases push harder and harder against the rock above. Eventually the rock can no longer hold the pressure back. As a result, magma blasts up through an opening called a vent, and the volcano erupts.',
        '## After the Eruption',
        'Once magma reaches the surface, scientists call it lava. Lava is many times hotter than boiling water. Some lava flows down the mountainside like a slow, fiery river. Other eruptions hurl ash and rock high into the sky. When lava cools, it hardens into new rock. Therefore, each eruption adds another layer. Over thousands of years, the volcano grows taller.',
        'Eruptions can be destructive. They can bury forests and force people to leave their homes. Yet volcanoes are also builders. The islands of Hawaii were formed by volcanoes that rose from the ocean floor. Ash from a volcano also breaks down into rich soil. That is why farmers near old volcanoes often grow fine crops.',
        'A sleeping volcano often gives hints before it wakes. The ground may tremble, and new steam may rise from cracks. Today, scientists measure these small quakes and leaking gases. The clues help them predict when a volcano might erupt. Their warnings give families nearby time to move to safety.'
      ],
      questions: [
        { type: 'mc', skill: 'cause', q: 'Why does magma rise toward the surface?', options: ['It is lighter than the solid rock around it.', 'Scientists pump it upward through a vent.', 'Small earthquakes shake it loose from the rock below.', 'Ocean water pushes it up from below.'], para: 1, hint: 'Find the signal word "Because" in the first section. The cause comes right after it.', why: 'The text says, "Because magma is lighter than the solid rock around it, it slowly rises."' },
        { type: 'mc', skill: 'cause', q: 'What causes a volcano to erupt?', options: ['Gas pressure grows too strong for the rock.', 'Lava cools and hardens into new rock.', 'Ash breaks down into rich soil.', 'Heavy rain fills the magma chamber until it overflows.'], para: 3, hint: 'The eruption is the EFFECT. Read the sentences just before "As a result" to find the cause.', why: 'The gases push harder until "the rock can no longer hold the pressure back. As a result ... the volcano erupts."' },
        { type: 'mc', skill: 'structure', q: 'How is the section "Pressure Builds" mainly organized?', options: ['By explaining causes and their effects', 'By comparing two different volcanoes', 'By listing steps for a science project', 'By telling a story about a scientist'], para: 3, hint: 'Look for signal words in that section, such as "if," "as," and "as a result." What kind of writing uses them?', why: 'The section shows how one thing leads to another: gases push, pressure builds, and as a result the volcano erupts.' },
        { type: 'mc', skill: 'vocab', q: 'The passage says, "Eruptions can be destructive." What does "destructive" mean?', options: ['Causing great damage', 'Building new land', 'Moving very slowly', 'Easy to predict'], para: 6, hint: 'Read the sentence that comes right after the word. It gives two examples.', why: 'The next sentence says eruptions "can bury forests and force people to leave their homes." That is great damage.' },
        { type: 'order', skill: 'sequence', q: 'Put the steps of an eruption in order.', items: ['Rock melts into magma deep underground.', 'Magma rises and gathers in a chamber.', 'Gas pressure builds against the rock.', 'Magma blasts out through a vent.', 'Lava cools and hardens into rock.'], hint: 'Follow the headings from top to bottom: underground, pressure, then after the eruption.', why: 'Rock melts, magma rises and gathers, pressure builds, magma blasts out, and the lava cools into new rock.' },
        { type: 'multi', skill: 'cause', q: 'Which helpful effects of volcanoes does the passage describe? Choose TWO answers.', options: ['New islands are formed.', 'Ash turns into rich soil.', 'Earthquakes become smaller.', 'Forests grow faster under lava.', 'Oceans become warmer.'], correct: 2, para: 6, hint: 'Find the sentence "Yet volcanoes are also builders." The two helpful effects come after it.', why: 'The text says the islands of Hawaii "were formed by volcanoes" and that ash from a volcano "breaks down into rich soil."' },
        { type: 'sort', skill: 'cause', q: 'Each statement comes from the passage. Is it a CAUSE that makes something else happen, or an EFFECT that happens because of something else?', cats: ['Cause', 'Effect'], items: [{ t: 'Magma is lighter than the rock around it.', c: 0 }, { t: 'The volcano grows taller over thousands of years.', c: 1 }, { t: 'Farmers near old volcanoes grow fine crops.', c: 1 }, { t: 'Scientists measure small quakes and leaking gases.', c: 0 }, { t: 'Families nearby have time to move to safety.', c: 1 }], hint: 'Ask of each one: Does the passage tell what it LEADS TO? Then it is a cause. Does the passage tell WHY it happens? Then it is an effect.', why: 'Light magma causes the rising, and measuring quakes and gases leads to good warnings. The taller volcano comes from layers of lava, the fine crops from rich soil, and the time to escape from the warnings.' }
      ],
      talk: 'Tell a grown-up the chain: What causes magma to rise? What happens because of the pressure?'
    },
    {
      id: 'w7d2',
      title: 'One Thing Leads to Another',
      genre: 'fiction',
      sticker: { emoji: '⏰', name: 'Second Alarm' },
      purpose: `Read to find out how one short storm changes Maya's whole day.`,
      stops: [
        { after: 2, q: 'What is the problem so far?', options: ['Maya is late and has left things behind.', 'Maya is afraid of the thunderstorm.', 'Theo has broken the alarm clock.'], say: 'Yes! Maya woke up late, rushed out, and left some things at home.' },
        { after: 4, q: 'What happens at the lunch table?', options: [`Maya's friends share food with her.`, 'Maya trades her banana for grapes.', 'Luis tells Maya to go home.'], say: 'Right! Luis, Dev, and the others each give Maya some of their lunch.' }
      ],
      vocab: [
        { word: 'admitted', def: 'told the truth about something a little embarrassing', ex: 'Sam admitted that he had eaten the last cookie.' },
        { word: 'series', def: 'a set of books or shows that go together', ex: 'I have read every book in that series.' },
        { word: 'offered', def: 'held out something for someone to take', ex: 'Ben offered me half of his orange.' },
        { word: 'event', def: 'something that happens', ex: 'The parade was the biggest event of the summer.' }
      ],
      passage: [
        'The thunderstorm that rolled over Sunny Shore on Wednesday night lasted only ten minutes, but it changed the whole of Maya\'s Thursday.',
        'A bolt of lightning struck a power line, and every light on Maple Street blinked out. The electricity came back before sunrise. Maya\'s alarm clock, however, had reset itself to midnight, so it never rang. Consequently, she woke up thirty minutes late, with Theo bouncing on the end of her bed and shouting that the bus was coming.',
        'Since there was no time for breakfast, Maya grabbed a banana and ran. In her hurry, she left her lunch on the kitchen counter. She also left her library book, which was due that very day.',
        'At school, things kept tumbling like dominoes. Because she had no book to return, she could not check out the next one in her favorite mystery series. At noon she opened her backpack and found nothing inside but the banana peel.',
        'Luis noticed the empty spot in front of her at the lunch table. "Bad morning?" he asked. Without waiting for an answer, he tore his sandwich in half. Then Dev passed over a handful of crackers, and somebody else offered grapes. Soon Maya had a lunch that was stranger and better than the one she had packed.',
        'While they ate, she explained about the storm and the clock. Dev laughed. "My flashlight was dead last night, so I read my comic book by the light of the refrigerator," he admitted. Everyone at the table had a storm story, and the telling took up the rest of lunch.',
        'That afternoon, Ms. Tanaka asked the class to write about a time when one small event caused many others. Maya smiled and picked up her pencil. For once, she knew exactly what to write.',
        'Before bed that night, she set her alarm clock carefully. Then, just to be safe, she set a second one.'
      ],
      questions: [
        { type: 'mc', skill: 'cause', q: 'Why did Maya\'s alarm clock fail to ring?', options: ['The power outage reset the clock.', 'Theo turned the alarm off.', 'Maya forgot to set it the night before.', 'Lightning broke the clock.'], para: 1, hint: 'Find the sentence about the alarm clock. The little word "so" connects the cause to the effect.', why: 'The lights went out, and the clock "had reset itself to midnight, so it never rang."' },
        { type: 'mc', skill: 'cause', q: 'What was one effect of Maya leaving her library book at home?', options: ['She could not check out a new book.', 'She missed the school bus that morning.', 'She had nothing to eat at noon.', 'She had to stay after school.'], para: 3, hint: 'Look for the signal word "Because" in the paragraph about school.', why: 'The text says, "Because she had no book to return, she could not check out the next one."' },
        { type: 'mc', skill: 'vocab', q: '"Consequently, she woke up thirty minutes late." What does "consequently" mean?', options: ['As a result', 'By accident', 'In the past', 'On purpose'], para: 1, hint: 'Read the sentence before it. How is the alarm that never rang connected to waking up late?', why: 'The alarm did not ring, and as a result Maya woke up late. "Consequently" signals an effect.' },
        { type: 'mc', skill: 'structure', q: 'How is this story mainly built?', options: ['As a chain of causes and effects', 'As a contest between two best friends', 'As a list of tips for stormy nights', 'As a mystery with a hidden clue'], hint: 'Think about the dominoes in the story. What does each falling domino do to the next one?', why: 'The storm resets the clock, the clock makes Maya late, and being late makes her forget her lunch and her book. Each event causes the next, so the story is a chain of causes and effects.' },
        { type: 'order', skill: 'cause', q: 'Put this chain of causes and effects in order.', items: ['Lightning struck a power line.', 'The alarm clock reset to midnight.', 'Maya woke up late.', 'Maya left her lunch at home.', 'Her friends shared their food.'], hint: 'Each event causes the next one, like dominoes. Start with the storm.', why: 'The lightning cut the power, the clock reset, Maya overslept, she rushed and forgot her lunch, and her friends shared.' },
        { type: 'mc', skill: 'inference', q: 'What is the most likely reason Maya set a second alarm clock?', options: ['She did not want to oversleep again.', 'She wanted to wake Theo up early.', 'Her first clock was still broken.', 'Ms. Tanaka asked her to do it.'], para: 7, hint: 'The story says she did it "just to be safe." Safe from what?', why: 'One failed alarm caused a whole day of trouble. A second alarm is a backup in case the first one fails again.' }
      ],
      talk: 'Tell a grown-up about a time when one small thing caused a chain of other things to happen to you.'
    },
    {
      id: 'w7d3',
      title: 'Beavers: Builders of the Wild',
      genre: 'info',
      sticker: { emoji: '💧', name: 'Beaver Pond' },
      purpose: 'Read to find out how one small animal can change a whole stream.',
      stops: [
        { after: 1, q: `What is the beaver's problem?`, options: ['It is easy to catch on land.', 'It cannot swim well in streams.', 'It cannot find enough trees.'], say: 'Yes! A beaver is slow on land, and a shallow stream does not keep it safe.' },
        { after: 4, q: 'Why are the doorways of the lodge underwater?', options: ['To keep hunters like coyotes out', 'To let fish swim into the lodge', 'To keep the lodge cool in summer'], say: 'Right! A coyote cannot get in, but a beaver can dive in at any moment.' }
      ],
      vocab: [
        { word: 'solution', def: 'a way to fix a problem', ex: 'Tape was a quick solution for the torn page.' },
        { word: 'constant', def: 'happening all the time without stopping', ex: 'The constant drip of the faucet kept me awake.' },
        { word: 'protection', def: 'something that keeps you safe from harm', ex: 'A helmet gives your head protection when you ride a bike.' },
        { word: 'communities', def: 'groups of people who live in the same area', ex: 'Many communities have a park and a library.' }
      ],
      passage: [
        '## A Builder With a Problem',
        'A beaver is a wonderful swimmer but a slow, clumsy walker. On land, wolves and coyotes can catch it easily. A shallow stream does not offer much protection, either. The beaver has a clever solution. It changes the stream itself.',
        '## Building the Dam',
        'First, a beaver cuts down small trees with its strong front teeth. These orange teeth never stop growing, but constant gnawing keeps them from getting too long. Next, the beaver drags branches into the stream and wedges them against the bottom. Then it packs the gaps with mud, stones, and leaves. Because the dam blocks the flowing water, the stream backs up and spreads out. Within weeks, a deep, quiet pond covers the area.',
        'In the middle of the pond, the beaver family builds a dome-shaped home called a lodge. Its only doorways are underwater. As a result, a hungry coyote cannot get inside, but a beaver can dive in at any moment. Inside, above the water line, the family stays warm and dry all winter.',
        '## A Pond Changes Everything',
        'The new pond does not help beavers alone. Fish, ducks, and dragonflies soon move in. Herons arrive to hunt along the edges. Thirsty deer visit at dusk. Since the dam slows the water down, mud and sand settle to the bottom, and the water flowing out downstream is cleaner. During heavy rains, the pond holds extra water, so floods below the dam are often less severe. In dry summers, the stored water keeps the stream from disappearing.',
        'Beaver dams sometimes cause trouble for people, though. A pond may flood a road or a field of crops. Today, many communities solve this problem by sliding a long pipe through the dam. The pipe lets some water drain away quietly, so the pond stays at a safe level and the beavers stay in their home.',
        'Few animals reshape the land as much as beavers do. One small dam can turn a quiet stream into a home for hundreds of living things. That is why scientists call beavers "nature\'s engineers."'
      ],
      questions: [
        { type: 'mc', skill: 'cause', q: 'What causes a pond to form behind a beaver dam?', options: ['The dam blocks the flowing water.', 'Heavy rain falls for many weeks.', 'The beavers dig a deep hole.', 'Mud and sand settle to the bottom.'], para: 3, hint: 'Find the signal word "Because" in the section about building the dam.', why: 'The text says, "Because the dam blocks the flowing water, the stream backs up and spreads out."' },
        { type: 'mc', skill: 'structure', q: 'How does the author mainly organize the section "Building the Dam"?', options: ['In time order, one step after another', 'By comparing beavers with coyotes', 'By asking questions and answering them', 'By listing reasons beavers are in danger'], para: 3, hint: 'Look at the first word of several sentences in that section. What do those words tell you?', why: 'The words "First," "Next," and "Then" show the steps of building a dam in time order.' },
        { type: 'mc', skill: 'structure', q: 'Which problem and solution are described near the end of the passage?', options: ['Ponds flood roads, so people put a pipe through the dam.', 'Beavers walk slowly, so people build lodges for them.', 'Streams dry up, so people carry water to the pond.', 'Teeth grow too long, so beavers stop gnawing.'], para: 7, hint: 'Find the word "trouble" and the word "solve" in the same paragraph.', why: 'The problem is a pond that floods a road or field. The solution is "sliding a long pipe through the dam."' },
        { type: 'mc', skill: 'inference', q: 'Based on the pipe solution, what can the reader conclude about many communities?', options: ['They look for ways to live alongside beavers.', 'They want every beaver dam torn down.', 'They are too afraid of beavers to go near the dams.', 'They think beaver ponds are useless.'], para: 7, hint: 'What happens to the beavers when the pipe is used? What does that tell you about the people?', why: 'The pipe keeps the pond at a safe level "and the beavers stay in their home." People are solving the problem without removing the beavers.' },
        { type: 'mc', skill: 'vocab', q: 'Floods below the dam are often "less severe." What does "severe" mean?', options: ['Serious and harmful', 'Slow and gentle', 'Rare and surprising', 'Clean and clear'], para: 6, hint: 'The pond holds extra water during heavy rains. Would that make a flood better or worse?', why: 'Holding back water makes floods smaller and less harmful. "Severe" means very bad or serious.' },
        { type: 'multi', skill: 'cause', q: 'Which are effects of the dam slowing the water down? Choose TWO answers.', options: ['Mud and sand settle to the bottom.', 'Water flowing downstream is cleaner.', 'The teeth of beavers grow longer.', 'Coyotes learn how to swim.', 'The stream disappears in summer.'], correct: 2, para: 6, hint: 'Find the signal word "Since" in the last section. The effects come after the comma.', why: 'The text says, "Since the dam slows the water down, mud and sand settle to the bottom, and the water flowing out downstream is cleaner."' }
      ],
      talk: 'Tell a grown-up: What problem did the beaver have? What was its solution? Name two effects of the new pond.'
    },
    {
      id: 'w7d4',
      title: 'The Village That Sent the Wind Away',
      genre: 'fable',
      sticker: { emoji: '🌬️', name: 'Friendly Wind' },
      purpose: 'Read to find out what happens when a village gets exactly what it asks for.',
      stops: [
        { after: 2, q: 'Why did the villagers tell the wind to go away?', options: ['It kept bothering them and making messes.', 'It blew their windmill down.', 'It brought too much rain to the hill.'], say: 'Yes! The wind snatched hats, tangled laundry, and slammed shutters, so the villagers were fed up.' },
        { after: 5, q: 'What do we know about the village now?', options: ['Many things have gone wrong there.', 'The wind has come back too strong.', 'Everyone is still happy and calm.'], say: 'Right! Since the wind left, one trouble after another has come to the village.' }
      ],
      vocab: [
        { word: 'nuisance', def: 'something that bothers or annoys people', ex: 'The buzzing fly was a nuisance at the picnic.' },
        { word: 'rejoiced', def: 'showed great happiness', ex: 'The team rejoiced after the final whistle.' },
        { word: 'apology', def: 'words that say you are sorry', ex: 'Nora wrote an apology after she broke the vase.' },
        { word: 'wilted', def: 'became weak and droopy from lack of water', ex: 'The plant on the windowsill wilted when nobody watered it.' }
      ],
      passage: [
        'Long ago, in a village on a wide green hill, the people grew tired of the wind. It snatched hats and flung them into the duck pond, tangled the laundry, and slammed the shutters at night. It scattered the baker\'s flour across the square like snow.',
        '"Enough!" the villagers cried one blustery morning. They climbed to the top of the hill and shouted into the sky. "Wind, you are nothing but a nuisance. Go away and leave us in peace!"',
        'The wind had feelings, as winds sometimes do. It grew very still. Then, with a sigh that bent the grass for the last time, it drifted over the mountains and was gone.',
        'At first, the village rejoiced. Hats stayed on heads, and laundry dried in neat, obedient rows. For three whole days, everyone agreed that life had never been so pleasant.',
        'On the fourth day, the miller frowned up at his windmill. Its great arms hung motionless, so he could not grind the wheat. Because there was no flour, the ovens in the bakery went cold, and soon there was no bread.',
        'Other troubles followed. Without a breeze to push them along, the rain clouds stayed far out over the sea. The gardens wilted. Smoke from the chimneys hung over the rooftops in a gray, smelly blanket. The kites the children loved lay in a dusty heap, and the summer heat pressed down on everyone like a heavy hand.',
        'A girl named Anika was the first to say what all of them were thinking. "We sent away the wrong thing," she said. "We should have tied down our hats instead."',
        'So the villagers climbed the hill once more. This time they did not shout. Instead, they called out an apology, and then they sat down in the dry grass and waited patiently.',
        'Toward evening, the grass began to ripple, and the windmill creaked and slowly turned. A hat sailed off the mayor\'s head and landed in the duck pond, and the whole village cheered.'
      ],
      questions: [
        { type: 'mc', skill: 'cause', q: 'Why could the miller no longer grind wheat?', options: ['The arms of the windmill stopped turning.', 'The baker had used up all the wheat.', 'The rain had ruined the wheat crop.', 'The villagers took his windmill apart for firewood.'], para: 4, hint: 'Find the miller in the story. The little word "so" connects the cause to the effect.', why: 'The text says the windmill\'s "great arms hung motionless, so he could not grind the wheat." No wind means no turning.' },
        { type: 'mc', skill: 'cause', part: 'A', q: 'Part A: What caused the gardens to wilt?', options: ['Rain clouds could not reach the village.', 'Smoke covered all of the plants.', 'The children trampled the flowers.', 'The miller was too busy to water them anymore.'], para: 5, hint: 'Plants wilt when they do not get water. Read the sentence just before "The gardens wilted."', why: 'With no wind to push them, the rain clouds stayed over the sea. No rain fell, so the gardens wilted.' },
        { type: 'mc', skill: 'evidence', part: 'B', q: 'Part B: Which sentence from the story best supports the answer to Part A?', options: ['"Without a breeze to push them along, the rain clouds stayed far out over the sea."', '"Smoke from the chimneys hung over the rooftops in a gray, smelly blanket."', '"Because there was no flour, the ovens in the bakery went cold, and soon there was no bread."', '"For three whole days, everyone agreed that life had never been so pleasant."'], para: 5, hint: 'Pick the sentence that explains why no rain fell on the gardens.', why: 'This sentence shows that the rain clouds never reached the village, which is why the gardens had no water.' },
        { type: 'mc', skill: 'vocab', q: 'The arms of the windmill "hung motionless." What does "motionless" mean?', options: ['Without moving', 'Moving quickly', 'Full of motion', 'Moving once again'], para: 4, hint: 'Break the word apart: motion + less. What does the ending -less mean?', why: 'The ending -less means "without." The arms were without motion, so they were not moving at all.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the fable in order.', items: ['The villagers told the wind to go away.', 'The windmill stopped turning.', 'The baker ran out of flour.', 'The villagers apologized to the wind.', 'The windmill creaked and turned again.'], hint: 'Think about the two trips up the hill and what happened between them.', why: 'The wind was sent away, the windmill stopped, the flour ran out, the villagers apologized, and the wind came back.' },
        { type: 'mc', skill: 'theme', q: 'What lesson do the villagers learn in this fable?', options: ['Something annoying may also be something you need.', 'Shouting is the best way to solve a problem.', 'Hats should never be worn on a windy hill.', 'Bakers work much harder than millers do.'], hint: 'Think about how the villagers felt about the wind at the start, and how they felt at the end.', why: 'The wind was a nuisance, but without it there was no bread, no rain, and no fresh air. The villagers learn they need it.' },
        { type: 'mc', skill: 'structure', q: 'Which best describes how this fable is built?', options: ['A problem, a fix that goes wrong, then a better fix', 'A list of steps for building a windmill', 'A comparison of two villages on two hills', 'Facts about weather under different headings'], hint: 'Think about the two trips up the hill. What were the villagers trying to do each time?', why: 'The wind is a problem, so the villagers send it away. That fix causes worse troubles, so they apologize and ask the wind back. The fable moves from problem to failed fix to better fix.' }
      ],
      talk: 'Tell a grown-up: What happened BECAUSE the wind left? Name three effects, then tell the lesson of the fable.'
    },
    {
      id: 'w7d5',
      boss: true,
      title: 'Thunder and Lightning',
      genre: 'info',
      sticker: { emoji: '🌩️', name: 'Lightning Bolt' },
      purpose: 'Read to find out where lightning comes from and why thunder follows it.',
      stops: [
        { after: 3, q: 'What is the section "The Giant Spark" mostly about?', options: ['How a storm cloud makes lightning', 'How to stay safe in a storm', 'Why rain falls from tall clouds'], say: 'Yes! Ice rubbing inside the cloud builds a charge, and lightning is the giant spark.' },
        { after: 6, q: 'Why do you see the flash before you hear the boom?', options: ['Light travels faster than sound.', 'Thunder waits for the rain to start.', 'Your eyes work faster than your ears.'], say: 'Right! Light races ahead of sound, so the flash reaches you first.' }
      ],
      vocab: [
        { word: 'invisible', def: 'not able to be seen', ex: 'The air around us is invisible.' },
        { word: 'expands', def: 'grows larger or spreads out', ex: 'A balloon expands when you blow into it.' },
        { word: 'enormous', def: 'very, very big', ex: 'An enormous whale swam beside the little boat.' },
        { word: 'spectacular', def: 'amazing to look at', ex: 'The fireworks show was spectacular.' }
      ],
      passage: [
        '## A Storm Is Born',
        'On a hot, sticky summer afternoon, the sun warms the ground, and the ground warms the air above it. Warm air is lighter than cool air, so it rises. As this damp air climbs higher, it cools, and the invisible water in it turns into tiny droplets. Millions of droplets gather into a cloud. If the air keeps rushing upward, the cloud grows into a dark tower many miles tall. A thunderstorm has been born.',
        '## The Giant Spark',
        'Inside the cloud, powerful winds toss bits of ice up and down. The ice pieces bump and scrape against one another again and again. All of that rubbing builds up an electric charge. The same thing happens when you shuffle across a carpet in your socks. When you touch a doorknob afterward, a tiny spark jumps from your finger. A storm cloud does this on an enormous scale. Once the charge becomes too great, a gigantic spark leaps through the sky. That spark is lightning.',
        '## Why Thunder Booms',
        'A bolt of lightning is hotter than the surface of the sun. It heats the air around it in an instant. Because the air is heated so suddenly, it expands with explosive force. This creates a powerful wave of sound that rumbles across the land. We call that sound thunder.',
        'Light travels far faster than sound. Therefore, you see the flash before you hear the boom, unless the storm is right overhead. You can even estimate how far away the lightning struck. Count the seconds between the flash and the thunder. Every five seconds equals about one mile.',
        '## Staying Safe',
        'Lightning often strikes the tallest object in an area, so a lone tree or an open field is a dangerous place to wait out a storm. Water is risky, too, since electricity moves through it easily. Weather experts teach a simple rule: "When thunder roars, go indoors." Then stay inside until thirty minutes have passed since the last rumble.',
        'Thunderstorms can be frightening, but they are also one of the most spectacular shows in nature. Once you are safe and dry indoors, a few steps back from the window, you can enjoy every flash.'
      ],
      questions: [
        { type: 'mc', skill: 'cause', q: 'According to the passage, why does warm air rise?', options: ['It is lighter than cool air.', 'Lightning pushes it upward.', 'Ice pulls it into the clouds.', 'Thunder shakes it loose.'], para: 1, hint: 'Find the little signal word "so" in the first section. The cause comes just before it.', why: 'The text says, "Warm air is lighter than cool air, so it rises."' },
        { type: 'mc', skill: 'cause', part: 'A', q: 'Part A: What causes the sound of thunder?', options: ['Air that is heated suddenly expands with great force.', 'Pieces of ice crash together inside the cloud.', 'Tall storm clouds bump into one another high in the sky.', 'Heavy rain pounds against the ground.'], para: 5, hint: 'Go to the section "Why Thunder Booms." Follow the chain: lightning, then air, then sound.', why: 'Lightning heats the air in an instant. The air expands with explosive force and makes the wave of sound we call thunder.' },
        { type: 'mc', skill: 'evidence', part: 'B', q: 'Part B: Which sentence from the passage best supports the answer to Part A?', options: ['"Because the air is heated so suddenly, it expands with explosive force."', '"The ice pieces bump and scrape against one another again and again."', '"Millions of droplets gather into a cloud."', '"Once the charge becomes too great, a gigantic spark leaps through the sky."'], para: 5, hint: 'Look for the sentence with the signal word "Because" that tells what the air does.', why: 'This sentence gives the cause of thunder: air that is heated suddenly and expands with force.' },
        { type: 'mc', skill: 'structure', q: 'How is the section "A Storm Is Born" mainly organized?', options: ['As a chain of causes and effects', 'As a problem and its solution', 'As a comparison of two storms', 'As a list of safety rules'], para: 1, hint: 'Notice how each sentence leads to the next: the sun warms the ground, the ground warms the air, and so on.', why: 'Each event causes the next one: warm ground, rising air, cooling, droplets, cloud, storm. That is a cause-and-effect chain.' },
        { type: 'mc', skill: 'vocab', q: 'You can "estimate how far away the lightning struck." What does "estimate" mean?', options: ['To make a careful guess', 'To measure exactly', 'To see very clearly', 'To hurry away from'], para: 6, hint: 'Look at the word "about" in the last sentence of that paragraph. Is the answer exact?', why: 'Counting seconds gives "about one mile" for every five seconds. That is a careful guess, not an exact measurement.' },
        { type: 'evidence', skill: 'detail', q: 'Tap the sentence that tells how to turn seconds into miles.', answer: 'Every five seconds equals about one mile.', hint: 'Find the paragraph about counting. Look for a sentence with both "seconds" and "mile."', why: 'This sentence gives the rule: each five seconds between flash and boom means about one mile.' },
        { type: 'multi', skill: 'detail', q: 'According to the passage, which places are dangerous during a thunderstorm? Choose TWO answers.', options: ['An open field', 'A lake or a pool', 'A house with closed windows', 'A school hallway', 'A basement'], correct: 2, para: 8, hint: 'Go to the section "Staying Safe." What does it say about open places and about water?', why: 'The text says "an open field is a dangerous place" and "Water is risky, too." The other choices are indoors.' },
        { type: 'mc', skill: 'inference', q: 'You see a flash and count ten seconds before you hear thunder. About how far away did the lightning strike?', options: ['Two miles', 'Five miles', 'Ten miles', 'Half a mile'], para: 6, hint: 'Use the rule from the passage. How many groups of five seconds are in ten seconds?', why: 'Every five seconds equals about one mile. Ten seconds is two groups of five, so the lightning was about two miles away.' }
      ],
      talk: 'Tell a grown-up the chain of causes from a hot afternoon all the way to the boom of thunder.'
    }
  ]
};
