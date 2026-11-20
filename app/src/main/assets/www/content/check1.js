/* Reading Check form 1 (cold read, taken before week 1). Parallel to forms 2-4. Correct option is listed FIRST. */
window.RQ_CHECKS = window.RQ_CHECKS || {};
window.RQ_CHECKS[1] = {
  passages: [
    {
      level: 2,
      title: "Nell's Red Kite",
      genre: 'fiction',
      passage: [
        "Nell had a red kite with a long yellow tail. On Saturday morning, she carried it to the grassy hill behind her house. The wind was very strong that day.",
        "At first, the kite flew higher and higher. Then a sudden gust of wind yanked the string right out of her hand. Nell could not hold on. The kite sailed over the fence and out of sight.",
        "Nell hurried down the hill to look for it. She looked in the tall grass and all around the pond, but she could not find her kite anywhere. Her eyes filled with tears.",
        "Then she saw the yellow tail of her kite flapping in Mr. Ortiz's apple tree. The kite was stuck on a high branch.",
        "Nell knocked on Mr. Ortiz's door. He got his ladder, climbed up, and slowly lifted the kite off the branch so the paper would not rip.",
        "The next afternoon, Nell came back with a card she had made. Inside, it said, \"You are the best neighbor on our street.\""
      ],
      questions: [
        {
          skill: 'detail', type: 'mc', para: 3,
          q: "Where did Nell find her kite?",
          options: ["in an apple tree", "in the tall grass", "beside the pond", "on top of the hill"],
          why: "Paragraph 4 says Nell saw the kite's yellow tail in Mr. Ortiz's apple tree, stuck on a high branch."
        },
        {
          skill: 'sequence', type: 'order',
          q: "Put these story events in the order they happened.",
          items: [
            "The wind pulls the string away from Nell.",
            "Nell looks for her kite around the pond.",
            "Nell sees the tail of her kite in a tree.",
            "Mr. Ortiz climbs up a ladder."
          ],
          why: "The story tells these events in this order: the wind takes the kite, Nell searches, she spots the tail, and then Mr. Ortiz gets it down."
        },
        {
          skill: 'vocab', type: 'mc', para: 1,
          q: "Read this sentence from the story: \"Then a sudden gust of wind yanked the string right out of her hand.\" What does the word \"yanked\" mean?",
          options: ["pulled hard and fast", "tied in a tight knot", "slowly let down", "blew gently on"],
          why: "The wind was strong and Nell \"could not hold on,\" so \"yanked\" means the string was pulled away hard and fast."
        },
        {
          skill: 'mainidea', type: 'mc',
          q: "What is this story mostly about?",
          options: [
            "A girl loses her kite and gets it back with a neighbor's help.",
            "A girl learns how to fly a kite on a hill near her house.",
            "A neighbor shows a girl the right way to climb up a tall ladder.",
            "A girl makes cards for all of the people who live on her street."
          ],
          why: "Most of the story tells how Nell lost her kite, looked for it, and got it back when Mr. Ortiz lifted it out of his tree."
        },
        {
          skill: 'inference', type: 'mc', para: 5,
          q: "Why did Nell most likely make a card for Mr. Ortiz?",
          options: [
            "She wanted to thank him for his help.",
            "She wanted to borrow his ladder again.",
            "She felt bad about hurting his apple tree.",
            "She hoped he would fly kites with her."
          ],
          why: "Mr. Ortiz got Nell's kite down without ripping it, and her card calls him \"the best neighbor,\" so the card is her way of thanking him."
        }
      ]
    },
    {
      level: 3,
      title: "How a Snowflake Is Born",
      genre: 'info',
      passage: [
        "A snowflake looks soft and simple when it lands on your mitten. But every snowflake has been on a long journey, and that journey begins high up in a freezing cloud.",
        "Clouds hold water in a form too small to see, which is called water vapor. The air is also full of tiny specks of dust. When a cloud gets cold enough, some of the vapor freezes onto one of these specks. A tiny piece of ice, called a crystal, is born. This crystal is the seed of a snowflake.",
        "The ice crystal has six sides because of the way water joins together when it freezes. As more vapor freezes onto the crystal, six arms sprout from its six corners. Every arm grows at the same time and in the same air, so the arms end up looking alike.",
        "Soon the crystal gets too heavy to float. It begins to drift slowly toward the ground. Along the way, it passes through air that is warmer or colder, wetter or drier. Each new kind of air alters how the arms grow. In wet air, they branch out like the leaves of a tiny fern. In drier air, the snowflake stays small and plain.",
        "No two snowflakes follow exactly the same path through the sky. That is why it is so difficult to find two that match.",
        "Here is one more surprise. Snow looks white, but a single snowflake is really as clear as glass. Light bounces off its many edges in every direction, and that bouncing light is what makes a pile of snow look white."
      ],
      questions: [
        {
          skill: 'detail', type: 'mc', para: 1,
          q: "According to the passage, what does water vapor freeze onto when a snowflake begins?",
          options: ["a tiny speck of dust", "a drop of cold rain", "the edge of a cloud", "an older snowflake"],
          why: "Paragraph 2 says that when a cloud gets cold enough, some of the vapor freezes onto a speck of dust."
        },
        {
          skill: 'vocab', type: 'mc', para: 3,
          q: "Read this sentence from paragraph 4: \"Each new kind of air alters how the arms grow.\" What does the word \"alters\" mean?",
          options: ["changes", "stops", "hides", "copies"],
          why: "The next sentences show the arms growing differently in wet air and in drier air, so \"alters\" means changes."
        },
        {
          skill: 'inference', type: 'mc', para: 3,
          q: "Two snowflakes land side by side. One has long, branching arms, and the other is small and plain. Based on the passage, what is most likely true?",
          options: [
            "They fell through different kinds of air.",
            "They formed on different kinds of dust.",
            "One of them has more sides than the other.",
            "One of them melted and then froze again."
          ],
          why: "Paragraph 4 says wet air makes the arms branch out while drier air keeps a flake small and plain, so the two flakes passed through different air."
        },
        {
          skill: 'mainidea', type: 'mc',
          q: "What is the main idea of this passage?",
          options: [
            "A snowflake grows from a tiny ice crystal and is shaped by its trip through the air.",
            "A pile of snow looks white because light bounces off the edges of the flakes in it.",
            "Clouds are made of water vapor and tiny specks of dust that people cannot see.",
            "The six arms of a snowflake look alike because they all grow in the same air."
          ],
          why: "The whole passage follows a snowflake from its start as an ice crystal to the way the air it falls through shapes its arms; the other choices are single details."
        },
        {
          skill: 'evidence', type: 'evidence',
          q: "Tap the sentence that shows why a snowflake starts to fall from its cloud.",
          answer: "Soon the crystal gets too heavy to float.",
          why: "This sentence gives the reason: the growing crystal becomes too heavy to float, so it drifts down."
        }
      ]
    },
    {
      level: 5,
      title: "The Machine That Almost Worked",
      genre: 'fiction',
      passage: [
        "For six weeks, Imani had spent every afternoon in the garage building the Sock Sorter. The idea had come to her on laundry day, when she counted eleven socks without partners. Her machine used a tilted cardboard ramp, a row of slots, and a small fan to send long socks one way and short socks another.",
        "On the evening before the Lakeview Invention Fair, she ran one last test. Short socks tumbled neatly into their bin. The long ones, however, snagged on the ramp and piled up until the whole machine jammed. Imani adjusted the fan, sanded the ramp, and tried again. It jammed again. By bedtime, she had to admit that her invention worked only about half the time.",
        "\"You could just demonstrate it with short socks,\" suggested her older brother, Dev, leaning in the doorway. \"Nobody would ever know.\"",
        "Imani considered it. Then her eyes fell on her notebook, its pages crowded with sketches, crossed-out measurements, and reminders to try again. Those pages told the true story of the Sock Sorter, and somehow leaving them at home felt like telling a fib.",
        "The next morning, the school gymnasium buzzed with whirring motors and blinking lights. Imani set up her machine, propped the notebook open beside it, and added a hand-lettered sign explaining that the Sock Sorter worked only half the time.",
        "When a judge carrying a silver clipboard stopped at her table, Imani's stomach fluttered. She fed in a long sock, and it jammed, just as she had feared. Instead of frowning, the judge bent closer.",
        "\"Why do you think it catches right there?\" he asked.",
        "Imani explained her three theories: the ramp might be too steep, the cardboard might be too rough, or the fan might be aimed too low. The judge listened, flipped slowly through the notebook, and scribbled for a long time.",
        "The blue ribbon went to a boy with a solar-powered bird feeder. Then the judge announced one extra award, for the most thorough investigation, and called Imani's name. \"Inventors rarely succeed on the first try,\" he told the crowd. \"The best ones keep careful track of everything that goes wrong.\"",
        "That night, Imani taped the certificate inside her notebook and turned to a fresh page. At the top, she wrote the words \"Version 7\" and, beneath them, a plan for a smoother ramp."
      ],
      questions: [
        {
          skill: 'inference', type: 'mc', para: 9,
          q: "What does the last paragraph suggest about Imani?",
          options: [
            "She intends to keep improving the Sock Sorter.",
            "She believes the Sock Sorter is finally finished.",
            "She is still upset about losing the blue ribbon.",
            "She has decided to start a different invention."
          ],
          why: "Imani turns to a fresh page and writes \"Version 7\" with a plan for a smoother ramp, which shows she will keep working on the same machine."
        },
        {
          skill: 'vocab', type: 'mc', para: 7,
          q: "Read this sentence from the story: \"Imani explained her three theories: the ramp might be too steep, the cardboard might be too rough, or the fan might be aimed too low.\" What does the word \"theories\" mean as it is used here?",
          options: [
            "ideas that might explain something",
            "rules that everyone has to follow",
            "tools that are used for building",
            "promises to do better next time"
          ],
          why: "The judge asks why Imani thinks the sock catches, and each theory is a possible reason that \"might\" be true, so theories are ideas that might explain something."
        },
        {
          skill: 'theme', type: 'mc',
          q: "Which sentence best states a theme of the story?",
          options: [
            "Being honest about what goes wrong is an important part of doing good work.",
            "A clever idea has little value unless it earns the top prize in a contest.",
            "Brothers and sisters usually give the wisest advice when a problem comes up.",
            "Simple inventions tend to work much better than complicated ones in the end."
          ],
          why: "Imani chooses to show her machine's failures and her notebook instead of hiding them, and the judge honors her for keeping careful track of what goes wrong."
        },
        {
          skill: 'evidence', type: 'evidence',
          q: "Tap the sentence that best shows why Imani decides to bring her notebook to the fair.",
          answer: "Those pages told the true story of the Sock Sorter, and somehow leaving them at home felt like telling a fib.",
          why: "This sentence gives Imani's reason: the notebook holds the true story of her machine, and hiding it would feel dishonest."
        },
        {
          skill: 'character', type: 'multi', correct: 2,
          q: "Which details from the story best show that Imani does not give up easily? Choose TWO.",
          options: [
            "After the machine jams, she adjusts the fan and sands the ramp.",
            "Her notebook is crowded with reminders to try again.",
            "Her stomach flutters when the judge stops at her table.",
            "She gets the idea for her machine on laundry day.",
            "She watches the blue ribbon go to a boy with a bird feeder."
          ],
          why: "Fixing the fan and ramp after a failed test and filling a notebook with crossed-out attempts both show Imani trying again and again; the other details do not show effort."
        }
      ]
    }
  ]
};
