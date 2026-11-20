window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[2] = {
  strategy: {
    name: 'First, Next, Last',
    icon: '🔢',
    tagline: 'Stories and steps happen in order!',
    steps: [
      'Look for order words: first, next, then, before, after, and finally.',
      'Make a movie in your mind. What happens at the start, in the middle, and at the end?',
      'When a question asks what came BEFORE or AFTER, find that event in the text. Then read the sentences around it.',
      'Check it. Could the events really happen in that order?'
    ],
    example: {
      text: 'First, Ana put on her socks. Next, she put on her shoes. Then she ran outside.',
      q: 'What did Ana do right AFTER she put on her socks?',
      a: 'She put on her shoes. The order word "Next" tells us what came after the socks.'
    },
    practice: [
      { text: 'Sam woke up early. First, he fed his cat. Next, he brushed his teeth. Then he packed his bag and went to school.', q: 'What did Sam do right AFTER he fed his cat?', options: ['He brushed his teeth.', 'He packed his bag.', 'He went to school.'], why: 'The order word "Next" comes right after the part about the cat. It tells us Sam brushed his teeth.' },
      { text: 'Nell wanted to paint. Before she opened the paint, she put on an old shirt. After she painted a red boat, she washed her brush. Last, she hung up her picture.', q: 'What did Nell do FIRST?', options: ['She put on an old shirt.', 'She opened the paint.', 'She painted a red boat.'], why: 'The word "Before" tells us the shirt came ahead of the paint. So putting on the old shirt was first.' }
    ]
  },
  sessions: [
    {
      id: 'w2d1',
      purpose: "Read to find out how Theo gets his wobbly tooth to come out.",
      stops: [
        { after: 2, q: "What is Theo's problem so far?", options: ["His tooth will not come out.","His tooth hurts when he eats.","He lost his tooth in the grass."], say: "Yes! Theo has tried two things, but the tooth is still stuck." }
      ],
      title: "Theo's Wobbly Tooth",
      genre: 'fiction',
      sticker: { emoji: '😁', name: 'Wobbly Tooth' },
      vocab: [
        { word: 'wobbly', def: 'shaky; moving from side to side', ex: 'The baby deer stood on wobbly legs.' },
        { word: 'budge', def: 'to move from its place, even a little bit', ex: 'I pushed the heavy box, but it would not budge.' },
        { word: 'gap', def: 'an empty space between two things', ex: 'The cat slipped through a gap in the fence.' }
      ],
      passage: [
        'Theo had a wobbly tooth. It wiggled when he talked, and it wiggled when he ate. But no matter what he did, it would not come out.',
        'First, Theo tried to push the tooth with his tongue. The tooth just wobbled. Next, he bit into a crisp apple. The tooth still did not budge.',
        '"Try not to think about it," said Maya. So Theo went outside to play with Luis and Biscuit.',
        'Theo threw a ball, and Biscuit ran to fetch it. Then Biscuit jumped up and gave Theo a big, wet lick on the chin. Theo laughed so hard that something small fell out of his mouth.',
        '"My tooth!" he shouted. He picked it up from the grass and held it high for everyone to see.',
        'That night, Theo put the tooth under his pillow. In the morning, he found a shiny coin in its place. He ran to show Maya the new gap in his smile.'
      ],
      questions: [
        { type: 'mc', skill: 'sequence', q: 'What did Theo try FIRST to get his tooth out?', options: ['He pushed it with his tongue.', 'He bit into a crisp apple.', 'He played ball with Biscuit.', 'He put it under his pillow.'], para: 1, hint: 'Find the order word "First" in the story. Read that sentence.', why: 'The text says, "First, Theo tried to push the tooth with his tongue."' },
        { type: 'mc', skill: 'detail', q: 'WHO told Theo not to think about his tooth?', options: ['Maya', 'Luis', 'Grandma Rosa', 'Ms. Tanaka'], para: 2, hint: 'Find the words "Try not to think about it." Who said them?', why: 'The text says, "Try not to think about it," said Maya.' },
        { type: 'mc', skill: 'vocab', q: 'After Theo bit the apple, the tooth "still did not budge." What does "budge" mean?', options: ['To move even a bit', 'To hurt a great deal', 'To turn bright white', 'To grow much bigger'], para: 1, hint: 'Theo wants the tooth to come out. Did pushing it and biting the apple work?', why: 'The tooth wobbled, but it stayed right where it was. "Budge" means to move from its place.' },
        { type: 'mc', skill: 'sequence', q: 'What happened right AFTER Biscuit licked Theo on the chin?', options: ['Theo laughed very hard.', 'Theo bit into an apple.', 'Theo threw a ball.', 'Theo found a coin.'], para: 3, hint: 'Find the big, wet lick in the story. Read the very next sentence.', why: 'Right after the lick, the text says, "Theo laughed so hard that something small fell out of his mouth."' },
        { type: 'order', skill: 'sequence', q: 'Put the story in order.', items: ['Theo pushed the tooth with his tongue.', 'Theo bit into an apple.', 'Biscuit licked Theo on the chin.', 'The tooth fell out.', 'Theo found a shiny coin.'], hint: 'Use the order words to help you: First, Next, Then, That night, In the morning.', why: 'Theo tried his tongue, then the apple. Later Biscuit licked him, the tooth fell out, and he found a coin the next morning.' }
      ],
      talk: 'Tell a grown-up: What did Theo try first? What did he try next? What made the tooth come out at last?'
    },
    {
      id: 'w2d2',
      purpose: "Read to find out the steps for growing your own bean plant.",
      stops: [
        { after: 4, q: "What is this part mostly about?", options: ["Getting a seed planted in a pot","Picking beans from a garden","Choosing the best kind of seed"], say: "Right! So far, every step has been about getting the seed planted." }
      ],
      title: 'How to Plant a Bean Seed',
      genre: 'howto',
      sticker: { emoji: '🌱', name: 'Bean Sprout' },
      vocab: [
        { word: 'gently', def: 'in a soft and careful way', ex: 'Pet the kitten gently.' },
        { word: 'damp', def: 'a little bit wet', ex: 'The grass was damp in the morning.' },
        { word: 'sprout', def: 'a new baby plant that is just starting to grow', ex: 'A green sprout came up in the garden.' }
      ],
      passage: [
        'Would you like to grow your own bean plant? It is easy and fun. You will need a bean seed, a small pot, some soil, and water.',
        'First, fill the pot with soil. Stop when the soil is almost at the top.',
        'Next, poke a hole in the soil with your finger. Push your finger in up to the first knuckle.',
        'Then drop the seed into the hole. Cover it gently with soil.',
        'After that, give the seed a little water. The soil should be damp, but not muddy. Set the pot by a sunny window.',
        'Now you must wait. Check the soil each day and add water when it feels dry. In about a week, a tiny green sprout will pop up. Soon it will grow leaves and reach for the sun.',
        'Finally, when the plant is tall, you can move it to a garden outside. One day, you may even pick your own beans!'
      ],
      questions: [
        { type: 'mc', skill: 'sequence', q: 'What is the FIRST step in planting a bean seed?', options: ['Fill the pot with soil.', 'Drop the seed into the hole.', 'Give the seed some water.', 'Set the pot by a window.'], para: 1, hint: 'Look for the order word "First." What does it tell you to do?', why: 'The text says, "First, fill the pot with soil."' },
        { type: 'mc', skill: 'detail', q: 'WHAT do you use to poke a hole in the soil?', options: ['Your finger', 'A small spoon', 'A stick', 'The seed'], para: 2, hint: 'Find the step that begins with "Next." Read that whole sentence.', why: 'The text says, "poke a hole in the soil with your finger."' },
        { type: 'mc', skill: 'sequence', q: 'What should you do right AFTER you drop the seed into the hole?', options: ['Cover it with soil.', 'Fill the pot with soil.', 'Move it to a garden.', 'Poke a hole.'], para: 3, hint: 'Find the sentence about dropping the seed. Read the sentence that comes right after it.', why: 'After "drop the seed into the hole," the text says, "Cover it gently with soil."' },
        { type: 'mc', skill: 'vocab', q: 'The soil should be "damp, but not muddy." What does "damp" mean?', options: ['A little bit wet', 'Very hot', 'Hard like a rock', 'Full of seeds'], para: 4, hint: 'You give the seed "a little water." How would the soil feel then?', why: 'A little water makes soil a little wet, not muddy. "Damp" means a little bit wet.' },
        { type: 'order', skill: 'sequence', q: 'Put the steps in order.', items: ['Fill the pot with soil.', 'Poke a hole with your finger.', 'Drop in the seed and cover it.', 'Give the seed a little water.', 'A green sprout pops up.'], hint: 'Follow the order words: First, Next, Then, After that.', why: 'You fill the pot, poke a hole, plant and cover the seed, and water it. The sprout comes up about a week later.' }
      ],
      talk: 'Tell a grown-up how to plant a bean seed. Use the words first, next, then, and finally.'
    },
    {
      id: 'w2d3',
      purpose: "Read to find out how baby sea turtles get from their nest to the sea.",
      stops: [
        { after: 1, q: "What do we know about the eggs so far?", options: ["They lie hidden under warm sand.","The mother sits on them all day.","They float on top of the waves."], say: "Yes! The mother goes back to the sea, and the eggs stay hidden under the warm sand." }
      ],
      title: "A Sea Turtle's First Trip",
      genre: 'info',
      sticker: { emoji: '🐢', name: 'Tiny Turtle' },
      vocab: [
        { word: 'flippers', def: 'wide, flat arms or legs that help an animal swim', ex: 'A seal claps its flippers.' },
        { word: 'hatch', def: 'to break out of an egg', ex: 'We watched a baby chick hatch.' },
        { word: 'hurry', def: 'to move or go very fast', ex: 'We had to hurry to catch the bus.' }
      ],
      passage: [
        'On a warm night, a mother sea turtle crawls out of the ocean. She digs a deep hole in the sand with her back flippers. Then she lays about one hundred eggs. She covers them with sand and goes back to the sea.',
        'The eggs stay hidden under the warm sand for about two months. Then, one night, the eggs begin to hatch. The baby turtles are called hatchlings. Each one is small enough to fit in your hand.',
        'First, the hatchlings dig up through the sand together. Next, they wait until the sand feels cool. Cool sand tells them it is night, when it is safer to come out.',
        'After that, the hatchlings race to the water. They head toward the brightest light, which is the sky over the ocean. Crabs and birds may try to catch them, so they must hurry.',
        'Finally, the little turtles reach the waves. They swim and swim out to the deep sea. Years later, some of the females will come back to the same beach to lay eggs of their own.'
      ],
      questions: [
        { type: 'mc', skill: 'sequence', q: 'What does the mother turtle do right AFTER she lays her eggs?', options: ['She covers them with sand.', 'She digs a deep hole.', 'She waits for them to hatch.', 'She races to the brightest light.'], para: 0, hint: 'Find the sentence about laying eggs in the first paragraph. What comes next?', why: 'After she lays the eggs, the text says, "She covers them with sand and goes back to the sea."' },
        { type: 'mc', skill: 'detail', q: 'WHY do the hatchlings wait until the sand feels cool?', options: ['It is safer to come out at night.', 'Cool sand is much softer to dig in.', 'They are too sleepy to move.', 'Their mother told them to wait.'], para: 2, hint: 'Read the paragraph that begins with "First." What does cool sand tell the hatchlings?', why: 'The text says, "Cool sand tells them it is night, when it is safer to come out."' },
        { type: 'mc', skill: 'vocab', q: 'One night, "the eggs begin to hatch." What does "hatch" mean?', options: ['To break out of an egg', 'To swim in the sea', 'To hide in the sand', 'To grow a hard shell'], para: 1, hint: 'Read the next sentence. What comes out of the eggs?', why: 'Baby turtles come out of the eggs. To "hatch" means to break out of an egg.' },
        { type: 'mc', skill: 'sequence', q: 'What do the hatchlings do FIRST after they hatch?', options: ['They dig up through the sand.', 'They race to the water.', 'They swim out to the deep sea.', 'They lay eggs on the beach.'], para: 2, hint: 'Look for the order word "First" in the third paragraph.', why: 'The text says, "First, the hatchlings dig up through the sand together."' },
        { type: 'order', skill: 'sequence', q: 'Put these events in order.', items: ['The mother turtle lays her eggs.', 'The eggs hatch under the sand.', 'The hatchlings dig to the top.', 'The hatchlings race to the water.', 'The turtles swim out to sea.'], hint: 'Start at the top of the text. Follow the order words First, Next, After that, and Finally.', why: 'The eggs are laid and then hatch. The hatchlings dig up, race to the water, and swim out to sea.' }
      ],
      talk: "Tell a grown-up about a baby sea turtle's trip from the egg to the sea. What happens first, next, and last?"
    },
    {
      id: 'w2d4',
      purpose: "Read to find out how Luis does when he is the pancake cook.",
      stops: [
        { after: 2, q: "What is Luis doing in this part?", options: ["Mixing the pancake batter","Eating a stack of pancakes","Washing the big yellow bowl"], say: "Yes! Luis is the cook, and he is mixing everything in the bowl." }
      ],
      title: 'Pancakes with Grandma Rosa',
      genre: 'fiction',
      sticker: { emoji: '🥞', name: 'Flip-Flop Pancake' },
      vocab: [
        { word: 'stir', def: 'to mix by moving a spoon around and around', ex: 'Stir the soup so it does not burn.' },
        { word: 'batter', def: 'a wet mix that is cooked to make pancakes or cake', ex: 'We poured the cake batter into a pan.' },
        { word: 'stack', def: 'a neat pile of things', ex: 'Dad carried a stack of books.' }
      ],
      passage: [
        'On Sunday morning, Luis woke up to a happy smell. Grandma Rosa was in the kitchen with a big yellow bowl. "Today you are the cook," she said. "I am just the helper."',
        'First, Luis cracked two eggs into the bowl. A bit of shell fell in, and he fished it out with a spoon. Next, he poured in the milk. Then he added the flour and began to stir.',
        'Whoosh! A cloud of flour puffed up and landed on his nose. Biscuit sneezed under the table.',
        'After the batter was smooth, Grandma Rosa heated the pan. Luis poured in a small circle of batter. When bubbles popped on top, he flipped the pancake. It did a wobbly turn and landed half on the pan and half on the stove.',
        '"The first pancake is always for practice," said Grandma Rosa with a wink.',
        'Luis tried again. This time the pancake landed flat. Soon he had a tall stack. Finally, they sat down to eat. Luis thought they were the best pancakes he had ever tasted.'
      ],
      questions: [
        { type: 'mc', skill: 'sequence', q: 'What did Luis do right BEFORE he added the flour?', options: ['He poured in the milk.', 'He cracked two eggs.', 'He began to stir.', 'He flipped a pancake.'], para: 1, hint: 'Find the word "flour" in the second paragraph. Read the sentence just before it.', why: 'The text says, "Next, he poured in the milk. Then he added the flour."' },
        { type: 'mc', skill: 'sequence', q: 'What happened right AFTER Luis began to stir?', options: ['Flour puffed up onto his nose.', 'He cracked two eggs.', 'Grandma Rosa ate a pancake.', 'He sat down to eat.'], para: 2, hint: 'Find the word "stir." Then read what happens in the next paragraph.', why: 'Right after he began to stir, "A cloud of flour puffed up and landed on his nose."' },
        { type: 'mc', skill: 'detail', q: 'HOW did Luis know it was time to flip the pancake?', options: ['Bubbles popped on top.', 'Grandma Rosa rang a bell.', 'The pan began to smoke.', 'Biscuit started to bark.'], para: 3, hint: 'Find the word "flipped." What happened just before that?', why: 'The text says, "When bubbles popped on top, he flipped the pancake."' },
        { type: 'mc', skill: 'vocab', q: '"Soon he had a tall stack." What is a "stack"?', options: ['A neat pile', 'A very hot pan', 'A big mess', 'A kind of spoon'], para: 5, hint: 'Luis kept making pancakes. Picture them on his plate. What would be tall?', why: 'Luis made many pancakes and piled them up. A "stack" is a neat pile.' },
        { type: 'order', skill: 'sequence', q: 'Put the story in order.', items: ['Luis cracked two eggs.', 'Luis added milk and flour.', 'The first pancake landed on the stove.', 'Luis made a tall stack.', 'Luis and Grandma Rosa sat down to eat.'], hint: 'Look for First, Next, Then, Soon, and Finally in the story.', why: 'Luis mixed eggs, milk, and flour. His first flip went wrong, but then he made a stack and they ate.' }
      ],
      talk: 'Tell a grown-up how Luis made pancakes. What went wrong? What happened at the end?'
    },
    {
      id: 'w2d5',
      purpose: "Read to find out how a tiny egg turns into a butterfly.",
      stops: [
        { after: 2, q: "What do we know about the caterpillar so far?", options: ["It eats a lot and grows fast.","It sleeps inside the egg all day.","It can already fly a little."], say: "Yes! The hungry caterpillar eats and eats, so it grows quickly." }
      ],
      boss: true,
      title: 'From Egg to Butterfly',
      genre: 'info',
      sticker: { emoji: '🦋', name: 'Bright Wings' },
      vocab: [
        { word: 'sheds', def: 'lets old skin, fur, or hair fall off', ex: 'Our dog sheds hair on the couch.' },
        { word: 'crumpled', def: 'bent and full of wrinkles', ex: 'I found a crumpled paper in my backpack.' },
        { word: 'flutters', def: 'flaps or moves quickly and lightly', ex: 'The flag flutters in the wind.' }
      ],
      passage: [
        'A butterfly does not start its life with wings. It goes through four big changes before it can fly.',
        'First, a mother butterfly lays a tiny egg on a leaf. The egg is about as small as the head of a pin.',
        'Next, a caterpillar hatches from the egg. The caterpillar is very hungry. It munches on leaves all day long. It grows so fast that its skin gets too tight. So it sheds its old skin and keeps on growing.',
        'Then the caterpillar hangs upside down from a twig. It sheds its skin one last time. Now it has a hard case around its body. This case is called a chrysalis. From the outside, the chrysalis looks still and quiet. But inside, the caterpillar is slowly changing.',
        'Finally, after a week or two, the chrysalis splits open. A butterfly crawls out! Its wings are wet and crumpled at first. The butterfly must rest and let its wings dry.',
        'At last, the butterfly opens its bright wings and flutters away to find sweet flowers. One day, it may lay eggs of its own.'
      ],
      questions: [
        { type: 'mc', skill: 'detail', q: 'WHERE does the mother butterfly lay her egg?', options: ['On a leaf', 'On a twig', 'In a flower', 'Under the dirt'], para: 1, hint: 'The question word is WHERE. Read the second paragraph again.', why: 'The text says she "lays a tiny egg on a leaf."' },
        { type: 'mc', skill: 'detail', q: 'WHY does the growing caterpillar shed its skin?', options: ['Its skin gets too tight.', 'Its skin gets too wet.', 'It wants to hide from birds.', 'It is cold at night.'], para: 2, hint: 'Read the paragraph about the hungry caterpillar. What happens when it grows fast?', why: 'The text says, "It grows so fast that its skin gets too tight. So it sheds its old skin."' },
        { type: 'mc', skill: 'sequence', q: 'What happens right AFTER the caterpillar hangs upside down from a twig?', options: ['It becomes a chrysalis.', 'It hatches from an egg.', 'It flies to a flower.', 'It eats leaves all day.'], para: 3, hint: 'Find the word "twig." Keep reading that paragraph to see what happens next.', why: 'After it hangs from a twig, it sheds its skin and has a hard case called a chrysalis.' },
        { type: 'mc', skill: 'sequence', q: 'What happens right BEFORE the butterfly crawls out?', options: ['The chrysalis splits open.', 'The wings dry in the air.', 'The caterpillar eats leaves.', 'The butterfly finds flowers.'], para: 4, hint: 'Find the sentence "A butterfly crawls out!" Read the sentence just before it.', why: 'The text says the chrysalis splits open. The very next sentence is "A butterfly crawls out!"' },
        { type: 'mc', skill: 'vocab', q: 'The new wings are "wet and crumpled at first." What does "crumpled" mean?', options: ['Wrinkled and bent', 'Bright and colorful', 'Big and strong', 'Smooth and flat'], para: 4, hint: 'The wings were folded up inside a small case. How would they look when they first come out?', why: 'Wings packed inside a tiny case come out bent and wrinkled. That is what "crumpled" means.' },
        { type: 'mc', skill: 'detail', q: 'WHAT must the butterfly do before it can fly away?', options: ['Rest and let its wings dry', 'Eat a big pile of leaves', 'Shed its skin once more', 'Lay a tiny egg on a leaf'], para: 4, hint: 'Read the paragraph that begins with "Finally." Look at the last sentence.', why: 'The text says, "The butterfly must rest and let its wings dry."' },
        { type: 'order', skill: 'sequence', q: 'Put the changes in order.', items: ['An egg is laid on a leaf.', 'A caterpillar hatches and eats.', 'The caterpillar becomes a chrysalis.', 'A butterfly crawls out.', 'The butterfly flies away.'], hint: 'Follow the order words: First, Next, Then, Finally, At last.', why: 'The order is egg, caterpillar, chrysalis, and butterfly. Then the butterfly dries its wings and flies away.' },
        { type: 'mc', skill: 'sequence', q: 'The author uses order words to show each change. Which order word begins the part where the butterfly comes OUT of the chrysalis?', options: ['Finally', 'First', 'Next', 'Then'], para: 4, hint: 'Find the sentence where the chrysalis splits open. What is the first word?', why: 'The text says, "Finally, after a week or two, the chrysalis splits open."' }
      ],
      talk: "Tell a grown-up the four big changes in a butterfly's life. Say them in order!"
    }
  ]
};
