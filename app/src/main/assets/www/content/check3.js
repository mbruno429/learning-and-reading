/* Reading Check form 3 (cold read, taken after week 8). Parallel to forms 1, 2 and 4. Correct option is listed FIRST. */
window.RQ_CHECKS = window.RQ_CHECKS || {};
window.RQ_CHECKS[3] = {
  passages: [
    {
      level: 2,
      title: "Omar's First Swim Lesson",
      genre: 'fiction',
      passage: [
        "Omar stood at the edge of the pool. It was his first swimming lesson, and his knees felt wobbly. The water looked very deep, and he could not see the bottom.",
        "His teacher, Miss June, was waiting in the water. \"Come and sit on the steps,\" she said. Omar sat down slowly, and the cool water covered his legs.",
        "Next, Miss June asked him to hold the wall and kick. Omar clung to the wall. His fingers held on so tight that they turned white. He kicked and kicked until water splashed everywhere.",
        "\"Now blow some bubbles,\" said Miss June. Omar put his mouth in the water and blew. The bubbles tickled his nose, and he laughed.",
        "At the end of the lesson, Miss June held out her hands. \"Let go and float to me,\" she said. Omar took a big breath and let go of the wall. For three whole seconds, he floated all by himself!",
        "\"See you next week,\" said Miss June.",
        "On the way home, Omar asked his dad, \"How many days until next week?\""
      ],
      questions: [
        {
          skill: 'detail', type: 'mc', para: 3,
          q: "What made Omar laugh during his lesson?",
          options: ["bubbles tickling his nose", "water splashing on his teacher", "his feet slipping on the steps", "a joke that Miss June told"],
          why: "Paragraph 4 says the bubbles tickled Omar's nose, and he laughed."
        },
        {
          skill: 'sequence', type: 'order',
          q: "Put these story events in the order they happened.",
          items: [
            "Omar sits down on the steps.",
            "Omar holds the wall and kicks.",
            "Omar blows bubbles in the water.",
            "Omar floats all by himself."
          ],
          why: "The story tells the lesson in this order: sitting on the steps, kicking at the wall, blowing bubbles, and then floating at the end."
        },
        {
          skill: 'vocab', type: 'mc', para: 2,
          q: "Read this sentence from the story: \"Omar clung to the wall.\" What does the word \"clung\" mean?",
          options: ["held on tightly", "pushed away from", "climbed over the top of", "looked closely at"],
          why: "The next sentence says his fingers \"held on so tight that they turned white,\" so \"clung\" means held on tightly."
        },
        {
          skill: 'mainidea', type: 'mc',
          q: "What is this story mostly about?",
          options: [
            "A boy is nervous at his first swimming lesson but ends up liking it.",
            "A boy and his dad talk about the days of the week on the way home.",
            "A teacher shows a boy the right way to blow bubbles under the water.",
            "A boy learns that the water in a pool is not as deep as it looks."
          ],
          why: "The story begins with Omar's wobbly knees, follows him through each part of the lesson, and ends with him eager for the next one."
        },
        {
          skill: 'inference', type: 'mc', para: 6,
          q: "Why did Omar most likely ask his dad, \"How many days until next week?\"",
          options: [
            "He was excited to go back to the pool.",
            "He hoped his lessons were already over.",
            "He wanted more time to rest his tired legs.",
            "He was worried about floating by himself again."
          ],
          why: "Omar laughed during the lesson and floated by himself, and Miss June said \"See you next week,\" so his question shows he can hardly wait to return."
        }
      ]
    },
    {
      level: 3,
      title: "How a Spider Builds Its Web",
      genre: 'info',
      passage: [
        "Early in the morning, you may spot a round web shining with dew. It looks like a wheel made of thread. A garden spider built it in about an hour, and it did the whole job without any tools.",
        "The thread is called silk, and it comes from tiny openings at the back of the spider's body. Silk starts out as a liquid, but it turns into a solid thread as the spider pulls it out. For its weight, spider silk is stronger than steel.",
        "The first step is the hardest one. The spider must stretch a line across an open space, such as the gap between two branches. It cannot jump that far, so it lets a long thread float away on the breeze. When the end catches on something, the spider has a bridge.",
        "Next, the spider adds more lines to make a frame. Then it runs threads from the middle out to the edges, like the spokes of a bicycle wheel. These threads are dry, not sticky.",
        "Last, the spider walks around and around, laying down a spiral of sticky silk. This is the part of the web that traps insects. The spider itself stays free because it is careful to step on the dry spokes.",
        "Then the spider waits patiently. When an insect such as a fly hits the web, the threads tremble. The spider feels the shaking through its legs and hurries over to its meal.",
        "A web does not last long, because wind, rain, and struggling insects soon tear holes in it. Many garden spiders eat the old silk and spin a fresh web the very next day."
      ],
      questions: [
        {
          skill: 'detail', type: 'mc', para: 2,
          q: "According to the passage, how does a spider get its first line across a gap?",
          options: [
            "It lets a thread float on the breeze.",
            "It jumps from one branch to the other.",
            "It climbs down to the ground and back up.",
            "It walks across on a spiral of dry silk."
          ],
          why: "Paragraph 3 says the spider cannot jump that far, so it lets a long thread float away on the breeze until the end catches."
        },
        {
          skill: 'vocab', type: 'mc', para: 5,
          q: "Read this sentence from paragraph 6: \"When an insect such as a fly hits the web, the threads tremble.\" What does the word \"tremble\" mean?",
          options: ["shake", "snap", "shine", "stick"],
          why: "The next sentence says the spider \"feels the shaking,\" so \"tremble\" means shake."
        },
        {
          skill: 'inference', type: 'mc', para: 4,
          q: "Based on the passage, what would most likely happen if a spider built its frame and spokes but never added the spiral?",
          options: [
            "Insects that hit the web would not be trapped.",
            "The spider would get stuck in its own web.",
            "The web would be torn apart by the first breeze.",
            "The spider would not be able to walk on the web."
          ],
          why: "Paragraph 5 says the sticky spiral is the part that traps insects and the spokes are dry, so a web without the spiral could not hold a bug."
        },
        {
          skill: 'mainidea', type: 'mc',
          q: "What is the main idea of this passage?",
          options: [
            "A spider builds its web one step at a time, and each part has a job.",
            "Spider silk begins as a liquid and is stronger than steel for its weight.",
            "A web is easily torn by wind, rain, and the bugs that get caught in it.",
            "A spider feels a fly land in its web because the threads begin to shake."
          ],
          why: "The passage walks through the steps of building a web (bridge, frame, spokes, spiral) and tells what each part does; the other choices are single details."
        },
        {
          skill: 'evidence', type: 'evidence',
          q: "Tap the sentence that tells how a spider senses that its web is shaking.",
          answer: "The spider feels the shaking through its legs and hurries over to its meal.",
          why: "This sentence tells how the spider senses it: it feels the shaking of the threads through its legs."
        }
      ]
    },
    {
      level: 5,
      title: "The Well at Three Stones",
      genre: 'fable',
      passage: [
        "The village of Three Stones had forty houses, eleven goats, and exactly one well. It stood in the middle of the square, and for as long as anyone could remember, it had given enough water for everyone.",
        "Then came a summer without rain. Week after week, the water in the well dwindled. Each morning, the rope had to be let down a little farther before the bucket touched anything wet.",
        "The elders asked every household to take only two buckets a day, and everyone agreed. But that night, the baker lay awake worrying about his dough. \"One extra bucket will hardly matter,\" he told himself, and he crept to the square in the dark. The weaver had the same thought about her dye pots. So did the goatherd, and so did nearly everyone else. Each of them tiptoed home believing that nobody else had done the same.",
        "By the end of the week, the bucket came up holding nothing but mud.",
        "The villagers gathered in the square, and soon they were shouting. The baker blamed the goatherd's thirsty animals, and the goatherd blamed the weaver. Nobody mentioned the night.",
        "Ilka, the well keeper's twelve-year-old daughter, waited for a pause. \"I sweep the square every dawn,\" she said quietly. \"Every morning this week, I have found wet footprints leading to almost every door. I am not accusing anyone. I only think the well cannot tell the difference between one bucket taken in secret and forty.\"",
        "The square fell silent, and the baker studied his shoes. At last he cleared his throat. \"One of those trails was mine,\" he admitted. One by one, other voices joined his.",
        "That afternoon, instead of arguing, the villagers got to work. Ilka hung a board beside the well with forty pegs on it, one for each house, and two wooden rings for each peg. Whoever drew a bucket moved a ring so that everyone could see. The strongest villagers climbed down to dig out the mud at the bottom, and the children carried used wash water to the gardens so that none was wasted.",
        "The well filled slowly, a hand's width at a time, and although there was never much, there was always enough. When the rains finally returned in autumn, the villagers left the board exactly where it hung."
      ],
      questions: [
        {
          skill: 'inference', type: 'mc', para: 6,
          q: "In paragraph 7, why does the baker most likely study his shoes?",
          options: [
            "He is ashamed of what he has done.",
            "He is checking whether his shoes are still wet.",
            "He is angry that Ilka has spoken up.",
            "He is trying to remember who else he saw."
          ],
          why: "The baker secretly took extra water, and right after looking down he admits, \"One of those trails was mine,\" which shows he felt ashamed."
        },
        {
          skill: 'vocab', type: 'mc', para: 1,
          q: "Read this sentence from the story: \"Week after week, the water in the well dwindled.\" What does the word \"dwindled\" mean as it is used here?",
          options: [
            "slowly became less",
            "turned thick and muddy",
            "rose closer to the top",
            "grew too warm to drink"
          ],
          why: "There was no rain, and the rope \"had to be let down a little farther\" each morning, so \"dwindled\" means the water slowly became less."
        },
        {
          skill: 'theme', type: 'mc',
          q: "Which sentence best states a theme of the story?",
          options: [
            "Something that is shared lasts only when each person does a fair part.",
            "Young people usually understand a problem better than their elders do.",
            "A village should never depend on just one place to get its water.",
            "People who keep secrets from their neighbors are always found out."
          ],
          why: "The well runs dry when nearly everyone secretly takes extra, and it recovers only after each household keeps to its share in plain view of the others."
        },
        {
          skill: 'evidence', type: 'evidence',
          q: "Tap the sentence that shows what each villager wrongly believed about the neighbors.",
          answer: "Each of them tiptoed home believing that nobody else had done the same.",
          why: "This sentence states the mistaken belief: every villager thought he or she was the only one taking an extra bucket."
        },
        {
          skill: 'character', type: 'multi', correct: 2,
          q: "Which details from the story best show that Ilka is careful and respectful when she speaks to the villagers? Choose TWO.",
          options: [
            "She waits for a pause and then speaks quietly.",
            "She tells the crowd that she is not accusing anyone.",
            "She sweeps the square every morning at dawn.",
            "She is the daughter of the village well keeper.",
            "She hangs a board with forty pegs beside the well."
          ],
          why: "Waiting for a pause, speaking quietly, and saying \"I am not accusing anyone\" show Ilka's care with her words; the other details tell who she is or what she does, not how she speaks."
        }
      ]
    }
  ]
};
