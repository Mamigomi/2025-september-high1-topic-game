const introScreen = document.querySelector("#introScreen");
const gameScreen = document.querySelector("#gameScreen");
const progressLabel = document.querySelector("#progressLabel");
const questionNumberLabel = document.querySelector("#questionNumberLabel");
const totalCountLabel = document.querySelector("#totalCountLabel");
const questionTitle = document.querySelector("#questionTitle");
const passageText = document.querySelector("#passageText");
const choiceList = document.querySelector("#choiceList");
const resultBox = document.querySelector("#resultBox");
const resultStatus = document.querySelector("#resultStatus");
const answerText = document.querySelector("#answerText");
const explanationText = document.querySelector("#explanationText");
const nextButton = document.querySelector("#nextButton");
const finalScreen = document.querySelector("#finalScreen");
const scoreText = document.querySelector("#scoreText");
const totalText = document.querySelector("#totalText");
const rateText = document.querySelector("#rateText");
const restartButton = document.querySelector("#restartButton");
const questionPanel = document.querySelector(".question-panel");

const quizData = [
  {
    number: 18,
    passage: `Dear Principal Jones, I hope this message finds you well. As student council president, I am reaching out to discuss an important matter regarding our school library’s current operating hours. At present, the library closes at 5 p.m., which many students feel limits their ability to fully use its resources for study and research after regular class hours. This is particularly challenging for those preparing for college entrance exams or working on academic projects that demand a quiet and resourceful environment. Therefore, I’d like to ask you to extend the library’s operating hours to 7 p.m. This change would greatly benefit students by providing additional time to focus on their academic goals. I hope you will consider this proposal as a step toward improving our academic environment and better supporting our needs. Sincerely, Eric Park, Student Council President`,
    choices: [
      "A student council president’s request to extend library hours for students’ academic benefit",
      "A student council president’s complaint about the lack of new books in the library",
      "A proposal to replace the school library with online research tools",
      "A request to shorten regular class hours for college entrance exam preparation",
      "A plan to organize student council elections in a more efficient way"
    ],
    answerIndex: 0,
    explanation: "학생회장이 방과 후 학습과 연구를 돕기 위해 도서관 운영 시간을 오후 7시까지 연장해 달라고 요청하는 글입니다."
  },
  {
    number: 19,
    passage: `I glanced at the clock on the wall. 10:00. That meant the casting director would call very soon with the results of my first audition for a musical part in The Wizard of Oz. I felt shaky all over, chewing my thumbnail and jiggling my feet. Finally, the telephone rang. While I was coming round, Dad answered. I heard him say, “Ahh, thank you. I’ll let her know ...” As I got to the bottom of the stairs, he was just putting the phone down. “That was The Wizard of Oz. You’re second senior munchkin,” he announced. I got a little rush of excitement, knowing I was in—that whatever happened I could be involved in one of the productions.`,
    choices: [
      "A student’s excitement at being chosen for a role in The Wizard of Oz",
      "A director’s difficulty in choosing actors for a school musical",
      "A student’s regret after missing an important audition call",
      "A family argument over whether a child should join a musical",
      "A performer’s fear of forgetting lines during a live production"
    ],
    answerIndex: 0,
    explanation: "오디션 결과를 초조하게 기다리던 학생이 배역을 받았다는 소식을 듣고 설레는 장면이 중심입니다."
  },
  {
    number: 20,
    passage: `Inefficient teachers overlook the potential power of the opening minutes of class. Often, if students are quiet enough and if there are many pressing demands on a teacher’s time at that moment, more than ten minutes can disappear before class starts. It’s no wonder that students are late for class; they have little reason to be on time. You can use the first ten minutes to get your class off to a great start, or you can choose to waste this time. The first minutes set the tone for the rest of the class. If you are prepared for class and have taught your students an opening routine, they can use this brief time to make mental and emotional transitions from the last class or subject and prepare to focus on learning new material. In summary, you should establish an opening routine to develop your class with an effective start.`,
    choices: [
      "The importance of establishing an effective opening routine in class",
      "The need to punish students who arrive late to every class",
      "The benefits of giving teachers fewer administrative duties",
      "The value of extending breaks between different school subjects",
      "The reasons students should choose their own classroom rules"
    ],
    answerIndex: 0,
    explanation: "수업 첫 몇 분이 전체 분위기를 정하므로 효과적인 시작 루틴을 마련해야 한다는 내용입니다."
  },
  {
    number: 21,
    passage: `Many atoms in your body are nearly as old as the universe itself. When you breathe, for example, only some of the atoms that you inhale are exhaled in your next breath. The remaining atoms are taken into your body to become part of you, and they later leave your body by various means. You don’t “own” the atoms that make up your body; you borrow them. We all share from the same atom pool because atoms forever travel around, within, and among us. Atoms cycle from person to person as we breathe and as our sweat is evaporated. We recycle atoms on a grand scale. The origin of the lightest atoms goes back to the origin of the universe, and most heavier atoms are older than the Sun and Earth. There are atoms in your body that have existed since the first moments of time, recycling throughout the universe among limitless forms, both nonliving and living. You’re the present caretaker of the atoms in your body. There will be many who will follow you.`,
    choices: [
      "The atoms in our bodies are ancient and endlessly recycled across the universe",
      "The human body creates completely new atoms every time we breathe",
      "Atoms in living things are fundamentally different from atoms in nonliving things",
      "The Sun and Earth are the original sources of all atoms in the human body",
      "People can permanently own the atoms that make up their bodies"
    ],
    answerIndex: 0,
    explanation: "우리 몸의 원자는 우리가 소유한 것이 아니라 우주 전체에서 오래전부터 순환해 온 물질이라는 점이 핵심입니다."
  },
  {
    number: 22,
    passage: `The act of gardening itself is a fantastic form of physical activity. It involves a range of motions, from digging and planting to watering and harvesting. These activities help improve strength, flexibility, and endurance. You might not realize it, but small tasks like weeding or turning compost can burn many calories. Gardening is particularly beneficial for those who find traditional exercise challenging. It's a low-impact way to stay active and fit, making it accessible for people of all ages and physical abilities. Besides physical health, gardening has profound mental health benefits. Tending to plants can be incredibly calming and meditative. It allows you to focus on the present moment, reducing stress and anxiety. The repetitive tasks involved in gardening can induce a state of mindfulness, similar to meditation. Studies have shown that spending time in nature, even in a small garden, can elevate mood, improve cognition, and reduce depression symptoms. The sense of accomplishment from watching your plants grow and thrive can also boost self-esteem and overall well-being.`,
    choices: [
      "Gardening provides both physical exercise and mental health benefits",
      "Gardening is useful only when it is performed as intense athletic training",
      "Traditional exercise is always less effective than outdoor gardening",
      "The main purpose of gardening is to increase agricultural profit",
      "Plant growth depends more on human emotions than on natural conditions"
    ],
    answerIndex: 0,
    explanation: "원예가 신체 활동이 될 뿐 아니라 스트레스 감소, 기분 개선 등 정신 건강에도 도움을 준다는 글입니다."
  },
  {
    number: 23,
    passage: `For many centuries, humans have taken advantage of tools that translate and bring into our perception natural phenomena that we can't perceive with our senses. In some cases, this consists of simply amplifying signals that feed into our normal sensory inputs (e.g., telescopes can bring into clear view that which is too far away for our eyes to perceive on their own). Other instruments turn signals that we cannot perceive into ones that we can observe. Some of these take the form of expanding the reach of our current senses, such as creating visible images based on the ultraviolet spectrum of light or changing sounds that are normally outside the range of what human ears can hear into audible signals. Alternatively, some instruments measure properties for which we have no sensory capacity at all and change them into that which we can observe.`,
    choices: [
      "Scientific tools extend human senses by translating unseen phenomena into perceivable forms",
      "Human senses are accurate enough to observe all natural phenomena without tools",
      "Scientific instruments are valuable mainly because they replace human curiosity",
      "Telescopes are the only tools that can expand the range of human perception",
      "Invisible natural phenomena should not be studied through technological devices"
    ],
    answerIndex: 0,
    explanation: "과학 도구가 감각으로 직접 알 수 없는 현상을 볼 수 있거나 들을 수 있는 형태로 바꾸어 준다는 내용입니다."
  },
  {
    number: 24,
    passage: `Many opponents of animal experimentation argue that not only is modern medicine not the only cause for the decline in mortality, many medical advances that did contribute to human health were not the result of animal experimentation. Defenders of research have claimed that since there is a strong correlation between the practice of animal experimentation and medical advancement, the former caused the latter. Opponents of research reject this inference. After all, we have independent reasons to expect these phenomena to be correlated. Since the law prescribes that all new drugs, prosthetic devices, and surgical techniques be tried on animals before they are used in humans, we will subsequently find that all medical advances are correlated with prior experimentation on animals. Consequently, the correlation between animal experimentation and medical discovery is the result of legal necessity, not evidence that animal experimentation led to medical advances. Moreover, several influential physicians have offered historical evidence that animal experimentation has not been as responsible for biomedical discovery as defenders suggest. They claim that clinical discoveries played a more substantial role than animal researchers have led us to believe.`,
    choices: [
      "The debate over whether animal experimentation truly contributes to medical advances",
      "The legal process of approving animal protection organizations",
      "The reason modern medicine has completely eliminated human mortality",
      "The historical development of prosthetic devices for animal patients",
      "The advantages of replacing clinical discoveries with animal research"
    ],
    answerIndex: 0,
    explanation: "동물 실험과 의학 발전의 상관관계가 실제 인과관계인지에 대한 찬반 논쟁이 중심입니다."
  },
  {
    number: 26,
    passage: `Roger Payne was born in Manhattan in 1935. He studied biology at Harvard University and eventually earned his Ph.D. from Cornell University in 1961. In 1967, he discovered that humpback whales make long and complex sounds. They’re known as “whale songs,” and he showed that whales use them to communicate. Then in 1970, he released an album Songs of the Humpback Whale, which became a surprise hit and helped start the global “Save the Whales” movement. The following year, he founded Ocean Alliance to protect whales and the earth’s oceans, and he used new, safe methods to study whales without harming them. Over his career, he led more than 100 research trips worldwide, including the Voyage of the Odyssey from 2000 to 2005, which studied ocean pollution. His work helped make laws that protect marine mammals, which finally led to the global ban on commercial whaling in 1986.`,
    choices: [
      "Roger Payne’s contributions to whale research and ocean conservation",
      "Roger Payne’s effort to build commercial whale-watching businesses",
      "The decline of public interest in humpback whale songs after 1970",
      "The development of harmful methods for studying marine mammals",
      "The history of Harvard University’s biology program in the 1930s"
    ],
    answerIndex: 0,
    explanation: "Roger Payne의 혹등고래 소리 연구와 고래 보호 및 해양 보전에 대한 기여를 소개하는 글입니다."
  },
  {
    number: 29,
    passage: `Big mammalian herbivore species react to danger from predators or humans in different ways. Some species are nervous, fast, and programmed for instant flight when they perceive a threat. Other species are slower, less nervous, seek protection in herds, stand their ground when threatened, and don’t run until necessary. Naturally, the nervous species are difficult to keep in captivity. If put into an enclosure, they are likely to panic, and either die of shock or hit themselves repeatedly to death against the fence in their attempts to escape. That’s true, for example, of gazelles, which for thousands of years were the most frequently hunted game species in some parts of the Fertile Crescent. There is no mammal species that the first settled peoples of that area had more opportunity to domesticate than gazelles. But no gazelle species has ever been domesticated. Just imagine trying to herd an animal that runs away, blindly hits itself against walls, can leap up to nearly 30 feet, and can run at a speed of 50 miles per hour!`,
    choices: [
      "The failure to domesticate gazelles due to their nervous and panicked nature",
      "The usefulness of gazelles as the first domesticated animals in farming societies",
      "The hunting techniques that made gazelles easy for humans to capture alive",
      "The physical similarities between gazelles and other slow herd animals",
      "The reasons all herbivores react to danger in exactly the same way"
    ],
    answerIndex: 0,
    explanation: "가젤은 위협을 받으면 쉽게 공포에 빠지고 도망치려 하므로 길들이기 어려웠다는 내용입니다."
  },
  {
    number: 30,
    passage: `For a species born in a time when resources were limited and dangers were great, our natural tendency to share and cooperate is complicated when resources are plenty and outside dangers are few. When we have less, we tend to be more open to sharing what we have. Certain nomadic tribes don’t have much, yet they are happy to share because it is in their interest to do so. If you happen upon them in your travels, they will open up their homes and give you their food and hospitality. It’s not just because they are nice people; it’s because their survival depends on sharing, for they know that they may be the travelers in need of food and shelter another day. Ironically, the more we have, the bigger our fences, the more sophisticated our security to keep people away and the less we want to share. Our desire for more, combined with our reduced physical interaction with the “common folk,” starts to create a disconnection or blindness to reality.`,
    choices: [
      "How abundance reduces sharing and increases social disconnection",
      "Why nomadic tribes refuse to share food with unfamiliar travelers",
      "How advanced security systems make communities more cooperative",
      "Why physical interaction with others increases as wealth grows",
      "How limited resources always destroy the need for cooperation"
    ],
    answerIndex: 0,
    explanation: "자원이 부족할 때는 나눔이 생존에 중요하지만, 풍요로워질수록 공유와 연결이 줄어든다는 역설을 설명합니다."
  },
  {
    number: 31,
    passage: `Whether we feel happy or sad, content or discontent, is not determined merely by each individual successive moment of life experience—a good thing happens and I'm happy, a bad thing happens and I'm sad. While our experiences affect our mood, we are not blown in a completely new direction by each gust of wind. As humans, we adjust—to new information and events both good and bad—and return to our personal default level of well-being. There will be highs and lows, but over time, like water seeking its own level, we are pulled toward our baseline—back up after bad news and back down after good. The euphoria of first love fades, and so does the despair of a break-up. This tendency is best seen with little kids and their toy joy: When they get what they've longed for, they believe they will be happy for the rest of their lives. And for the first few minutes of the rest of their lives, they are. But then the kids—like adults—adapt.`,
    choices: [
      "Human tendency to return to a baseline level of happiness",
      "The permanent emotional effects of every good and bad event",
      "The reason children feel less joy from toys than adults do",
      "The importance of avoiding all negative experiences in life",
      "The way romantic love prevents people from adapting to change"
    ],
    answerIndex: 0,
    explanation: "좋고 나쁜 사건에 흔들리더라도 시간이 지나면 각자의 기본 행복 수준으로 돌아가는 경향이 핵심입니다."
  },
  {
    number: 32,
    passage: `Although you may put off going to sleep in order to squeeze more activities into your day, eventually your need for sleep becomes overwhelming and you are forced to get some sleep. This daily drive for sleep appears to be due, in part, to a compound known as adenosine. This natural chemical builds up in your blood as time awake increases. While you sleep, your body breaks down the adenosine. Thus, this molecule may be what your body uses to keep track of lost sleep and to trigger sleep when needed. An accumulation of adenosine and other factors might explain why, after several nights of less than optimal amounts of sleep, you build up a sleep debt that you must make up by sleeping longer than normal. Because of such built-in molecular feedback, you can't become accustomed to getting less sleep than your body needs. Eventually, a lack of sleep catches up with you.`,
    choices: [
      "The role of adenosine in regulating sleep and sleep debt",
      "The benefits of training the body to need less sleep permanently",
      "The reason sleep debt disappears without additional rest",
      "The effect of exercise on removing all chemicals from the blood",
      "The way daily activities prevent the body from tracking lost sleep"
    ],
    answerIndex: 0,
    explanation: "깨어 있는 동안 아데노신이 쌓이고 잠을 자며 분해되는 과정이 수면 욕구와 수면 부채를 설명합니다."
  },
  {
    number: 33,
    passage: `One of the things that makes uncertainty difficult for members of the public to appreciate is that the significance of uncertainty is relative. Take, for example, the distance between Earth and the sun: 1.49597 x 10⁸ km, as measured at one point during the year. This seems relatively precise; after all, using six significant digits means I know the distance to an accuracy of one part in a million or so. However, if the next digit is uncertain, that means the uncertainty in knowing the precise Earth-sun distance is larger than the distance between New York and Chicago! Whether or not the quoted number is “precise” therefore depends on what I'm intending to do with it. If I care only about what minute the sun will rise tomorrow, then the number quoted here is fine. If I want to send a satellite to orbit just above the sun, however, then I would need to know distances more accurately.`,
    choices: [
      "Uncertainty is relative depending on context",
      "The Earth-sun distance is too uncertain to be useful in any situation",
      "Public understanding of science depends only on memorizing large numbers",
      "Satellite missions require less precision than predicting sunrise times",
      "The number of significant digits always proves that a value is perfectly exact"
    ],
    answerIndex: 0,
    explanation: "어떤 수치의 불확실성이 중요한지는 그 수치를 어떤 목적에 쓰는지에 따라 달라진다는 내용입니다."
  },
  {
    number: 34,
    passage: `Richard Heinberg, an American journalist, argues that in building the renewable energy infrastructure to stop global warming, we are actually involved in one of the greatest change projects in human history. In addition to solar panels and wind turbines, we have to build an alternative transport infrastructure, farming procedures and industrial processes. This transformation cannot happen without fossil fuels. For instance, production of concrete structures and steel elements require amounts of energy that is only possible to produce with fossil energy. Production of solar panels requires scarce and expensive minerals which must be excavated, again requiring the use of fossil fuels. Thus, the harder we push towards a renewable energy system, the faster we have to use fossil energy for the construction process. This is not only expensive, but also an undermining factor for our efforts to cut global emissions. Heinberg remarks that the cost of building this new energy infrastructure is seldom counted in transition proposals, which tend to focus just on energy supply requirements.`,
    choices: [
      "The paradox of renewable energy requiring fossil fuels",
      "The complete independence of renewable energy construction from fossil fuels",
      "The reason solar panels can be produced without minerals or industrial processes",
      "The limited need for transportation changes in stopping global warming",
      "The advantage of ignoring construction costs in energy transition proposals"
    ],
    answerIndex: 0,
    explanation: "재생 에너지 체계를 구축하는 과정에서 오히려 화석 연료가 필요하다는 역설을 설명합니다."
  },
  {
    number: 35,
    passage: `Humans for centuries have dreamed of machines that could become intelligent and make human-like decisions. There have been myths about robots, automatons, and artificial beings since ancient Greece (e.g., the myth of Pandora, who released ills upon the world). Likewise, literature throughout history has dreamed of creating human-like creatures and thinking machines (e.g., Mary Shelley’s Frankenstein). In 1950, British mathematician Alan Turing asked whether machines could think and reason like humans and then developed the Turing test to measure a machine’s intelligence and whether the machines can think autonomously. A few years later, MIT professor John McCarthy coined “artificial intelligence,” replacing the previously used expression “automata studies.” Since then, artificial intelligence has become the study and practice of “making intelligent machines” that are programmed to think like humans—endowed by their creators with reasoning and learning.`,
    choices: [
      "The historical development of artificial intelligence",
      "The disappearance of myths about artificial beings after ancient Greece",
      "The reason literature prevented scientists from studying intelligent machines",
      "The process by which robots replaced all human decision-making in 1950",
      "The argument that artificial intelligence began only with modern smartphones"
    ],
    answerIndex: 0,
    explanation: "고대의 상상부터 Turing test와 McCarthy의 용어 제시에 이르기까지 인공지능 개념의 역사적 발전을 다룹니다."
  },
  {
    number: 36,
    passage: `The desert tortoise has a simple solution for coping with Death Valley's extreme heat: It avoids it. The slow-moving creature hibernates during the winter and stays in its tunnel for much of the summer, meaning that it spends more than 90 percent of its life immobile. In fact, the tortoise usually only surfaces after a good rain. Then, it gets to work. The tortoise stocks up on water by eating plants and digging holes to collect rain. But to stay supplied with water through its extended hibernation, the reptile relies on something else—its highly sophisticated bladder. Unlike most animals, the tortoise's bladder acts as a holding tank, allowing it to reabsorb water back into its body. Incredibly, a desert tortoise can go a full year without taking in any freshwater at all. And because its bladder is so important to a tortoise's survival, park rangers often remind visitors not to stop and help the slow-movers across the road. Tortoises become so terrified when people pick them up that they empty their bladders, losing their precious water reserves.`,
    choices: [
      "The desert tortoise’s adaptation for water conservation",
      "The desert tortoise’s ability to survive by moving quickly across roads",
      "The reason visitors should carry desert tortoises to help them save water",
      "The way desert tortoises avoid heat by drinking freshwater every day",
      "The importance of summer activity for desert tortoise survival"
    ],
    answerIndex: 0,
    explanation: "사막거북은 활동을 줄이고 방광에 물을 저장 및 재흡수하는 방식으로 극한 환경에서 수분을 보존합니다."
  },
  {
    number: 37,
    passage: `Imagine you are pedalling your bicycle on a level road. You stop pedalling: no force is now acting to move you forward. What happens? You gradually slow down. How could you slow down more suddenly, in a shorter distance? By putting the brakes on. Because the brakes change your movement, making you slow down more suddenly, they must be exerting a force on the bicycle and you, as they grip and rub on the wheel-rims. This is the force called friction, which tends to slow down moving things by acting in the direction opposite to movement, that is backwards. Even without the brakes on, there are other friction forces acting on you and your bicycle, which also slow you down. One of these is friction in the wheels rubbing on the axles. Another is air resistance, which you can feel, pushing you backwards as you and the bicycle move forwards. When you apply these ideas to something around you, like a cart, you can see what could be generating friction: mainly the axles rubbing on the body as they rotate.`,
    choices: [
      "Friction as the force that slows motion",
      "The role of pedalling in eliminating all forces on a bicycle",
      "The way brakes speed up a bicycle by pushing it forward",
      "The reason air resistance acts in the same direction as movement",
      "The process by which wheels prevent any contact with axles"
    ],
    answerIndex: 0,
    explanation: "브레이크, 바퀴와 축의 마찰, 공기 저항처럼 운동 방향의 반대로 작용해 속도를 늦추는 힘을 설명합니다."
  },
  {
    number: 38,
    passage: `All editing systems are now nonlinear computer-based systems that allow random access to any video shot or scene without having to fast forward or fast reverse to find it. Nonlinear systems can create a range of special effects, such as slow motion, wipes and dissolves. Another highlight of a digital nonlinear system is its random access process that makes it easy for an editor to find desired shots or scenes without having to spend time fast forwarding or rewinding videotape. With nonlinear editing, shots or scenes can be easily added or removed anywhere in the program, and the computer adjusts the program length automatically. Linear editing was like composing a paper on a typewriter. If a mistake was made or new information needed to be added the whole piece had to be retyped. Nonlinear editing, on the other hand, is like using a word processing program. If a mistake is made, it is easily deleted and fixed with a few keystrokes, and new information can be added easily.`,
    choices: [
      "Advantages of nonlinear editing compared to linear editing",
      "The reasons videotape editing is faster than computer-based editing",
      "The decline of special effects in modern digital editing systems",
      "The similarity between nonlinear editing and retyping a whole paper",
      "The need to remove random access from video editing programs"
    ],
    answerIndex: 0,
    explanation: "비선형 편집은 원하는 장면에 바로 접근하고 쉽게 추가, 삭제, 수정할 수 있다는 장점이 중심입니다."
  },
  {
    number: 39,
    passage: `A morally good person is one who does morally bad actions significantly less often than most and does morally good ones significantly more often than most. In judging a person not only her actions but also her intentions and motives are relevant. A morally good person must intend to do morally good actions and intend to avoid morally bad ones. A person who unintentionally prevents harm to others and does not harm them simply because things do not turn out as she intends is not morally good. Although this kind of situation generally occurs only in slapstick movies, it is worth mentioning to avoid the false impression that it is the actual consequences of a person's actions that count toward her being judged morally good or bad. But actual consequences are important. A person who always tries to prevent harm but never does, is not generally thought of as morally good. Of such a person, it may be said that she means well; but, contrary to Kant, some results are necessary before she is regarded as morally good.`,
    choices: [
      "The role of intentions and consequences in moral goodness",
      "The idea that moral goodness depends only on accidental consequences",
      "The reason motives should never be considered in moral judgment",
      "The claim that good intentions alone are always enough for moral goodness",
      "The use of slapstick movies as the main standard for ethical decisions"
    ],
    answerIndex: 0,
    explanation: "도덕적 선함을 판단할 때 의도와 동기뿐 아니라 실제 결과도 어느 정도 필요하다는 내용입니다."
  },
  {
    number: 40,
    passage: `Vision is influenced by our preconceptions about reality. In viewing a scene, we establish unconscious hierarchies that reflect our functional relationship to objects and our momentary priorities. For example, when visualizing a hammer in our mind's eye, we tend to “see” it in profile or at some other “ready for use” angle. One would probably not visualize a hammer as seen from the top so that the handle is hidden by the hammer's head. The functional relationship we have with objects creates visual expectations that interfere with our ability to see “like a camera.” The camera, like the human eye, sees only shapes and colors. It documents the world impartially through a lens that is similar to the eye. When we look at them carefully, photographs are often surprising because they don't interpret confusing details but simply serve them up to us with a mechanical indifference. And because of their flatness, photographs often contain areas that appear as unrecognizable colors and shapes. Our visual perception is shaped by an established hierarchy based on functional relationships, which interrupts our ability to see objects as they truly are, unlike the objective perspective of a camera.`,
    choices: [
      "Human perception vs. camera’s objective view",
      "The superiority of human vision in recording shapes without interpretation",
      "The way cameras create functional expectations about familiar objects",
      "The reason photographs always make confusing details easier to interpret",
      "The process by which people visualize objects without preconceptions"
    ],
    answerIndex: 0,
    explanation: "인간은 기능적 관계와 선입견에 따라 대상을 보지만, 카메라는 모양과 색을 비교적 객관적으로 기록한다는 비교입니다."
  },
  {
    number: 41,
    passage: `”May I help you?” are the worst four words that a retail salesperson can utter because they don’t encourage the customer to talk and put them on the defensive. The four words usually draw out a negative response that stops cold a sales transaction. Examples of better questions to use when approaching customers are “Is there anything in particular that you are looking for?” and “Are you shopping for a gift?” If a fashion salesperson approached you with “May I help you?” chances are you would feel the salesperson didn’t care. This line is a rote approach that is so overused by untrained and uninterested salespeople. In fact, most of us shudder in horror on hearing these words. The very meaning of the question “May I help you?” implies that the customer is in trouble of some sort and needs rescuing. This almost always puts the customer on the defense. ”No, thank you“ is usually the immediate response, even if the customer is actually in need of assistance.`,
    choices: [
      "Why “May I help you?” is ineffective in sales interactions",
      "How retail salespeople can make customers feel rescued and dependent",
      "Why customers always prefer short yes-or-no questions in stores",
      "How fashion salespeople benefit from using memorized opening lines",
      "Why negative customer responses usually improve sales transactions"
    ],
    answerIndex: 0,
    explanation: "‘May I help you?’는 고객을 방어적으로 만들고 대화를 끊기 쉬워 판매 상황에서 비효율적이라는 내용입니다."
  },
  {
    number: 42,
    passage: `The subconscious thought by the customer is often “I’m smart enough to figure out what I want, and I don’t need your help!” If customers feel pressured or cornered, then salespeople won’t make any sales. The approach has to promote a comfortable environment that makes customers feel there is no rush. Furthermore, if customers just want to look around, they should feel that it is all right to do so. In situations where customers really do want to look around on their own, salespeople should give customers their business cards and keep themselves accessible in case customers have questions or concerns.`,
    choices: [
      "The need for a comfortable, pressure-free sales approach",
      "The importance of forcing customers to make quick buying decisions",
      "The reason salespeople should avoid being accessible to customers",
      "The advantage of cornering customers who only want to look around",
      "The belief that customers should never shop without direct assistance"
    ],
    answerIndex: 0,
    explanation: "고객이 압박감을 느끼지 않도록 편안한 환경을 만들고 필요할 때만 도움을 줄 수 있어야 한다는 내용입니다."
  }
];

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

