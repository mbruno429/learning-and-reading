window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[8] = {
  strategy: {
    name: 'Alike & Different',
    icon: '⚖️',
    tagline: 'Compare to find what is alike. Contrast to find what is different.',
    steps: [
      'Name the two things being compared: two animals, two characters, or even two whole texts.',
      'Hunt for signal words. "Both," "also," and "like" point to things that are alike. "But," "however," "unlike," and "in contrast" point to differences.',
      'Sort the details in your head into three piles: only the first, only the second, and BOTH.',
      'Use headings like signs on a trail. They tell you where each kind of information lives, so you can find it fast.'
    ],
    example: {
      text: 'Both bikes and scooters have two wheels. However, a bike has pedals, while a scooter is pushed along with one foot.',
      q: 'How are bikes and scooters ALIKE? How are they DIFFERENT?',
      a: 'Alike: both have two wheels (the signal word is "both"). Different: a bike has pedals, but a scooter is pushed with a foot (the signal word is "however").'
    },
    practice: [
      {
        text: 'Lena and her brother Omar both love recess. Lena heads straight for the swings. Omar, however, runs to the soccer field.',
        q: 'How are Lena and Omar ALIKE?',
        options: ['They both love recess.', 'They both play soccer.', 'They both go to the swings.'],
        why: 'The signal word "both" points to what is alike: they both love recess. "However" shows the difference, which is where each one plays.'
      },
      {
        text: 'A violin and a cello are both made of wood and played with a bow. A violin is small enough to rest under your chin. In contrast, a cello is so large that the player sits down and stands it on the floor. Unlike the violin, it makes deep, low sounds.',
        q: 'Which detail is true of ONLY the cello?',
        options: ['It makes deep, low sounds.', 'It is played with a bow.', 'It rests under the player\'s chin.'],
        why: 'Sort the details into piles. "Both" tells you each one is wooden and played with a bow. "Unlike the violin" shows that the deep, low sounds belong only to the cello.'
      }
    ]
  },
  sessions: [
    {
      id: 'w8d1',
      title: 'Frog or Toad?',
      genre: 'info',
      sticker: { emoji: '🐸', name: 'Leaping Frog' },
      purpose: 'Read to find out how you can tell a frog from a toad.',
      stops: [
        { after: 4, q: "What has the author done in the \"Skin\" and \"Legs and Movement\" sections so far?", options: ["Shown how frogs and toads are different","Shown how frogs and toads are the same","Explained how toads give people warts"], say: "Yes! So far, each section points out a way the two animals are different." },
        { after: 8, q: "What happens to tadpoles as they grow?", options: ["They grow legs and lose their tails.","They grow tails and lose their legs.","They turn into long strings of eggs."], say: "Right! Tadpoles grow legs, lose their tails, and climb onto land." }
      ],
      vocab: [
        { word: 'moist', def: 'a little bit wet', ex: 'The soil was still moist after the morning rain.' },
        { word: 'relatives', def: 'living things that belong to the same family', ex: 'Lions and house cats are relatives.' },
        { word: 'powerful', def: 'very strong', ex: 'A powerful wind knocked over the fence.' },
        { word: 'develop', def: 'to grow or change over time', ex: 'Puppies develop quickly during their first year.' }
      ],
      passage: [
        'Visit any pond or garden on a warm, rainy evening, and you may meet a small, wide-mouthed creature with bulging eyes. Is it a frog or a toad? Many people mix them up, and that is easy to understand, because the two animals are close relatives. If you know what to look for, however, you can tell them apart.',
        '## Skin',
        'Start with the skin. A frog has smooth, moist skin that often looks shiny, as if the animal had just climbed out of the water. A toad, in contrast, has dry, bumpy skin. Some people believe that touching a toad will give you warts, but that is only a myth. The bumps are simply part of the toad\'s skin.',
        '## Legs and Movement',
        'Next, watch how the animal moves. Frogs have long, powerful back legs that let them leap great distances and swim quickly. Many frogs also have webbed back feet, which work like swim fins. Toads have shorter legs. Instead of leaping, a toad usually takes small hops or even walks.',
        '## Where They Live',
        'Because a frog\'s skin must stay damp, most frogs live in or near ponds, streams, and marshes. A toad\'s thicker skin holds water better, so toads can wander much farther from water. You might find one resting under a porch or in a shady flower bed, far from the nearest pond.',
        '## Eggs and Young',
        'Both animals begin life as eggs laid in water, yet even the eggs offer a clue. Frogs usually lay their eggs in jellylike clumps, while toads lay theirs in long strings that look like beaded necklaces. A single female may lay hundreds or even thousands of eggs at once. Either way, the eggs hatch into swimming tadpoles. As the tadpoles grow, they develop legs, lose their tails, and finally climb onto land.',
        '## What They Share',
        'Despite these differences, frogs and toads are alike in important ways. Both are amphibians, which means they spend part of their lives in water and part on land. Both also catch insects with quick, sticky tongues, which makes them welcome helpers in any garden. So the next time something small hops across your path, look closely at its skin and its legs. You will know exactly how to solve the mystery.'
      ],
      questions: [
        { type: 'mc', skill: 'features', q: 'Under which heading would you look to find out how a toad gets from place to place?', options: ['Legs and Movement', 'Skin', 'Eggs and Young', 'What They Share'], para: 4, hint: 'Headings are like signs. Which heading matches the idea of traveling or moving?', why: 'The section "Legs and Movement" explains that a toad "usually takes small hops or even walks."' },
        { type: 'mc', skill: 'compare', q: 'How is a frog\'s skin different from a toad\'s skin?', options: ['A frog\'s skin is smooth and moist, but a toad\'s is dry and bumpy.', 'A frog\'s skin is thick and dry, but a toad\'s skin is thin and shiny.', 'A frog\'s skin is covered in bumps, but a toad\'s is smooth.', 'A frog\'s skin can cause warts, but a toad\'s skin cannot.'], para: 2, hint: 'Find the section about skin. The signal words "in contrast" show where the difference is explained.', why: 'The text says a frog has "smooth, moist skin" and a toad, "in contrast, has dry, bumpy skin."' },
        { type: 'multi', skill: 'compare', q: 'Choose TWO ways that frogs and toads are ALIKE.', options: ['Both hatch from eggs laid in water.', 'Both catch insects with sticky tongues.', 'Both leap great distances.', 'Both must live beside a pond.', 'Both lay their eggs in long strings.'], correct: 2, hint: 'Look for the signal word "both" in the last two sections.', why: 'The text says "Both animals begin life as eggs laid in water" and "Both also catch insects with quick, sticky tongues." The other choices are true of only one animal.' },
        { type: 'mc', skill: 'vocab', q: 'The text says the idea that toads give people warts "is only a myth." What is a myth?', options: ['A belief that is not true', 'A kind of bump on the skin', 'A fact proved by scientists', 'A warning that keeps people safe'], para: 2, hint: 'Read the next sentence. Do the bumps really have anything to do with warts?', why: 'The text explains that the bumps are "simply part of the toad\'s skin," so the wart idea is false. A myth is a belief that is not true.' },
        { type: 'mc', skill: 'cause', q: 'Why can toads live farther from water than frogs can?', options: ['Their thicker skin holds water better.', 'Their shorter legs are made for long walks.', 'They never need water to lay their eggs.', 'They eat insects found only in dry places.'], para: 6, hint: 'Look in the section "Where They Live." Find the word "so" and read what comes just before it.', why: 'The text says, "A toad\'s thicker skin holds water better, so toads can wander much farther from water."' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence that explains what the word "amphibians" means.', answer: 'Both are amphibians, which means they spend part of their lives in water and part on land.', hint: 'Find the word "amphibians" in the last section. Authors often explain a hard word right after the words "which means."', why: 'This sentence defines amphibians as animals that "spend part of their lives in water and part on land."' },
        { type: 'mc', skill: 'features', q: 'The last section has the heading "What They Share." What does this heading tell you the section will be about?', options: ['Ways that frogs and toads are alike', 'Foods that frogs and toads give each other', 'Ways to tell a frog from a toad', 'Places where frogs and toads like to hide'], para: 10, hint: 'Think about the word "share." When two animals share something, do they both have it, or does only one?', why: 'To share something is to have it in common. The section says both animals are amphibians and both catch insects, so the heading points to ways they are alike.' }
      ],
      talk: 'Tell a grown-up: Name two ways frogs and toads are alike and two ways they are different. Which signal words helped you?'
    },
    {
      id: 'w8d2',
      title: 'The Creek Boat Race',
      genre: 'fiction',
      sticker: { emoji: '⛵', name: 'Lucky Duck Boat' },
      purpose: 'Read to find out what two very different builders discover on race day.',
      stops: [
        { after: 2, q: "What is this part of the story mostly about?", options: ["Two friends get ready for a boat race.","A class learns why some boats float.","Two friends argue about a backpack."], say: "Yes! Maya and Luis each build a boat for the class race, in their own ways." },
        { after: 4, q: "What surprise changed the race?", options: ["A fallen branch blocked the channel.","A big wave tipped both boats over.","The Arrow began to spin in circles."], say: "Right! Nobody expected a branch to be lying across the creek." }
      ],
      vocab: [
        { word: 'sketches', def: 'quick, simple drawings', ex: 'The artist made sketches of the bridge before painting it.' },
        { word: 'wobbled', def: 'moved in a shaky way from side to side', ex: 'The baby deer wobbled on its thin legs.' },
        { word: 'channel', def: 'a narrow path that water flows through', ex: 'We dug a channel so the rainwater could drain away.' },
        { word: 'admitted', def: 'said that something was true, even though it was hard to say', ex: 'Jo admitted that she had forgotten to feed the cat.' }
      ],
      passage: [
        'Every spring, when melting snow made Willow Creek run fast, Ms. Tanaka\'s class held a boat race. Each student had one week to build a boat no longer than a shoe. This year, Maya and Luis made a friendly bet: whoever lost would carry the winner\'s backpack for a day.',
        'Maya began that very afternoon. She filled three pages of her notebook with sketches, measured every piece of wood twice, and tested each design in the bathtub. When one boat tipped over, she wrote down exactly why and built another. By Thursday she had a sleek, narrow boat named the Arrow and a notebook thick with notes.',
        'Luis, on the other hand, did not start until Thursday night. He wasn\'t lazy; he simply liked to work fast and figure things out along the way. He dug through the recycling bin, grabbed a juice carton, two corks, and a plastic straw, and taped them together while Biscuit watched. He never tested his boat at all. He named it the Lucky Duck and went to bed.',
        'On Friday, the whole class gathered beside the creek. The Arrow shot ahead at once, slicing through the water just as Maya had planned. The Lucky Duck wobbled along far behind, spinning in slow circles. Luis groaned.',
        'Then, halfway down the course, a fallen branch blocked the narrow channel. The Arrow slid straight into it and stuck fast, because Maya\'s careful plan had not included branches. The Lucky Duck, wide and clumsy, bumped the branch, bounced sideways, and bobbed around it into open water. It crossed the finish line first.',
        'Luis cheered, but only for a moment. He had seen the Arrow fly. "Your boat was faster," he admitted. "Mine just got lucky."',
        'Maya shook her head. "Yours could handle a surprise, and mine couldn\'t." She opened her notebook to a clean page and wrote a reminder to plan for branches next year. Luis peered over her shoulder. "Next year," he said slowly, "maybe I should test mine in the bathtub first."',
        'They walked back to school together, taking turns carrying each other\'s backpacks.'
      ],
      questions: [
        { type: 'mc', skill: 'compare', q: 'How is the way Luis builds his boat different from the way Maya builds hers?', options: ['Luis works quickly without testing, while Maya plans and tests.', 'Luis draws many sketches, while Maya uses recycled materials.', 'Luis asks his friends for help, while Maya works all alone.', 'Luis starts on the first day, while Maya waits until Thursday.'], para: 2, hint: 'Reread paragraphs 2 and 3. The signal words "on the other hand" tell you a contrast is coming.', why: 'Maya sketches, measures, and tests in the bathtub. Luis tapes his boat together in one night and "never tested his boat at all."' },
        { type: 'mc', skill: 'compare', q: 'In what way are Maya and Luis ALIKE at the end of the story?', options: ['Each learns something from the other\'s way of working.', 'Each decides that boat races are a waste of time.', 'Each believes that the race was unfair.', 'Each plans to build exactly the same boat again next year.'], para: 6, hint: 'Look at what each friend says or writes after the race. What does each one plan to do next year?', why: 'Maya sees that Luis\'s boat could handle a surprise, so she plans for branches next year. Luis decides he should test his boat first, as Maya did. Each learns from the other.' },
        { type: 'mc', part: 'A', skill: 'character', q: 'Part A: What does the way Luis acts after winning show about him?', options: ['He is honest and fair.', 'He is boastful and proud.', 'He is jealous of Maya.', 'He is careless about rules.'], para: 5, hint: 'A character\'s words are clues. What does Luis say about his own boat right after it wins?', why: 'Instead of bragging, Luis tells Maya the truth: her boat was faster and his was lucky. That shows honesty and fairness.' },
        { type: 'mc', part: 'B', skill: 'evidence', q: 'Part B: Which sentence from the story best supports the answer to Part A?', options: ['"Your boat was faster," he admitted.', 'Luis groaned.', 'He named it the Lucky Duck and went to bed.', 'It crossed the finish line first.'], para: 5, hint: 'Choose the sentence in which Luis says something honest, even though he won.', why: 'When Luis admits that Maya\'s boat was faster, he shows that he is honest and fair about the race.' },
        { type: 'mc', skill: 'vocab', q: 'Maya built "a sleek, narrow boat" that "shot ahead at once." What does "sleek" mean?', options: ['Smooth and shaped for speed', 'Heavy and hard to steer', 'Painted in many bright colors', 'Small and easy to break'], para: 1, hint: 'Think about how the Arrow moves at the start of the race. What kind of shape would help it do that?', why: 'The Arrow shoots ahead, "slicing through the water." A sleek boat is smooth and shaped to move fast.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the story in order.', items: ['Maya tests her designs in the bathtub.', 'Luis tapes a carton and corks together.', 'The Arrow gets stuck on a branch.', 'The Lucky Duck crosses the finish line.', 'Maya writes a note for next year.'], hint: 'Think about the days of the week in the story, and then about what happened during the race itself.', why: 'Maya tests early in the week, Luis builds on Thursday night, and on Friday the Arrow sticks, the Lucky Duck wins, and Maya makes her note.' }
      ],
      talk: 'Tell a grown-up: How are Maya and Luis different as builders? Which one are you more like, and why?'
    },
    {
      id: 'w8d3',
      title: 'Alligator or Crocodile?',
      genre: 'info',
      sticker: { emoji: '🐊', name: 'Grinning Croc' },
      purpose: 'Read to find out what clues can help you tell these two reptiles apart.',
      stops: [
        { after: 3, q: "What is Text 1 mostly about?", options: ["What American alligators are like","How alligators hunt for their food","Why alligators are dangerous to people"], say: "Yes! Text 1 describes the alligator: its home, its looks, and its family life." },
        { after: 6, q: "What do we know about crocodiles so far?", options: ["They live in warm places around the world.","They live only in cold, icy rivers.","They are found only in Australia."], say: "Right! Crocodiles live in warm parts of Africa, Asia, Australia, and the Americas." }
      ],
      vocab: [
        { word: 'prefer', def: 'to like one thing better than another', ex: 'I prefer apples, but my sister likes pears.' },
        { word: 'recognize', def: 'to know what something is when you see it', ex: 'I did not recognize my uncle with his new beard.' },
        { word: 'snout', def: 'the long nose and mouth of an animal', ex: 'The pig pushed its snout into the mud.' },
        { word: 'motionless', def: 'not moving at all', ex: 'The cat sat motionless, watching the bird.' }
      ],
      passage: [
        '## Text 1: The American Alligator',
        'The American alligator is one of the largest reptiles in North America. It lives in the swamps, lakes, and slow rivers of the southeastern United States. Alligators prefer fresh water. They are rarely found in the salty sea.',
        'An alligator is easy to recognize once you study its head. Its snout is wide and rounded, like the letter U. When an alligator shuts its mouth, the upper jaw covers most of the lower teeth, so you mostly see the top row. Its skin is dark, almost black, which helps it soak up heat from the sun and hide in muddy water.',
        'Alligator mothers are gentle parents, which may surprise you. A female builds a nest from mud and rotting plants. She lays her eggs inside and guards the mound for about two months. When she hears her babies chirping, she uncovers the nest. She may even carry the hatchlings to the water in her mouth.',
        '## Text 2: The Crocodile',
        'Crocodiles live in warm places around the world. They are found in parts of Africa, Asia, Australia, and the Americas. Crocodiles have special glands on their tongues that remove extra salt from their bodies. As a result, many of them live where rivers meet the sea. Some even swim far out into the ocean.',
        'A crocodile\'s snout is longer and narrower than an alligator\'s. It comes to a point, like the letter V. Even with its mouth shut, a crocodile seems to be grinning, because teeth from both jaws remain visible. Its skin is usually a lighter shade of olive green or tan.',
        'Like alligators, crocodile mothers guard their nests fiercely and help their young reach the water. Both animals are also cold-blooded. This means they need the warmth of the sun to heat their bodies. That is why you often see them lying motionless on a riverbank for hours. They are soaking up the sunshine.',
        'These two reptiles share a long family history. Scientists believe that their relatives lived alongside the dinosaurs. Today, both are powerful hunters with strong jaws and sharp teeth. Whichever one you happen to spot, be sure to admire it from a safe distance!'
      ],
      questions: [
        { type: 'mc', skill: 'compare', q: 'According to the two texts, how is a crocodile\'s snout different from an alligator\'s snout?', options: ['It is narrower and shaped like a V.', 'It is wider and shaped like a U.', 'It is shorter and more rounded.', 'It is darker and much flatter.'], para: 6, hint: 'Find the word "snout" in each text. Compare the letter shapes the author uses.', why: 'Text 1 says the alligator\'s snout is "wide and rounded, like the letter U." Text 2 says the crocodile\'s is "longer and narrower" and comes to a point "like the letter V."' },
        { type: 'multi', skill: 'compare', q: 'Choose TWO ways that alligators and crocodiles are ALIKE, according to the texts.', options: ['The mothers guard their nests.', 'They warm their bodies in the sun.', 'They have dark, almost black skin.', 'They live only in North America.', 'They show teeth from both jaws when their mouths are shut.'], correct: 2, hint: 'Look in Text 2 for the signal words "Like alligators" and "Both animals."', why: 'Text 2 says "Like alligators, crocodile mothers guard their nests" and "Both animals are also cold-blooded," depending on the sun for warmth.' },
        { type: 'mc', skill: 'compare', q: 'Which animal would you be more likely to find swimming in the ocean, and why?', options: ['A crocodile, because its glands remove extra salt', 'An alligator, because it prefers salty water', 'A crocodile, because its skin is a much lighter color', 'An alligator, because its snout is wide'], para: 5, hint: 'Compare what each text says about salt and the sea.', why: 'Alligators "are rarely found in the salty sea," but crocodiles have glands that remove salt, and some "even swim far out into the ocean."' },
        { type: 'mc', skill: 'vocab', q: 'A crocodile seems to be grinning "because teeth from both jaws remain visible." What does "visible" mean?', options: ['Able to be seen', 'Sharp and pointed', 'Hidden from view', 'Ready to bite'], para: 6, hint: 'Why would the crocodile look as if it is grinning? What must you be able to do with its teeth?', why: 'You can only see a grin if the teeth show. "Visible" means able to be seen.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence in Text 1 that explains how dark skin helps an alligator.', answer: 'Its skin is dark, almost black, which helps it soak up heat from the sun and hide in muddy water.', hint: 'Look in the paragraph that describes the alligator\'s head and body. Find the word "helps."', why: 'This sentence gives two ways dark skin helps: it soaks up heat and it hides the alligator in muddy water.' },
        { type: 'mc', skill: 'mainidea', q: 'What is the main idea of the two texts together?', options: ['Alligators and crocodiles are much alike but have clear differences.', 'Alligator mothers take surprisingly gentle care of their eggs and their young.', 'Crocodiles are far more dangerous to people than alligators are.', 'Reptiles have lived on Earth since the time of the dinosaurs.'], hint: 'The main idea must cover BOTH texts like an umbrella, not just one paragraph.', why: 'Together the texts show how the two reptiles are alike (nests, sun-warming) and different (snout, teeth, skin, water). The other choices are small details or are not stated.' },
        { type: 'sort', skill: 'compare', q: 'Use both texts. Sort each fact: is it true of the alligator, the crocodile, or both?', cats: ['Alligator', 'Crocodile', 'Both'], items: [{ t: 'Has a wide snout shaped like a U', c: 0 }, { t: 'Has glands that remove extra salt', c: 1 }, { t: 'Has strong jaws and sharp teeth', c: 2 }, { t: 'Has skin that is dark, almost black', c: 0 }, { t: 'Usually has olive green or tan skin', c: 1 }, { t: 'Had relatives that lived alongside dinosaurs', c: 2 }], hint: 'Facts in Text 1 are about the alligator. In Text 2, watch for "both" and "these two reptiles," which point to facts about the two animals together.', why: 'Text 1 gives the alligator a U-shaped snout and dark skin. Text 2 gives the crocodile salt glands and olive green or tan skin. The last paragraph says both have strong jaws, sharp teeth, and relatives from dinosaur times.' }
      ],
      talk: 'Tell a grown-up: If you saw a big reptile with its mouth closed, what three clues would tell you whether it was an alligator or a crocodile?'
    },
    {
      id: 'w8d4',
      title: 'The Otter and the Heron',
      genre: 'fable',
      sticker: { emoji: '🐟', name: 'Heron\'s Catch' },
      purpose: 'Read to find out what happens when two very different neighbors face hard times.',
      stops: [
        { after: 2, q: "What is this part of the fable mostly about?", options: ["Two neighbors who fish in very different ways","Two friends who share their fish every day","Two animals who are afraid of the river"], say: "Yes! Otter and Heron fish from the same bank, but not in the same way." },
        { after: 4, q: "What do the dry summer and the rainy spring show?", options: ["Each way of fishing fails some of the time.","Otter's way of fishing is always the best.","Heron's way of fishing is always the best."], say: "Right! Each neighbor had a season when fishing went badly." }
      ],
      vocab: [
        { word: 'exhausted', def: 'very, very tired', ex: 'After the long hike, we were exhausted.' },
        { word: 'patience', def: 'the ability to wait calmly', ex: 'Fishing takes patience, because the fish may not bite for hours.' },
        { word: 'shallow', def: 'not deep', ex: 'The little kids splashed in the shallow end of the pool.' },
        { word: 'current', def: 'the steady flow of water in a river or stream', ex: 'The current carried the leaf quickly down the stream.' }
      ],
      passage: [
        'Where two rivers joined to become one, an otter and a heron fished from the same sandy bank. They had been neighbors for years, yet neither thought much of the other. Otter considered Heron dull, and Heron considered Otter foolish.',
        'Otter fished the way she did everything, which was at full speed. She plunged into the current, twisting and darting after any flash of silver. She caught many fish, though most were small, and by evening she was exhausted. "Look at Heron," she would snicker, "standing there like a stick in the mud. He will starve before he ever moves."',
        'Heron, in contrast, believed in patience. He stood in the shallows on his long, thin legs, as still as a reed, until a fish drifted within reach. Then his beak struck like lightning. Some days he caught one fine, fat fish, and other days he caught nothing at all. "Look at Otter," he would mutter, "splashing about like a pup. She frightens away more fish than she catches."',
        'Then came a summer without rain. The rivers shrank into shallow, muddy pools where Otter could no longer dive or chase. By the end of that long, dusty season, she had grown thin and weak. Heron, however, waded calmly from pool to pool and ate well.',
        'The following spring, the opposite happened. Heavy rains turned the rivers deep and wild. Now Heron could find no shallow place to stand, and it was his turn to go hungry, while Otter feasted in the rushing water.',
        'One evening, Otter noticed Heron shivering on the bank. She remembered her own hungry summer. Without a word, she dove in and drove a whole school of fish toward a quiet corner near the shore. The water was icy, and the current tugged hard at her tired legs, but she did not stop. Heron understood at once. He stepped in and struck, again and again, until there was plenty for both of them.',
        'From that day on, the two neighbors fished as partners. On dry days Heron shared his catch, and on wild days Otter shared hers. Otter chased, Heron waited, and neither one ever laughed at the other again.'
      ],
      questions: [
        { type: 'mc', skill: 'compare', q: 'How are Otter\'s and Heron\'s ways of fishing different?', options: ['Otter chases fish quickly, but Heron waits for fish to come near.', 'Otter fishes only at night, but Heron fishes during the day.', 'Otter catches large fish, but Heron catches only small ones.', 'Otter fishes from the sandy bank, but Heron dives into the deep water.'], para: 2, hint: 'Reread paragraphs 2 and 3. The signal words "in contrast" show where the difference begins.', why: 'Otter plunges in "twisting and darting," but Heron stands "as still as a reed, until a fish drifted within reach."' },
        { type: 'mc', skill: 'compare', q: 'At the beginning of the fable, how are Otter and Heron ALIKE?', options: ['Each one makes fun of the other.', 'Each one catches fish the same way.', 'Each one is afraid of deep water.', 'Each one wants to share the bank.'], para: 1, hint: 'Compare what Otter says about Heron with what Heron says about Otter.', why: 'Otter snickers that Heron is "like a stick in the mud," and Heron mutters that Otter splashes "like a pup." Both mock each other.' },
        { type: 'mc', skill: 'cause', q: 'Why does Heron go hungry in the spring?', options: ['The water is too deep for him to stand in.', 'Otter eats all of the fish before he can.', 'The rivers have dried into muddy pools.', 'He is too exhausted to hunt.'], para: 4, hint: 'Find the paragraph about spring. What do the heavy rains do to the rivers?', why: 'The rains make the rivers "deep and wild," so "Heron could find no shallow place to stand."' },
        { type: 'mc', skill: 'vocab', q: '"The following spring, the opposite happened." What does the word "opposite" tell you about the spring?', options: ['It was the reverse of the dry summer.', 'It was exactly like the dry summer.', 'It arrived sooner than anyone expected.', 'It lasted much longer than the summer.'], para: 4, hint: 'In summer, who was hungry and who ate well? Now look at who is hungry in spring.', why: 'In the dry summer Otter went hungry and Heron ate well. In the wet spring it was the other way around. "Opposite" means completely reversed.' },
        { type: 'evidence', skill: 'evidence', q: 'Otter sees Heron shivering on the bank. Tap the sentence that best explains WHY she decides to help him.', answer: 'She remembered her own hungry summer.', hint: 'Look at the paragraph where Otter sees Heron shivering. What goes through her mind just before she dives in?', why: 'Otter knows how hunger feels because she "remembered her own hungry summer." That memory is her reason for helping.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the fable in order.', items: ['Otter and Heron make fun of each other.', 'A dry summer leaves Otter hungry.', 'Spring floods leave Heron hungry.', 'Otter drives fish toward Heron.', 'The two neighbors fish as partners.'], hint: 'Follow the seasons: the early days, the summer, the spring, and then what happens afterward.', why: 'The neighbors mock each other, then each one suffers in a different season, then Otter helps Heron, and finally they become partners.' }
      ],
      talk: 'Tell a grown-up: How are Otter and Heron different? What did each one learn about the other\'s way of doing things?'
    },
    {
      id: 'w8d5',
      boss: true,
      title: 'Earth and Mars: Neighbors in Space',
      genre: 'info',
      sticker: { emoji: '🌍', name: 'Twin Planets' },
      purpose: 'Read to find out how our planet compares with its red neighbor in space.',
      stops: [
        { after: 4, q: "What is Text 1 mostly about?", options: ["What makes Earth a good home for life","How astronauts travel to the moon","Why the water in the oceans is salty"], say: "Yes! Text 1 tells about the water, air, and gentle temperatures that living things enjoy on Earth." },
        { after: 7, q: "What do we know about Mars so far?", options: ["It is a small, reddish neighbor of Earth.","It is a giant planet with many rings.","It is a warm world with blue seas."], say: "Right! Mars is a nearby planet, smaller than Earth, with a reddish glow." }
      ],
      vocab: [
        { word: 'surface', def: 'the outside or top layer of something', ex: 'A leaf floated on the surface of the pond.' },
        { word: 'atmosphere', def: 'the layer of air and gases around a planet', ex: 'Rockets must push through the atmosphere to reach space.' },
        { word: 'familiar', def: 'well known to you; not strange or new', ex: 'I smiled when I heard a familiar voice at the door.' },
        { word: 'similar', def: 'alike, but not exactly the same', ex: 'My handwriting is similar to my mother\'s.' }
      ],
      passage: [
        '## Text 1: Earth, the Blue Planet',
        'From space, Earth looks like a bright blue marble. That color comes from the oceans, which cover nearly three-fourths of the planet\'s surface. Earth is the only world we know of where liquid water flows freely in rivers, lakes, and seas. No other planet we have explored looks anything like it.',
        'Earth is wrapped in a thick blanket of air called the atmosphere. This blanket contains the oxygen that animals breathe, and it traps enough of the sun\'s heat to keep the planet comfortably warm. It also shields living things from harmful rays.',
        'Our planet spins around once every twenty-four hours, giving us day and night, and it travels around the sun once every year. Because Earth is tilted instead of standing straight up, different parts of the planet receive more direct sunlight at different times, which creates the seasons. A single large moon circles Earth.',
        'Thanks to its water, its air, and its gentle temperatures, Earth is home to millions of kinds of living things, from tiny insects to enormous whales.',
        '## Text 2: Mars, the Red Planet',
        'Mars is the fourth planet from the sun and one of Earth\'s closest neighbors in space. It is often called the Red Planet because its soil is full of rusty iron dust, which gives the whole world a reddish glow. On many clear nights, you can see Mars without a telescope. It looks like a small, orange-red star.',
        'Mars is only about half as wide as Earth. Its atmosphere is extremely thin, and it is made mostly of a gas that people cannot breathe. Since thin air cannot hold much heat, Mars is bitterly cold. Scientists have found signs that rivers once flowed there, but today nearly all of the planet\'s water is frozen as ice.',
        'In some ways, however, Mars is surprisingly similar to our own world. A day on Mars lasts just a little longer than a day on Earth. Mars is also tilted, so it has seasons, too. A year on Mars is almost twice as long as ours, though, so each season lasts about twice as long. Instead of one large moon, Mars has two small, lumpy ones. Even so, its days and seasons would feel familiar to a visitor from Earth.',
        'No one has found life on Mars, but scientists keep searching for clues. Robot explorers called rovers roll across its dusty plains, studying rocks and sending photographs back to Earth. So far, they have found only rocks, dust, and ice. Someday, astronauts may follow them. They will need to bring their own air, water, and warmth, three gifts that Earth gives us for free.'
      ],
      questions: [
        { type: 'mc', skill: 'compare', q: 'How is the atmosphere of Mars different from the atmosphere of Earth?', options: ['It is much thinner, and people cannot breathe it.', 'It is much thicker, and it traps more heat.', 'It contains more oxygen for animals to breathe.', 'It is filled with clouds of rusty water.'], para: 7, hint: 'Find the word "atmosphere" in each text and compare the describing words.', why: 'Earth has "a thick blanket of air" with oxygen. Mars has an atmosphere that is "extremely thin" and made "mostly of a gas that people cannot breathe."' },
        { type: 'multi', skill: 'compare', q: 'Choose TWO ways that Earth and Mars are ALIKE.', options: ['Both planets have seasons.', 'A day lasts about the same amount of time on both.', 'Both have oceans of liquid water.', 'Both have exactly one moon.', 'Both take one Earth year to circle the sun.'], correct: 2, hint: 'Reread the paragraph in Text 2 that begins "In some ways, however." Look for the words "similar," "also," and "too."', why: 'Text 2 says a Mars day "lasts just a little longer than a day on Earth" and that Mars "is also tilted, so it has seasons, too."' },
        { type: 'mc', part: 'A', skill: 'compare', q: 'Part A: Based on both texts, why would living on Mars be much harder than living on Earth?', options: ['Mars lacks breathable air, liquid water, and warmth.', 'Mars has days and nights that are far too long.', 'Mars has no seasons, so nothing could ever grow there.', 'Mars is so close to the sun that it is too hot.'], hint: 'Think about what Text 1 says makes Earth a good home. Does Mars have those same things?', why: 'Earth has oxygen, flowing water, and warmth. Mars has air people cannot breathe, frozen water, and bitter cold.' },
        { type: 'mc', part: 'B', skill: 'evidence', q: 'Part B: Which sentence best supports the answer to Part A?', options: ['They will need to bring their own air, water, and warmth, three gifts that Earth gives us for free.', 'A year on Mars is almost twice as long as ours, though, so each season lasts about twice as long.', 'Robot explorers called rovers roll across its dusty plains, studying rocks and sending photographs back to Earth.', 'Even so, its days and seasons would feel familiar to a visitor from Earth.'], para: 9, hint: 'Pick the sentence that names the things people need but Mars does not provide.', why: 'This sentence lists exactly what Mars is missing for human life: air, water, and warmth.' },
        { type: 'mc', skill: 'cause', q: 'According to Text 2, why is Mars so cold?', options: ['Its thin air cannot hold much heat.', 'Its red dust blocks the sunlight.', 'Its two moons cast large shadows.', 'Its year is nearly twice as long.'], para: 7, hint: 'Find the word "cold" in Text 2. The word "since" at the start of that sentence introduces the cause.', why: 'The text says, "Since thin air cannot hold much heat, Mars is bitterly cold."' },
        { type: 'mc', skill: 'vocab', q: 'Text 1 says that Earth is "tilted instead of standing straight up." What does "tilted" mean?', options: ['Leaning to one side', 'Spinning very quickly', 'Covered with water', 'Shaped like a ball'], para: 3, hint: 'Picture a spinning top that does not stand perfectly straight. How would you describe it?', why: 'The words "instead of standing straight up" are the clue. Earth does not sit straight as it spins; it leans. "Tilted" means leaning to one side.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence in Text 2 that explains why Mars is called the Red Planet.', answer: 'It is often called the Red Planet because its soil is full of rusty iron dust, which gives the whole world a reddish glow.', hint: 'Look near the beginning of Text 2 for the word "because."', why: 'This sentence gives the reason for the nickname: rusty iron dust makes Mars look red.' },
        { type: 'mc', skill: 'features', q: 'Suppose the author added a new section to Text 2 under the heading "Robot Visitors." Which detail would belong in that section?', options: ['Rovers study rocks and send photographs to Earth.', 'Mars has two small, lumpy moons instead of one large one.', 'Mars is only about half as wide as Earth is.', 'Oceans cover nearly three-fourths of Earth.'], para: 9, hint: 'A heading tells what a section is about. Reread the last paragraph of Text 2. What does it call the robots that explore Mars?', why: 'Rovers are the "robot explorers" in the text, so the detail about rovers studying rocks fits a section called "Robot Visitors."' }
      ],
      talk: 'Tell a grown-up: Describe two ways Earth and Mars are alike and three ways they are different. Would you want to visit Mars?'
    }
  ]
};
