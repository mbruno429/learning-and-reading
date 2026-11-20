/* Reading Check form 2 (taken after week 4). Cold read: no hints, no pre-taught words.
   Parallel to forms 1, 3 and 4. In every mc/multi item the correct option(s) come FIRST. */
window.RQ_CHECKS = window.RQ_CHECKS || {};
window.RQ_CHECKS[2] = {
  passages: [
    {
      level: 2,
      title: 'Where Do the Acorns Go?',
      genre: 'info',
      passage: [
        `In fall, oak trees drop acorns, and a gray squirrel gets busy. It cannot eat all the nuts now, so it saves them for winter.`,
        `First, the squirrel picks up one acorn. Next, it digs a small hole with its front feet. Then it pushes the nut in and pats dirt and leaves on top. Last, it runs off to find another nut.`,
        `The squirrel does not keep its food in one big pile. Instead, it will scatter the nuts all over the yard. One goes under a bush. Another goes by the fence. If a hungry bird finds one hole, the other nuts are still safe.`,
        `In winter, snow covers the ground. The squirrel remembers many of its hiding spots, and its nose helps too. It can smell a nut under the snow.`,
        `Still, the squirrel does not find every nut. In spring, a few of the nuts left in the ground start to grow. Years later, a tall oak tree may stand where a squirrel once dug.`
      ],
      questions: [
        {
          skill: 'detail', type: 'mc', para: 3,
          q: `According to the passage, how can a squirrel find a nut that is under the snow?`,
          options: [
            `It can smell the nut.`,
            `It can see the top of the nut.`,
            `It follows its own tracks.`,
            `It digs up the whole yard.`
          ],
          why: `Paragraph 4 says the squirrel's "nose helps too. It can smell a nut under the snow."`
        },
        {
          skill: 'sequence', type: 'order', para: 1,
          q: `Put the steps in the order the squirrel does them.`,
          items: [
            `It picks up one acorn.`,
            `It makes a hole in the ground.`,
            `It covers the nut.`,
            `It goes to look for more nuts.`
          ],
          why: `Paragraph 2 gives the steps with the words First, Next, Then and Last: pick up, dig, cover, run off.`
        },
        {
          skill: 'vocab', type: 'mc', para: 2,
          q: `Read this sentence from the passage: "Instead, it will scatter the nuts all over the yard." What does the word "scatter" mean?`,
          options: [
            `put in many different places`,
            `eat as fast as it can`,
            `stack up in one tall pile`,
            `break open with its teeth`
          ],
          why: `The next sentences show the meaning: one nut goes under a bush and another by the fence, not in "one big pile."`
        },
        {
          skill: 'mainidea', type: 'mc',
          q: `What is the main idea of this passage?`,
          options: [
            `Squirrels hide nuts in fall so they have food in winter.`,
            `Oak trees drop many acorns when the weather turns cool.`,
            `Hungry birds like to take the food that squirrels hide.`,
            `Squirrels have strong front feet that are good for digging.`
          ],
          why: `Every paragraph is about hiding nuts and finding them later; paragraph 1 says the squirrel "saves them for winter."`
        },
        {
          skill: 'inference', type: 'mc', para: 4,
          q: `Based on the last paragraph, how do squirrels help oak trees?`,
          options: [
            `Nuts they forget can grow into new trees.`,
            `They keep hungry birds away from the trees.`,
            `They dig holes that bring water to the roots.`,
            `They eat the acorns that are too old to grow.`
          ],
          why: `The last paragraph says the squirrel does not find every nut, nuts left in the ground start to grow, and an oak may stand "where a squirrel once dug."`
        }
      ]
    },
    {
      level: 3,
      title: 'The Trail to Pickle',
      genre: 'fiction',
      passage: [
        `On Monday morning, Nadia hung up her coat and went to say hello to Pickle. Pickle was the guinea pig who lived in Room 12. But the door of his cage hung open, and the cage was vacant. No guinea pig sat by the water bottle or peeked out of the hay.`,
        `"Pickle is gone!" Nadia called. Soon the whole class was hunting. Marcus crawled under the tables while two girls shook the curtains. Someone tipped over the block bin with a crash, and everyone was shouting Pickle's name.`,
        `Nadia did not run. Instead, she thought carefully about what she knew. Pickle was a shy little animal. He always dashed into his tube when the room got loud. All this shouting was not going to help.`,
        `So she knelt beside the cage and studied the floor. A wisp of hay lay near the table leg. A little farther away, she spotted another. The bits of hay made a thin trail along the wall, past the bookshelf, and toward the coat closet.`,
        `Nadia followed the trail on tiptoe. At the back of the closet sat the box of lost mittens and scarves. One striped scarf was moving a tiny bit, so she lifted it gently. There was Pickle, tucked into the soft wool, with hay still stuck to his fur.`,
        `"I found him," Nadia said softly. The class tiptoed over to look. Ms. Park carried Pickle back to his cage and checked the door twice. Then she handed Nadia a metal clip for the latch. "From now on," she said, "you are in charge of this door."`
      ],
      questions: [
        {
          skill: 'detail', type: 'mc', para: 4,
          q: `Where does Nadia find Pickle?`,
          options: [
            `under a scarf in the lost mitten box`,
            `inside the tube in his cage`,
            `behind the books on the bookshelf`,
            `at the bottom of the block bin`
          ],
          why: `Paragraph 5 says the box of lost mittens and scarves sat in the closet, and Pickle was under the striped scarf that was moving.`
        },
        {
          skill: 'vocab', type: 'mc', para: 0,
          q: `What does the word "vacant" mean as it is used in paragraph 1?`,
          options: [
            `empty`,
            `messy`,
            `broken`,
            `quiet`
          ],
          why: `The next two sentences explain it: no guinea pig sat by the water bottle or peeked out of the hay, so nothing was in the cage.`
        },
        {
          skill: 'inference', type: 'mc', para: 5,
          q: `Why does Ms. Park most likely put Nadia in charge of the cage door?`,
          options: [
            `She has shown that she is careful and pays attention.`,
            `She was the last one to feed Pickle on Friday.`,
            `She sits at the table that is closest to the cage.`,
            `She asked him for a job to do in the classroom.`
          ],
          why: `Nadia stayed calm, studied the floor and followed the hay trail to Pickle, so Ms. Park trusts her with a job that needs care.`
        },
        {
          skill: 'mainidea', type: 'mc',
          q: `What is this story mostly about?`,
          options: [
            `A girl finds a lost class pet by staying calm and following clues.`,
            `A class learns how to feed and take care of a new guinea pig.`,
            `A teacher buys a stronger cage after the class pet gets out.`,
            `A girl gets in trouble because she left a cage door open.`
          ],
          why: `While the class shouts and runs, Nadia thinks, spots the bits of hay, and follows the trail to the closet where Pickle is hiding.`
        },
        {
          skill: 'evidence', type: 'evidence', para: 2,
          q: `Tap the sentence that shows how Pickle acts when there is a lot of noise.`,
          answer: `He always dashed into his tube when the room got loud.`,
          why: `This sentence in paragraph 3 tells what Pickle always does in a loud room, which is why Nadia searches quietly.`
        }
      ]
    },
    {
      level: 5,
      title: 'Lights Along the Shore',
      genre: 'info',
      passage: [
        `For a sailor long ago, the most dangerous part of a voyage was often the very end. Out on the open ocean, a ship had plenty of room. Near land, however, rocks and sandbars lay hidden just beneath the waves. On a dark night, a captain could not see the coast until it was too late to turn away. Lighthouses were built to solve this problem.`,
        `A lighthouse is a tall tower with a bright light at the top. The earliest lighthouses were simple, because workers only kept a wood or coal fire burning on a high platform. Later, keepers used oil lamps instead. These lights helped, but they were feeble. Their flickering glow spread out in every direction and faded after only a few miles.`,
        `In 1822, a French scientist named Augustin Fresnel designed a far better lens. Instead of using a single piece of glass, he surrounded a lamp with rings of carefully shaped glass. The glass bent the scattered light and gathered it into one powerful beam. A lamp that had once been hard to spot could now be seen from more than twenty miles away.`,
        `A light told sailors that land was near, but it did not tell them which land. To answer that question, each lighthouse was given its own special signal. One might shine steadily, while another flashed every ten seconds. Sailors timed the flashes and checked a chart to learn exactly where they were. In daylight, the towers themselves gave helpful clues. Builders painted them with different stripes, bands, or diamonds so that no two neighbors looked alike.`,
        `None of this equipment worked without a dependable keeper. Every evening the keeper climbed the stairs, often carrying heavy cans of oil, and lit the lamp. All night the keeper trimmed the wick and wound the machine that turned the lens. By day there was glass to polish, and in fog there was a bell or horn to sound. Keepers and their families often lived at lonely stations for many years, far from their nearest neighbors.`,
        `Today, automatic machines switch the lights on and off, and most ships find their way with signals from satellites. Even so, many lighthouses still shine every night. If the equipment on a ship ever fails, the old beam is still there to mark the shore.`
      ],
      questions: [
        {
          skill: 'inference', type: 'mc', para: 3,
          q: `Based on the passage, what problem would sailors most likely have had if every lighthouse had shown the same steady light?`,
          options: [
            `They would know land was near but not which part of the coast it was.`,
            `They would not be able to see the light until they were a few miles away.`,
            `They would have to use the painted stripes to find their way at night.`,
            `They would not know that rocks and sandbars were hidden near the land.`
          ],
          why: `Paragraph 4 says a light showed that land was near but not which land, so each lighthouse got its own signal that sailors matched to a chart.`
        },
        {
          skill: 'vocab', type: 'mc', para: 1,
          q: `What is the meaning of the word "feeble" as it is used in paragraph 2?`,
          options: [
            `weak`,
            `costly`,
            `unsafe`,
            `steady`
          ],
          why: `The next sentence says the glow "faded after only a few miles," and paragraph 3 contrasts it with "one powerful beam."`
        },
        {
          skill: 'mainidea', type: 'mc',
          q: `Which sentence best states the main idea of the passage?`,
          options: [
            `Lighthouses, with their lights, signals and keepers, helped ships travel safely near land.`,
            `Augustin Fresnel designed a glass lens that could send light more than twenty miles.`,
            `Lighthouse keepers and their families worked hard and often lived far from other people.`,
            `Signals from satellites have taken the place of lighthouses, which are no longer lit at night.`
          ],
          why: `The passage starts with the danger near land and then explains the lights, lens, signals and keepers that solved it; the other choices are single details or untrue.`
        },
        {
          skill: 'evidence', type: 'evidence', para: 2,
          q: `Tap the sentence that tells what Fresnel's shaped glass did to the light from the lamp.`,
          answer: `The glass bent the scattered light and gathered it into one powerful beam.`,
          why: `This sentence in paragraph 3 tells what the glass rings did to the light: they bent it and gathered it into a single beam.`
        },
        {
          skill: 'detail', type: 'multi', correct: 2, para: 4,
          q: `According to the passage, which jobs did a lighthouse keeper do? Choose TWO.`,
          options: [
            `trimming the wick of the lamp during the night`,
            `sounding a bell or horn when there was fog`,
            `painting stripes or diamonds on the tower`,
            `timing the flashes and checking a chart`,
            `steering ships around the rocks and sandbars`
          ],
          why: `Paragraph 5 says the keeper "trimmed the wick" all night and sounded "a bell or horn" in fog; builders painted the towers and sailors timed the flashes.`
        }
      ]
    }
  ]
};
