window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[1] = {
  strategy: {
    name: 'Detective Details',
    icon: '🔎',
    tagline: 'Good readers go back and look!',
    steps: [
      'Read the question. Find the question word: who, what, where, when, why, or how.',
      'Do not guess from memory. Go back to the text.',
      'Find the sentence that has the answer.',
      'Check it. Does your answer match what the text says?'
    ],
    example: {
      text: 'After lunch, Sam fed his fish, Bubbles.',
      q: 'WHEN did Sam feed his fish?',
      a: 'After lunch. The text tells us right at the start of the sentence.'
    },
    practice: [
      { text: 'Nina put her wet boots by the back door. Then she went inside to get warm.', q: 'WHERE did Nina put her wet boots?', options: ['By the back door', 'Under her bed', 'On the front steps'], why: 'The question word is WHERE. Go back and look. The first sentence says she put them "by the back door."' },
      { text: 'Ben wanted to ride his bike on Sunday. But the front tire was flat, so he walked to the park. His sister Kim rode her scooter.', q: 'WHY did Ben walk to the park?', options: ['His bike had a flat tire.', 'His sister took his bike.', 'He wanted to ride a scooter.'], why: 'Go back to the second sentence. It says the tire was flat, "so he walked." Kim and her scooter are in the text, but they are not the reason.' }
    ]
  },
  sessions: [
    {
      id: 'w1d1',
      title: 'The Shell on the Sand',
      purpose: 'Read to find out what Maya finds at the beach and what she does with it.',
      stops: [
        { after: 3, q: 'What did Maya find out about the shell?', options: ['It makes a soft sound.', 'A crab lives inside it.', 'It is too heavy to lift.'], say: 'Yes! Maya held the shell to her ear and heard a soft whoosh.' }
      ],
      genre: 'fiction',
      sticker: { emoji: '🐚', name: 'Whoosh Shell' },
      vocab: [
        { word: 'shore', def: 'the land along the edge of the sea', ex: 'We found a crab on the shore.' },
        { word: 'gleam', def: 'to shine softly', ex: 'The clean spoon began to gleam.' },
        { word: 'grinned', def: 'smiled a big smile', ex: 'Dad grinned when he saw the cake.' }
      ],
      passage: [
        'Maya and her little brother Theo went to the beach on Saturday morning. The sun was warm. The waves were small and slow.',
        'Maya walked along the shore with her red bucket. She looked for shells. Then she saw something gleam in the wet sand. It was a big pink shell with white stripes!',
        '"Theo, come look!" she called. Theo ran over. His feet went splash, splash in the water.',
        'Maya held the shell up to her ear. She could hear a soft whoosh. "It sounds like the sea is inside," she said.',
        'Theo wanted to listen too. Maya did not want to share at first. Then she saw his sad face. She gave him the shell. Theo grinned. "Whoosh!" he said. They took turns all the way home.'
      ],
      questions: [
        { type: 'mc', skill: 'detail', q: 'WHEN did Maya and Theo go to the beach?', options: ['On Saturday morning', 'On Sunday night', 'On Friday after school', 'On Monday at lunch'], para: 0, hint: 'The question word is WHEN. Look in the first paragraph for a day and a time.', why: 'The first sentence says they went "on Saturday morning."' },
        { type: 'mc', skill: 'detail', q: 'WHAT did Maya see in the wet sand?', options: ['A big pink shell', 'A little red bucket', 'A small green crab', 'A shiny gold coin'], para: 1, hint: 'Go back to the part where something gleams in the sand.', why: 'The text says, "It was a big pink shell with white stripes!"' },
        { type: 'mc', skill: 'vocab', q: 'Maya saw something gleam in the wet sand. What does "gleam" mean?', options: ['To shine softly', 'To hide away', 'To make a loud sound', 'To roll down a hill'], para: 1, hint: 'Think about a wet shell in the sun. What would catch your eye?', why: 'A wet shell in the warm sun would shine. "Gleam" means to shine softly.' },
        { type: 'mc', skill: 'detail', q: 'WHY did Maya give Theo the shell?', options: ['She saw his sad face.', 'Her mom told her to share.', 'She did not like the shell.', 'She found a much better one.'], para: 4, hint: 'Read the last paragraph again. What did Maya see just before she shared?', why: 'The text says, "Then she saw his sad face. She gave him the shell."' },
        { type: 'order', skill: 'sequence', q: 'Put the story in order. What happened first, next, and last?', items: ['Maya looked for shells.', 'Maya found a pink shell.', 'Maya heard a whoosh.', 'Maya gave Theo a turn.'], hint: 'Think about the start, the middle, and the end of the story.', why: 'Maya looked for shells, found one, listened to it, and then shared it with Theo.' }
      ],
      talk: 'Tell a grown-up: Who was in the story? Where were they? What did they find?'
    },
    {
      id: 'w1d2',
      title: 'Sea Otters',
      purpose: 'Read to find out how sea otters eat, sleep, and stay warm.',
      stops: [
        { after: 2, q: 'What do sea otters do after they dive for food?', options: ['Float on their backs', 'Sleep on the sand', 'Climb up on a big rock'], say: 'Right! They come back up and float on their backs to eat.' }
      ],
      genre: 'info',
      sticker: { emoji: '🌿', name: 'Kelp Blanket' },
      vocab: [
        { word: 'thick', def: 'packed close together; not thin', ex: 'I wore a thick coat in the snow.' },
        { word: 'dive', def: 'to go down under the water', ex: 'Ducks dive to find food.' },
        { word: 'drifting', def: 'floating away slowly', ex: 'The red balloon was drifting over the trees.' }
      ],
      passage: [
        'Sea otters are furry animals that live in the ocean. They spend almost all day in the cold water.',
        'A sea otter has very thick fur. The fur keeps it warm, like a cozy coat.',
        'Sea otters love to eat. They dive down to find clams and crabs. Then they float on their backs. An otter puts a rock on its belly. It hits the clam on the rock to crack it open.',
        'At night, sea otters need to sleep. They wrap themselves in long seaweed called kelp. The kelp keeps them from drifting away. Some otters even hold paws while they sleep!',
        'Sea otters are playful, smart, and very good at staying warm.'
      ],
      questions: [
        { type: 'mc', skill: 'detail', q: 'WHERE do sea otters live?', options: ['In the ocean', 'In a river', 'On a sandy beach', 'In a cold lake'], para: 0, hint: 'The question word is WHERE. The very first sentence can help you.', why: 'The first sentence says sea otters "live in the ocean."' },
        { type: 'mc', skill: 'detail', q: 'WHAT keeps a sea otter warm?', options: ['Its very thick fur', 'A wrap of long kelp', 'A thick layer of fat', 'The warm sunshine'], para: 1, hint: 'Look at the second paragraph. What is like a cozy coat?', why: 'The text says, "The fur keeps it warm, like a cozy coat."' },
        { type: 'mc', skill: 'detail', q: 'HOW does a sea otter crack open a clam?', options: ['It hits the clam on a rock.', 'It bites the clam in half.', 'It drops the clam from high up.', 'It steps on the clam.'], para: 2, hint: 'Find the part about eating. What does the otter put on its belly?', why: 'An otter puts a rock on its belly and "hits the clam on the rock to crack it open."' },
        { type: 'mc', skill: 'detail', q: 'WHY do sea otters wrap themselves in kelp at night?', options: ['To keep from drifting away', 'To stay warm in the cold water', 'To find more clams and crabs', 'To dry off their thick fur'], para: 3, hint: 'Read the paragraph about sleeping. What does the kelp do?', why: 'The text says, "The kelp keeps them from drifting away."' },
        { type: 'mc', skill: 'vocab', q: 'The kelp keeps otters from "drifting" away. What does "drifting" mean?', options: ['Floating away slowly', 'Swimming very fast', 'Diving down deep', 'Waking up early'], para: 3, hint: 'The otters are asleep on top of the water. How would the water move them?', why: 'A sleeping otter cannot swim. The water would slowly carry it away. That is drifting.' }
      ],
      talk: 'Tell a grown-up two cool facts you learned about sea otters.'
    },
    {
      id: 'w1d3',
      title: 'Biscuit and the Mud',
      purpose: 'Read to find out what happens when a dog meets a big puddle.',
      stops: [
        { after: 2, q: 'What is the problem so far?', options: ['Biscuit got mud everywhere.', 'Biscuit ran out of the yard.', 'Luis lost his new shoes.'], say: 'Yes! Biscuit jumped in the puddle, and now there is mud all over.' }
      ],
      genre: 'fiction',
      sticker: { emoji: '🐶', name: 'Muddy Biscuit' },
      vocab: [
        { word: 'puddle', def: 'a small pool of water on the ground', ex: 'I jumped over a puddle on the sidewalk.' },
        { word: 'scrubbed', def: 'rubbed hard to make clean', ex: 'Mom scrubbed the pan with a brush.' },
        { word: 'soaked', def: 'very, very wet', ex: 'My socks got soaked in the rain.' }
      ],
      passage: [
        'On Monday it rained all morning. After lunch, the rain stopped. Luis took his dog, Biscuit, out to the yard.',
        'Biscuit saw a big brown puddle by the fence. He wagged his tail. Then he jumped right in! Mud went everywhere. It got on his ears. It got on his nose. It even got on the new white shoes Luis had on.',
        '"Oh no, Biscuit!" said Luis. But Biscuit looked so happy that Luis had to laugh.',
        'Luis got the hose and a bottle of dog soap. He scrubbed Biscuit until the dog was clean and fluffy. Then Biscuit shook his wet fur. Now Luis was soaked too!',
        'Grandma Rosa peeked out the door. "Who needs a bath now?" she asked with a smile.'
      ],
      questions: [
        { type: 'mc', skill: 'detail', q: 'WHO is Biscuit?', options: ['The dog Luis has', 'The cat next door', 'A boy at school', 'The brother of Luis'], para: 0, hint: 'The question word is WHO. Look for the name Biscuit in the first paragraph.', why: 'The text says, "Luis took his dog, Biscuit, out to the yard."' },
        { type: 'mc', skill: 'detail', q: 'WHERE was the big brown puddle?', options: ['By the fence', 'Under a tree', 'In the house', 'On the street'], para: 1, hint: 'Find the word "puddle" in the text. Read that whole sentence.', why: 'The text says Biscuit saw the puddle "by the fence."' },
        { type: 'mc', skill: 'detail', q: 'WHAT did Luis use to clean Biscuit?', options: ['A hose and dog soap', 'A towel and a brush', 'A bucket of sand', 'A tub in the house'], para: 3, hint: 'Look at the paragraph where Luis scrubbed Biscuit. What did he get first?', why: 'The text says, "Luis got the hose and a bottle of dog soap."' },
        { type: 'mc', skill: 'vocab', q: 'Biscuit shook his wet fur. "Now Luis was soaked too!" What does "soaked" mean?', options: ['Very wet', 'Very tired', 'Very mad', 'Very cold'], para: 3, hint: 'What happens to you when a wet dog shakes right next to you?', why: 'Water flew off Biscuit and onto Luis. "Soaked" means very, very wet.' },
        { type: 'mc', skill: 'inference', q: 'WHY did Grandma Rosa ask, "Who needs a bath now?"', options: ['Luis was wet and messy too.', 'Biscuit was still muddy.', 'It was time for bed.', 'She wanted to wash the fence.'], para: 3, hint: 'Biscuit is clean now. Read what happened when he shook his fur. Who is Grandma teasing?', why: 'Biscuit was clean, but Luis got mud on his shoes and was soaked. Grandma was joking that Luis needs a bath.' }
      ],
      talk: 'Tell a grown-up: What made Luis laugh? Has a pet ever made a mess at your house?'
    },
    {
      id: 'w1d4',
      title: 'Life in a Tide Pool',
      purpose: 'Read to find out which animals live in a tide pool and how they stay safe.',
      stops: [
        { after: 2, q: 'What is this part mostly about?', options: ['Animals that live in tide pools', 'How the ocean makes big waves', 'Games to play at the beach'], say: 'Right! So far we met sea stars, crabs, fish, and sea anemones.' }
      ],
      genre: 'info',
      sticker: { emoji: '🌊', name: 'Tide Pool' },
      vocab: [
        { word: 'cling', def: 'to hold on tight', ex: 'Baby monkeys cling to their moms.' },
        { word: 'dart', def: 'to move very fast', ex: 'I saw a mouse dart under the bed.' },
        { word: 'cracks', def: 'thin openings in something hard', ex: 'Ants crawled out of the cracks in the wall.' }
      ],
      passage: [
        'A tide pool is a small pool of sea water. It is left behind in the rocks when the ocean pulls back.',
        'Many little animals live in tide pools. Sea stars cling to the rocks with their tiny tube feet. Crabs hide in the cracks. Small fish dart through the water.',
        'Sea anemones live there too. They look like flowers, but they are animals. An anemone waves its soft arms to catch bits of food.',
        'Life in a tide pool is not easy. The hot sun can dry up the pool. Big waves can crash in. So the animals hold on tight or hide.',
        'If you visit a tide pool, look with your eyes and step with care. The animals are small, and this is their home.'
      ],
      questions: [
        { type: 'mc', skill: 'detail', q: 'WHAT is a tide pool?', options: ['A small pool of sea water in the rocks', 'A swimming pool built near the beach', 'The deepest, darkest part of the ocean', 'A little river that runs to the sea'], para: 0, hint: 'The first paragraph tells you what a tide pool is.', why: 'The text says, "A tide pool is a small pool of sea water" left in the rocks.' },
        { type: 'mc', skill: 'detail', q: 'HOW do sea stars hold on to the rocks?', options: ['With tiny tube feet', 'With sharp claws', 'With long tails', 'With sticky sand'], para: 1, hint: 'Find the words "sea stars" in the text. Read that sentence.', why: 'The text says, "Sea stars cling to the rocks with their tiny tube feet."' },
        { type: 'mc', skill: 'detail', q: 'Sea anemones look like flowers. WHAT are they really?', options: ['Animals', 'Plants', 'Rocks', 'Shells'], para: 2, hint: 'Read the third paragraph. Look for the word "but."', why: 'The text says, "They look like flowers, but they are animals."' },
        { type: 'mc', skill: 'vocab', q: '"Small fish dart through the water." What does "dart" mean?', options: ['To move very fast', 'To fall asleep', 'To float in place', 'To look for a home'], para: 1, hint: 'Think about how small fish swim when they want to get away.', why: 'Small fish zip around quickly. "Dart" means to move very fast.' },
        { type: 'mc', skill: 'detail', q: 'WHY is life in a tide pool not easy?', options: ['The sun can dry the pool, and waves crash in.', 'There is nothing at all for the animals to eat.', 'The water is always dark and freezing cold.', 'Too many big fish swim in and take the food.'], para: 3, hint: 'Look at the paragraph that begins "Life in a tide pool is not easy."', why: 'The text says, "The hot sun can dry up the pool. Big waves can crash in."' }
      ],
      talk: 'Tell a grown-up: Which tide pool animal do you like best? What does it do?'
    },
    {
      id: 'w1d5',
      boss: true,
      title: 'The Sandcastle Contest',
      purpose: 'Read to find out what goes wrong at the contest and how the team fixes it.',
      stops: [
        { after: 1, q: 'What is this part mostly about?', options: ['How the team built their castle', 'How the contest got its name', 'Why Theo likes to find shells'], say: 'Yes! Each friend had a job, and the castle is taking shape.' }
      ],
      genre: 'fiction',
      sticker: { emoji: '🏰', name: 'Story Castle' },
      vocab: [
        { word: 'contest', def: 'a game or event that people try to win', ex: 'Our class had a spelling contest.' },
        { word: 'carved', def: 'cut a shape into something', ex: 'We carved a face in the pumpkin.' },
        { word: 'judge', def: 'a person who picks the winner', ex: 'The judge gave my pie first place.' }
      ],
      passage: [
        'Every summer, Sunny Shore has a sandcastle contest. This year, Maya, Theo, and Luis made a team. They got to the beach at nine o\'clock with shovels, buckets, and a big plan.',
        'First, they dug a wide circle. Next, Maya packed wet sand into buckets to make four tall towers. Luis carved windows with a spoon. Theo found shells and pressed them into the walls.',
        'At noon, a huge wave rushed up the beach. It knocked down one tower! Tears filled Theo\'s eyes.',
        '"We can fix it," said Luis. "Let\'s make it a broken tower, like in an old castle." Maya put a seaweed flag on top.',
        'Soon the judge walked by with her clipboard. She stopped and smiled. "A castle with a story," she said. She gave the team the blue ribbon for Most Creative.'
      ],
      questions: [
        { type: 'mc', skill: 'detail', q: 'WHEN did the team get to the beach?', options: ['At nine o\'clock', 'At noon', 'At three o\'clock', 'At sunset'], para: 0, hint: 'The question word is WHEN. Look for a time in the first paragraph.', why: 'The text says, "They got to the beach at nine o\'clock."' },
        { type: 'mc', skill: 'detail', q: 'WHO carved the windows?', options: ['Luis', 'Maya', 'Theo', 'The judge'], para: 1, hint: 'Find the word "windows" in the second paragraph. Whose name comes just before it?', why: 'The text says, "Luis carved windows with a spoon."' },
        { type: 'mc', skill: 'detail', q: 'WHAT did Theo press into the walls?', options: ['Shells', 'Spoons', 'Seaweed', 'Ribbons'], para: 1, hint: 'Look for the name Theo in the second paragraph.', why: 'The text says, "Theo found shells and pressed them into the walls."' },
        { type: 'mc', skill: 'detail', q: 'WHY did one tower fall down?', options: ['A huge wave knocked it down.', 'Luis carved too many windows.', 'Theo pressed shells into it.', 'The sand was too dry to hold.'], para: 2, hint: 'Read the paragraph that begins "At noon."', why: 'The text says, "a huge wave rushed up the beach. It knocked down one tower!"' },
        { type: 'order', skill: 'sequence', q: 'Put the story in order.', items: ['The team dug a wide circle.', 'Maya made four tall towers.', 'A wave knocked down a tower.', 'The team got a blue ribbon.'], hint: 'Look for the order words "First" and "Next." What came at the very end?', why: 'First they dug, next they built towers, then the wave came, and last they won the ribbon.' },
        { type: 'mc', skill: 'vocab', q: '"Luis carved windows with a spoon." What does "carved" mean?', options: ['Cut a shape into something', 'Painted with bright colors', 'Covered up with sand', 'Washed with water'], para: 1, hint: 'Think about what you could do to a sand wall with a spoon to make a window.', why: 'Luis used the spoon to cut window shapes into the sand. That is carving.' },
        { type: 'mc', skill: 'inference', q: 'HOW did Theo feel when the tower fell?', options: ['Sad', 'Sleepy', 'Proud', 'Hungry'], para: 2, hint: 'Look at what happened to Theo\'s eyes. What does that tell you?', why: 'The text says, "Tears filled Theo\'s eyes." Tears are a clue that he felt sad.' },
        { type: 'mc', skill: 'detail', q: 'WHAT prize did the team win?', options: ['A blue ribbon for Most Creative', 'A gold cup for Tallest Castle', 'A red ribbon for Fastest Team', 'A new set of buckets'], para: 4, hint: 'The answer is at the very end of the story.', why: 'The last sentence says the judge gave them "the blue ribbon for Most Creative."' }
      ],
      talk: 'Tell a grown-up: What went wrong for the team? How did they fix it?'
    }
  ]
};
