window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[5] = {
  strategy: {
    name: 'Clue Detective',
    icon: '🕵️',
    tagline: 'Text clues + what I know = a smart guess!',
    steps: [
      'Authors do not tell you everything. Some answers hide between the lines.',
      'Hunt for clues: what characters do, say, and feel, and the small details the author adds.',
      'Add what you already know about the world.',
      'Make a smart guess. Then check it: can you point to a clue that proves it?'
    ],
    example: {
      text: 'Nina grabbed her umbrella and pulled on her tall rubber boots.',
      q: 'What is the weather like?',
      a: 'It is probably rainy. The text never says "rain," but an umbrella and rubber boots are strong clues.'
    },
    practice: [
      {
        text: 'Jamal came inside and shook the white flakes off his hat. His nose was red, and he rubbed his hands together.',
        q: 'What is it like outside?',
        options: ['Cold and snowy', 'Hot and sunny', 'Warm and rainy'],
        why: 'White flakes on a hat are snow. A red nose and rubbing hands are what people do when they are cold.'
      },
      {
        text: 'Priya set her alarm for six. She laid out her team shirt, filled her water bottle, and tucked her shin guards into her bag. "Please don\'t rain tomorrow," she whispered.',
        q: 'What is Priya most likely getting ready for?',
        options: ['An outdoor game in the morning', 'A sleepover at a friend\'s house', 'A swimming lesson at the pool'],
        why: 'A team shirt and shin guards are clues for a game. The early alarm means morning, and worrying about rain means it is outside.'
      }
    ]
  },
  sessions: [
    {
      id: 'w5d1',
      title: 'The Case of the Missing Muffins',
      genre: 'fiction',
      sticker: { emoji: '🐕', name: 'Muffin Thief' },
      vocab: [
        { word: 'announced', def: 'said something in a loud, clear way', ex: 'The coach announced the winner of the race.' },
        { word: 'crouched', def: 'bent down low with knees bent', ex: 'The cat crouched behind the couch.' },
        { word: 'squashed', def: 'pressed flat', ex: 'I sat on my sandwich by mistake and squashed it.' },
        { word: 'trail', def: 'a line of marks or bits left behind', ex: 'The snail left a shiny trail on the path.' }
      ],
      purpose: 'Read to find out where the missing muffins went and how two friends solve the case.',
      stops: [
        { after: 2, q: 'What is the problem so far?', options: ['Some of the muffins are gone.', 'Grandma Rosa\'s tomato plants are dry.', 'Maya spilled her drink of water.'], say: 'Yes! Half the muffins are missing, and nobody knows who took them.' },
        { after: 4, q: 'Why do the friends walk on tiptoe?', options: ['They want to sneak up on the thief.', 'The hall floor is cold on their feet.', 'Grandma Rosa is taking a nap.'], say: 'Right! Detectives stay quiet so the muffin thief will not hear them coming.' }
      ],
      passage: [
        'Grandma Rosa set a plate of six blueberry muffins on the kitchen table to cool. "Nobody touches these until after dinner," she said, wagging a finger. Then she went outside to water her tomato plants.',
        'Twenty minutes later, Luis and Maya came in from the yard for a drink of water. Luis stopped and stared at the plate. He counted twice to be sure. Only three muffins were left.',
        '"It wasn\'t me," Maya said quickly. "I was with you the whole time."',
        'Luis pulled a small notebook out of his back pocket. "Then we have a mystery to solve," he announced. He crouched down and studied the floor. A trail of crumbs led away from the table, across the kitchen, and down the hall. Here and there, a squashed blueberry marked the way.',
        'The two friends followed the trail on tiptoe, past the coat closet and the bathroom. It ended at the laundry room door, which was open just a crack. From inside came a soft thumping sound, like a tail hitting the floor.',
        'Maya pushed the door open. There sat Biscuit on a pile of clean towels. He would not look at them. His whiskers were sticky and purple, and a paper muffin cup was stuck to one ear.',
        '"Case closed," said Luis, snapping his notebook shut.',
        'Just then, Grandma Rosa walked in. She looked at the dog, then at the towels, and let out a long sigh. "I suppose I should have put that plate up high," she said. Biscuit thumped his tail again and licked his nose. Maya tried hard not to giggle.'
      ],
      questions: [
        { type: 'mc', skill: 'inference', q: 'Who most likely took the missing muffins?', options: ['Biscuit', 'Maya', 'Grandma Rosa', 'Luis'], para: 5, hint: 'The story never names the muffin thief. Look at the clues in the laundry room. Who has muffin mess on them?', why: 'Biscuit had sticky purple whiskers and a muffin cup stuck to his ear. Those clues point to him.' },
        { type: 'mc', skill: 'inference', q: 'What is the most likely reason Biscuit "would not look at" Luis and Maya?', options: ['He knew he had done something wrong.', 'He was too sleepy to lift his head.', 'He was afraid of the laundry room.', 'He wanted to play a hiding game.'], para: 5, hint: 'Think about how people act when they are caught doing something they should not do.', why: 'Biscuit had just eaten muffins he was not allowed to have. Looking away is a clue that he felt guilty.' },
        { type: 'mc', skill: 'detail', q: 'What did Luis find when he studied the kitchen floor?', options: ['A trail of crumbs', 'A paper muffin cup', 'A puddle of water', 'A clean towel'], para: 3, hint: 'Find the part where Luis crouches down. Read the sentence that comes next.', why: 'The text says, "A trail of crumbs led away from the table, across the kitchen, and down the hall."' },
        { type: 'mc', skill: 'vocab', q: 'Luis "crouched down and studied the floor." What does "studied" mean in this sentence?', options: ['Looked at very carefully', 'Cleaned with a mop', 'Read about in a book', 'Walked across quietly'], para: 3, hint: 'Luis is acting like a detective. What does a detective do when hunting for clues?', why: 'Luis was searching the floor for clues, and he found the crumbs. Here, "studied" means looked at very carefully.' },
        { type: 'evidence', skill: 'inference', q: 'Tap the sentence that gives a clue that a dog was hiding in the laundry room BEFORE Maya opened the door.', answer: 'From inside came a soft thumping sound, like a tail hitting the floor.', hint: 'The friends could not see into the room yet. Which of their other senses gave them a clue?', why: 'A thumping sound "like a tail hitting the floor" hints that a dog is behind the door.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the mystery in order.', items: ['Grandma Rosa put the muffins out to cool.', 'Luis saw that three muffins were gone.', 'The friends followed a trail of crumbs.', 'They found Biscuit on the towels.'], hint: 'Think about what a detective does: first comes the problem, then the clues, then the answer.', why: 'The muffins were set out, three went missing, the friends followed the crumbs, and then they found Biscuit.' }
      ],
      talk: 'Tell a grown-up: Which clues proved who took the muffins? Which clue was the strongest, and why?'
    },
    {
      id: 'w5d2',
      title: 'Stories in the Snow',
      genre: 'info',
      sticker: { emoji: '🐾', name: 'Snow Tracks' },
      vocab: [
        { word: 'wander', def: 'to move around with no clear path', ex: 'We like to wander through the market on Saturdays.' },
        { word: 'startled', def: 'surprised or scared all of a sudden', ex: 'A loud clap of thunder startled the baby.' },
        { word: 'recorded', def: 'kept a copy of what happened', ex: 'Dad recorded my first piano concert.' },
        { word: 'patience', def: 'being able to wait calmly', ex: 'Fishing takes a lot of patience.' }
      ],
      purpose: 'Read to find out what a careful tracker can learn from prints in the snow.',
      stops: [
        { after: 1, q: 'What is this part mostly about?', options: ['The shapes of different animal tracks', 'How deep the snow gets in winter', 'Why deer run faster than rabbits'], say: 'Yes! The shape of a print helps you tell which animal made it.' },
        { after: 3, q: 'What can squirrel tracks that end at a tree show?', options: ['The squirrel climbed up the tree.', 'The squirrel was chased by a bird.', 'The squirrel slept under the snow.'], say: 'Right! Where tracks begin and end tells you where the animal went.' }
      ],
      passage: [
        'After a fresh snowfall, the woods look empty and still. But the snow is full of stories. Animals leave tracks wherever they go, and a careful reader can figure out what happened. Each print is like a word, and a line of prints is like a sentence.',
        'Start with the shape. A deer leaves two pointed marks that look like an upside-down heart. A rabbit leaves two long prints from its back feet and two small prints from its front feet. Strangely, the long back prints land in front. That is because a rabbit swings its strong back legs past its front paws with every hop.',
        'Next, look at the space between the tracks. Prints that are close together mean the animal was walking slowly. Prints that are far apart mean it was running. A sudden change from close prints to distant ones may mean that something startled the animal.',
        'Tracks can also show where an animal went. Squirrel tracks often begin and end at the bottom of a tree. Bird tracks may simply stop in the middle of an open field. The bird did not disappear. It flew away!',
        'Sometimes two sets of tracks tell one story. Imagine small mouse prints that wander across the snow. Fox prints follow the same path. Then the mouse tracks vanish into a tiny hole beside a log, and the fox tracks circle the log before heading off. No one saw it happen, but the snow recorded everything.',
        'Trackers call this "reading sign." You do not need special tools. You only need sharp eyes, patience, and good questions. The next time it snows, step outside and see what stories are waiting.'
      ],
      questions: [
        { type: 'mc', skill: 'inference', q: 'A tracker finds deer prints that are very far apart. What can the reader conclude?', options: ['The deer was running.', 'The deer was walking slowly.', 'The deer was very young.', 'The deer was eating.'], para: 2, hint: 'Use the rule about the space between tracks. Then apply it to the deer.', why: 'The text says prints that are far apart mean the animal was running.' },
        { type: 'mc', skill: 'inference', q: 'In the story of the mouse and the fox, what most likely happened to the mouse?', options: ['It escaped into its hole.', 'It was caught by the fox.', 'It climbed over the log.', 'It followed the fox home.'], para: 4, hint: 'Where do the mouse tracks end? What does the fox do after that? Put the two clues together.', why: 'The mouse tracks vanish into a hole, and the fox only circles the log and leaves. The fox could not reach the mouse.' },
        { type: 'mc', skill: 'vocab', q: 'The mouse tracks "vanish into a tiny hole." What does "vanish" mean?', options: ['Go out of sight', 'Grow much bigger', 'Turn in a circle', 'Freeze solid'], para: 4, hint: 'Picture tracks that lead to a hole and then stop. What happened to them?', why: 'The tracks cannot be seen past the hole. "Vanish" means to go out of sight.' },
        { type: 'mc', skill: 'mainidea', q: 'What is this passage mostly about?', options: ['Tracks in snow show what animals did.', 'Rabbits hop in a very strange way.', 'Foxes are skilled at hunting mice.', 'Snow makes the woods look empty.'], hint: 'Which answer covers ALL the paragraphs, not just one of them?', why: 'Every paragraph explains how tracks reveal what animals did. The other choices are only small details.' },
        { type: 'mc', skill: 'detail', q: 'Why do a rabbit\'s long back prints land in front of its small front prints?', options: ['Its back legs swing past its front paws.', 'It hops backward through the snow.', 'Its front legs are longer than its back legs.', 'It drags its feet when it is tired.'], para: 1, hint: 'Find the word "Strangely" in the text. The sentence after it gives the reason.', why: 'The text says a rabbit "swings its strong back legs past its front paws with every hop."' },
        { type: 'evidence', skill: 'detail', q: 'Tap the sentence that explains why bird tracks might suddenly stop in the middle of a field.', answer: 'It flew away!', hint: 'Find the paragraph about where animals went. Read the part about birds all the way to the end.', why: 'The tracks stop because the bird left the ground: "It flew away!"' }
      ],
      talk: 'Tell a grown-up: If you saw big boot prints and small paw prints side by side in the snow, what could you infer?'
    },
    {
      id: 'w5d3',
      title: 'The Seat by the Window',
      genre: 'fiction',
      sticker: { emoji: '⚽', name: 'Goalie Gloves' },
      vocab: [
        { word: 'joined', def: 'became part of a group', ex: 'My cousin joined the swim team this year.' },
        { word: 'noticed', def: 'saw or became aware of something', ex: 'I noticed a tiny hole in my sock.' },
        { word: 'peeked', def: 'took a quick, secret look', ex: 'Sam peeked inside the gift bag.' },
        { word: 'lopsided', def: 'leaning to one side; not even', ex: 'Our snowman looked lopsided after the sun came out.' }
      ],
      purpose: 'Read to find out how a new boy\'s first day at school changes.',
      stops: [
        { after: 2, q: 'What do we know about Dev so far?', options: ['He is new and keeps to himself.', 'He is loud and loves to joke.', 'He has many friends in the class.'], say: 'Yes! Dev is new, and so far he stands alone and stays quiet.' },
        { after: 5, q: 'What did Dev draw as his favorite place?', options: ['Snowy mountains where he used to live', 'A beach with a striped umbrella', 'The soccer field at his new school'], say: 'Right! Dev drew the mountains and the little red house from his old home.' }
      ],
      passage: [
        'On Tuesday, a new boy named Dev joined Ms. Tanaka\'s class. He chose the seat by the window and kept his backpack on his lap all morning, even though every desk had a hook for it.',
        'At recess, the class raced to the soccer field. Dev stood by the fence with his hands in his pockets, looking down at his shoes. When the ball rolled toward him, he kicked it back perfectly, right to the center of the field. Then he looked down at his shoes again. Nobody else seemed to see how well he had kicked.',
        'Maya noticed. She remembered her own first day at this school, when her stomach had felt like it was full of jumping frogs.',
        'During art, Ms. Tanaka asked everyone to draw a favorite place. Maya drew the beach, with a striped umbrella and a lopsided sandcastle. Then she peeked at the paper next to hers. Dev had drawn tall mountains covered in snow, with a tiny red house at the bottom. He was coloring the house slowly and carefully.',
        '"Is that where you used to live?" Maya asked.',
        'Dev nodded. His pencil stopped moving, and for a second he stared out the window.',
        '"It\'s beautiful," Maya said. "We don\'t have any mountains here. But we do have a soccer game at lunch, and my team needs somebody who can really kick."',
        'For a moment, Dev said nothing. He looked at the red house, and then at Maya. Then the corners of his mouth turned up. He slid his backpack off his lap and hung it on the hook.',
        '"I play goalie, too," he said.'
      ],
      questions: [
        { type: 'mc', skill: 'inference', q: 'What is the most likely reason Dev kept his backpack on his lap all morning?', options: ['He felt nervous in a new place.', 'The hook on his desk was broken.', 'He was hiding a snack inside it.', 'Ms. Tanaka told him to hold it.'], para: 0, hint: 'It is Dev\'s first day. How do people sometimes act when everything around them is new?', why: 'Dev is new, stands alone, and looks at his shoes. Holding on to his backpack is another clue that he feels nervous.' },
        { type: 'mc', skill: 'character', q: 'Maya remembers her own first day at the school. What does this show about her?', options: ['She understands how Dev feels.', 'She wishes she could move away.', 'She is still afraid of school.', 'She does not like new students.'], para: 2, hint: 'Why would the author tell us about Maya\'s memory right after she notices Dev?', why: 'Maya remembers feeling nervous herself, so she can understand what Dev is going through.' },
        { type: 'mc', skill: 'vocab', q: 'Maya\'s stomach once "felt like it was full of jumping frogs." What does this mean?', options: ['She felt very nervous.', 'She had eaten too much.', 'She was extremely hungry.', 'She was excited about frogs.'], para: 2, hint: 'It was Maya\'s first day at a new school. What feeling makes your stomach seem to flip and jump?', why: 'There were no real frogs. The author is describing the jumpy feeling of being nervous.' },
        { type: 'mc', skill: 'inference', q: 'What can the reader conclude about Dev and soccer?', options: ['He is a skilled player.', 'He has never played before.', 'He thinks the game is boring.', 'He is afraid of the ball.'], para: 1, hint: 'Look at what Dev does when the ball rolls to him. Then read his last words in the story.', why: 'Dev kicked the ball back "perfectly" and says he plays goalie, too. Both clues show he is good at soccer.' },
        { type: 'evidence', skill: 'inference', q: 'At first, Dev holds his backpack on his lap. Tap the sentence that shows he finally feels comfortable enough to let it go.', answer: 'He slid his backpack off his lap and hung it on the hook.', hint: 'Look near the end of the story, after Maya invites Dev to play.', why: 'Hanging up the backpack shows that Dev is ready to stay and no longer feels so nervous.' },
        { type: 'mc', skill: 'inference', q: 'Why did Maya most likely tell Dev about the soccer game at lunch?', options: ['To invite him to join in', 'To show off her own team', 'To make him stop drawing', 'To prove the school is better'], para: 6, hint: 'Maya says her team "needs somebody who can really kick." Who did she just watch kick a ball?', why: 'Maya saw Dev kick perfectly at recess. Telling him her team needs a kicker is a friendly way to invite him.' }
      ],
      talk: 'Tell a grown-up: How did Dev feel at the start and at the end of the story? What clues told you?'
    },
    {
      id: 'w5d4',
      title: 'The Desert After Dark',
      genre: 'info',
      sticker: { emoji: '🦊', name: 'Big-Ear Fox' },
      vocab: [
        { word: 'burrows', def: 'holes or tunnels that animals dig to live in', ex: 'Rabbits sleep in burrows under the field.' },
        { word: 'surface', def: 'the top or outside part of something', ex: 'A leaf floated on the surface of the pond.' },
        { word: 'glide', def: 'to move smoothly and quietly', ex: 'Skaters glide across the ice.' },
        { word: 'shimmers', def: 'shines with a soft, wavy light', ex: 'The lake shimmers when the sun comes up.' }
      ],
      purpose: 'Read to find out what happens in the desert when the sun goes down.',
      stops: [
        { after: 0, q: 'How does the desert look at noon?', options: ['Hot, bright, and empty', 'Dark, cold, and quiet', 'Green and full of birds'], say: 'Yes! At noon the desert is so hot and still that it looks empty.' },
        { after: 2, q: 'Why do the animals come out after sunset?', options: ['The air has cooled down.', 'The moon warms up the sand.', 'The visitors have all gone home.'], say: 'Right! Once the sun sets, the air cools quickly and the animals get busy.' }
      ],
      passage: [
        'At noon, a desert can look like the emptiest place on Earth. The sand shimmers in the heat, the sky is a blinding white, and almost nothing moves. A visitor might decide that no animals live there at all. That visitor would be wrong.',
        'Most desert animals are simply waiting. During the day, the ground can become hot enough to burn bare feet. So kangaroo rats rest in cool burrows under the sand. Foxes nap in shady dens. Snakes slide beneath rocks. Underground, the air stays far cooler than it is on the surface.',
        'Then the sun sets, and the desert wakes up. The air cools quickly. Kangaroo rats hop out to gather seeds. Owls glide overhead without a sound, listening for tiny footsteps. Bats swoop after moths. Scorpions creep out from under stones to hunt insects. Within an hour, the quiet sand is as busy as a city street.',
        'Many of these night animals have special bodies. The fennec fox of the Sahara has huge ears. They help it hear insects moving under the sand, and they also let extra body heat escape. Owls have large eyes that collect even faint light, like the dim glow of the stars. Kangaroo rats almost never need to drink, because they get the water they need from the seeds they eat.',
        'By sunrise, the busy night is over. The animals slip back into their hiding places one by one. All that remains is a web of tiny tracks in the sand. Soon the wind will smooth them away, and the desert will look empty once more. It is not empty, of course. Its secret neighbors are only sleeping.'
      ],
      questions: [
        { type: 'mc', skill: 'inference', q: 'Why would a visitor at noon most likely believe that no animals live in the desert?', options: ['The animals are hiding from the heat.', 'The animals have all moved away.', 'The animals are too small to see.', 'The animals look just like sand.'], para: 1, hint: 'Where are the animals at noon? Put the first two paragraphs together.', why: 'During the hot day, the animals rest in burrows, dens, and under rocks, so a visitor would not see them.' },
        { type: 'mc', skill: 'inference', q: 'Owls glide "without a sound." What can the reader conclude about why this is helpful?', options: ['Quiet flight lets them surprise their prey.', 'Quiet flight keeps their feathers cool.', 'They do not want to wake the foxes.', 'They are too tired to flap loudly.'], para: 2, hint: 'What are the owls listening for? What would happen if a small animal heard the owl coming?', why: 'The owls are hunting, "listening for tiny footsteps." A silent hunter can catch an animal before it runs away.' },
        { type: 'mc', skill: 'vocab', q: 'Owls have large eyes that "collect even faint light." What does "faint" mean?', options: ['Very weak', 'Very bright', 'Colorful', 'Warm'], para: 3, hint: 'Owls hunt at night. How much light is there after the sun goes down?', why: 'At night there is only a little light. "Faint" means very weak or hard to notice.' },
        { type: 'multi', skill: 'detail', q: 'What do a fennec fox\'s huge ears do? Choose TWO answers.', options: ['Help it hear insects under the sand', 'Let extra body heat escape', 'Help it dig deep burrows', 'Collect light in the dark', 'Store water from seeds'], correct: 2, para: 3, hint: 'Find the sentences about the fennec fox. The text names two jobs for its ears.', why: 'The text says the ears "help it hear insects moving under the sand" and "let extra body heat escape."' },
        { type: 'mc', skill: 'mainidea', q: 'What is the main idea of this passage?', options: ['Many desert animals hide by day and come out at night.', 'The fennec fox has huge ears that help it stay cool.', 'At noon, a desert is the emptiest place on Earth.', 'Owls and bats fly out after dark to hunt for food.'], hint: 'Think about the whole passage, from noon to sunrise. Which answer covers all of it?', why: 'The passage follows desert animals from their daytime hiding places to their busy night. The other choices are details or are untrue.' },
        { type: 'mc', skill: 'inference', q: 'Based on the last paragraph, what could a person learn from looking at the sand at sunrise?', options: ['Animals were active during the night.', 'A rainstorm is coming later that day.', 'The desert has no water left at all.', 'The wind blows only during the night.'], para: 4, hint: 'What is left behind in the sand? What does that clue tell you?', why: 'The "web of tiny tracks" is a clue that many animals moved around while it was dark.' }
      ],
      talk: 'Tell a grown-up: The text never says "the desert is dangerous at noon." What clues let you infer it?'
    },
    {
      id: 'w5d5',
      boss: true,
      title: 'The Secret in the Shed',
      genre: 'fiction',
      sticker: { emoji: '🐱', name: 'Shed Kittens' },
      vocab: [
        { word: 'mumbled', def: 'spoke quietly in an unclear way', ex: 'He mumbled a sleepy "good morning."' },
        { word: 'investigate', def: 'to look for clues to find out the truth', ex: 'The police will investigate the strange noise.' },
        { word: 'creaked', def: 'made a long, squeaky sound', ex: 'The old stairs creaked under my feet.' },
        { word: 'crept', def: 'moved slowly and quietly', ex: 'The kitten crept toward the toy mouse.' }
      ],
      purpose: 'Read to find out what Theo has been hiding from his family all week.',
      stops: [
        { after: 2, q: 'What is the mystery so far?', options: ['Theo is acting odd, and things are missing.', 'Mom cannot find her keys at breakfast.', 'Maya forgot to do the wash this week.'], say: 'Yes! Theo is up to something, and Maya does not know what yet.' },
        { after: 5, q: 'What do we know about the shed so far?', options: ['Something is asleep inside the crate.', 'Theo is fixing the creaky old door.', 'Theo keeps his fishing gear there.'], say: 'Right! Theo says "You\'ll wake them," so something in the crate is sleeping.' }
      ],
      passage: [
        'All week, Theo had been acting strangely. On Monday, a can of tuna went missing from the pantry. On Wednesday, Maya saw him tiptoe across the backyard with a bowl of water, walking so slowly that not a drop spilled. On Thursday, his favorite blue blanket was no longer on his bed.',
        '"Have you seen your blanket?" Mom asked at breakfast.',
        'Theo\'s ears turned pink. "Maybe it\'s in the wash," he mumbled, and he stuffed a whole pancake into his mouth so he could not answer anything else.',
        'Maya decided to investigate. After school on Friday, she waited by the kitchen window until Theo slipped outside. He looked over both shoulders, then hurried to the old garden shed. Maya counted to twenty and followed.',
        'The shed door creaked. Inside, it smelled like dust and fish. Theo was kneeling beside a wooden crate in the corner. He spun around and held a finger to his lips.',
        '"Shh! You\'ll wake them," he whispered.',
        'Maya crept closer. In the crate, on a nest made from a blue blanket, lay a thin gray cat. Three tiny kittens were curled against her side, no bigger than Maya\'s hand. Their eyes were still shut tight.',
        '"I found her on Monday," Theo said quietly. "She was so hungry. I thought if I told anybody, they would make her leave."',
        'Maya watched the mother cat lick a kitten\'s head. She thought about how carefully her little brother had carried that bowl of water.',
        '"We have to tell Mom and Dad," she said. Theo\'s shoulders drooped. "But I\'ll help you explain," Maya added. "Nobody who sees how well you\'ve cared for them could say no."',
        'Theo took a deep breath and slipped his hand into hers. Together they walked back toward the house.'
      ],
      questions: [
        { type: 'mc', skill: 'inference', q: 'What is the most likely reason Theo\'s ears turned pink at breakfast?', options: ['He was hiding the truth about his blanket.', 'He was angry at his mother for asking.', 'The pancakes on his plate were much too hot.', 'He had just come in from the cold outside.'], para: 2, hint: 'What did Mom just ask about? Where do we later learn the blanket really was?', why: 'Theo knew the blanket was in the shed, not in the wash. Pink ears are a clue that he felt uneasy about hiding the truth.' },
        { type: 'mc', skill: 'detail', q: 'Why did Theo stuff a whole pancake into his mouth?', options: ['So he could not answer more questions', 'Because he was late for the bus', 'Because he had skipped dinner', 'So Maya could not take it'], para: 2, hint: 'This answer is right in the text. Reread the sentence about the pancake to the very end.', why: 'The text says he did it "so he could not answer anything else."' },
        { type: 'multi', skill: 'inference', q: 'Which clues from early in the week hinted that Theo was caring for an animal? Choose TWO answers.', options: ['A can of tuna went missing.', 'He carried a bowl of water outside.', 'He ate a whole pancake.', 'His ears turned pink.', 'He looked over both shoulders.'], correct: 2, para: 0, hint: 'Reread the first paragraph. Which of Theo\'s actions connect to feeding or caring for a pet?', why: 'Tuna is food and water is drink. Both were for the hungry cat. The other choices show Theo had a secret, but they do not point to an animal.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the story in order.', items: ['A can of tuna went missing.', 'Theo carried water across the yard.', 'Maya followed Theo to the shed.', 'Maya saw the cat and her kittens.', 'Maya offered to help explain.'], hint: 'Use the days of the week in the story: Monday, Wednesday, and then Friday.', why: 'The tuna vanished Monday, the water was Wednesday, and on Friday Maya followed Theo, saw the cats, and offered to help.' },
        { type: 'mc', skill: 'vocab', q: 'Theo\'s shoulders "drooped" when Maya said they had to tell Mom and Dad. What does "drooped" mean?', options: ['Sank down', 'Shook hard', 'Rose up', 'Turned around'], para: 9, hint: 'Theo is worried the cats will have to leave. How does your body look when you feel let down?', why: 'When people feel sad or worried, their shoulders sink. "Drooped" means hung or bent down.' },
        { type: 'evidence', skill: 'inference', q: 'Tap the sentence that solves the mystery of where Theo\'s blue blanket went.', answer: 'In the crate, on a nest made from a blue blanket, lay a thin gray cat.', hint: 'Look in the part of the story inside the shed. Search for the color of the blanket.', why: 'The cat is lying on "a nest made from a blue blanket." Theo gave his blanket to the cats.' },
        { type: 'mc', skill: 'character', q: 'Which word best describes Theo in this story?', options: ['Caring', 'Lazy', 'Bossy', 'Careless'], hint: 'Think about what Theo did all week for the cat. What kind of person does those things?', why: 'Theo gave the cat food, water, and his favorite blanket. Those actions show he is caring.' },
        { type: 'mc', skill: 'inference', q: 'At the end, Theo slips his hand into Maya\'s. What does this action most likely show?', options: ['He trusts Maya to help him.', 'He wants to pull her back to the shed.', 'His hands are cold from being outside.', 'He is trying to hide behind her.'], para: 10, hint: 'Maya has just promised something. How does Theo feel about telling Mom and Dad now?', why: 'Maya promised to help explain. Taking her hand and walking to the house shows Theo trusts her and feels braver.' }
      ],
      talk: 'Tell a grown-up: Why did Theo keep the cats a secret? What clues showed he was taking good care of them?'
    }
  ]
};
