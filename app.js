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
    title: "18번 지문 핵심 내용",
    passage: "학생회장이 교장 선생님께 현재 오후 5시에 닫는 학교 도서관을 오후 7시까지 연장해 달라고 요청한다. 방과 후 공부와 연구를 하는 학생들에게 더 조용하고 유용한 학습 시간이 필요하다는 내용이다.",
    choices: [
      "학생들의 학업적 이익을 위해 도서관 운영 시간 연장을 요청함",
      "학교 도서관의 장서 부족 문제 해결을 요청함",
      "학생회장 선거 절차의 공정성 강화를 제안함",
      "대학 입시 준비를 위한 새 시험 과목 개설을 요청함",
      "방과 후 학술 프로젝트 평가 기준 완화를 건의함"
    ],
    answerIndex: 0,
    explanation: "핵심은 도서관을 더 오래 열어 학생들의 학업 목표 달성을 돕자는 요청입니다."
  },
  {
    number: 19,
    title: "19번 지문 핵심 내용",
    passage: "화자는 뮤지컬 The Wizard of Oz 오디션 결과를 기다리며 긴장한다. 전화가 온 뒤 자신이 배역을 받았다는 소식을 듣고 공연에 참여할 수 있다는 사실에 설렘을 느낀다.",
    choices: [
      "오디션에서 배역을 받아 설레는 학생의 경험",
      "무대 공포증을 극복하기 위한 연습 과정",
      "가족의 반대로 공연 참가를 포기한 경험",
      "뮤지컬 제작비 부족으로 공연이 취소된 사건",
      "친구의 성공을 질투하다가 반성하는 이야기"
    ],
    answerIndex: 0,
    explanation: "결과를 기다리는 긴장감과 배역을 얻은 뒤의 기쁨이 중심입니다."
  },
  {
    number: 20,
    title: "20번 지문 핵심 내용",
    passage: "수업의 첫 몇 분은 수업 전체 분위기를 결정한다. 교사가 시작 루틴을 마련하면 학생들이 이전 수업에서 벗어나 새 학습에 집중할 준비를 할 수 있다.",
    choices: [
      "학생 지각을 줄이기 위한 엄격한 벌점 제도의 필요성",
      "수업 시작 루틴을 마련하는 것의 중요성",
      "교사의 행정 업무를 줄이는 시간표 개편의 효과",
      "쉬는 시간을 늘려 학습 피로를 낮추는 방법",
      "수업 후 복습 과제를 표준화해야 하는 이유"
    ],
    answerIndex: 1,
    explanation: "글은 수업 초반을 낭비하지 말고 효과적인 시작 루틴을 세우라고 말합니다."
  },
  {
    number: 21,
    title: "21번 지문 핵심 내용",
    passage: "우리 몸을 이루는 원자들은 우리가 소유한 것이 아니라 잠시 빌린 것이다. 원자들은 사람과 자연, 우주 전체를 오가며 오래전부터 계속 순환한다.",
    choices: [
      "인간의 호흡 방식이 운동 능력에 미치는 영향",
      "우주 탐사가 인체 연구에 제공하는 새로운 자료",
      "우리 몸의 원자는 고대부터 존재하며 우주 전체에서 순환함",
      "생명체마다 서로 다른 원자 구조를 갖는 이유",
      "태양 에너지가 지구의 물질 형성에 끼친 직접 영향"
    ],
    answerIndex: 2,
    explanation: "몸속 원자의 오래된 기원과 끝없는 순환이 주제입니다."
  },
  {
    number: 22,
    title: "22번 지문 핵심 내용",
    passage: "정원 가꾸기는 파기, 심기, 물주기 등 다양한 움직임을 포함해 신체 건강에 좋다. 또한 식물을 돌보는 활동은 마음을 차분하게 하고 스트레스와 불안을 줄인다.",
    choices: [
      "원예는 신체적 운동과 정신적 건강에 모두 도움이 됨",
      "정원 식물의 종류가 토양 산도에 따라 달라짐",
      "실내 운동보다 야외 운동이 항상 더 위험함",
      "농업 기술 발달이 식량 생산량을 증가시킴",
      "도시 정원이 부동산 가격에 미치는 경제적 효과"
    ],
    answerIndex: 0,
    explanation: "원예의 신체적 효과와 정신 건강 효과를 함께 설명합니다."
  },
  {
    number: 23,
    title: "23번 지문 핵심 내용",
    passage: "인간은 감각만으로는 지각할 수 없는 자연 현상을 도구로 바꾸어 관찰해 왔다. 망원경, 자외선 이미지, 들리지 않는 소리를 들을 수 있게 하는 장치가 그 예이다.",
    choices: [
      "과학 도구는 보이지 않는 현상을 지각 가능한 형태로 바꾸어 인간의 감각을 확장함",
      "인간의 감각은 모든 자연 현상을 정확히 파악할 수 있음",
      "망원경은 과학 도구 중 가장 오래된 발명품임",
      "소리 연구는 빛 연구보다 과학적으로 더 중요함",
      "자연 현상은 관찰 도구 없이 해석해야 객관적임"
    ],
    answerIndex: 0,
    explanation: "도구가 인간 감각의 한계를 보완하고 확장한다는 내용입니다."
  },
  {
    number: 24,
    title: "24번 지문 핵심 내용",
    passage: "동물 실험 옹호자들은 동물 실험과 의학 발전 사이의 상관관계를 근거로 동물 실험의 기여를 주장한다. 반대자들은 법적 요구 때문에 상관관계가 생겼을 뿐이며 임상 발견의 역할도 컸다고 반박한다.",
    choices: [
      "동물 실험이 실제로 의학 발전에 기여했는지를 둘러싼 논쟁",
      "모든 신약 개발에서 임상 시험을 금지해야 하는 이유",
      "동물 보호법이 농업 생산성에 미친 긍정적 영향",
      "의학 연구에서 통계 자료를 사용하지 말아야 하는 근거",
      "수술 기술 발전이 병원 운영비를 낮춘 과정"
    ],
    answerIndex: 0,
    explanation: "동물 실험과 의학 발전의 관계를 두고 양측 주장이 대립합니다."
  },
  {
    number: 26,
    title: "26번 지문 핵심 내용",
    passage: "Roger Payne은 혹등고래의 길고 복잡한 소리인 고래 노래를 발견하고, 이를 통해 고래가 의사소통한다는 것을 보여 주었다. 그의 앨범과 연구, Ocean Alliance 설립은 고래 보호 운동과 해양 포유류 보호법에 기여했다.",
    choices: [
      "혹등고래 연구와 해양 보전에 기여한 Roger Payne의 업적",
      "고래 사육 산업을 확대하려 한 Roger Payne의 사업 계획",
      "해양 오염 조사를 중단하게 된 연구자의 실패 경험",
      "고래 노래를 이용한 상업 음악 시장의 성장 과정",
      "맨해튼의 대학들이 생물학 교육을 개편한 배경"
    ],
    answerIndex: 0,
    explanation: "Roger Payne의 고래 소리 연구와 고래 보호 활동이 중심입니다."
  },
  {
    number: 29,
    title: "29번 지문 핵심 내용",
    passage: "대형 초식 포유류는 위험에 반응하는 방식이 다르다. 가젤처럼 예민하고 공포에 잘 빠지며 도망치려는 동물은 우리에 가두기 어렵고, 그래서 인간이 길들이지 못했다.",
    choices: [
      "초식동물의 무리 생활이 사냥 성공률을 높이는 이유",
      "가젤이 긴장되고 쉽게 공포에 빠지는 성질 때문에 길러지지 못한 이유",
      "가젤이 사막 환경에서 물을 저장하는 방식",
      "농경 사회가 육식동물을 먼저 길들인 역사",
      "포유류의 점프 능력이 진화 속도를 결정하는 과정"
    ],
    answerIndex: 1,
    explanation: "가젤의 예민하고 도망 중심적인 성향이 가축화 실패의 이유로 제시됩니다."
  },
  {
    number: 30,
    title: "30번 지문 핵심 내용",
    passage: "자원이 부족할 때 사람들은 생존을 위해 나누고 협력하는 경향이 크다. 반대로 풍요로워질수록 담장과 보안을 높이고 타인과의 연결이 줄어들 수 있다.",
    choices: [
      "풍요로움이 나눔을 줄이고 사회적 단절을 키우는 현상",
      "유목민이 정착 농업을 선택하게 된 경제적 이유",
      "여행자가 낯선 문화에 적응하는 데 필요한 언어 능력",
      "도시 보안 기술이 범죄율을 완전히 없애는 과정",
      "자원 부족이 항상 개인주의를 강화한다는 주장"
    ],
    answerIndex: 0,
    explanation: "가진 것이 많아질수록 공유와 상호작용이 줄어드는 역설을 설명합니다."
  },
  {
    number: 31,
    title: "31번 지문 핵심 내용",
    passage: "좋은 일이나 나쁜 일이 기분에 영향을 주지만, 인간은 시간이 지나면 자신의 기본 행복 수준으로 돌아간다. 첫사랑의 황홀함이나 이별의 절망도 결국 약해진다.",
    choices: [
      "강한 감정은 시간이 지나도 절대 약해지지 않음",
      "행복은 오직 연속된 좋은 사건에 의해 결정됨",
      "인간이 행복의 기준선으로 돌아가는 경향",
      "어린이는 어른보다 감정 변화가 전혀 없음",
      "물질적 보상이 장기 행복을 영구히 보장함"
    ],
    answerIndex: 2,
    explanation: "새 사건에 적응한 뒤 기본적인 행복 수준으로 돌아가는 경향이 주제입니다."
  },
  {
    number: 32,
    title: "32번 지문 핵심 내용",
    passage: "깨어 있는 시간이 길어질수록 혈액에 아데노신이 쌓이고, 이는 잠을 자야 한다는 신호와 관련된다. 잠을 자는 동안 아데노신이 분해되며, 수면 부족은 결국 몸에 누적된다.",
    choices: [
      "수면 조절과 수면 부채에서 아데노신의 역할",
      "카페인이 모든 사람에게 같은 각성 효과를 내는 이유",
      "낮잠이 밤잠을 완전히 대체할 수 있는 과학적 근거",
      "운동량이 많을수록 수면이 불필요해지는 과정",
      "수면 습관이 유전과 무관하게 형성되는 방식"
    ],
    answerIndex: 0,
    explanation: "아데노신 축적과 분해가 잠의 필요와 수면 부채를 설명하는 핵심입니다."
  },
  {
    number: 33,
    title: "33번 지문 핵심 내용",
    passage: "어떤 수치가 정확한지는 사용 목적에 따라 달라진다. 지구와 태양 사이의 거리는 일출 시간을 아는 데는 충분히 정확할 수 있지만, 태양 가까이 위성을 보내려면 더 높은 정확도가 필요하다.",
    choices: [
      "천문학 계산은 일상생활에 전혀 활용되지 않음",
      "숫자의 자릿수가 많을수록 모든 상황에서 충분히 정확함",
      "불확실성의 중요성은 상황에 따라 달라짐",
      "태양과 지구의 거리는 계절에 따라 변하지 않음",
      "위성 발사는 거리 측정보다 날씨의 영향만 받음"
    ],
    answerIndex: 2,
    explanation: "정밀도와 불확실성의 의미는 목적과 맥락에 따라 달라집니다."
  },
  {
    number: 34,
    title: "34번 지문 핵심 내용",
    passage: "재생 에너지 기반 시설을 만들려면 콘크리트, 철강, 희귀 광물 생산이 필요하고 이 과정에는 화석 연료가 쓰인다. 따라서 재생 에너지 전환을 빠르게 추진할수록 건설 과정에서 화석 에너지를 더 많이 사용할 수 있다.",
    choices: [
      "재생 에너지 전환이 화석 연료에 의존하는 역설",
      "화석 연료가 이미 모든 산업에서 완전히 사라진 이유",
      "풍력 터빈이 농업 생산 방식을 단순화하는 과정",
      "태양광 패널이 희귀 광물 없이 만들어지는 원리",
      "기후 변화 대응에서 교통 기반 시설은 중요하지 않음"
    ],
    answerIndex: 0,
    explanation: "재생 에너지 체계를 만들기 위해 오히려 화석 연료가 필요하다는 역설이 핵심입니다."
  },
  {
    number: 35,
    title: "35번 지문 핵심 내용",
    passage: "인간은 오래전부터 인간처럼 생각하는 기계와 존재를 상상해 왔다. Turing의 사고하는 기계에 대한 질문과 Turing test, McCarthy의 인공지능이라는 용어 제시 이후 AI는 지능적 기계를 만드는 연구가 되었다.",
    choices: [
      "인공지능의 역사적 발전",
      "고대 그리스 신화가 현대 문학에서 사라진 이유",
      "자동 기계가 인간의 학습 능력을 낮춘 과정",
      "컴퓨터가 발명되기 전에는 지능을 상상하지 못했다는 주장",
      "문학 작품이 과학 용어를 모두 대체한 사례"
    ],
    answerIndex: 0,
    explanation: "인간형 기계에 대한 상상에서 현대 AI 개념까지의 흐름을 설명합니다."
  },
  {
    number: 36,
    title: "36번 지문 핵심 내용",
    passage: "사막거북은 더위를 피하고 대부분의 시간을 굴에서 보내며 물을 아낀다. 특히 방광이 물 저장 탱크처럼 작용해 물을 재흡수할 수 있어 오랫동안 민물 없이도 버틴다.",
    choices: [
      "사막거북의 수분 보존 적응 전략",
      "사막거북이 빠르게 이동해 포식자를 피하는 방식",
      "비가 오지 않는 지역에서 식물이 자라지 못하는 이유",
      "공원 방문객이 동물을 직접 옮겨야 하는 필요성",
      "겨울잠이 모든 파충류에게 해로운 이유"
    ],
    answerIndex: 0,
    explanation: "사막거북의 생활 방식과 방광 기능이 수분 보존에 맞춰져 있습니다."
  },
  {
    number: 37,
    title: "37번 지문 핵심 내용",
    passage: "자전거를 타다가 페달을 멈추면 점점 느려지고, 브레이크를 잡으면 더 빨리 느려진다. 이는 운동 방향의 반대로 작용하는 마찰력과 공기 저항 같은 힘 때문이다.",
    choices: [
      "운동을 느리게 하거나 멈추게 하는 마찰력",
      "자전거 속도를 높이는 페달 회전의 생리학",
      "도로의 경사가 자전거 색상 선택에 미치는 영향",
      "공기 저항이 항상 물체를 앞으로 밀어 주는 원리",
      "브레이크가 없을 때 자전거가 영원히 움직이는 이유"
    ],
    answerIndex: 0,
    explanation: "브레이크, 축의 마찰, 공기 저항이 움직임을 늦추는 힘으로 설명됩니다."
  },
  {
    number: 38,
    title: "38번 지문 핵심 내용",
    passage: "비선형 디지털 편집은 원하는 장면에 바로 접근하고 장면을 쉽게 추가하거나 삭제할 수 있다. 선형 편집이 타자기로 글을 쓰는 것과 같다면, 비선형 편집은 워드프로세서처럼 수정이 쉽다.",
    choices: [
      "선형 편집과 비교한 비선형 편집의 장점",
      "비디오테이프가 디지털 편집보다 항상 빠른 이유",
      "영화 편집에서 특수 효과를 금지해야 하는 필요성",
      "타자기가 현대 영상 제작의 핵심 도구인 이유",
      "장면 순서를 바꾸면 프로그램 길이가 절대 변하지 않는 원리"
    ],
    answerIndex: 0,
    explanation: "무작위 접근과 쉬운 수정 가능성이 비선형 편집의 장점입니다."
  },
  {
    number: 39,
    title: "39번 지문 핵심 내용",
    passage: "도덕적으로 선한 사람을 판단할 때는 행동뿐 아니라 의도와 동기도 중요하다. 그러나 좋은 의도만으로 충분하지 않고, 실제로 해를 막거나 좋은 결과를 내는 것도 어느 정도 필요하다.",
    choices: [
      "도덕적 선함 판단에서 의도와 결과의 역할",
      "도덕 판단에서 실제 행동은 전혀 고려되지 않음",
      "좋은 결과만 있으면 나쁜 의도도 항상 정당화됨",
      "희극 영화가 윤리학의 유일한 연구 대상인 이유",
      "Kant의 견해가 모든 상황에서 완전히 부정되는 이유"
    ],
    answerIndex: 0,
    explanation: "도덕적 평가에는 의도와 실제 결과가 함께 고려되어야 한다는 내용입니다."
  },
  {
    number: 40,
    title: "40번 지문 핵심 내용",
    passage: "우리는 사물을 기능과 목적에 따라 기대하는 방식으로 본다. 사진은 카메라처럼 모양과 색을 객관적으로 기록하기 때문에, 인간의 해석적 시각과 달리 낯선 세부를 그대로 보여 줄 수 있다.",
    choices: [
      "인간의 지각과 카메라의 객관적 시각 비교",
      "카메라가 인간보다 감정을 더 정확히 해석하는 이유",
      "망치는 위에서 볼 때 가장 쉽게 인식된다는 주장",
      "사진은 항상 현실을 의도적으로 왜곡한다는 설명",
      "사물의 기능은 시각적 기대에 영향을 주지 않음"
    ],
    answerIndex: 0,
    explanation: "기능적 기대가 개입하는 인간 시각과 기계적으로 기록하는 카메라의 차이를 다룹니다."
  },
  {
    number: 41,
    title: "41번 지문 핵심 내용",
    passage: "판매원이 고객에게 '도와드릴까요?'라고 묻는 말은 대화를 이끌기보다 고객을 방어적으로 만들고 흔히 '괜찮습니다'라는 거절을 불러온다.",
    choices: [
      "판매 상황에서 '도와드릴까요?'라는 접근이 비효율적인 이유",
      "고객이 매장에서 반드시 즉시 구매해야 하는 이유",
      "판매원이 제품 가격을 먼저 말하지 말아야 하는 법적 근거",
      "소매점에서 명함 사용을 금지해야 하는 필요성",
      "패션 매장 고객이 질문을 싫어하지 않는다는 주장"
    ],
    answerIndex: 0,
    explanation: "이 질문은 고객을 압박하고 방어적으로 만들어 판매 대화를 멈추게 합니다."
  },
  {
    number: 42,
    title: "42번 지문 핵심 내용",
    passage: "고객에게는 서두르거나 몰린다는 느낌이 없어야 한다. 판매원은 더 구체적이고 편안한 질문을 하거나, 고객이 혼자 둘러보고 싶다면 명함을 주고 필요할 때 접근 가능하게 있어야 한다.",
    choices: [
      "고객이 편안하게 느끼도록 압박 없는 판매 접근을 해야 함",
      "모든 고객에게 같은 문장을 반복해야 판매가 늘어남",
      "고객이 혼자 둘러보는 행동을 즉시 막아야 함",
      "판매원은 고객 질문을 줄이기 위해 자리를 떠야 함",
      "매장에서는 선물 구매 고객에게만 응대해야 함"
    ],
    answerIndex: 0,
    explanation: "효과적인 판매 접근은 고객이 부담 없이 말하고 둘러볼 수 있게 하는 것입니다."
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
  questionNumberLabel.textContent = `문항 ${question.number}`;
  totalCountLabel.textContent = `총 ${quizData.length}문제`;
  questionTitle.textContent = question.title;
  passageText.textContent = question.passage;
  choiceList.innerHTML = "";
  resultBox.hidden = true;
  nextButton.hidden = true;
  nextButton.textContent = currentQuestionIndex === quizData.length - 1 ? "결과 보기" : "다음 문제";

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
  resultStatus.textContent = isCorrect ? "정답입니다!" : "오답입니다.";
  resultStatus.className = `result-status ${isCorrect ? "correct" : "wrong"}`;
  answerText.textContent = `정답 주제: ${question.choices[question.answerIndex]}`;
  explanationText.textContent = `해설: ${question.explanation}`;
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
  progressLabel.textContent = "결과";
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

nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", restartQuiz);

renderQuestion();
window.setTimeout(showGameScreen, 2000);
