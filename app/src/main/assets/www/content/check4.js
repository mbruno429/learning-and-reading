/* Reading Check form 4 (after week 12). Cold read: no hints, no pre-taught words.
   In every mc / multi question the CORRECT option(s) are listed FIRST; the app shuffles. */
window.RQ_CHECKS = window.RQ_CHECKS || {};
window.RQ_CHECKS[4] = {
  passages: [
    {
      level: 2,
      title: `A Book Takes a Trip`,
      genre: 'info',
      passage: [
        `You drop a library book into the return slot. Thump! Where does it go next? The book may be about to take a trip.`,
        `First, the book slides down into a soft bin. A library worker picks it up and scans the code on its back cover. The beep tells the computer that the book has come back.`,
        `Next, the worker looks at the screen. Sometimes a child at a different library has asked for that same book. Then the book cannot go back on the shelf. It goes into a blue crate instead.`,
        `Early the next morning, a van pulls up. The driver loads the crates. She follows the same route each day. She goes from library to library across town, always in the same order.`,
        `At last, the book reaches the library where the child is waiting. A worker sets it on a special shelf with the child's name on a slip of paper. One book may ride many miles in a year. It may visit more places than you do!`
      ],
      questions: [
        {
          skill: 'detail', type: 'mc', para: 2,
          q: `According to the passage, why does a book sometimes go into a blue crate?`,
          options: [
            `A child at a different library has asked for it.`,
            `Its pages are torn and must be fixed.`,
            `There is no more room on the shelf.`,
            `It is a brand-new book that nobody has had a chance to read yet.`
          ],
          why: `Paragraph 3 says that when a child at a different library has asked for the book, it cannot go back on the shelf and goes into a blue crate instead.`
        },
        {
          skill: 'sequence', type: 'order',
          q: `Put these steps in the order they happen in the passage.`,
          items: [
            `The book slides down into a soft bin.`,
            `A worker scans the code on the book.`,
            `The book is put into a blue crate.`,
            `A van carries the book across town.`
          ],
          why: `The passage uses "First," "Next," and "Early the next morning" to show the order: the bin, the scan, the blue crate, and then the van.`
        },
        {
          skill: 'vocab', type: 'mc', para: 3,
          q: `Read this sentence from the passage: "She follows the same route each day." What does the word "route" mean?`,
          options: [
            `the path someone takes to get from place to place`,
            `the time that someone has to wake up in the morning`,
            `a list of the books that belong to a library`,
            `a box used for carrying heavy things`
          ],
          why: `The next sentence says the driver goes from library to library across town in the same order, so a "route" is the path she takes.`
        },
        {
          skill: 'mainidea', type: 'mc',
          q: `What is the main idea of this passage?`,
          options: [
            `A returned library book can travel to a reader at another library.`,
            `Library vans have to start driving early in the morning.`,
            `Children should always bring their library books back to the library on time.`,
            `A computer beeps when a library worker scans a book.`
          ],
          why: `Every paragraph follows the returned book on its way to a child at another library; the other choices are small details or are not in the passage.`
        },
        {
          skill: 'inference', type: 'mc', para: 4,
          q: `Why does the worker most likely put a slip of paper with the child's name on the shelf with the book?`,
          options: [
            `so the book goes to the child who asked for it`,
            `so the child can keep the book forever`,
            `so the driver knows where to take the book`,
            `so everyone at the library can see who read the book last`
          ],
          why: `The book was sent because one child asked for it, so the name on the slip shows which child the waiting book is for.`
        }
      ]
    },
    {
      level: 3,
      title: `Rain at Pine Lake`,
      genre: 'fiction',
      passage: [
        `Priya had waited all summer for the hike to Eagle Rock. Now she sat in the tent and listened to rain drumming steadily on the roof. It had started before breakfast, and it showed no sign of stopping.`,
        `She unzipped the door and peeked out. The campsite looked dismal. Gray clouds hung low over the lake, the fire pit had turned into a puddle, and her little brother Dev sat frowning under a dripping tree.`,
        `"No hike today," said Grandpa. "The trail is too slippery. But I have never let rain ruin a camping trip." He pulled a big green tarp from the car. Priya and Dev helped him tie its corners to four sturdy trees, and before long they had a dry roof with no walls.`,
        `Under the tarp, Grandpa lit the small camp stove and warmed a pot of vegetable soup while Dev set out a deck of cards. Priya shook her head when he held some out to her, and she stared at the rain and sighed.`,
        `Then she noticed something moving. A tiny orange newt was crawling across the wet moss, and another followed close behind it. "Grandpa, look!" she whispered. He explained that newts stay hidden on dry days and come out to walk when the forest is wet.`,
        `Priya pulled on her raincoat and crouched beside the moss. Before the soup was ready, she had counted eleven of the little animals. That evening, she drew one in her notebook. Under the drawing she wrote, "We would have missed these on a sunny day."`
      ],
      questions: [
        {
          skill: 'detail', type: 'mc', para: 2,
          q: `According to the story, why does the family NOT hike to Eagle Rock?`,
          options: [
            `The trail is too slippery.`,
            `Dev is too tired to walk that far.`,
            `Grandpa cannot find the way.`,
            `The soup is almost ready to eat.`
          ],
          why: `In paragraph 3 Grandpa says, "No hike today. The trail is too slippery."`
        },
        {
          skill: 'vocab', type: 'mc', para: 1,
          q: `Read this sentence from the story: "The campsite looked dismal." What does the word "dismal" mean?`,
          options: [
            `gloomy`,
            `crowded`,
            `peaceful`,
            `unsafe`
          ],
          why: `The next sentence describes low gray clouds, a fire pit full of water, and a frowning brother, so "dismal" means gloomy.`
        },
        {
          skill: 'inference', type: 'mc', para: 3,
          q: `Why does Priya most likely shake her head when Dev holds out the cards?`,
          options: [
            `She is still disappointed about missing the hike.`,
            `She does not know how to play the card game.`,
            `She is upset with Dev for frowning all morning.`,
            `She wants to help Grandpa cook the soup on the stove instead.`
          ],
          why: `Priya waited all summer for the hike, and in paragraph 4 she stares at the rain and sighs, which shows she is still sad about losing it.`
        },
        {
          skill: 'mainidea', type: 'mc',
          q: `What is this story mostly about?`,
          options: [
            `A girl finds something special on a day when rain spoils her plans.`,
            `A grandfather shows two children the right way to hang a tarp.`,
            `A brother and sister argue on a camping trip and then make up.`,
            `A family finally reaches Eagle Rock after a long and rainy hike.`
          ],
          why: `The story begins with Priya's hike being rained out and ends with her happily counting and drawing newts that only come out when the forest is wet.`
        },
        {
          skill: 'evidence', type: 'evidence',
          q: `Tap the sentence that explains why the newts were out walking on this rainy day.`,
          answer: `He explained that newts stay hidden on dry days and come out to walk when the forest is wet.`,
          why: `This sentence gives the reason: newts hide when it is dry and come out only when the forest is wet.`
        }
      ]
    },
    {
      level: 5,
      title: `Mapping the World on Foot`,
      genre: 'info',
      passage: [
        `Today, satellites circle high above Earth and photograph every coastline, river, and road. A phone can show you a map of almost any place in seconds. Yet people drew surprisingly accurate maps for hundreds of years before anything flew in space. How did they manage it?`,
        `The answer begins with patient workers called surveyors. A surveyor's job was to measure the land. One early tool was a metal chain exactly sixty-six feet long. Two workers stretched it tight along the ground, marked the spot where it ended, and then moved it forward, again and again. Measuring a single mile took eighty lengths of the chain.`,
        `Dragging a chain across a whole country, over mountains and swamps, would have been nearly impossible. So surveyors relied on a clever shortcut that used triangles. First, they measured one straight line with great care. Next, they stood at each end of that line and aimed an instrument at a distant landmark, such as a hilltop or a church tower. The instrument told them the angle between the line and the landmark. Once they knew one side and two angles of a triangle, they could work out the lengths of the other two sides with mathematics. No one had to walk them. Each new side then became the starting line for another triangle, and slowly a web of triangles spread across the map.`,
        `The sea posed a different problem. Sailors charting a coast could not stretch a chain over the waves. Instead, they noted the ship's direction with a compass and estimated how far it had sailed. To learn the depth of the water, they lowered a rope with a heavy lead weight on the end until it struck the bottom. These numbers were written on charts so that later ships could avoid hidden rocks and shallow places.`,
        `All of this work was tedious. Surveyors repeated the same slow steps day after day, and a large map could take longer than a lifetime to finish. In France, four generations of the Cassini family worked on a single detailed map of their country. Mapmakers also made mistakes, and some old maps show islands that do not exist. Even so, many of their measurements were so careful that modern tools have confirmed them. Their maps remind us that patience and mathematics can do work that seems to need a machine.`
      ],
      questions: [
        {
          skill: 'inference', type: 'mc', para: 2,
          q: `Based on paragraph 3, why was it important for surveyors to measure the first line "with great care"?`,
          options: [
            `The lengths they calculated afterward all depended on it.`,
            `It was always the longest line they would need for the whole map.`,
            `Their chains wore out after they had been used a single time.`,
            `Landmarks such as hilltops were easy to see only from that line.`
          ],
          why: `Paragraph 3 says the other sides were calculated from the measured line and each new side started another triangle, so a mistake in the first line would spread through the whole map.`
        },
        {
          skill: 'vocab', type: 'mc', para: 4,
          q: `Read this sentence from paragraph 5: "All of this work was tedious." What does the word "tedious" mean as it is used in the passage?`,
          options: [
            `slow and tiresome`,
            `risky and frightening`,
            `secret and mysterious`,
            `simple and quickly done`
          ],
          why: `The next sentence says surveyors repeated the same slow steps day after day and a map could take longer than a lifetime, so "tedious" means slow and tiresome.`
        },
        {
          skill: 'mainidea', type: 'mc',
          q: `Which sentence best states the main idea of the passage?`,
          options: [
            `Long before satellites, people made accurate maps through careful measuring and mathematics.`,
            `Satellites and phones have made the difficult work of surveyors and sailors unnecessary.`,
            `Old maps contain so many mistakes that sailors and travelers could not rely on them.`,
            `The Cassini family spent four generations making one detailed map of France by hand.`
          ],
          why: `The passage asks how people mapped the world before satellites and answers with chains, triangles, compasses, and depth measurements; the other choices are single details or are not supported.`
        },
        {
          skill: 'evidence', type: 'evidence',
          q: `Tap the sentence that shows how the measurements sailors took helped other people.`,
          answer: `These numbers were written on charts so that later ships could avoid hidden rocks and shallow places.`,
          why: `This sentence tells who was helped and how: later ships used the recorded numbers to stay away from rocks and shallow water.`
        },
        {
          skill: 'compare', type: 'multi', correct: 2, para: 3,
          q: `According to the passage, how was mapping a coast from a ship different from mapping the land? Choose TWO answers.`,
          options: [
            `Sailors had to estimate distance instead of measuring it with a chain.`,
            `Sailors measured how deep the water was.`,
            `Sailors finished their charts in far less time.`,
            `Sailors worked without any tools at all.`,
            `Sailors never made mistakes on their charts.`
          ],
          why: `Paragraph 4 says sailors could not stretch a chain over the waves, so they estimated how far the ship had sailed, and they lowered a weighted rope to learn the depth of the water.`
        }
      ]
    }
  ]
};
