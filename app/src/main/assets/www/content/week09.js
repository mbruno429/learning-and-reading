window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[9] = {
  strategy: {
    name: 'Big Lesson, Short Summary',
    icon: '💡',
    tagline: 'Find the lesson. Then tell the story short.',
    steps: [
      'To find the THEME, ask: What problem did the character face, and what did he or she learn from it?',
      'Say the lesson so it fits anyone, not just this story. Not "Mia shared her kite," but "Sharing makes fun bigger."',
      'To SUMMARIZE, tell only the most important parts in order: Somebody... wanted... but... so... then.',
      'Leave out tiny details and your own opinions. A good summary is short and true to the text.'
    ],
    example: {
      text: 'Ravi bragged that he never needed to practice the piano. At the recital, he forgot his song, while his sister, who practiced every day, played perfectly. The next morning, Ravi was at the piano before breakfast.',
      q: 'What is the THEME of this little story?',
      a: 'Practice matters more than bragging. Ravi learned this when he failed, and then he chose to practice. Notice that the theme fits anyone, not just Ravi.'
    },
    practice: [
      { text: 'Nell wanted the tallest sunflower on her street, so she watered it five times a day. Soon the soil turned to mud, and the plant drooped. Her neighbor watered his sunflower once each morning, and it grew tall and strong.', q: 'What is the THEME of this little story?', options: ['Too much of a good thing can do harm.', 'Sunflowers grow best in muddy soil.', 'Neighbors should not grow the same flowers.'], why: 'Nell\'s problem was that she overdid something good, and it hurt her plant. Say that so it fits anyone: too much of a good thing can do harm.' },
      { text: 'Omar\'s new kite got stuck high in an oak tree. He threw a ball to knock it loose, but the ball got stuck, too. At last he asked his cousin Dina for help, and she lifted the kite down with a long rake. After that, Omar flew his kite in the open field.', q: 'Which is the best SUMMARY of this little story?', options: ['Omar\'s kite got stuck, his own plan failed, and his cousin helped him get it back.', 'Omar threw a ball at his kite, and the ball got stuck in the oak tree, too.', 'Omar was silly to fly a brand-new kite so close to a big tree.'], why: 'A good summary tells the problem, what the character tried, and how it ended. One wrong choice is only a single detail, and the other is an opinion that the story never gives.' }
    ]
  },
  sessions: [
    {
      id: 'w9d1',
      title: 'The Lantern Maker\'s Apprentice',
      genre: 'fable',
      sticker: { emoji: '🏮', name: 'Sturdy Lantern' },
      purpose: 'Read to find out what happens when an apprentice decides her teacher\'s way is too slow.',
      vocab: [
        { word: 'apprentice', def: 'a person who learns a skill by working with an expert', ex: 'The baker\'s apprentice learned to knead dough.' },
        { word: 'impatient', def: 'not willing to wait', ex: 'The impatient puppy barked until dinner arrived.' },
        { word: 'drizzle', def: 'light rain that falls in very small drops', ex: 'We walked home in a cool drizzle without umbrellas.' },
        { word: 'steady', def: 'firm; not shaking or changing', ex: 'Hold the ladder steady while I climb.' }
      ],
      passage: [
        'In a valley famous for its festival of lights, old Master Bao made the finest paper lanterns anyone had ever seen. People traveled for days to buy them, because a lantern from his workshop could glow through wind and drizzle without tearing.',
        'When Master Bao\'s eyes grew weak, he took on an apprentice named Linh. She was clever and quick with her hands, but she was also impatient. Master Bao taught her to soak each strip of bamboo overnight so that it would bend without cracking. He taught her to brush on three thin coats of glue and to let each coat dry completely before adding the next. A single lantern took days to finish.',
        '"Three coats? Overnight?" Linh grumbled. "At this pace, I will make four lanterns a week. If I skip the soaking and use one thick coat, I can make four in a single day!"',
        'Master Bao only smiled. "Make them your way, then," he said, "and we shall see."',
        'By the week of the festival, Linh had built a mountain of lanterns. They looked every bit as beautiful as her teacher\'s, and she sold them proudly in the market for half his price. Customers crowded around her table, while Master Bao sold only his usual few. Linh could not help glancing at his quiet stall and feeling a little sorry for him.',
        'On festival night, hundreds of lanterns floated above the valley like a river of stars. Then a breeze swept down from the hills. One by one, Linh\'s lanterns began to fail. Dry bamboo snapped. Thick glue peeled away, and paper flapped loose. Soon the ground was littered with crumpled shapes, and disappointed children stood holding empty strings. High above them, a small cluster of Master Bao\'s lanterns sailed on, steady and bright.',
        'Linh\'s cheeks burned with shame. The next morning, she walked from door to door and returned every coin she had earned, even though it left her purse empty. Then she went back to the workshop, filled a tub with water, and laid the bamboo strips in to soak.',
        'Master Bao found her there at sunset, brushing a first thin coat of glue onto a single frame. "Only four lanterns this week?" he asked gently.',
        '"Four," Linh agreed, "but four that will still be flying when the wind blows."'
      ],
      stops: [
        { after: 2, q: 'What is Linh\'s complaint about Master Bao\'s way of working?', options: ['It takes far too long.', 'It costs too much money.', 'It makes the lanterns ugly.'], say: 'Yes! Linh thinks soaking and three coats are much too slow.' },
        { after: 4, q: 'What do we know about Linh\'s lanterns so far?', options: ['They look beautiful and sell very fast.', 'They take many days to finish.', 'They cost more than Master Bao\'s.'], say: 'Right! So far, Linh\'s quick lanterns look lovely, and crowds are buying them.' }
      ],
      questions: [
        { type: 'mc', skill: 'theme', q: 'What is the central message of this story?', options: ['Careful work lasts longer than hurried work.', 'Low prices are the best way to win customers.', 'Old teachers always know more than the young.', 'Festivals are more fun in calm weather.'], hint: 'Think about Linh\'s problem and what she does differently at the end. Say the lesson so it fits anyone.', why: 'Linh\'s rushed lanterns fall apart while the carefully made ones keep flying, and she chooses the slow, careful way. The lesson is that careful work lasts.' },
        { type: 'mc', skill: 'summary', q: 'Which is the best summary of the story?', options: ['An impatient apprentice takes shortcuts, her lanterns fall apart in the wind, and she learns to work with care.', 'Linh grumbles about soaking bamboo overnight, brushing on three coats of glue, and making only four lanterns a week.', 'Master Bao makes fine lanterns that people travel for days to buy, and he takes on an apprentice when his eyes grow weak.', 'A sudden breeze ruins the festival of lights, so a clever girl returns her coins and gives up making lanterns for good.'], hint: 'A good summary covers the beginning, middle, AND end. Watch out for choices that tell only one part or change what happened.', why: 'The best summary tells Linh\'s problem (impatience and shortcuts), what happened (the lanterns failed), and how it ended (she learned to work carefully). The others cover only one part or are untrue.' },
        { type: 'mc', part: 'A', skill: 'character', q: 'Part A: How does Linh change from the beginning of the story to the end?', options: ['She goes from rushing her work to taking her time.', 'She goes from being shy to being bold.', 'She goes from being careful to being careless.', 'She goes from being generous to being greedy.'], hint: 'Compare what Linh says about soaking bamboo at the start with what she does in the workshop at the end.', why: 'At first Linh skips steps to work faster. At the end she soaks the bamboo and brushes on thin coats, just as she was taught.' },
        { type: 'mc', part: 'B', skill: 'evidence', q: 'Part B: Which sentence from the story best supports the answer to Part A?', options: ['Then she went back to the workshop, filled a tub with water, and laid the bamboo strips in to soak.', 'They looked every bit as beautiful as her teacher\'s, and she sold them proudly in the market for half his price.', 'Customers crowded around her table, while Master Bao sold only his usual few.', 'On festival night, hundreds of lanterns floated above the valley like a river of stars.'], para: 6, hint: 'Find the sentence that shows Linh doing a step she once wanted to skip.', why: 'Soaking the bamboo is the slow step Linh skipped earlier. When she does it at the end, it proves she has changed.' },
        { type: 'mc', skill: 'vocab', q: '"Soon the ground was littered with crumpled shapes." What does "littered" mean?', options: ['Covered with scattered things', 'Swept clean of every last scrap', 'Lit up by a soft, warm glow', 'Shaken hard by a strong wind'], para: 5, hint: 'Picture what happens to the broken lanterns. Where do they end up, and how many are there?', why: 'The broken lanterns fell all over the ground. "Littered" means covered with things scattered around.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the story in order.', items: ['Linh decides to skip the slow steps.', 'Linh sells many lanterns at half price.', 'A breeze destroys Linh\'s lanterns.', 'Linh returns every coin she earned.', 'Linh soaks bamboo the slow way.'], hint: 'Think: before the festival, during the festival, and the morning after.', why: 'Linh takes shortcuts, sells her lanterns, watches them fail on festival night, returns the money, and then begins again the careful way.' },
        { type: 'sort', skill: 'summary', q: 'Sort each statement. Does it belong in a short summary of the story, or is it too small a detail?', cats: ['Belongs in a summary', 'Too small a detail'], items: [{ t: 'Linh skips steps to make lanterns faster.', c: 0 }, { t: 'The lanterns looked like a river of stars.', c: 1 }, { t: 'Linh\'s lanterns break apart in the wind.', c: 0 }, { t: 'Linh starts over and works with care.', c: 0 }, { t: 'Master Bao found Linh in the workshop at sunset.', c: 1 }], hint: 'Ask about each one: If I left this out, would the story still make sense? If it would, it is a small detail.', why: 'A summary needs the problem (Linh\'s shortcuts), what happened (the lanterns broke), and the ending (she works with care). The river of stars and the sunset are nice details, but the story makes sense without them.' }
      ],
      talk: 'Tell a grown-up: What lesson did Linh learn? Tell about a time when rushing made something turn out worse for you.'
    },
    {
      id: 'w9d2',
      title: 'Cities Beneath the Sea',
      genre: 'info',
      sticker: { emoji: '🐠', name: 'Coral Castle' },
      purpose: 'Read to find out who builds coral reefs and why so many living things need them.',
      vocab: [
        { word: 'depend', def: 'to need something in order to live or succeed', ex: 'Baby birds depend on their parents for food.' },
        { word: 'shelter', def: 'a safe place that protects', ex: 'We found shelter under a bridge when it began to hail.' },
        { word: 'predators', def: 'animals that hunt and eat other animals', ex: 'Rabbits dash into their burrows to escape predators.' },
        { word: 'thrive', def: 'to grow strong and healthy', ex: 'Tomato plants thrive in warm, sunny gardens.' }
      ],
      passage: [
        '## Tiny Builders',
        'A coral reef may look like a garden of colorful rocks, but it is actually built by animals. Each coral is made of thousands of tiny, soft-bodied creatures called polyps. A polyp is often no bigger than a grain of rice. To protect itself, it builds a hard, cup-shaped skeleton of limestone around its body. When a polyp dies, its skeleton remains, and new polyps build on top of it. Layer by layer, over thousands of years, these tiny builders create enormous reefs. The largest one, the Great Barrier Reef near Australia, is so vast that astronauts can see it from space.',
        '## A Crowded Neighborhood',
        'Coral reefs cover only a tiny part of the ocean floor, yet about one-fourth of all ocean species depend on them. Fish hide from predators in the cracks and caves of the reef. Sea turtles, crabs, eels, and sponges find food and shelter there. Tiny cleaner shrimp even set up "cleaning stations," where bigger fish line up to have pests picked off their scales. Because so many creatures live so close together, scientists often compare reefs to busy cities.',
        '## Partners in Color',
        'Corals get their brilliant colors from algae. These tiny, plantlike living things live inside the polyps. The partnership helps both sides. The coral gives the algae a safe home, and the algae use sunlight to make food that they share with the coral. This is why most reefs grow in clear, shallow water where sunlight can reach them.',
        '## Reefs in Danger',
        'Unfortunately, this partnership is fragile. When ocean water becomes too warm, stressed corals push out their algae. Without them, the corals turn ghostly white, which is called bleaching. A bleached coral is not dead yet, and it can recover if the water cools soon enough. If the heat lasts too long, however, the coral starves. Pollution and careless fishing harm reefs as well.',
        '## Why Reefs Matter',
        'Losing reefs would hurt people, too. Reefs break the force of large waves before they reach the shore. In this way, they protect coastal towns from storms. They also provide food and jobs for millions of people. For these reasons, scientists and volunteers around the world are working to keep the oceans clean. Some are even growing new corals, so that these underwater cities can continue to thrive.'
      ],
      stops: [
        { after: 1, q: 'What is this part mostly about?', options: ['How tiny animals build coral reefs', 'How astronauts study the ocean', 'How colorful rocks grow in gardens'], say: 'Right! Tiny animals called polyps build reefs, layer by layer.' },
        { after: 7, q: 'What do we know about a bleached coral?', options: ['It can recover if the water cools soon.', 'It is already dead and cannot heal.', 'It grows faster than a healthy coral.'], say: 'Yes! A bleached coral is in trouble, but it is not dead yet.' }
      ],
      questions: [
        { type: 'mc', skill: 'summary', q: 'Which sentence best summarizes the section "Partners in Color"?', options: ['Corals and algae help each other survive by trading a home for food.', 'Most coral reefs grow in clear, shallow water where sunlight can reach them.', 'Algae are tiny plantlike living things that use sunlight.', 'Corals have brilliant colors that attract many kinds of fish.'], para: 5, hint: 'A summary of a section tells its most important idea. Which idea do ALL the sentences in that section explain?', why: 'The section explains the partnership: "The coral gives the algae a safe home," and the algae make food "that they share with the coral."' },
        { type: 'mc', skill: 'summary', q: 'Which is the best summary of the whole article?', options: ['Reefs are built by tiny animals, shelter many sea creatures, and protect people, but they are in danger and need care.', 'Coral polyps are no bigger than a grain of rice, and each one builds a cup-shaped skeleton made of limestone.', 'Warm ocean water makes corals push out their algae and turn white, which scientists call bleaching.', 'Coral reefs are the most beautiful places in the entire ocean, and everyone should try to visit one.'], hint: 'Use the headings. A summary of the whole article should touch the big idea of every section, not just one.', why: 'The correct choice covers the builders, the neighborhood, the danger, and why reefs matter. Two choices tell about only one section, and one is an opinion the article never gives.' },
        { type: 'mc', skill: 'cause', q: 'According to the article, what causes coral bleaching?', options: ['Ocean water that becomes too warm', 'Sunlight that reaches shallow water', 'Fish that hide in the reef\'s caves', 'Waves that crash against the shore'], para: 7, hint: 'Find the word "bleaching." Then read the sentences just before it to find what starts the problem.', why: 'The text says, "When ocean water becomes too warm, stressed corals push out their algae," and then the corals turn white.' },
        { type: 'multi', skill: 'detail', q: 'Choose TWO reasons the article gives for why coral reefs matter to PEOPLE.', options: ['They protect coastal towns from large waves.', 'They provide food and jobs.', 'They give algae a safe home.', 'They turn white when the water warms.', 'They are built from limestone skeletons.'], correct: 2, hint: 'Use the headings to find the right section. Which one is about why reefs are important?', why: 'Under "Why Reefs Matter," the text says reefs "protect coastal towns from storms" and "provide food and jobs for millions of people."' },
        { type: 'mc', skill: 'vocab', q: '"Unfortunately, this partnership is fragile." What does "fragile" mean?', options: ['Easily harmed', 'Very old', 'Hard to see', 'Full of color'], para: 7, hint: 'Read on. What happens to the partnership when the water gets a little too warm?', why: 'A small change in temperature is enough to break the partnership between coral and algae. "Fragile" means easily broken or harmed.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence that explains why scientists compare coral reefs to cities.', answer: 'Because so many creatures live so close together, scientists often compare reefs to busy cities.', hint: 'Look in the section called "A Crowded Neighborhood." Find the word "because."', why: 'This sentence gives the reason for the comparison: many creatures living close together, just like people in a city.' }
      ],
      talk: 'Tell a grown-up: Summarize this article in three sentences. Use the headings to help you remember the big ideas.'
    },
    {
      id: 'w9d3',
      title: 'The Stream and the Two-Wheeler',
      genre: 'poem',
      sticker: { emoji: '🚲', name: 'Never-Quit Bike' },
      purpose: 'Read to find out how a little stream and a boy on a bike are alike.',
      vocab: [
        { word: 'boulder', def: 'a very large rock', ex: 'We climbed on top of a boulder to see the lake.' },
        { word: 'astonishment', def: 'a feeling of very great surprise', ex: 'To my astonishment, the magician pulled a dove from his hat.' },
        { word: 'wobbled', def: 'moved unsteadily from side to side', ex: 'The tall stack of plates wobbled in my hands.' },
        { word: 'announced', def: 'said something in a loud or official way', ex: 'The coach announced the winners of the race.' }
      ],
      passage: [
        '## Text 1: The Stream (a poem)',
        'A little stream set out one day\nTo find the far-off sea.\n"The hills are high, the road is long,\nBut that won\'t trouble me."',
        'It met a boulder, gray and wide,\nThat would not let it through.\nThe stream just hummed and slipped around,\nAs patient waters do.',
        'The summer sun beat down so hot\nThe stream shrank to a thread.\nIt trickled on from stone to stone\nAnd followed where they led.',
        'Through tangled roots and fallen trees,\nIt never thought to stop,\nTill one bright dawn it reached the waves:\nThe sea, made drop by drop.',
        '## Text 2: Theo and the Two-Wheeler',
        'On Saturday morning, Theo wheeled his sister\'s old bicycle onto the sidewalk and stared at the place where the training wheels used to be. Maya had removed them herself, and she had confidently promised that he would be riding by lunchtime.',
        'At first it seemed impossible. Every time Maya let go of the seat, the front wheel jerked sideways as though it had a mind of its own. Theo wobbled, tipped, and landed in the grass so often that he started counting. Lunchtime came and went.',
        'After the eleventh fall, he threw down his helmet. "My legs are too short," he announced. "This bike hates me. I quit."',
        'Luis, who had been watching from his porch with Biscuit, wandered over. He didn\'t argue. He simply pointed to the crack in the sidewalk where Theo had started. "This morning you couldn\'t even reach that mailbox," he said. "Last time you got past two driveways. You\'re not failing, Theo. You\'re just not finished."',
        'Theo looked back down the block and realized that it was true. Each ride had ended in the grass, but each one had ended a little farther along. Slowly, he picked up his helmet and buckled it under his chin.',
        'The twelfth try carried him past three driveways. On the fifteenth, he wobbled, straightened, and, to his own astonishment, kept going. Mailboxes slid by, and the wind pushed against his face. He reached the corner before he remembered that nobody had taught him how to stop, so he steered into Grandma Rosa\'s hedge.',
        'He climbed out covered in leaves and grinning from ear to ear. "Again!" he shouted.',
        'That night, Maya found a drawing taped to the refrigerator. It showed a small bike, a very long sidewalk, and a boy with an enormous smile.'
      ],
      stops: [
        { after: 2, q: 'What did the stream do when the boulder blocked it?', options: ['It slipped around the boulder.', 'It stopped and turned back.', 'It pushed the boulder aside.'], say: 'Yes! The stream just hummed and went around, with no fuss at all.' },
        { after: 8, q: 'What is Theo\'s problem so far?', options: ['He keeps falling and wants to quit.', 'His sister will not help him.', 'His bike has a flat tire.'], say: 'Right! After eleven falls, Theo throws down his helmet and says he quits.' }
      ],
      questions: [
        { type: 'mc', skill: 'theme', q: 'What is the theme of the poem "The Stream"?', options: ['Steady effort can overcome big obstacles.', 'Nature is more powerful than people are.', 'It is wise to avoid long journeys.', 'Summer is the hardest season of all.'], para: 4, hint: 'What does the stream keep doing every time something gets in its way? What happens in the end?', why: 'The stream slips around the boulder, keeps trickling in the heat, and "never thought to stop" until it reaches the sea. The lesson is that steady effort wins.' },
        { type: 'mc', skill: 'theme', q: 'Which message do the poem and the story share?', options: ['Keep going, because small steps add up.', 'Listen to friends, because they see what you cannot.', 'Go around trouble instead of pushing through it.', 'Start early, because long trips take all day.'], hint: 'Think about the stream reaching the sea "drop by drop" and Theo getting a little farther each ride.', why: 'The stream reaches the sea drop by drop, and Theo learns to ride by going a little farther each time. Both show that small steps add up. Only the story has a helpful friend, and only the poem has something to go around.' },
        { type: 'mc', skill: 'inference', q: 'In the poem, what does the boulder most likely stand for?', options: ['A problem that blocks the way', 'A friend who offers help', 'The end of a long journey', 'A safe place to rest'], para: 2, hint: 'Reread the second stanza. What does the boulder do to the stream, and how does the stream respond?', why: 'The boulder "would not let it through," so it is like any problem that gets in someone\'s way. The stream solves it by patiently going around.' },
        { type: 'evidence', skill: 'evidence', q: 'When Theo looks back down the block, he sees that Luis is right. Tap the sentence that tells WHAT he notices about his rides.', answer: 'Each ride had ended in the grass, but each one had ended a little farther along.', hint: 'Find the paragraph where Theo looks back. One sentence only says that he realized something. Tap the one that tells what was different about each ride.', why: 'This sentence shows Theo seeing his own progress: every ride ended in a fall, but each one went a little farther.' },
        { type: 'mc', skill: 'vocab', q: '"The stream shrank to a thread. It trickled on from stone to stone." What does "trickled" mean?', options: ['Flowed slowly in a thin line', 'Rushed along in a mighty flood', 'Froze into solid ice', 'Sank deep into the sand'], para: 3, hint: 'The stream has shrunk "to a thread." How would such a tiny stream move?', why: 'A stream as thin as a thread has very little water, so it can only flow slowly in a thin line. That is trickling.' },
        { type: 'order', skill: 'summary', q: 'Put these events in order to build a summary of the story.', items: ['Theo falls again and again.', 'Theo says that he quits.', 'Luis points out how far Theo has come.', 'Theo tries again and rides to the corner.', 'Theo lands in the hedge and shouts, "Again!"'], hint: 'A summary keeps the important events in the order they happened. What was the problem, what changed, and how did it end?', why: 'Theo struggles and quits, Luis helps him see his progress, and Theo tries again until he succeeds. Those are the key events, in order.' }
      ],
      talk: 'Tell a grown-up: How are the stream and Theo alike? What is something hard that you learned by not giving up?'
    },
    {
      id: 'w9d4',
      title: 'Wangari Maathai: Planting Hope',
      genre: 'bio',
      sticker: { emoji: '🌳', name: 'Tree of Hope' },
      purpose: 'Read to find out what Wangari Maathai did when she saw her homeland changing.',
      vocab: [
        { word: 'landscape', def: 'all the land you can see in an area', ex: 'Snow covered the whole landscape overnight.' },
        { word: 'seedlings', def: 'very young plants that have just sprouted from seeds', ex: 'We planted the tiny seedlings in the garden in spring.' },
        { word: 'survived', def: 'stayed alive', ex: 'The little plant survived the cold winter.' },
        { word: 'determination', def: 'the will to keep trying, even when something is hard', ex: 'With determination, she finished the whole race.' }
      ],
      passage: [
        '## A Childhood Among Trees',
        'Wangari Maathai was born in 1940 in a village in the green highlands of Kenya, a country in East Africa. As a girl, she collected water from a clear stream shaded by fig trees. The forests around her home were full of birds, and the soil was dark and rich. She never imagined that this landscape could disappear.',
        '## A Troubling Discovery',
        'Wangari was an excellent student, and she earned the chance to attend college in the United States, where she studied biology. When she returned to Kenya years later, she was shocked. Many forests had been cut down to make room for large farms. Without tree roots to hold it in place, the soil washed away whenever it rained. Streams had dried up or turned muddy. Women in the villages told her that they now walked for hours to gather firewood, and their families often went hungry.',
        '## One Simple Idea',
        'Wangari realized that these problems shared a single cause, and she thought of a single solution: plant trees. In 1977, she started a group called the Green Belt Movement. She taught village women to raise seedlings and plant them in long rows, or belts. The women earned a small payment for every tree that survived. At first, some experts doubted that women without special training could grow forests. The women proved them wrong. The trees gave them firewood, fruit, and shade, and the roots protected the soil.',
        '## Standing Firm',
        'Not everyone approved. Some government leaders wanted to clear even more land, and they did not like being challenged, especially by a woman. Wangari was mocked and even arrested for protesting. Still, she refused to give up. "It\'s the little things citizens do," she said. "That\'s what will make the difference. My little thing is planting trees."',
        '## A Forest of Change',
        'Over the years, the women of the Green Belt Movement planted tens of millions of trees across Kenya, and the idea spread to other countries. Where bare hillsides had once crumbled in the rain, green belts of trees now held the soil in place. In 2004, Wangari Maathai was awarded the Nobel Peace Prize, becoming the first African woman to receive it. She had shown the world that one person with a simple idea, and the determination to keep going, can help heal the land.'
      ],
      stops: [
        { after: 1, q: 'What do we know about Wangari\'s childhood home so far?', options: ['It was green, with forests and clear water.', 'It was a busy city with tall buildings.', 'It was dry land with very few trees.'], say: 'Yes! She grew up among fig trees, birds, and a clear stream.' },
        { after: 5, q: 'What did the village women do in the Green Belt Movement?', options: ['They raised young trees and planted them.', 'They cut firewood to sell in town.', 'They built large farms on the hills.'], say: 'Right! The women raised seedlings and planted them in long rows called belts.' }
      ],
      questions: [
        { type: 'mc', skill: 'summary', q: 'Which is the best summary of the section "A Troubling Discovery"?', options: ['Wangari came home to find forests gone, soil washing away, and villagers struggling.', 'Wangari was an excellent student who earned the chance to study biology in the United States.', 'Village women had to walk for hours each day to gather firewood.', 'Wangari decided that large farms were good for the people of Kenya.'], para: 3, hint: 'A section summary tells the main thing that happened, not just one detail. What did Wangari discover?', why: 'The section describes everything Wangari found when she returned: missing forests, washed-away soil, dried streams, and hungry families. The other choices are single details or untrue.' },
        { type: 'mc', skill: 'theme', q: 'What is the central message of this biography?', options: ['One determined person with a simple idea can make a big difference.', 'Studying in another country is the surest path to becoming a leader.', 'Trees are always more valuable to a country than its farms are.', 'Winning a famous award is the best reward for years of hard work.'], para: 9, hint: 'Reread the final sentence. Authors often state the big message at the very end.', why: 'The last sentence says she showed "that one person with a simple idea, and the determination to keep going, can help heal the land."' },
        { type: 'mc', skill: 'vocab', q: 'Wangari "thought of a single solution: plant trees." What does "solution" mean?', options: ['An answer to a problem', 'A kind of young fruit tree', 'A group of helpers', 'A reason to worry'], para: 5, hint: 'What were the problems Wangari saw? What was planting trees supposed to do about them?', why: 'Soil loss, dry streams, and missing firewood were the problems. Planting trees was her way to fix them. A solution is an answer to a problem.' },
        { type: 'mc', part: 'A', skill: 'character', q: 'Part A: Which word best describes Wangari Maathai?', options: ['Persistent', 'Timid', 'Impatient', 'Discouraged'], hint: 'Persistent means continuing to try even when things are hard. Timid means shy and fearful. Think about how she acted when leaders tried to stop her.', why: 'Wangari kept working even when she was mocked and arrested. Someone who keeps going through difficulty is persistent.' },
        { type: 'mc', part: 'B', skill: 'evidence', q: 'Part B: Which sentence from the text best supports the answer to Part A?', options: ['Still, she refused to give up.', 'She never imagined that this landscape could disappear.', 'The women earned a small payment for every tree that survived.', 'Many forests had been cut down to make room for large farms.'], para: 7, hint: 'Look in the section "Standing Firm" for a sentence about not quitting.', why: '"Still, she refused to give up" shows directly that Wangari kept going in spite of being mocked and arrested.' },
        { type: 'order', skill: 'sequence', q: 'Put these events from Wangari Maathai\'s life in order.', items: ['She collects water from a clear stream.', 'She studies biology in the United States.', 'She returns and finds the forests cut down.', 'She starts the Green Belt Movement.', 'She receives the Nobel Peace Prize.'], hint: 'This biography is told in time order. Use the headings to follow her life from childhood to the end.', why: 'The sections move through her life in order: childhood, college, her return, the Green Belt Movement, and finally the Nobel Peace Prize.' },
        { type: 'mc', skill: 'summary', q: 'Which is the best summary of the whole biography?', options: ['Wangari Maathai saw that Kenya was losing its forests, so she led women in planting millions of trees and never gave up.', 'Wangari Maathai grew up near fig trees, studied biology in college, and won the Nobel Peace Prize in 2004.', 'Village women in Kenya earned a small payment for every seedling they planted that survived.', 'Wangari Maathai was arrested for protesting, so she left Kenya to plant trees in other countries.'], hint: 'A summary of a life story tells the problem the person saw, what she did about it, and how it turned out.', why: 'The best summary gives the problem (lost forests), what Wangari did (led women in planting trees), and how she kept going. One choice leaves out the tree planting, one is a single detail, and one is untrue because she stayed in Kenya.' }
      ],
      talk: 'Tell a grown-up: Summarize Wangari Maathai\'s life in four sentences. What "little thing" could you do to help your neighborhood?'
    },
    {
      id: 'w9d5',
      boss: true,
      title: 'The Borrowed Voice',
      genre: 'fable',
      sticker: { emoji: '🐦', name: 'True Song Bird' },
      purpose: 'Read to find out what a young mockingbird discovers on a foggy night.',
      vocab: [
        { word: 'imitate', def: 'to copy the way someone sounds or acts', ex: 'My little brother loves to imitate a rooster.' },
        { word: 'confused', def: 'mixed up; not sure what to do', ex: 'The new student was confused by all the hallways.' },
        { word: 'trembling', def: 'shaking a little from fear, cold, or excitement', ex: 'The kitten was trembling after the loud thunder.' },
        { word: 'melody', def: 'a string of musical notes; a tune', ex: 'She hummed a cheerful melody while she worked.' }
      ],
      passage: [
        'In the tallest tree of Lantern Valley lived a young mockingbird named Mirela. Like all mockingbirds, she had a gift for copying sounds, and she used it constantly. At dawn she warbled like the robin. At noon she whistled like the cardinal. At dusk she cooed so sweetly that even the doves were fooled.',
        'The other birds adored her performances. "Do the owl!" they begged. "Now the woodpecker!" Mirela loved their applause, and she practiced until she could imitate every bird in the valley. She became so busy singing other birds\' songs that she never bothered to sing one of her own.',
        'Only her grandmother seemed troubled. "You have a hundred voices, little one," the old bird said, "but which of them is yours?"',
        'Mirela laughed. "Why would I need my own voice when I can borrow the best parts of everyone else\'s?"',
        'One autumn afternoon, a thick fog rolled into the valley while the flock was feeding in a distant meadow. Within minutes, the birds could not see their own wingtips. They fluttered in confused circles, unable to find the way home, and night was coming.',
        'Mirela had stayed behind in the tall tree, and she could hear their frightened cries. "I will call them home," she decided. She sang the robin\'s song as loudly as she could. Out in the fog, the lost birds heard a robin and assumed it was one of their own flock, just as lost as they were. She tried the cardinal\'s whistle and then the dove\'s coo. Each time, the birds heard only another neighbor wandering in the mist. Not one of them turned toward the tree.',
        'Mirela\'s heart pounded. Every voice she owned belonged to someone else. Then, trembling, she opened her beak and let out a sound she had never practiced. It was a rough, bright, tumbling melody that was nobody\'s but hers. It was not as sweet as the dove\'s song or as clear as the cardinal\'s, but it was new.',
        'Out in the meadow, the birds lifted their heads. "That voice belongs to none of us," they said. "Whoever is singing is not lost in this fog. Follow it!" One after another, they flew toward the strange song until every bird was safe among the branches. Mirela\'s grandmother, listening from her nest, closed her eyes and smiled.',
        'After that night, Mirela still performed her imitations whenever her friends asked. But every evening, just before dark, she sang her own song first.'
      ],
      stops: [
        { after: 3, q: 'What does Mirela think about having a voice of her own?', options: ['She does not think she needs one.', 'She wishes she could find hers.', 'She is saving hers for later.'], say: 'Yes! Mirela laughs and says that borrowing other voices is enough.' },
        { after: 5, q: 'What does Mirela decide to do when she hears the cries?', options: ['Call the flock home by singing', 'Fly into the fog to find them', 'Wake her grandmother to ask for help'], say: 'Right! She stays in the tall tree and tries to sing the flock home.' }
      ],
      questions: [
        { type: 'mc', skill: 'theme', q: 'What is the central message of this fable?', options: ['Your own voice has a value that copying others cannot replace.', 'Singing as loudly as you can is the best way to be heard.', 'It is dangerous to travel far from home when night is coming.', 'Talented performers deserve plenty of applause for their gifts.'], hint: 'What could Mirela NOT do with her borrowed voices? What finally worked?', why: 'All of Mirela\'s copied songs failed to guide the flock. Only her own melody brought them home, which shows that being yourself has special value.' },
        { type: 'mc', skill: 'summary', q: 'Which is the best summary of the fable?', options: ['A mockingbird who only copies other birds cannot guide her lost flock home until she finally sings a song of her own.', 'A young mockingbird learns to warble like a robin, whistle like a cardinal, and coo as sweetly as a dove.', 'A thick fog rolls into a valley, and a flock of birds flutters in confused circles as night approaches.', 'A wise grandmother teaches a young mockingbird a special song that leads the lost flock to safety.'], hint: 'The best summary includes the main character, the problem, and how it is solved, without changing any facts.', why: 'The correct choice tells who (the mockingbird), the problem (copied songs cannot guide the flock), and the solution (her own song). Two choices tell only one part, and the grandmother never teaches her a song.' },
        { type: 'mc', part: 'A', skill: 'cause', q: 'Part A: Why does Mirela\'s plan to call the flock home fail at first?', options: ['The lost birds think her borrowed songs come from other lost birds.', 'The fog is so thick that sound cannot travel through it.', 'She does not sing loudly enough for the flock to hear.', 'The lost birds are too frightened to listen to anything.'], para: 5, hint: 'Reread the paragraph where Mirela sings the robin\'s song. What do the lost birds think they are hearing?', why: 'The birds hear a robin and assume "it was one of their own flock, just as lost as they were." A copied voice sounds like just another lost bird.' },
        { type: 'mc', part: 'B', skill: 'evidence', q: 'Part B: Which sentence from the fable best supports the answer to Part A?', options: ['Each time, the birds heard only another neighbor wandering in the mist.', 'Within minutes, the birds could not see their own wingtips.', 'Mirela had stayed behind in the tall tree, and she could hear their frightened cries.', 'They fluttered in confused circles, unable to find the way home, and night was coming.'], para: 5, hint: 'Choose the sentence that tells what the lost birds BELIEVED when they heard Mirela\'s borrowed songs.', why: 'This sentence shows the birds mistaking each copied song for "another neighbor wandering in the mist," which is why they did not follow it.' },
        { type: 'multi', skill: 'character', q: 'Choose TWO details that show how Mirela has CHANGED by the end of the fable.', options: ['She sings a melody that is nobody\'s but hers.', 'She sings her own song first every evening.', 'She practices until she can imitate every bird.', 'She laughs at her grandmother\'s question.', 'She loves the applause of the other birds.'], correct: 2, hint: 'Three of these details describe Mirela at the BEGINNING. Find the two that happen after the fog rolls in.', why: 'At the start Mirela only copies others. Singing her own melody in the fog, and then singing her own song first each evening, show that she has changed.' },
        { type: 'mc', skill: 'vocab', q: 'The lost birds "assumed it was one of their own flock." What does "assumed" mean?', options: ['Believed without checking', 'Shouted out in sudden fear', 'Forgot about it completely', 'Proved that it was true'], para: 5, hint: 'Could the birds see who was singing? How did they decide who it was?', why: 'The birds could not see through the fog, so they simply believed the singer was a lost robin. To assume is to believe something without checking.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence that shows the moment Mirela REALIZES what is wrong with her gift.', answer: 'Every voice she owned belonged to someone else.', hint: 'Look in the paragraph where Mirela\'s heart pounds. Which sentence tells what she suddenly understands?', why: 'In this sentence Mirela understands her problem: she has many voices, but none of them is truly hers.' },
        { type: 'mc', skill: 'theme', q: 'How does the grandmother\'s question, "but which of them is yours?", connect to the theme of the fable?', options: ['It hints that being yourself matters more than being impressive.', 'It shows that older birds no longer enjoy hearing music at all.', 'It warns Mirela that she must stop singing in the early mornings.', 'It proves that having a hundred voices is better than having one.'], para: 2, hint: 'The grandmother is troubled while everyone else cheers. What does she notice that the others do not?', why: 'The grandmother sees that Mirela has no voice of her own. Her question points to the lesson Mirela learns later in the fog.' },
        { type: 'mc', skill: 'summary', q: 'A reader began this summary: "Mirela the mockingbird only copies other birds. One foggy evening, her flock gets lost, and her borrowed songs cannot guide them." Which sentence best FINISHES the summary?', options: ['At last she sings her own song, and the flock follows it home.', 'Her grandmother listens from the nest, closes her eyes, and smiles.', 'She tries the robin\'s song, the cardinal\'s whistle, and the dove\'s coo.', 'Mockingbirds are the most talented singers of all the birds.'], hint: 'The summary already has the character and the problem. Which choice tells how the problem is finally solved?', why: 'A summary must tell how the problem is solved: Mirela\'s own song brings the flock home. The grandmother\'s smile is a small detail, the three songs are already covered, and the last choice is an opinion.' }
      ],
      talk: 'Tell a grown-up: What is the lesson of "The Borrowed Voice"? Then summarize the fable in three or four sentences.'
    }
  ]
};
