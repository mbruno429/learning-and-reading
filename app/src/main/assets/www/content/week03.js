window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[3] = {
  strategy: {
    name: 'The Big Idea Umbrella',
    icon: '☂️',
    tagline: 'The main idea covers all the details!',
    steps: [
      'Ask yourself: What is this text MOSTLY about?',
      'Look at the title, the first sentence, and the last sentence. They often tell the big idea.',
      'Find the details. Details are small facts that tell more about the big idea.',
      'Check your umbrella. The main idea must cover ALL the details, not just one of them.'
    ],
    example: {
      text: 'Dogs can do many jobs. Some dogs help farmers move sheep. Some dogs help find lost people.',
      q: 'What is the main idea?',
      a: 'Dogs can do many jobs. The other two sentences are details. They give examples of the jobs.'
    },
    practice: [
      {
        text: 'Winter is a fun time of year. You can build a snowman. You can slide down a hill on a sled. You can drink hot cocoa by the fire.',
        q: 'What is the main idea?',
        options: ['Winter is a fun time of year.', 'You can build a snowman.', 'Hot cocoa is a sweet, warm drink.'],
        why: 'The first sentence is the umbrella. The snowman, the sled, and the cocoa are details that all fit under it.'
      },
      {
        text: 'A spider spins a sticky web to trap bugs. A frog shoots out its long tongue. An owl swoops down very quietly in the dark. Animals have many ways to catch food.',
        q: 'Which sentence tells the main idea?',
        options: ['Animals have many ways to catch food.', 'A spider spins a sticky web to trap bugs.', 'Owls are the best hunters of all.'],
        why: 'This time the big idea comes last. The spider, the frog, and the owl are details. Each one fits under the umbrella "ways to catch food."'
      }
    ]
  },
  sessions: [
    {
      id: 'w3d1',
      title: 'Busy Bees',
      genre: 'info',
      sticker: { emoji: '🐝', name: 'Busy Bee' },
      purpose: "Read to find out what goes on inside a busy beehive.",
      stops: [
        { after: 2, q: "What do we know about worker bees so far?", options: ["Some bring nectar, and some make honey.","They all stay inside the hive all day.","They sleep in the hive for most of the day."], say: "Yes! Some workers bring nectar home, and others turn it into honey." }
      ],
      vocab: [
        { word: 'strangers', def: 'people or animals you do not know', ex: 'Our dog barks at strangers who come to the door.' },
        { word: 'guard', def: 'to watch over something and keep it safe', ex: 'Two big dogs guard the farm at night.' },
        { word: 'special', def: 'important and not like the others', ex: 'Mom made a special cake for my birthday.' }
      ],
      passage: [
        'A beehive is a busy place. Thousands of honeybees live there, and every bee has a job to do.',
        'Some worker bees fly from flower to flower. They sip a sweet juice called nectar, one tiny drink at a time, and carry it back to the hive. A bee may visit many, many flowers in one day.',
        'Other workers stay inside the hive. They take the nectar and put it into tiny wax rooms called cells. Then they fan it with their wings. The fanning dries the nectar until it turns into thick, golden honey.',
        'Some bees are builders. They make new wax cells. Some are nurses. They feed the baby bees. Other bees guard the door of the hive and keep strangers out.',
        'The queen bee has a special job too. She lays all the eggs. On a summer day, she can lay more than one thousand eggs!',
        'No bee could run the hive alone. But when all the bees do their jobs, the hive has food, new bees, and a safe home. That is teamwork!'
      ],
      questions: [
        { type: 'mc', skill: 'mainidea', q: 'What is this passage MOSTLY about?', options: ['Every bee in a hive has a job.', 'The queen bee lays many eggs.', 'Bees like to visit flowers.', 'Honey is thick and golden.'], para: 0, hint: 'Use the umbrella test. Which answer covers the workers, the builders, the nurses, AND the queen?', why: 'The whole passage tells about the different jobs bees do. The first paragraph says it: "every bee has a job to do."' },
        { type: 'mc', skill: 'mainidea', q: 'Which detail from the passage tells more about the main idea?', options: ['Some bees feed the baby bees.', 'Thousands of bees live in a hive.', 'Nectar is a sweet juice.', 'The honey is thick and golden.'], para: 3, hint: 'The main idea is about bee JOBS. Which answer names a job that a bee does?', why: 'Feeding the baby bees is a job. It is a detail that supports the idea that every bee has a job.' },
        { type: 'mc', skill: 'detail', q: 'HOW do worker bees turn nectar into honey?', options: ['They fan it with their wings.', 'They mix it with water.', 'They leave it out in the sun.', 'They shake the wax cells.'], para: 2, hint: 'Read the paragraph about the workers inside the hive. What do they do to the nectar?', why: 'The text says, "they fan it with their wings. The fanning dries the nectar until it turns into thick, golden honey."' },
        { type: 'mc', skill: 'vocab', q: 'Worker bees "sip a sweet juice called nectar." What does "sip" mean?', options: ['To drink a little at a time', 'To spill on the ground', 'To smell from very far away', 'To hide in a safe place'], para: 1, hint: 'Nectar is a juice. What does a bee do with juice it finds in a flower?', why: 'Nectar is a juice, and a tiny bee can only drink a tiny bit. "Sip" means to drink a little at a time.' },
        { type: 'order', skill: 'sequence', q: 'Put the steps of making honey in order.', items: ['Bees sip nectar from flowers.', 'Bees carry the nectar to the hive.', 'Workers put the nectar into wax cells.', 'Workers fan the nectar with their wings.', 'The nectar turns into honey.'], hint: 'Read the second and third paragraphs again. Follow the nectar from the flower to the hive.', why: 'Nectar goes from the flower to the hive, into the wax cells, and is fanned until it becomes honey.' }
      ],
      talk: 'Tell a grown-up the main idea of "Busy Bees." Then name three jobs that bees do.'
    },
    {
      id: 'w3d2',
      title: 'Our Neighbor, the Moon',
      genre: 'info',
      sticker: { emoji: '🌙', name: 'Moon Boot' },
      purpose: "Read to find out what it is like on the moon.",
      stops: [
        { after: 1, q: "Why are the old footprints still on the moon?", options: ["No wind blows them away.","The ground there is hard like rock.","Astronauts go back to fix them."], say: "Right! With no wind on the moon, nothing sweeps the footprints away." }
      ],
      vocab: [
        { word: 'neighbor', def: 'someone who lives near you, or something that is close by', ex: 'Our neighbor waves to us over the fence.' },
        { word: 'bounces', def: 'hits something and springs back', ex: 'The ball bounces off the wall.' },
        { word: 'astronauts', def: 'people who travel into space', ex: 'The astronauts floated inside their spaceship.' }
      ],
      passage: [
        'Look up on a clear night, and you may see the moon. The moon is our closest neighbor in space. But it is a very different place from Earth.',
        'There is no air to breathe on the moon. There is no wind and no rain. Because there is no wind, footprints left by astronauts long ago are still there today.',
        'The moon has no light of its own. It shines because light from the sun bounces off it.',
        'The ground on the moon is gray and dusty. It is covered with big holes called craters. The craters were made long ago when space rocks crashed into the moon.',
        'You would feel much lighter on the moon. That is because the pull of the moon is weaker than the pull of Earth. Astronauts who walked there could take giant, bouncy steps.',
        'Days and nights are different too. A day on the moon is boiling hot, and a night is freezing cold.',
        'The moon may look close and friendly in the sky. But with no air, no wind, and no rain, it is nothing like home.'
      ],
      questions: [
        { type: 'mc', skill: 'mainidea', q: 'What is the main idea of this passage?', options: ['The moon is very different from Earth.', 'Astronauts left footprints on the moon.', 'The ground on the moon is dusty.', 'The sun is brighter than the moon.'], para: 0, hint: 'Reread the first paragraph and the last paragraph. What big idea do they both tell you?', why: 'The passage tells many ways the moon is not like Earth: no air, no wind or rain, a weaker pull, and boiling days with freezing nights. The first paragraph says it is "a very different place from Earth."' },
        { type: 'mc', skill: 'mainidea', q: 'Which would be the BEST new title for this passage?', options: ['A Place Not Like Home', 'How to Be an Astronaut', 'Why the Sun Is Hot', 'Rocks from Space'], hint: 'A good title fits the WHOLE passage, not just one paragraph.', why: 'The whole passage shows how the moon is "nothing like home." The other titles fit only a small part or are not in the text.' },
        { type: 'mc', skill: 'detail', q: 'WHY does the moon shine?', options: ['Light from the sun bounces off it.', 'It makes its own light.', 'Its craters are full of fire.', 'Astronauts left lamps there.'], para: 2, hint: 'Find the short paragraph about light. Read both sentences.', why: 'The text says, "It shines because light from the sun bounces off it."' },
        { type: 'mc', skill: 'vocab', q: 'The pull of the moon is "weaker" than the pull of Earth. What does "weaker" mean?', options: ['Not as strong', 'Much faster', 'Very bright', 'Just the same'], para: 4, hint: 'On the moon you feel lighter and can take giant steps. So is the pull holding you down strong or not?', why: 'You feel lighter because the moon does not pull you down as hard. "Weaker" means not as strong.' },
        { type: 'evidence', skill: 'detail', q: 'Tap the sentence that tells HOW the craters on the moon were made.', answer: 'The craters were made long ago when space rocks crashed into the moon.', para: 3, hint: 'Find the paragraph about the gray, dusty ground. Look for the word "craters."', why: 'This sentence explains that space rocks crashed into the moon and made the craters.' }
      ],
      talk: 'Tell a grown-up the main idea of the passage. Then tell three ways the moon is different from Earth.'
    },
    {
      id: 'w3d3',
      title: 'The Lost and Found Box',
      genre: 'fiction',
      sticker: { emoji: '🧦', name: 'Lonely Sock' },
      purpose: "Read to find out what happens to a box that is much too full.",
      stops: [
        { after: 1, q: "What is the problem so far?", options: ["The lost and found box is too full.","Maya cannot find her lost mittens.","The class lost its favorite puzzle."], say: "Yes! The box is stuffed with lost things, and Maya wants to help." }
      ],
      vocab: [
        { word: 'solve', def: 'to find the answer to a problem', ex: 'Can you solve this riddle?' },
        { word: 'patch', def: 'a small piece of cloth sewn onto something', ex: 'My jacket has a star patch on the sleeve.' },
        { word: 'empty', def: 'with nothing inside', ex: 'My cup is empty, so may I have more milk?' }
      ],
      passage: [
        'The lost and found box in Ms. Tanaka\'s classroom was so full that the lid would not close. There were mittens, hats, lunch boxes, and one very lonely green sock with no partner.',
        '"Somebody needs to solve this," said Ms. Tanaka. Maya\'s hand shot up. She loved a good puzzle.',
        'Maya pulled out a blue hat first. It had a patch shaped like a soccer ball. "Who loves soccer more than anyone?" she asked herself. She carried the hat to Luis. "My lucky hat!" he cheered.',
        'Next, she found a lunch box that smelled like oranges. "Dev eats an orange every single day," Maya said. She was right again.',
        'After that, she held up a pair of tiny red mittens. They were much too small for anyone in the class. Maya thought hard. Then she walked them down the hall to her little brother, Theo. He had been missing them all week.',
        'By the end of the day, the box was almost empty. Only the green sock was left. Maya looked around the room. Then she looked down at her own feet. She had on one green sock and one yellow sock!',
        'The whole class laughed, and Maya laughed the loudest. "Case closed," said Ms. Tanaka.'
      ],
      questions: [
        { type: 'mc', skill: 'mainidea', q: 'What is this story MOSTLY about?', options: ['Maya uses clues to return lost things.', 'Luis gets a new soccer hat.', 'Ms. Tanaka cleans her classroom.', 'Theo loses his red mittens.'], hint: 'Think about what Maya does again and again in the story. Which answer covers the hat, the lunch box, the mittens, AND the sock?', why: 'In each part, Maya looks at a clue and finds the owner. The other answers are small parts or did not happen.' },
        { type: 'mc', skill: 'mainidea', q: 'Which would be the BEST new title for this story?', options: ['Maya Solves the Case', 'The Orange Lunch Box', 'Soccer After School', 'A Cold Winter Day'], hint: 'A good title fits the WHOLE story, from the start to the end.', why: 'The whole story is about Maya solving the puzzle of the lost things. Ms. Tanaka even says, "Case closed."' },
        { type: 'mc', skill: 'detail', q: 'HOW did Maya know the blue hat belonged to Luis?', options: ['It had a soccer ball patch.', 'It had his name sewn inside.', 'It smelled like oranges.', 'Ms. Tanaka told her.'], para: 2, hint: 'Reread the paragraph about the blue hat. What clue did Maya see on it?', why: 'The hat "had a patch shaped like a soccer ball," and Maya knew Luis loves soccer.' },
        { type: 'mc', skill: 'vocab', q: 'The box held "one very lonely green sock." What does "lonely" mean?', options: ['All alone', 'Very dirty', 'Too small', 'Brand new'], para: 0, hint: 'Socks most often come in twos. How many green socks were in the box?', why: 'There was only one green sock, with no partner. "Lonely" means sad from being all alone.' },
        { type: 'order', skill: 'sequence', q: 'Put the story in order.', items: ['Maya gave Luis his hat.', 'Maya gave Dev his lunch box.', 'Maya took the mittens to Theo.', 'Maya found her own green sock.'], hint: 'Look for the order words first, Next, After that, and By the end of the day.', why: 'Maya returned the hat first, then the lunch box, then the mittens. Last, she found out the sock was hers.' }
      ],
      talk: 'Tell a grown-up what this story is mostly about in ONE sentence. Then tell your favorite clue.'
    },
    {
      id: 'w3d4',
      title: 'How Penguins Stay Warm',
      genre: 'info',
      sticker: { emoji: '🐧', name: 'Cozy Penguin' },
      purpose: "Read to find out how emperor penguins live in icy, windy weather.",
      stops: [
        { after: 1, q: "What does blubber do for a penguin?", options: ["It keeps the penguin warm.","It helps the penguin swim fast.","It makes the feathers shiny."], say: "Right! Blubber is fat that works like a warm blanket." }
      ],
      vocab: [
        { word: 'clever', def: 'smart; good at solving problems', ex: 'The clever fox found a way into the barn.' },
        { word: 'layer', def: 'a sheet of something that lies over or under something else', ex: 'A layer of snow covered the car.' },
        { word: 'cozy', def: 'warm and comfortable', ex: 'I feel cozy under my thick blanket.' }
      ],
      passage: [
        'Emperor penguins live in one of the coldest places on Earth. Icy winds blow, and the ground is covered with snow. How do they stay warm? Penguins have several clever ways.',
        'First, a penguin has a thick layer of fat under its skin. This fat is called blubber. It works like a warm blanket that the penguin wears all the time.',
        'A penguin also has special feathers. The feathers are short and packed very close together. They overlap like the tiles on a roof. The outer feathers keep out wind and water. Soft, fluffy feathers underneath hold in heat.',
        'Penguins use teamwork too. When a storm comes, hundreds of penguins crowd together in a tight group called a huddle. The penguins in the middle are the warmest. But they do not stay there. The birds take turns, so each one gets time in the cozy center.',
        'Even the feet of a penguin help. A penguin can rock back on its heels so that less of its feet touch the ice.',
        'Fat, feathers, friends, and feet all help a penguin beat the cold.'
      ],
      questions: [
        { type: 'mc', skill: 'mainidea', q: 'What is the main idea of this passage?', options: ['Penguins have many ways to stay warm.', 'Penguins are very good swimmers.', 'A huddle is a group of penguins.', 'Blubber is a layer of fat.'], para: 0, hint: 'Look at the title and the question in the first paragraph. Which answer covers the fat, the feathers, the huddle, AND the feet?', why: 'Each paragraph gives one more way penguins keep warm. The first paragraph says, "Penguins have several clever ways."' },
        { type: 'mc', skill: 'mainidea', q: 'Which detail from the passage tells one WAY that penguins stay warm?', options: ['Fluffy feathers hold in heat.', 'Icy winds blow.', 'The ground is covered with snow.', 'A storm comes.'], para: 2, hint: 'Three of these details tell about the COLD. Only one tells how a penguin fights the cold.', why: 'Feathers that hold in heat help a penguin stay warm. The other details tell why the place is so cold.' },
        { type: 'mc', skill: 'detail', q: 'WHY do the penguins in a huddle take turns?', options: ['So each one gets time in the warm middle', 'So they can look for fish under the thick ice', 'So the chicks can play', 'So they can watch for storms'], para: 3, hint: 'Read the paragraph about teamwork. Look at the last sentence.', why: 'The text says, "The birds take turns, so each one gets time in the cozy center."' },
        { type: 'mc', skill: 'vocab', q: 'The feathers "overlap like the tiles on a roof." What does "overlap" mean?', options: ['To lie partly on top of each other', 'To fall off one by one in the cold wind', 'To change color in winter', 'To grow very long'], para: 2, hint: 'Picture the tiles on a roof. How do they sit so that no rain gets in?', why: 'Roof tiles lie partly on top of each other so there are no gaps. Penguin feathers do the same thing.' },
        { type: 'evidence', skill: 'mainidea', q: 'Tap the sentence that names ALL FOUR things that help a penguin stay warm.', answer: 'Fat, feathers, friends, and feet all help a penguin beat the cold.', para: 5, hint: 'The last sentence of a passage often sums up the main idea.', why: 'The last sentence lists all four: fat, feathers, friends, and feet. It sums up the main idea.' }
      ],
      talk: 'Tell a grown-up the main idea of the passage. Then tell the four things that help a penguin stay warm.'
    },
    {
      id: 'w3d5',
      boss: true,
      title: 'The Bucket Line',
      genre: 'fiction',
      sticker: { emoji: '🌻', name: 'Sunny Sunflower' },
      purpose: "Read to find out what a class does when its garden is in trouble.",
      stops: [
        { after: 2, q: "What is the problem so far?", options: ["The garden is dry and may die.","The class has too many plants.","Maya lost the garden hose."], say: "Right! The plants need water soon. What will the class do?" }
      ],
      vocab: [
        { word: 'soil', def: 'the dirt that plants grow in', ex: 'We dug a hole in the soil and planted a seed.' },
        { word: 'traveled', def: 'went from one place to another', ex: 'We traveled to the lake by bus.' },
        { word: 'thirsty', def: 'needing a drink', ex: 'I was thirsty after the long race.' }
      ],
      passage: [
        'On Monday morning, the children in Ms. Tanaka\'s class ran out to visit the school garden. They stopped and stared. The bean plants hung their heads, and the tall sunflowers drooped. The soil was as dry as a cracker.',
        '"It did not rain all week, and the hose is broken," said Ms. Tanaka. "I am afraid the garden may not make it."',
        'Maya did not like that answer. "The garden is too big for one person to water," she said. "But there are twenty of us."',
        'First, the class lined up from the sink in the hallway all the way to the garden gate. Next, Luis filled a small bucket and passed it to Dev. Dev passed it to Nora, and Nora passed it on. Hand to hand, the bucket traveled down the line until Maya poured it on the thirsty beans. Then the empty bucket came back for more.',
        'At first the work seemed too slow, because one small bucket could not do much. But the class kept going, bucket after bucket. Arms got tired, and shoes got wet. Nobody quit.',
        'By lunch, every row had a long drink. The next morning, the beans stood tall and the sunflowers lifted their faces to the sun.',
        'Ms. Tanaka smiled at her class. "One bucket is small," she said. "But many hands made it enough."'
      ],
      questions: [
        { type: 'mc', skill: 'mainidea', q: 'What is this story MOSTLY about?', options: ['A class works together to save its garden.', 'A teacher fixes a broken hose and waters the beans.', 'Maya grows the tallest sunflower.', 'Rain falls on the school garden.'], hint: 'Use the umbrella test. Which answer covers the problem, the plan, AND the ending?', why: 'The garden is dying, the class makes a bucket line, and the plants are saved. The whole story is about the class working together.' },
        { type: 'mc', skill: 'detail', q: 'WHY was the garden so dry?', options: ['No rain fell, and the hose broke.', 'The class forgot to water it.', 'The sun was too hot for plants.', 'Someone left the gate open.'], para: 1, hint: 'Read what Ms. Tanaka says in the second paragraph.', why: 'Ms. Tanaka says, "It did not rain all week, and the hose is broken."' },
        { type: 'mc', skill: 'sequence', q: 'What did the class do FIRST to save the garden?', options: ['They made a line from the sink to the gate.', 'They poured water on the thirsty bean plants.', 'They passed back the empty bucket.', 'They ate lunch outside.'], para: 3, hint: 'Find the order word "First" in the story.', why: 'The text says, "First, the class lined up from the sink in the hallway all the way to the garden gate."' },
        { type: 'mc', skill: 'vocab', q: 'In the dry garden, "the tall sunflowers drooped." What does "drooped" mean?', options: ['Hung down in a weak way', 'Grew very fast', 'Turned bright yellow', 'Danced in the wind'], para: 0, hint: 'The garden had no water. Look at what the bean plants did in the same sentence.', why: 'The plants were dry and weak, and the beans "hung their heads." "Drooped" means hung down in a weak way.' },
        { type: 'mc', skill: 'mainidea', q: 'Which detail BEST supports the main idea of the story?', options: ['The bucket went hand to hand down the line.', 'The soil in the garden was as dry as a cracker.', 'The hose was broken.', 'Shoes got wet.'], para: 3, hint: 'The main idea is about working together. Which detail shows many children helping at once?', why: 'Passing the bucket from hand to hand shows the whole class working as a team.' },
        { type: 'evidence', skill: 'detail', q: 'Tap the sentence that tells WHO poured the water on the beans.', answer: 'Hand to hand, the bucket traveled down the line until Maya poured it on the thirsty beans.', para: 3, hint: 'Look in the paragraph about the bucket line. Find the words "poured" and "beans."', why: 'This sentence says the bucket went down the line "until Maya poured it on the thirsty beans."' },
        { type: 'order', skill: 'sequence', q: 'Put the story in order.', items: ['The class found the dry garden.', 'The class lined up.', 'Buckets went down the line.', 'Every row got a long drink.', 'The plants stood tall again.'], hint: 'Look for the time words: On Monday morning, First, Next, By lunch, The next morning.', why: 'The class found the problem, lined up, passed buckets until lunch, and saw healthy plants the next morning.' },
        { type: 'mc', skill: 'mainidea', q: 'Which sentence BEST tells the big idea of this story?', options: ['A big job gets done when everyone helps.', 'Gardens need rain every week to stay green.', 'Buckets work better than hoses.', 'Teachers always know what to do.'], para: 6, hint: 'Reread what Ms. Tanaka says at the very end. What does "many hands" mean?', why: 'Ms. Tanaka says, "One bucket is small. But many hands made it enough." A big job gets done when everyone helps.' }
      ],
      talk: 'Tell a grown-up what this story is mostly about. Then tell two details that show the class worked as a team.'
    }
  ]
};