function showGameScreen() {
  introScreen.classList.add("is-hidden");
  gameScreen.classList.remove("is-hidden");
}

function renderQuestion() {
  const question = quizData[currentQuestionIndex];

  hasAnswered = false;
  progressLabel.textContent = `${currentQuestionIndex + 1} / ${quizData.length}`;
  questionNumberLabel.textContent = `Question ${question.number}`;
  totalCountLabel.textContent = `Total ${quizData.length}`;
  questionTitle.textContent = "What is the main topic of the passage?";
  passageText.textContent = question.passage;
  choiceList.innerHTML = "";
  resultBox.hidden = true;
  nextButton.hidden = true;
  nextButton.textContent = currentQuestionIndex === quizData.length - 1 ? "View Results" : "Next Question";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = `${index + 1}. ${choice}`;
    button.addEventListener("click", () => checkAnswer(index));
    choiceList.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (hasAnswered) {
    return;
  }

  const question = quizData[currentQuestionIndex];
  const buttons = choiceList.querySelectorAll(".choice-button");
  const isCorrect = selectedIndex === question.answerIndex;

  hasAnswered = true;
  if (isCorrect) {
    score += 1;
  }

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answerIndex) {
      button.classList.add("is-correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("is-wrong");
    }
  });

  resultBox.hidden = false;
  nextButton.hidden = false;
  resultStatus.textContent = isCorrect ? "✔ Correct!" : "✘ Incorrect!";
  resultStatus.className = `result-status ${isCorrect ? "correct" : "wrong"}`;
  answerText.textContent = `Answer: ${question.choices[question.answerIndex]}`;
  explanationText.textContent = `한국어 해설: ${question.explanation}`;
}

function goToNextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  showFinalResult();
}

function showFinalResult() {
  const rate = Math.round((score / quizData.length) * 100);

  questionPanel.hidden = true;
  finalScreen.hidden = false;
  progressLabel.textContent = "Results";
  scoreText.textContent = `${score}점`;
  totalText.textContent = `${quizData.length}문제`;
  rateText.textContent = `${rate}%`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionPanel.hidden = false;
  finalScreen.hidden = true;
  renderQuestion();
}

introScreen.addEventListener("click", showGameScreen);
nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", restartQuiz);

renderQuestion();
