window.RQ_WEEKS = window.RQ_WEEKS || {};
window.RQ_WEEKS[10] = {
  strategy: {
    name: 'Who Is Telling? Why Write?',
    icon: '👀',
    tagline: 'Every text has a teller and a reason.',
    steps: [
      'Find the teller. Look at the words OUTSIDE the quotation marks. "I," "me," and "we" mean first person: the narrator is inside the story. "He," "she," and "they" mean third person: the narrator watches from outside.',
      'Ask how the teller FEELS. Two people can describe the very same event in very different ways.',
      'Find the author\'s purpose with PIE: Persuade (change your mind), Inform (teach you facts), or Entertain (tell a good story).',
      'Sort facts from opinions. A fact can be checked and proved. An opinion is what someone thinks; watch for words like "best," "should," and "I believe."'
    ],
    example: {
      text: 'Broccoli is a green vegetable. I think it tastes like a tiny, terrible tree, and nobody should ever have to eat it.',
      q: 'Which part is a FACT? What is the author\'s purpose?',
      a: 'Fact: broccoli is a green vegetable. The rest is opinion (notice "I think" and "should"). The author is trying to persuade you, in a funny way.'
    },
    practice: [
      {
        text: 'Our class hamster, Pepper, escaped on Monday. I searched under every desk while my teacher checked the coat closet. At last I found him, fast asleep inside my own backpack!',
        q: 'Who is telling this, and how can you tell?',
        options: ['A student in the class: the teller says "I" and "my."', 'An outside narrator: the teller only says "he" and "they."', 'Pepper the hamster: the story is all about him.'],
        why: 'The teller says "I searched" and "my teacher," so this is first person. Someone with a teacher and a backpack is a student, not the hamster.'
      },
      {
        text: 'Sea otters often sleep while floating on their backs. Some wrap themselves in seaweed so that they will not drift away. Otters are the cutest animals in the whole ocean, and everyone should help protect them.',
        q: 'Which sentence is an OPINION that tries to persuade you?',
        options: ['Otters are the cutest animals, and everyone should help protect them.', 'Sea otters often sleep while floating on their backs.', 'Some wrap themselves in seaweed so that they will not drift away.'],
        why: 'How otters sleep can be checked, so those sentences are facts. "Cutest" is a judgment, and "should" tells you what to do, so the last sentence is an opinion meant to persuade.'
      }
    ]
  },
  sessions: [
    {
      id: 'w10d1',
      title: 'The Wrong Lunch Table',
      genre: 'fiction',
      sticker: { emoji: '🥣', name: 'Wobbly Soup' },
      purpose: 'Read to find out how a new girl\'s first day at school surprises her.',
      stops: [
        { after: 1, q: 'What is Amara\'s problem so far?', options: ['She is new and has nowhere to sit.', 'She cannot find her new classroom.', 'She spilled soup on another student.'], say: 'Yes! Amara is the new girl, and the loud, crowded cafeteria makes her very nervous.' },
        { after: 3, q: 'What has Amara decided about the girl with the braids?', options: ['She is stuck-up and unfriendly.', 'She is shy and wants a friend.', 'She is the funniest girl at school.'], say: 'Right. Amara has made up her mind about the girl after only one look.' }
      ],
      vocab: [
        { word: 'expert', def: 'a person who knows a lot about something', ex: 'My aunt is an expert on birds and can name every one.' },
        { word: 'approached', def: 'came closer to someone or something', ex: 'The cat ran off as we approached the gate.' },
        { word: 'fascinated', def: 'very interested', ex: 'The children were fascinated by the magician\'s tricks.' },
        { word: 'avoided', def: 'stayed away from', ex: 'We avoided the puddles on our walk home.' }
      ],
      passage: [
        `I have changed schools three times, so I consider myself an expert on first days. The worst part is never the classroom, where a teacher tells you exactly where to sit. The worst part is always the cafeteria, where nobody tells you anything.`,
        `On my first day at Riverbend Elementary, I stood at the edge of that enormous room, clutching my tray like a shield. The noise roared around me like a stadium during a championship game. Every table looked full, and I was certain that every single person was staring at the new girl and her wobbling bowl of soup. I did not have the smallest doubt about it. My stomach felt just as wobbly as the soup did.`,
        `Then I spotted an empty seat near the window. A girl with two long braids sat across from it, and as I approached, she looked straight at me and frowned. Her eyebrows scrunched together as though I had tracked mud across her kitchen floor. Obviously, she did not want me there. My face grew hot. I turned around so quickly that my soup sloshed over the rim, and I spent the next twenty minutes eating alone beside the trash cans, pretending to be fascinated by my crackers.`,
        `All afternoon, I avoided the girl with the braids. I had already decided what kind of person she was: stuck-up, unfriendly, and definitely not someone I wanted to know. I even imagined her whispering about my soup to her friends.`,
        `At dismissal, however, she marched right up to me at the coat hooks. I braced myself for something unkind.`,
        `"I'm Priya," she said breathlessly. "I was trying to remember your name at lunch so I could call you over, but I couldn't, and then you left before I figured it out. It's Amara, right? I practiced it."`,
        `I blinked. The frown hadn't been a frown at all. It had been a girl thinking hard. I thought about everything I had "known" about her for the past five hours, and my face grew hot for the second time that day.`,
        `"Right," I said. "Amara."`,
        `"Good. Sit with us tomorrow," Priya said. "But I should warn you that Devon tells terrible jokes, and we are all required to laugh."`,
        `The next day, the cafeteria was exactly as loud as it had been before. Strangely, though, it no longer sounded like a roaring stadium. It sounded like a few hundred kids eating lunch, and one of them was waving at me from a table by the window. I waved back, and I didn't spill a single drop.`
      ],
      questions: [
        { type: 'mc', skill: 'pov', q: 'From whose point of view is this story told?', options: ['Amara\'s, in the first person', 'Priya\'s, in the first person', 'A teacher\'s, in the third person', 'An outside narrator\'s, in the third person'], para: 0, hint: 'Look for the words "I" and "my." Then figure out which character that "I" is.', why: 'The narrator says "I" and "my" throughout, and Priya calls her Amara. The story is told by Amara in the first person.' },
        { type: 'mc', skill: 'pov', q: 'How does Amara\'s point of view affect the way the cafeteria is described in the second paragraph?', options: ['Her nervousness makes it seem louder and less friendly than it really is.', 'Her excitement makes it seem like a wonderful celebration.', 'Her boredom makes it seem dull, gray, and silent.', 'Her hunger makes the food seem especially delicious.'], para: 1, hint: 'Compare the cafeteria on the first day with the same cafeteria in the last paragraph. Did the room change, or did Amara?', why: 'At first Amara hears a "roaring stadium" and is sure everyone is staring. Later the same room is just "a few hundred kids eating lunch." Her nervous feelings shaped the description.' },
        { type: 'mc', part: 'A', skill: 'pov', q: 'Part A: If Priya were telling this story, what would readers learn during lunch that Amara does not know?', options: ['Priya was trying hard to remember Amara\'s name.', 'Priya did not want anyone sitting at her table.', 'Priya was whispering about Amara\'s soup.', 'Priya thought the cafeteria was too loud.'], para: 5, hint: 'A first-person narrator knows only her own thoughts. Read what Priya explains at the coat hooks.', why: 'Priya says, "I was trying to remember your name at lunch so I could call you over." Amara could not know that, because she can only see Priya\'s face, not her thoughts.' },
        { type: 'mc', part: 'B', skill: 'evidence', q: 'Part B: Which sentence from the story best supports the answer to Part A?', options: ['It had been a girl thinking hard.', 'Obviously, she did not want me there.', 'I braced myself for something unkind.', 'All afternoon, I avoided the girl with the braids.'], para: 6, hint: 'Find the sentence where Amara finally understands what Priya\'s frown really meant.', why: '"It had been a girl thinking hard" shows that the frown came from Priya trying to remember a name, not from being unfriendly.' },
        { type: 'mc', skill: 'vocab', q: '"I was certain that every single person was staring at the new girl." What does "certain" mean?', options: ['Completely sure', 'A little worried', 'Secretly glad', 'Very surprised'], para: 1, hint: 'Does Amara think people MIGHT be staring, or does she have no doubt at all?', why: 'Amara has no doubt that everyone is watching her. "Certain" means completely sure, even though she turns out to be wrong.' },
        { type: 'order', skill: 'sequence', q: 'Put the events of the story in order.', items: ['Amara looks for a seat in the cafeteria.', 'Priya frowns as Amara comes near.', 'Amara eats alone beside the trash cans.', 'Priya introduces herself at the coat hooks.', 'Priya waves to Amara from her table.'], hint: 'Follow Amara through her first day, and then on to the next day.', why: 'Amara looks for a seat, sees the frown, eats alone, meets Priya at dismissal, and the next day Priya waves her over.' }
      ],
      talk: 'Tell a grown-up: How would this story be different if Priya told it? Retell the lunch scene the way Priya saw it.'
    },
    {
      id: 'w10d2',
      title: 'Twenty More Minutes',
      genre: 'opinion',
      sticker: { emoji: '⚽', name: 'Recess Champion' },
      purpose: 'Read to find out what one fifth grader wants to change at school, and why.',
      stops: [
        { after: 3, q: 'What is the section "Bodies Need to Move" mostly about?', options: ['Kids need more time to be active.', 'Soccer is a better game than kickball.', 'Doctors visit the school every day.'], say: 'Yes! Jordan says twenty minutes is not enough time for kids to move.' },
        { after: 7, q: 'What does this part say kids learn on the playground?', options: ['How to get along with other kids', 'How to spell tricky words', 'How to follow the teacher\'s rules'], say: 'Right. Sharing, settling arguments, and including others are all ways of getting along.' }
      ],
      vocab: [
        { word: 'recommend', def: 'to suggest that something is a good idea', ex: 'Dentists recommend brushing your teeth twice a day.' },
        { word: 'physical', def: 'having to do with the body', ex: 'Swimming is my favorite physical activity.' },
        { word: 'focused', def: 'paying close attention to one thing', ex: 'The focused goalie never took her eyes off the ball.' },
        { word: 'confident', def: 'feeling sure about something', ex: 'After studying all week, I felt confident about the quiz.' }
      ],
      passage: [
        `This essay was written by Jordan Ellis, a fifth grader, for the school newspaper.`,
        `Every school day at Riverbend Elementary, students spend about six hours indoors and only twenty minutes at recess. I believe our school should double recess to forty minutes. I am not asking for this just because I love kickball, although I do. A longer break would make students healthier, friendlier, and, surprisingly, better at schoolwork.`,
        `## Bodies Need to Move`,
        `Children are not built to sit still all day. Doctors recommend that kids get at least sixty minutes of physical activity every day. Twenty minutes of recess covers only one-third of that amount. By the time we line up, walk outside, and choose teams, half of it has already vanished. Moving around also builds strong bones and muscles and helps kids sleep better at night. With forty minutes, there would finally be enough time for a real game of soccer instead of a rushed one.`,
        `## Brains Need a Break`,
        `Some adults worry that more recess means less learning. In fact, the opposite is true. Researchers have found that students pay closer attention in class after they have had a chance to run and play. Think of your brain as a phone battery: it cannot run all day without recharging. After two hours of lessons, even the best students start to fidget and daydream. I know that I solve math problems much faster right after recess than I do at the end of a long morning.`,
        `## Friendships Grow Outside`,
        `Recess is also where we practice skills that no worksheet can teach. On the playground, we learn to share equipment, settle arguments, and include kids who are standing alone. Last week, for example, a new student joined our four-square game. By the end of recess, she knew six people's names. These lessons matter just as much as spelling. In my opinion, recess is the best part of the day, and it is also one of the most useful.`,
        `## What About Lost Time?`,
        `I understand that teachers have a great deal of material to cover. However, the extra twenty minutes could come from starting school ten minutes earlier and from trimming the time we spend lining up. Ten minutes is a small price to pay for a calmer, happier school. Besides, a class that is rested and focused wastes less time, so teachers might actually finish more.`,
        `## A Fair Test`,
        `Principal Alvarez, please give longer recess a one-month trial. Teachers could keep track of how well we pay attention during those four weeks. If our grades and behavior do not improve, we can return to the old schedule. I am confident, though, that twenty more minutes outside will make every minute inside count.`
      ],
      questions: [
        { type: 'mc', skill: 'purpose', q: 'What is the author\'s main purpose for writing this essay?', options: ['To persuade the principal to make recess longer', 'To inform readers about the rules of soccer', 'To entertain readers with a playground story', 'To explain how a phone battery works'], para: 11, hint: 'Remember PIE: persuade, inform, entertain. What does Jordan want the reader to DO after reading?', why: 'Jordan states an opinion ("our school should double recess"), gives reasons, and asks Principal Alvarez for a trial. That is writing to persuade.' },
        { type: 'mc', skill: 'purpose', q: 'Which sentence from the essay is an OPINION?', options: ['These lessons matter just as much as spelling.', 'Doctors recommend that kids get at least sixty minutes of physical activity every day.', 'Twenty minutes of recess covers only one-third of that amount.', 'Moving around also builds strong bones and muscles and helps kids sleep better at night.'], para: 7, hint: 'A fact can be checked and proved. An opinion is a judgment that people could disagree about.', why: 'Whether playground lessons "matter just as much as spelling" is a judgment that cannot be proved, so it is an opinion. The other three can be checked.' },
        { type: 'multi', skill: 'purpose', q: 'Choose TWO FACTS the author uses to support the argument.', options: ['Doctors recommend sixty minutes of physical activity a day.', 'Researchers found that students pay closer attention after active play.', 'Recess is the best part of the day.', 'Playground lessons matter just as much as spelling.', 'Ten minutes is a small price to pay for a happier school.'], correct: 2, hint: 'Look for statements that could be checked with doctors or researchers. Cross out anything that is just what Jordan thinks.', why: 'What doctors recommend and what researchers have found can be checked, so they are facts. The other three choices are Jordan\'s own opinions.' },
        { type: 'mc', skill: 'purpose', q: 'Why does the author most likely include the section "What About Lost Time?"', options: ['To answer a worry that teachers might have', 'To complain that classes are too long', 'To show that recess is already long enough', 'To describe a normal school schedule'], para: 9, hint: 'Good persuasive writers think about what people who disagree would say. Whose concern does this section mention first?', why: 'The section begins, "I understand that teachers have a great deal of material to cover," and then offers a plan. Jordan is answering a concern before anyone raises it.' },
        { type: 'mc', skill: 'vocab', q: 'The author asks for "a one-month trial." What is a trial?', options: ['A test to see how something works', 'A punishment for breaking rules', 'A meeting between parents and teachers', 'A game that is played outdoors'], para: 11, hint: 'Read the sentences after it. What will happen if grades and behavior do not improve?', why: 'Jordan suggests trying longer recess for a month and going back if it does not help. A trial is a test to see how well something works.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence in which the author compares the brain to an everyday object in order to make a point.', answer: 'Think of your brain as a phone battery: it cannot run all day without recharging.', hint: 'Use the headings. Which section is about brains?', why: 'Here Jordan compares a brain to a phone battery to help readers picture why students need a break.' },
        { type: 'mc', skill: 'structure', q: 'How does the author organize this essay?', options: ['It states an opinion, then gives a reason in each section.', 'It tells the events of one school day in the order they happened.', 'It compares two schools to show how they are alike and different.', 'It lists the steps for setting up a game of four-square.'], para: 1, hint: 'Look at the first paragraph after the introduction, and then at the headings. What job does each section do?', why: 'Jordan first states the opinion that recess should be doubled. Then the sections with headings give reasons and answer a worry, and the last one asks for a trial.' }
      ],
      talk: 'Tell a grown-up: What is Jordan trying to convince the principal to do? Name one fact and one opinion from the essay. Do you agree with Jordan?'
    },
    {
      id: 'w10d3',
      title: 'One Squirrel, Two Stories',
      genre: 'fiction',
      sticker: { emoji: '🐿️', name: 'The Enemy Squirrel' },
      purpose: 'Read to find out how a boy and his dog remember the very same morning.',
      stops: [
        { after: 2, q: 'What has gone wrong so far?', options: ['The dog dragged the basket and spilled the picnic.', 'The squirrel ran off with the birthday cake.', 'Luis forgot to put the basket in the car.'], say: 'Yes! Biscuit chased the squirrel, and the basket tied to his leash went with him.' },
        { after: 8, q: 'Who is "the Enemy" in Biscuit\'s story?', options: ['The squirrel on the fence', 'The cat from next door', 'Grandma Rosa'], say: 'Right. Biscuit gives the gray-tailed squirrel a grand name, as if it were a villain.' }
      ],
      vocab: [
        { word: 'embarrassed', def: 'feeling foolish or ashamed in front of others', ex: 'I was embarrassed when I tripped on the stage.' },
        { word: 'furious', def: 'extremely angry', ex: 'The coach was furious when the team skipped practice.' },
        { word: 'generously', def: 'in a kind and giving way', ex: 'Our neighbor generously shared her garden tomatoes.' },
        { word: 'responsible', def: 'able to be trusted to do what is right', ex: 'A responsible pet owner fills the water bowl every day.' }
      ],
      passage: [
        `## Text 1: The Disaster (as told by Luis)`,
        `Saturday was supposed to be perfect. Grandma Rosa had spent the whole morning preparing a picnic for my cousin's birthday, and my only job was to keep Biscuit out of trouble for ten minutes while she loaded the car. Ten minutes! I failed in four.`,
        `I had just set the picnic basket on the porch steps when a squirrel raced along the top of the fence. Biscuit shot after it like a furry rocket, and his leash, which I had foolishly looped around the basket handle, went with him. The basket bounced down the steps and burst open. Sandwiches flew. Grapes rolled in every direction. The birthday cake landed frosting-side down on the lawn.`,
        `I chased Biscuit around the yard, waving my arms and yelling at him to stop, but he was far too busy to listen. By the time I caught him, he had frosting on both ears and a sandwich in his mouth, and he was wagging his tail as if he expected a medal. I have never been so embarrassed in my life. Grandma Rosa stared at the ruined lunch, and I was sure she was furious. Then her shoulders began to shake. She was laughing so hard that she had to sit down on the steps.`,
        `We brought peanut butter crackers to the party instead. Somehow, it was still a good day, although I may never tie a leash to anything again.`,
        `## Text 2: The Best Day Ever (as told by Biscuit)`,
        `Today I saved my family, and I would like that to be remembered.`,
        `It began when My Boy carried the Wonderful-Smelling Basket outside and then, very generously, attached it to me. Clearly, I had been chosen to guard the food. I took this duty seriously, because I have always suspected that I am the most responsible member of this household.`,
        `Suddenly, the Enemy appeared on the fence, twitching its gray tail and plotting, no doubt, to steal our lunch. I did not hesitate. I charged. The basket bravely followed me into battle, although it was not a very good runner and fell apart almost immediately.`,
        `The Enemy fled up a tree in terror. Then I discovered that the yard was covered with sandwiches, which I can only assume were my reward. I ate three before anyone could thank me properly. I also tested a white, sweet mountain with my face. It was excellent.`,
        `My Boy ran toward me, making loud, joyful noises and waving his arms. The Grandmother laughed and laughed. Everyone was so proud of me. I wagged my tail to let them know that I would gladly do it all again tomorrow.`
      ],
      questions: [
        { type: 'mc', part: 'A', skill: 'pov', q: 'Part A: How are the two narrators\' points of view about the squirrel chase different?', options: ['Luis sees it as a disaster, but Biscuit sees it as a heroic victory.', 'Luis thinks it is hilarious, but Biscuit feels ashamed of himself.', 'Luis blames Grandma Rosa, but Biscuit blames the squirrel.', 'Luis is proud of Biscuit, but Biscuit is frightened and confused.'], hint: 'Look at the title each narrator gives his story. What does each title tell you about his feelings?', why: 'Luis calls his version "The Disaster" and feels embarrassed. Biscuit calls his "The Best Day Ever" and believes he saved the family.' },
        { type: 'mc', part: 'B', skill: 'evidence', q: 'Part B: Which sentence from Text 2 best supports the answer to Part A?', options: ['Today I saved my family, and I would like that to be remembered.', 'The Grandmother laughed and laughed.', 'It began when My Boy carried the Wonderful-Smelling Basket outside and then, very generously, attached it to me.', 'I also tested a white, sweet mountain with my face.'], para: 6, hint: 'Pick the sentence that shows how Biscuit judges his own actions that day.', why: 'Biscuit\'s very first sentence shows that he thinks he was a hero who "saved my family," the opposite of how Luis sees it.' },
        { type: 'mc', skill: 'pov', q: 'In Text 2, Biscuit says that My Boy was "making loud, joyful noises and waving his arms." According to Text 1, what was really happening?', options: ['Luis was upset and yelling at Biscuit to stop.', 'Luis was cheering because Biscuit caught the squirrel.', 'Luis was laughing along with Grandma Rosa.', 'Luis was calling his cousin to come and watch.'], para: 3, hint: 'Find the same moment in Text 1. What does Luis say he was doing as he chased Biscuit?', why: 'Luis says he was "waving my arms and yelling at him to stop." Biscuit misreads the yelling as joy because he sees everything from a proud dog\'s point of view.' },
        { type: 'mc', skill: 'purpose', q: 'What is the author\'s most likely purpose for telling the same event twice?', options: ['To entertain readers with two very different views of one event', 'To inform readers about the proper way to train a dog', 'To persuade readers that squirrels are dangerous pests', 'To explain how to pack a basket for a picnic'], hint: 'Think PIE. Did the two texts teach you facts, try to change your mind, or make you smile?', why: 'The humor comes from comparing what really happened with Biscuit\'s proud version. The author\'s purpose is to entertain.' },
        { type: 'mc', skill: 'vocab', q: '"I did not hesitate. I charged." What does "hesitate" mean?', options: ['To pause before acting', 'To bark very loudly', 'To run around in circles', 'To ask someone for help'], para: 8, hint: 'Biscuit sees the squirrel and charges right away. What did he NOT do first?', why: 'Biscuit charged at once, without stopping to think. To hesitate is to pause before doing something.' },
        { type: 'multi', skill: 'pov', q: 'Choose TWO details from Text 2 that show Biscuit MISUNDERSTANDS what is happening.', options: ['He thinks the basket was attached to him so that he could guard the food.', 'He believes the scattered sandwiches are his reward.', 'He thinks the food in the basket smells wonderful.', 'He thinks there is a squirrel on the fence.', 'He wags his tail at his family.'], correct: 2, hint: 'Compare Biscuit\'s explanations with what Luis says really happened. Which two of Biscuit\'s BELIEFS are wrong?', why: 'Luis looped the leash around the basket handle without thinking, and the sandwiches spilled by accident. Biscuit wrongly believes he was chosen as a guard and then rewarded. Nothing in Text 1 shows that the other three choices are wrong.' }
      ],
      talk: 'Tell a grown-up: Tell what happened in the yard the way Grandma Rosa might tell it. How would her point of view be different from Luis\'s and Biscuit\'s?'
    },
    {
      id: 'w10d4',
      title: 'A Letter from Egypt',
      genre: 'letter',
      sticker: { emoji: '🐫', name: 'Sneezing Camel' },
      purpose: 'Read to find out what a teacher sees and thinks on her trip to Egypt.',
      stops: [
        { after: 2, q: 'What is this paragraph mostly about?', options: ['Facts about the pyramid\'s age and size', 'Reasons Ms. Tanaka traveled to Egypt', 'Rules for visitors at the pyramid'], say: 'Yes! This part is packed with facts about how old and how huge the pyramid is.' },
        { after: 5, q: 'What "less glamorous" things does Ms. Tanaka describe?', options: ['Fierce heat, sandy shoes, and a camel sneeze', 'A lost suitcase and a missed bus', 'Cold rain, long lines, and a sore foot'], say: 'Right. Even an amazing trip has hot, sandy, sneezy moments.' }
      ],
      vocab: [
        { word: 'astonishing', def: 'very surprising; amazing', ex: 'The acrobat did an astonishing flip in midair.' },
        { word: 'structure', def: 'something that has been built', ex: 'The bridge is the longest structure in our town.' },
        { word: 'magnificent', def: 'very grand and beautiful', ex: 'We watched a magnificent sunset over the lake.' },
        { word: 'ordinary', def: 'normal; not special or unusual', ex: 'It was an ordinary Tuesday until the snow began.' }
      ],
      passage: [
        `Dear Room 12,`,
        `Greetings from Egypt! I promised to write if I saw anything worth sharing, and today I saw something so astonishing that I had to sit down on a rock and simply stare. I am writing this letter in the shadow of the Great Pyramid of Giza.`,
        `Let me start with the facts, since I know some of you will check them. The Great Pyramid was built about 4,500 years ago as a tomb for a king named Khufu. It contains more than two million stone blocks, and many of them weigh more than a car. Each side of its base is longer than two football fields. For nearly four thousand years, it was the tallest structure that human beings had ever built. The workers had no cranes, trucks, or power tools. Experts believe they dragged the blocks on wooden sleds and hauled them up long ramps.`,
        `A short walk away sits the Great Sphinx, a giant statue with the body of a lion and the head of a person. It was carved from a single ridge of rock, and it has been guarding the pyramids for thousands of years. Its nose is missing, which somehow makes it look even more mysterious.`,
        `Now for my opinions, which you are free to disagree with. In photographs, the pyramid looks impressive. In person, it is overwhelming. When I stood at its base and tipped my head back, the stones seemed to climb straight into the sky. I think it is the most magnificent thing I have ever seen, and I believe every one of you should visit it someday.`,
        `I will also be honest about the less glamorous parts of my trip. The desert heat is fierce, my shoes are full of sand, and this morning a camel sneezed on my hat. Its owner found this much funnier than I did.`,
        `What I keep thinking about, however, is the people. Thousands of ordinary workers cut, pulled, and placed those stones one at a time, year after year. Some of them even painted the names of their work teams onto the blocks, and those marks can still be seen today. No single person could have built this pyramid, but together they created something that has outlasted nearly everything else from their world. Remember that the next time a group project feels impossible.`,
        `I am bringing back a small bottle of sand and about four hundred photographs, so prepare yourselves. Until then, be kind to your substitute, and please remember to feed the class fish.`,
        `Your teacher,`,
        `Ms. Tanaka`
      ],
      questions: [
        { type: 'mc', skill: 'purpose', q: 'What is Ms. Tanaka\'s main purpose for writing this letter?', options: ['To inform her class about the pyramid and share her experience', 'To persuade her class that pyramids are better than skyscrapers', 'To complain about the substitute teacher', 'To explain how to take care of the class fish'], para: 1, hint: 'Think PIE. Most of the letter does two things: it teaches facts and it tells what the trip is like for her.', why: 'Ms. Tanaka gives facts about the pyramid and describes what she saw and felt. Her main purpose is to inform her students and share her experience.' },
        { type: 'multi', skill: 'purpose', q: 'Choose TWO statements from the letter that are OPINIONS, not facts.', options: ['The pyramid is the most magnificent thing she has ever seen.', 'Every student should visit the pyramid someday.', 'The pyramid contains more than two million stone blocks.', 'The pyramid was built about 4,500 years ago.', 'The workers had no cranes, trucks, or power tools.'], correct: 2, hint: 'Ms. Tanaka sorts her letter for you. Find the paragraph that begins "Now for my opinions" and look for "I think" and "I believe."', why: 'She writes, "I think it is the most magnificent thing I have ever seen, and I believe every one of you should visit it someday." Those are her judgments. The other three can be checked.' },
        { type: 'mc', skill: 'pov', q: 'How is Ms. Tanaka\'s point of view about the camel\'s sneeze different from its owner\'s?', options: ['She was not amused, but he thought it was funny.', 'She thought it was funny, but he was angry.', 'She was frightened, but he stayed calm.', 'She felt sorry for the camel, but he did not care.'], para: 5, hint: 'Reread the last sentence of the paragraph about the "less glamorous parts" of the trip.', why: 'The letter says, "Its owner found this much funnier than I did." The same sneeze was funny to him but not to the person wearing the hat.' },
        { type: 'mc', skill: 'purpose', q: 'Why does Ms. Tanaka most likely include the paragraph about the workers?', options: ['To teach her students a lesson about working together', 'To prove that the pyramid was easy to build', 'To show that she knows more than the experts', 'To describe what the workers ate each day'], para: 6, hint: 'Read the last sentence of that paragraph. What does she want her class to remember?', why: 'She ends the paragraph with "Remember that the next time a group project feels impossible." She is using the workers to teach a lesson about teamwork.' },
        { type: 'mc', skill: 'vocab', q: '"In photographs, the pyramid looks impressive. In person, it is overwhelming." What does "overwhelming" suggest about the pyramid?', options: ['It is almost too huge to take in.', 'It is smaller than she expected.', 'It is too crowded to enjoy.', 'It is hard to find without a map.'], para: 4, hint: 'She compares photographs with seeing it in person. Read the next sentence about the stones and the sky.', why: 'Standing at the base, she says the stones "seemed to climb straight into the sky." "Overwhelming" means so great that it is hard to take in.' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence that tells how experts think the workers moved the heavy blocks.', answer: 'Experts believe they dragged the blocks on wooden sleds and hauled them up long ramps.', hint: 'Look in the paragraph of facts. Find the word "Experts."', why: 'This sentence explains the method experts believe was used: wooden sleds and long ramps.' },
        { type: 'sort', skill: 'purpose', q: 'Sort each statement from the letter. Is it a fact or an opinion?', cats: ['Fact', 'Opinion'], items: [{ t: 'The Sphinx was carved from a single ridge of rock.', c: 0 }, { t: 'Each side of the pyramid\'s base is longer than two football fields.', c: 0 }, { t: 'The missing nose makes the Sphinx look more mysterious.', c: 1 }, { t: 'Some workers painted their team names onto the blocks.', c: 0 }, { t: 'In photographs, the pyramid looks impressive.', c: 1 }], hint: 'Ask of each one: could someone measure it or check it? Or is it how something looks or feels to Ms. Tanaka?', why: 'What the Sphinx is made of, how long the base is, and the painted team names can all be checked, so they are facts. "More mysterious" and "impressive" are Ms. Tanaka\'s own judgments, so they are opinions.' }
      ],
      talk: 'Tell a grown-up: Why did Ms. Tanaka write this letter? Share two facts and one opinion from it.'
    },
    {
      id: 'w10d5',
      boss: true,
      title: 'First Flight: Two Views',
      genre: 'info',
      sticker: { emoji: '✈️', name: 'The Flyer' },
      purpose: 'Read to find out how two texts describe one famous morning in 1903.',
      stops: [
        { after: 2, q: 'How did the brothers work on the puzzle of flight?', options: ['They tested ideas and learned from crashes.', 'They copied a flying machine from a book.', 'They waited for one lucky, windy day.'], say: 'Yes! They studied birds, tested wing shapes, and kept trying after every crash.' },
        { after: 8, q: 'What has just happened in this part?', options: ['The machine rose off its rail and flew.', 'The machine crashed into a sand dune.', 'The engine coughed and would not start.'], say: 'Right. Sam saw daylight under the machine. It was really flying!' }
      ],
      vocab: [
        { word: 'passion', def: 'a very strong love for doing something', ex: 'My sister has a passion for painting.' },
        { word: 'experiments', def: 'tests done to learn or discover something', ex: 'We did experiments with magnets in science class.' },
        { word: 'cushion', def: 'to make a fall or a bump softer', ex: 'Thick mats cushion the gymnasts when they land.' },
        { word: 'startled', def: 'surprised or frightened suddenly', ex: 'The loud thunder startled the baby.' }
      ],
      passage: [
        `## Text 1: Twelve Seconds That Changed the World`,
        `For thousands of years, people watched birds and dreamed of flying. Two brothers from Dayton, Ohio, finally turned that dream into reality. Wilbur and Orville Wright owned a bicycle shop, but their true passion was solving the puzzle of flight.`,
        `The brothers approached the problem like scientists. They studied how birds tilt their wings to turn. They built a wind tunnel to test many different wing shapes, and they flew gliders again and again, learning from every crash. For their experiments, they chose the beaches near Kitty Hawk, North Carolina, where strong, steady winds could lift a glider and soft sand could cushion a hard landing.`,
        `By December 1903, they had added an engine and propellers to a new machine called the Flyer. On the cold, windy morning of December 17, Orville lay flat on the lower wing and took the controls. The Flyer rattled down a wooden rail, rose into the air, and stayed there for twelve seconds before settling onto the sand. It had traveled only 120 feet, a shorter distance than the length of a large passenger jet today. Nevertheless, it was the first time an airplane carrying a person had flown under its own power and under the control of its pilot. The brothers made three more flights that day. On the last one, Wilbur stayed in the air for nearly a full minute.`,
        `## Text 2: The Morning the Machine Flew (historical fiction)`,
        `My name is Sam, and in the winter of 1903 I was ten years old and certain of one thing: the two gentlemen from Ohio were out of their minds.`,
        `Everyone around Kitty Hawk said so. The brothers wore neckties on the beach, even in the wind, and they had spent three years dragging giant kites up the sand dunes and crashing them. My uncle, who worked at the lifesaving station, sometimes helped them carry their equipment. That December morning, he let me tag along.`,
        `It was so cold that puddles had frozen solid, and the wind nearly tore my cap away. The machine did not look like a bird to me. It looked like two bedsheets stretched over a pile of sticks. When its engine coughed to life, the noise startled me so badly that I jumped behind my uncle.`,
        `Then the machine began to slide along its rail. Mr. Wilbur ran beside it, steadying one wing. And suddenly there was daylight beneath it. It was flying! It dipped and bobbed like a gull fighting the wind, and then it came down gently on the sand. The whole thing lasted about as long as it takes to lace a boot.`,
        `Nobody cheered at first. We simply stood there with our mouths open. Then my uncle whooped, and I whooped, and the two gentlemen in neckties shook hands as calmly as if they had merely sold a bicycle.`,
        `I have told this story a hundred times since. I always begin it the same way: I was wrong about the brothers from Ohio.`
      ],
      questions: [
        { type: 'mc', skill: 'pov', q: 'How is the point of view in Text 2 different from the point of view in Text 1?', options: ['Text 2 is told by a character who was there, but Text 1 is told by an outside narrator.', 'Text 2 is told by Orville Wright, but Text 1 is told by his brother Wilbur.', 'Text 2 is told in the third person, but Text 1 is told in the first person.', 'Text 2 is told by a scientist, but Text 1 is told by a ten-year-old boy.'], para: 5, hint: 'Look for the words "I" and "my." Which text uses them? Who is the "I"?', why: 'Text 2 uses "I" and "my" because Sam, a character at the scene, tells it. Text 1 uses "they" and "the brothers," so it is told by a narrator outside the events.' },
        { type: 'mc', skill: 'purpose', q: 'What is the author\'s main purpose in Text 1?', options: ['To inform readers about how the first airplane flight happened', 'To persuade readers that everyone should learn to fly a plane', 'To entertain readers with a made-up story about two brothers', 'To explain the steps for building a wind tunnel at home'], para: 1, hint: 'Think PIE. Is Text 1 mostly facts, mostly opinions, or mostly a made-up story?', why: 'Text 1 gives facts in order: who the brothers were, how they prepared, and what happened on December 17. Its purpose is to inform.' },
        { type: 'mc', part: 'A', skill: 'pov', q: 'Part A: How does Sam\'s opinion of the Wright brothers change during Text 2?', options: ['He goes from thinking they are foolish to respecting them.', 'He goes from admiring them to distrusting them.', 'He goes from fearing them to laughing at them.', 'He goes from ignoring them to working for them at the station.'], para: 5, hint: 'Compare what Sam is "certain of" in his first sentence with what he says in his last sentence.', why: 'At first Sam is sure the brothers "were out of their minds." After watching the flight, he admits he was wrong about them.' },
        { type: 'mc', part: 'B', skill: 'evidence', q: 'Part B: Which sentence from Text 2 best supports the answer to Part A?', options: ['I always begin it the same way: I was wrong about the brothers from Ohio.', 'The machine did not look like a bird to me.', 'My uncle, who worked at the lifesaving station, sometimes helped them carry their equipment.', 'When its engine coughed to life, the noise startled me so badly that I jumped behind my uncle.'], para: 10, hint: 'Find the sentence in which Sam tells you directly that his opinion changed.', why: 'When Sam says, "I was wrong about the brothers from Ohio," he shows that he no longer thinks they are foolish.' },
        { type: 'multi', skill: 'compare', q: 'Choose TWO details that appear in BOTH texts.', options: ['The weather that morning was cold and windy.', 'The flight lasted only a short time.', 'The brothers built a wind tunnel.', 'The brothers wore neckties on the beach.', 'Wilbur stayed in the air for nearly a minute.'], correct: 2, hint: 'Check each detail against both texts. Cross out any detail you can find in only one of them.', why: 'Both texts describe the cold and wind, and both say the flight was brief (twelve seconds; "as long as it takes to lace a boot"). The wind tunnel and the minute-long flight are only in Text 1, and the neckties are only in Text 2.' },
        { type: 'mc', skill: 'vocab', q: 'The Flyer "had traveled only 120 feet... Nevertheless, it was the first time an airplane carrying a person had flown." What does "nevertheless" mean?', options: ['Even so', 'Because of that', 'For example', 'Once again'], para: 3, hint: 'The first idea makes the flight sound small. The second makes it sound important. Which choice connects two ideas that seem to disagree?', why: 'The flight was very short, but it still mattered enormously. "Nevertheless" means "even so" or "in spite of that."' },
        { type: 'evidence', skill: 'evidence', q: 'Tap the sentence in Text 1 that explains why the brothers chose Kitty Hawk.', answer: 'For their experiments, they chose the beaches near Kitty Hawk, North Carolina, where strong, steady winds could lift a glider and soft sand could cushion a hard landing.', hint: 'Find the words "Kitty Hawk" in Text 1. The reasons come right after the word "where."', why: 'This sentence gives both reasons: steady winds to lift a glider and soft sand for safer landings.' },
        { type: 'mc', skill: 'pov', q: 'Sam says the machine "looked like two bedsheets stretched over a pile of sticks." What does this description show about his point of view before the flight?', options: ['He doubted that the machine could fly.', 'He thought the machine was beautiful.', 'He wanted to build a machine of his own.', 'He worried that the machine would get wet.'], para: 7, hint: 'Does this comparison make the machine sound strong and impressive, or flimsy and silly?', why: 'Bedsheets and sticks sound weak and silly. The description shows that Sam did not believe such a machine could really fly.' }
      ],
      talk: 'Tell a grown-up: How is reading Sam\'s story different from reading the facts in Text 1? What does each text give you that the other does not?'
    }
  ]
};
