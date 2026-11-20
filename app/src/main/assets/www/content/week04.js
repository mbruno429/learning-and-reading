window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[4] = {
  strategy: {
    name: 'Character Clues',
    icon: '🎭',
    tagline: 'Actions and words show who a character is!',
    steps: [
      'Watch what the character DOES. Actions are big clues.',
      'Listen to what the character SAYS and THINKS.',
      'Ask: How does the character feel? What word fits this person: brave, kind, shy, or bossy?',
      'Look for a change. Is the character different at the end of the story? Why?'
    ],
    example: {
      text: 'Nina saw a new girl sitting alone at recess. She walked over and said, "Want to play with us?"',
      q: 'What word describes Nina?',
      a: 'Kind. She saw someone who was alone and asked her to play. Her actions and words are the clues.'
    },
    practice: [
      {
        text: 'Sam dropped his sandwich in the dirt at lunch. Ben broke his own sandwich in two and held out half. "Here," he said. "We can share."',
        q: 'Which word BEST describes Ben?',
        options: ['Generous', 'Careless', 'Bashful'],
        why: 'Look at what Ben DOES and SAYS. He gives away half of his own lunch and says, "We can share." Giving what you have to help someone is being generous.'
      },
      {
        text: 'Ivy read her poem to the class in a tiny voice, and the paper shook in her hands. When everyone clapped, she stood up taller. "May I read one more?" she asked with a grin.',
        q: 'How did Ivy CHANGE from the start to the end?',
        options: ['She went from nervous to confident.', 'She went from cheerful to angry.', 'She went from bored to sleepy.'],
        why: 'A tiny voice and a shaking paper are clues that Ivy was nervous at first. Standing taller, grinning, and asking to read again show that she felt confident at the end.'
      }
    ]
  },
  sessions: [
    {
      id: 'w4d1',
      title: 'No More Little Wheels',
      genre: 'fiction',
      sticker: { emoji: '🚲', name: 'Brave Bike' },
      purpose: 'Read to find out what happens when Theo tries to ride without his training wheels.',
      stops: [
        { after: 3, q: 'What is the problem so far?', options: ['Theo wants to give up on riding.', 'Theo cannot find his bike bell.', 'Maya will not help Theo ride.'], say: 'Yes! After three shaky tries, Theo wants to put the little wheels back on.' }
      ],
      vocab: [
        { word: 'steady', def: 'not shaking or wobbling', ex: 'Hold the ladder steady while I climb.' },
        { word: 'promised', def: 'said that you would surely do something', ex: 'Dad promised to read one more chapter tonight.' },
        { word: 'tease', def: 'to make fun of someone', ex: 'It is not kind to tease your little sister.' }
      ],
      passage: [
        'Theo stood in the driveway and frowned at his bicycle, because that morning Dad had taken off the training wheels. Without them, the bike looked skinny and wild, like a horse that did not want a rider.',
        '"I will hold the seat, and I will not let go until you are steady," Maya promised.',
        'Theo climbed on. His hands squeezed the handlebars so tightly that his knuckles turned white. The bike wobbled to the left, and then it wobbled to the right. After three shaky tries, Theo hopped off and kicked a pebble across the driveway.',
        `"I can't do it," he muttered, so softly that Maya could hardly hear him. "I'm putting the little wheels back on."`,
        'Maya did not laugh or tease him. Instead, she sat down on the curb and patted the spot beside her. "I fell off eleven times when I was learning," she said. "I counted. Want to see my scar?" She showed him a tiny mark on her knee.',
        'Theo looked at the scar, and then he looked at the bike. He took a deep breath and climbed back on.',
        `This time he pedaled harder, and the wobbling stopped. Wind rushed past his ears. "Don't let go yet!" he yelled.`,
        '"I let go back at the mailbox!" Maya called from far behind him.',
        'Theo was riding all by himself! He was so surprised that he completely forgot to be scared, and he rang his bell all the way to the corner.'
      ],
      questions: [
        { type: 'mc', skill: 'character', q: 'How does Theo feel when he FIRST climbs on the bike?', options: ['Nervous', 'Excited', 'Bored', 'Proud'], para: 2, hint: 'Look at what his hands and knuckles are doing. What feeling makes you hold on that tightly?', why: 'Theo squeezed the handlebars "so tightly that his knuckles turned white." That action shows he was nervous.' },
        { type: 'mc', skill: 'character', q: 'Which word BEST describes Maya in this story?', options: ['Patient', 'Bossy', 'Curious', 'Shy'], para: 4, hint: 'Think about what Maya does when Theo wants to quit. Does she rush him or make fun of him?', why: 'Maya "did not laugh or tease him" when he wanted to quit. She did not rush him. She sat down, shared her own story, and let him try again when he was ready. That is being patient.' },
        { type: 'mc', skill: 'vocab', q: '"I can\'t do it," he muttered. What does "muttered" mean?', options: ['Said in a low, unhappy voice', 'Shouted in a loud, happy voice', 'Sang in a silly, squeaky voice', 'Asked in a sweet, polite voice'], para: 3, hint: 'Theo has just failed three times and kicked a pebble. Could Maya hear him well? How would his voice sound?', why: 'Theo was upset and wanted to quit, and Maya "could hardly hear him." So "muttered" means he said it in a low, unhappy voice.' },
        { type: 'mc', skill: 'character', q: 'WHY did Maya tell Theo that she fell off eleven times?', options: ['To show that falling is part of learning', 'To show him that bikes are not safe', 'To brag about her scar', 'To make him feel bad'], para: 4, hint: 'Think about how Theo felt just before Maya told her story. What did she want him to do next?', why: 'Theo wanted to quit. Maya shared that she fell many times and still learned, so he would try again.' },
        { type: 'evidence', skill: 'character', q: 'Tap the sentence that shows Theo decided to TRY AGAIN.', answer: 'He took a deep breath and climbed back on.', para: 5, hint: 'Look right after Maya shows her scar. What does Theo do?', why: 'Taking a deep breath and climbing back on is an action. It shows Theo found the courage to try again.' }
      ],
      talk: 'Tell a grown-up: How did Theo feel at the start? How did he feel at the end? What did Maya do to help?'
    },
    {
      id: 'w4d2',
      title: 'The Squirrel and the Snail',
      genre: 'fable',
      sticker: { emoji: '🐌', name: 'Wise Shelly' },
      purpose: 'Read to find out what happens when a speedy squirrel meets a very slow snail.',
      stops: [
        { after: 4, q: 'What is the problem so far?', options: ['Pico is hungry and cannot find his acorns.', 'Shelly is lost and alone in the deep snow.', 'Pico is too cold to run fast any more.'], say: 'Right! Winter is here, and Pico cannot remember where his acorns are.' }
      ],
      vocab: [
        { word: 'bragged', def: 'talked too proudly about yourself', ex: 'He bragged that he was the best singer in school.' },
        { word: 'notice', def: 'to see or pay attention to something', ex: 'Did you notice my new haircut?' },
        { word: 'inching', def: 'moving very slowly, a tiny bit at a time', ex: 'The caterpillar was inching up the stem.' }
      ],
      passage: [
        'Pico the squirrel was the fastest animal in Heartwood Forest, and he made sure everyone knew it. "Zip! Zoom! Did you see me?" he bragged as he raced up and down the oak trees.',
        'One autumn day, he raced past Old Shelly the snail, who was inching along a root. "You are so slow that moss could grow on you," Pico laughed. "What can you even do at that speed?"',
        '"I notice things," Shelly said calmly. Pico rolled his eyes and dashed away.',
        'All autumn, Pico buried acorns as fast as he could. He dug a hole here and a hole there, and he never stopped to look around.',
        'Then winter came. Snow covered the forest floor like a thick white quilt. Pico was terribly hungry, but he could not remember where a single acorn was hidden. He dug and dug and found only frozen dirt.',
        'At last his paws were too tired to dig any more. Cold and worried, he slumped beside a root. There was Shelly, tucked under a leaf.',
        '"Three acorns under the crooked stump," she said softly. "Five beside the blue rock. Seven by the fallen birch tree. I was passing by, slowly, when you buried them."',
        'Pico found every one. Then he came back and sat down beside Shelly. For once, he did not say a word about being fast. "Thank you," he said quietly. "Will you teach me how to notice things?"'
      ],
      questions: [
        { type: 'mc', skill: 'character', q: 'Which word BEST describes Pico at the BEGINNING of the fable?', options: ['Boastful', 'Patient', 'Lazy', 'Shy'], para: 0, hint: 'Reread what Pico says as he races up the trees. What kind of animal talks about himself like that?', why: 'Pico "made sure everyone knew" he was the fastest, and he bragged. A character who brags a lot is boastful.' },
        { type: 'mc', skill: 'character', q: 'How is Shelly DIFFERENT from Pico?', options: ['She takes her time and pays attention.', 'She runs faster than Pico does.', 'She likes to laugh at the other animals.', 'She forgets where things are.'], para: 2, hint: 'Look at what Shelly says she can do. Then think about how she knew where the acorns were.', why: 'Shelly moves slowly and says, "I notice things." Pico rushes and "never stopped to look around."' },
        { type: 'mc', skill: 'vocab', q: '"Cold and worried, he slumped beside a root." What does "slumped" mean?', options: ['Dropped down in a tired, sad way', 'Jumped up in a quick, joyful way', 'Climbed up in a fast, easy way', 'Dug down in a slow, careful way'], para: 5, hint: 'Pico is cold, worried, and too tired to dig. How would his body move when he stops?', why: 'Pico had dug and dug and found nothing. He was tired and sad, so he dropped down beside the root.' },
        { type: 'mc', skill: 'detail', q: 'WHY could Pico not find his acorns in the winter?', options: ['He hid them too fast to remember where.', 'Shelly moved them to new spots.', 'Other squirrels dug them up and ate them.', 'He never buried any acorns.'], para: 3, hint: 'Go back to the paragraph about autumn. HOW did Pico bury his acorns?', why: 'Pico buried acorns "as fast as he could" and "never stopped to look around," so he could not remember the spots.' },
        { type: 'evidence', skill: 'character', q: 'Tap the sentence that shows Pico has stopped BRAGGING.', answer: 'For once, he did not say a word about being fast.', para: 7, hint: 'Look in the last paragraph. Find the sentence about what Pico does NOT do.', why: 'At the start Pico bragged about his speed all the time. Now he does not say a word about it. He has changed.' }
      ],
      talk: 'Tell a grown-up: How did Pico act at the start of the fable? How did he act at the end? What changed him?'
    },
    {
      id: 'w4d3',
      title: 'A Letter About the Talent Show',
      genre: 'letter',
      sticker: { emoji: '🏅', name: 'Teamwork Ribbon' },
      purpose: 'Read to find out what happened when Luis and his dog went on stage.',
      stops: [
        { after: 3, q: 'What is the problem so far?', options: ['Biscuit will not do his trick.', 'Luis left the hoop at home.', 'Biscuit ran off the stage.'], say: 'Yes! Biscuit was perfect at home, but on stage he just sits, lies down, and yawns.' }
      ],
      vocab: [
        { word: 'practiced', def: 'did something again and again to get better at it', ex: 'I practiced my spelling words every night.' },
        { word: 'froze', def: 'stopped moving all at once', ex: 'The rabbit froze when it heard the dog bark.' },
        { word: 'deserved', def: 'earned something by what you did', ex: 'She worked hard and deserved the gold star.' }
      ],
      passage: [
        'Dear Mateo,',
        'You will not believe what happened at the school talent show on Friday. I am still smiling as I write this.',
        'You know I have been teaching Biscuit to jump through a hoop. We practiced every day after school for three weeks. At home he was perfect. But when we walked onto the stage and Biscuit saw all those people, he froze like a statue. My face felt hot, and my heart pounded like a drum.',
        'I held up the hoop, and Biscuit sat down. I held it lower, and Biscuit lay down and yawned. Somebody giggled in the back row, and I wanted to disappear.',
        'Then I remembered what Grandma Rosa always says: "When the plan falls apart, make a new plan." So I climbed through the hoop myself! I hopped through it, crawled through it, and even wore it like a giant necklace. Biscuit thought this was a wonderful game. He barked, wagged his tail, and finally leaped through the hoop after me. The whole audience clapped and cheered.',
        `We did not win first prize. A girl named Priya won for playing the violin, and she truly deserved it. But Ms. Tanaka gave us a ribbon that says "Best Teamwork," and I hung it on Biscuit's bed.`,
        'Come visit soon. Biscuit and I will teach you the trick!',
        'Your cousin, Luis'
      ],
      questions: [
        { type: 'mc', skill: 'character', q: 'How did Luis feel when Biscuit would not jump?', options: ['Embarrassed', 'Sleepy', 'Proud', 'Calm'], para: 3, hint: 'Look at what Luis wanted to do when somebody giggled. Then look one paragraph higher for clues about his face and his heart.', why: 'His face felt hot, his heart pounded, and he "wanted to disappear." Those clues show he was embarrassed.' },
        { type: 'mc', skill: 'character', q: 'Which word BEST describes Luis when his plan fell apart?', options: ['Creative', 'Grumpy', 'Serious', 'Lazy'], para: 4, hint: 'Think about what Luis did with the hoop after Biscuit lay down. Was that the plan he had practiced?', why: 'Luis made up a brand-new act on the spot by going through the hoop himself. Thinking of new ideas is being creative.' },
        { type: 'mc', skill: 'character', q: 'What does the letter show about how Luis feels about Priya?', options: ['He thinks she earned the prize.', 'He is angry that she won.', 'He thinks the contest was unfair.', 'He wishes she had not played.'], para: 5, hint: 'Reread the sentence about Priya and her violin. Look at the last few words.', why: 'Luis writes that Priya "truly deserved it." He is a good sport who is glad for the winner.' },
        { type: 'mc', skill: 'vocab', q: '"The whole audience clapped and cheered." Who is the "audience"?', options: ['The people watching the show', 'The dogs in the show', 'The teachers giving prizes', 'The children on the stage'], para: 4, hint: 'Who claps and cheers at a talent show? Remember the "people" Biscuit saw from the stage.', why: 'The people who came to watch the show clapped. An audience is the group of people who watch a show.' },
        { type: 'order', skill: 'sequence', q: 'Put the events from the letter in order.', items: ['Biscuit froze on the stage.', 'Luis climbed through the hoop himself.', 'Biscuit leaped through the hoop.', 'The audience clapped and cheered.', 'Luis hung the ribbon on the dog bed.'], hint: 'Follow the letter from the top. What went wrong first? How did Luis fix it?', why: 'Biscuit froze, so Luis went through the hoop. Then Biscuit jumped, the audience cheered, and later Luis hung up the ribbon.' }
      ],
      talk: 'Tell a grown-up: What kind of person is Luis? Name two things he did or wrote that prove it.'
    },
    {
      id: 'w4d4',
      title: 'Jane and the Chimpanzees',
      genre: 'bio',
      sticker: { emoji: '🐒', name: 'Curious Chimp' },
      purpose: 'Read to find out how Jane Goodall got to know the wild chimpanzees.',
      stops: [
        { after: 1, q: 'Why did Jane travel to a forest in Africa?', options: ['To study wild chimpanzees', 'To visit a farm with hens', 'To live near her family'], say: 'Right! Jane went to Africa to study wild chimps, because almost nothing was known about them.' }
      ],
      vocab: [
        { word: 'curiosity', def: 'a strong wish to learn about things', ex: 'Her curiosity made her open every book on the shelf.' },
        { word: 'quietly', def: 'without making much noise', ex: 'We tiptoed quietly past the sleeping baby.' },
        { word: 'scientists', def: 'people who study the world to learn how it works', ex: 'Scientists use telescopes to study the stars.' }
      ],
      passage: [
        'When Jane Goodall was a little girl in England, she wanted to know everything about animals. One day she disappeared for hours. Her family searched everywhere. At last Jane came out of the henhouse, covered in straw. She had been sitting very still the whole time, waiting to see how a hen lays an egg.',
        'Jane never lost that curiosity. In 1960, when she was twenty-six years old, she traveled to a forest in Africa. She went there to study wild chimpanzees, or chimps. Almost nothing was known about how they lived.',
        'At first, the chimps wanted nothing to do with her. Every time Jane came near, they ran away. Many people would have given up and gone home. Jane did not. Day after day, she climbed to the same hilltop and watched quietly from far away. She let the chimps get used to her, little by little.',
        'After a few months, an older chimp finally let her come close. Jane named him David Greybeard. One morning she watched him poke a long stem of grass into a termite nest. When he pulled the stem out, it was covered with bugs, and he ate them. He was using a tool! Until then, most scientists thought that only people used tools.',
        'This discovery surprised the world. For the rest of her long life, Jane kept learning about chimps. She also taught people everywhere to care for animals and the forests where they live.'
      ],
      questions: [
        { type: 'mc', skill: 'character', q: 'Which word BEST describes Jane Goodall?', options: ['Patient', 'Talkative', 'Fearful', 'Careless'], para: 2, hint: 'Think about what Jane did when the chimps kept running away. How long did she keep trying?', why: 'Jane watched from the same hilltop "day after day" for months. Waiting calmly for a long time is being patient.' },
        { type: 'mc', skill: 'character', q: 'What does the henhouse story show about Jane as a child?', options: ['She was very curious about animals.', 'She liked to hide from her family.', 'She was afraid of the hens.', 'She did not like to sit still.'], para: 0, hint: 'Ask WHY Jane sat in the henhouse for hours. What did she want to find out?', why: 'Jane sat still for hours "waiting to see how a hen lays an egg." That shows how curious she was about animals.' },
        { type: 'mc', skill: 'vocab', q: '"This discovery surprised the world." What is a "discovery"?', options: ['Something new that a person finds out', 'A long trip to a forest far from home', 'A wild animal that lives in the forest', 'A tool that is made from a grass stem'], para: 4, hint: 'Reread the end of the paragraph before this one. What did Jane learn that scientists had not known?', why: 'Jane found out that chimps use tools. That was news to scientists. A discovery is something new that a person finds out.' },
        { type: 'mc', skill: 'mainidea', q: 'What is this passage MOSTLY about?', options: ['How Jane Goodall learned about chimpanzees', 'How Jane Goodall sat in a henhouse as a girl', 'How a chimp used a grass stem to catch bugs', 'Why the chimps ran away from Jane at first'], hint: 'Use the umbrella test. Which answer covers Jane as a girl, her trip to Africa, AND what she found?', why: 'The henhouse, the grass stem, and the chimps running away are each just one part. Only this answer covers the whole passage: how Jane kept watching and learning about chimps.' },
        { type: 'evidence', skill: 'character', q: 'Tap the sentence that tells what Jane DID over and over instead of giving up.', answer: 'Day after day, she climbed to the same hilltop and watched quietly from far away.', para: 2, hint: 'Look in the paragraph where the chimps run away. Find the sentence that describes her action.', why: 'This sentence shows her action: she kept climbing the hilltop and watching. Actions prove that she did not give up.' }
      ],
      talk: 'Tell a grown-up: What kind of person was Jane Goodall? What did she do that proves it?'
    },
    {
      id: 'w4d5',
      boss: true,
      title: 'The Fort in the Maple Tree',
      genre: 'fiction',
      sticker: { emoji: '🌳', name: 'Friends Fort' },
      purpose: 'Read to find out what Maya does when a new girl wants to see the fort.',
      stops: [
        { after: 2, q: 'What is TRUE about the fort when Maya says it is full?', options: ['It still has plenty of room.', 'It has no space left at all.', 'It is not finished yet.'], say: 'Yes! Maya said the fort was full, "although there was plenty of room." She was not telling the truth.' }
      ],
      vocab: [
        { word: 'appeared', def: 'came into view', ex: 'A rainbow appeared after the storm.' },
        { word: 'plenty', def: 'more than enough of something', ex: 'We have plenty of apples for everyone.' },
        { word: 'marched', def: 'walked with strong, quick steps', ex: 'The band marched across the field.' }
      ],
      passage: [
        'Maya, Luis, and Theo had spent the whole summer building a fort in the old maple tree behind the Ortega house. It had a rope ladder, a bucket on a pulley, and a sign that Maya had painted herself: MEMBERS ONLY.',
        'One afternoon, a new girl appeared at the bottom of the tree. Her name was Amara, and her family had just moved in across the street. "That is the best fort I have ever seen," she said. "Can I come up?"',
        'Luis and Theo looked at Maya. Maya crossed her arms. "The fort is full," she said, although there was plenty of room. The smile on Amara\'s face faded. She nodded and walked slowly home.',
        'All evening, Maya felt as if she had a stone in her stomach. She remembered her own first day at school, when nobody saved her a seat at lunch. She remembered how long that lunch had felt.',
        'The next morning, Maya got up early. First, she found a paintbrush. Next, she climbed the rope ladder and painted new words on the sign. Then she marched across the street and knocked on the door of the new house.',
        '"I was wrong yesterday," Maya said when Amara opened it. Her cheeks were warm, but she kept going. "There is room. Do you want to see?"',
        'Amara followed her to the maple tree and looked up. The sign now said FRIENDS WELCOME.',
        'It turned out that Amara knew how to tie five kinds of knots. By the end of the week, the fort had a swing, a flag, and four members.'
      ],
      questions: [
        { type: 'mc', skill: 'character', q: 'How did Amara feel when Maya said the fort was full?', options: ['Hurt', 'Angry', 'Excited', 'Bored'], para: 2, hint: 'Look at what happened to her smile and how she walked home. What feeling do those clues show?', why: 'Her smile faded, and she "walked slowly home." Those actions show that her feelings were hurt.' },
        { type: 'mc', skill: 'character', q: 'WHY did Maya feel "as if she had a stone in her stomach"?', options: ['She felt bad about how she treated Amara.', 'She ate too much at dinner.', 'She was afraid the fort would fall in the night.', 'She was mad at Luis and Theo.'], para: 3, hint: 'Maya felt this way all evening, right after Amara walked home. What was she thinking about?', why: 'Maya told Amara the fort was full when it was not, and Amara walked home sad. The heavy "stone" feeling shows that Maya felt bad about what she had done.' },
        { type: 'mc', skill: 'character', q: 'What made Maya change her mind about letting Amara in?', options: ['She remembered being left out herself.', 'Luis and Theo said she should say sorry.', 'She found out Amara could tie knots.', 'Her mother said she had to be nice.'], para: 3, hint: 'Read the paragraph about Maya that evening. What does she remember?', why: 'Maya remembered her first day at school, "when nobody saved her a seat at lunch." She knew how Amara felt.' },
        { type: 'mc', skill: 'vocab', q: '"The smile on Amara\'s face faded." What does "faded" mean?', options: ['Slowly went away', 'Grew much bigger', 'Turned into a laugh', 'Stayed just the same'], para: 2, hint: 'Amara was just told she could not come up. What would happen to a happy smile?', why: 'Amara was smiling when she asked to come up. After Maya said no, her smile slowly went away.' },
        { type: 'order', skill: 'sequence', q: 'Put the story in order.', items: ['Maya said the fort was full.', 'Maya remembered her first day at school.', 'Maya painted new words on the sign.', 'Maya knocked on the door across the street.', 'The fort got a fourth member.'], hint: 'Look for the time words: One afternoon, All evening, The next morning, First, Next, Then.', why: 'Maya turned Amara away, felt bad that evening, and fixed the sign and said sorry the next morning. Then Amara joined.' },
        { type: 'evidence', skill: 'character', q: 'Tap the sentence that shows it was HARD for Maya to say she was wrong, but she did it anyway.', answer: 'Her cheeks were warm, but she kept going.', para: 5, hint: 'Find the part where Maya talks to Amara at the door. Look for a clue about how her face felt.', why: 'Warm cheeks show that Maya felt embarrassed. "She kept going" shows she was brave enough to finish saying sorry.' },
        { type: 'mc', skill: 'detail', q: 'WHAT did the sign say at the END of the story?', options: ['FRIENDS WELCOME', 'MEMBERS ONLY', 'THE FORT IS FULL', 'KEEP OUT'], para: 6, hint: 'Find the part where Amara looks up at the maple tree.', why: 'The text says, "The sign now said FRIENDS WELCOME."' },
        { type: 'mc', skill: 'mainidea', q: 'What is this story MOSTLY about?', options: ['A girl learns to welcome a new friend.', 'Three friends build a fort in a tree.', 'A new girl teaches others to tie knots.', 'A boy paints a sign for his fort.'], hint: 'Use the umbrella test. Which answer covers the problem, the change in Maya, AND the ending?', why: 'Maya leaves Amara out, feels bad, and then welcomes her. The fort and the knots are only small parts of the story.' }
      ],
      talk: 'Tell a grown-up: How did Maya change from the beginning of the story to the end? What made her change?'
    }
  ]
};
