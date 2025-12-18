export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// ============================================
// HOW TO ADD NEW SUBTOPICS:
// Add a new object to the subtopics array inside any subject
// Example:
// { id: "new-subtopic-id", name: "Subtopic Name", questionCount: 10 }
// ============================================
export interface Subtopic {
  id: string;
  name: string;
  questionCount: number;
}

// ============================================
// HOW TO ADD NEW SUBJECTS:
// 1. Add a new object to the 'subjects' array below
// 2. Include: id, name, icon (emoji), questionCount, color (hsl), subtopics array
// Example:
// {
//   id: "new-subject",
//   name: "New Subject Name",
//   icon: "📖",
//   questionCount: 50,
//   color: "hsl(200 70% 50%)",
//   subtopics: [{ id: "subtopic-1", name: "First Topic", questionCount: 25 }]
// }
// ============================================
export interface Subject {
  id: string;
  name: string;
  icon: string;
  questionCount: number;
  color: string;
  subtopics: Subtopic[];
}

export interface Exam {
  id: string;
  name: string;
  shortName: string;
  description: string;
  subjects: string[];
  color: string;
  icon: string;
}

export const exams: Exam[] = [
  {
    id: "tgpsc",
    name: "Telangana Public Service Commission",
    shortName: "TGPSC",
    description: "Prepare for TGPSC Group 1, 2, 3 & 4 exams",
    subjects: ["general-studies", "indian-polity", "history", "ict"],
    color: "hsl(199 89% 48%)",
    icon: "🏛️",
  },
  {
    id: "appsc",
    name: "Andhra Pradesh Public Service Commission",
    shortName: "APPSC",
    description: "Complete preparation for AP state exams",
    subjects: ["general-studies", "indian-polity"],
    color: "hsl(167 72% 40%)",
    icon: "📋",
  },
  {
    id: "upsc",
    name: "Union Public Service Commission",
    shortName: "UPSC",
    description: "Civil Services, IAS, IPS preparation",
    subjects: ["general-studies", "indian-polity", "geography", "economics"],
    color: "hsl(262 83% 58%)",
    icon: "🇮🇳",
  },
  {
    id: "ugc-net",
    name: "University Grants Commission - NET",
    shortName: "UGC-NET",
    description: "National Eligibility Test preparation",
    subjects: ["teaching-aptitude", "ict", "general-studies", "economics"],
    color: "hsl(38 92% 50%)",
    icon: "🎓",
  },
  {
    id: "ssc",
    name: "Staff Selection Commission",
    shortName: "SSC",
    description: "SSC CGL, CHSL, MTS preparation",
    subjects: ["general-studies", "mathematics", "reasoning"],
    color: "hsl(340 82% 52%)",
    icon: "📝",
  },
  {
    id: "banking",
    name: "Banking Exams",
    shortName: "Banking",
    description: "IBPS, SBI, RBI exam preparation",
    subjects: ["mathematics", "reasoning", "economics"],
    color: "hsl(142 76% 36%)",
    icon: "🏦",
  },
  {
    id: "rrb",
    name: "Railway Recruitment Board",
    shortName: "RRB",
    description: "Railway NTPC, Group D, ALP preparation",
    subjects: ["general-studies", "mathematics", "reasoning"],
    color: "hsl(280 70% 50%)",
    icon: "🚂",
  },
];

export const subjects: Subject[] = [
  { 
    id: "general-studies", 
    name: "General Studies", 
    icon: "📚", 
    questionCount: 250, 
    color: "hsl(199 89% 48%)",
    subtopics: [
      { id: "ict-part1", name: "Information and Communication Technology (ICT) -Part1", questionCount: 20 },
      { id: "ict-part2", name: "Information and Communication Technology (ICT) -Part2", questionCount: 15 },
      { id: "gs-indian-constitution", name: "Indian Constitution", questionCount: 50 },
      { id: "gs-governance", name: "Governance & Public Policy", questionCount: 40 },
      { id: "gs-social-justice", name: "Social Justice", questionCount: 35 },
      { id: "gs-international-relations", name: "International Relations", questionCount: 45 },
      { id: "gs-environment", name: "Environment & Ecology", questionCount: 40 },
      { id: "gs-ethics", name: "Ethics & Integrity", questionCount: 40 },
     
    ]
  },
  { 
    id: "indian-polity", 
    name: "Indian Polity", 
    icon: "🏛️", 
    questionCount: 180, 
    color: "hsl(167 72% 40%)",
    subtopics: [
      { id: "ip-constitutional-framework", name: "Constitutional Framework", questionCount: 35 },
      { id: "ip-fundamental-rights", name: "Fundamental Rights & Duties", questionCount: 30 },
      { id: "ip-parliament", name: "Parliament & State Legislature", questionCount: 35 },
      { id: "ip-judiciary", name: "Judiciary", questionCount: 30 },
      { id: "ip-local-government", name: "Local Government", questionCount: 25 },
      { id: "ip-constitutional-bodies", name: "Constitutional Bodies", questionCount: 25 },
    ]
  },
  { 
    id: "ict", 
    name: "Computer Knowledge (ICT)", 
    icon: "📝", 
    questionCount: 35, 
    color: "hsl(220 70% 50%)",
    subtopics: [
      { id: "ict-part1", name: "Information and Communication Technology (ICT) -Part1", questionCount: 20 },
      { id: "ict-part2", name: "Information and Communication Technology (ICT) -Part2", questionCount: 15 },
      { id: "ict-part3", name: "Information and Communication Technology (ICT) -Part3 - Coming Soon", questionCount: 40 },
      { id: "ict-part4", name: "Information and Communication Technology (ICT) -Part4 - Coming Soon", questionCount: 40 },
    ]
  },
  { 
    id: "history", 
    name: "History", 
    icon: "📜", 
    questionCount: 200, 
    color: "hsl(38 92% 50%)",
    subtopics: [
      { id: "h-ancient-india", name: "Ancient India", questionCount: 40 },
      { id: "h-medieval-india", name: "Medieval India", questionCount: 35 },
      { id: "h-modern-india", name: "Modern India", questionCount: 45 },
      { id: "h-freedom-movement", name: "Freedom Movement", questionCount: 40 },
      { id: "h-world-history", name: "World History", questionCount: 40 },
    ]
  },
  { 
    id: "geography", 
    name: "Geography", 
    icon: "🌍", 
    questionCount: 150, 
    color: "hsl(142 76% 36%)",
    subtopics: [
      { id: "geo-physical", name: "Physical Geography", questionCount: 30 },
      { id: "geo-indian", name: "Indian Geography", questionCount: 40 },
      { id: "geo-world", name: "World Geography", questionCount: 30 },
      { id: "geo-climate", name: "Climate & Weather", questionCount: 25 },
      { id: "geo-resources", name: "Resources & Industries", questionCount: 25 },
    ]
  },
  { 
    id: "economics", 
    name: "Economics", 
    icon: "💰", 
    questionCount: 120, 
    color: "hsl(262 83% 58%)",
    subtopics: [
      { id: "eco-basics", name: "Basic Economics", questionCount: 25 },
      { id: "eco-indian-economy", name: "Indian Economy", questionCount: 35 },
      { id: "eco-banking", name: "Banking & Finance", questionCount: 25 },
      { id: "eco-budget", name: "Budget & Taxation", questionCount: 20 },
      { id: "eco-international", name: "International Trade", questionCount: 15 },
    ]
  },
  { 
    id: "mathematics", 
    name: "Mathematics", 
    icon: "🔢", 
    questionCount: 300, 
    color: "hsl(340 82% 52%)",
    subtopics: [
      { id: "math-arithmetic", name: "Arithmetic", questionCount: 60 },
      { id: "math-algebra", name: "Algebra", questionCount: 50 },
      { id: "math-geometry", name: "Geometry & Mensuration", questionCount: 50 },
      { id: "math-number-system", name: "Number System", questionCount: 45 },
      { id: "math-percentage", name: "Percentage & Ratio", questionCount: 50 },
      { id: "math-time-work", name: "Time & Work", questionCount: 45 },
    ]
  },
  { 
    id: "reasoning", 
    name: "Reasoning", 
    icon: "🧠", 
    questionCount: 220, 
    color: "hsl(280 70% 50%)",
    subtopics: [
      { id: "rea-verbal", name: "Verbal Reasoning", questionCount: 45 },
      { id: "rea-non-verbal", name: "Non-Verbal Reasoning", questionCount: 40 },
      { id: "rea-logical", name: "Logical Reasoning", questionCount: 45 },
      { id: "rea-analytical", name: "Analytical Reasoning", questionCount: 45 },
      { id: "rea-coding", name: "Coding-Decoding", questionCount: 45 },
    ]
  },
  { 
    id: "science", 
    name: "Science", 
    icon: "🔬", 
    questionCount: 180, 
    color: "hsl(199 60% 50%)",
    subtopics: [
      { id: "sci-physics", name: "Physics", questionCount: 45 },
      { id: "sci-chemistry", name: "Chemistry", questionCount: 45 },
      { id: "sci-biology", name: "Biology", questionCount: 45 },
      { id: "sci-technology", name: "Science & Technology", questionCount: 45 },
    ]
  },
  { 
    id: "current-affairs", 
    name: "Current Affairs", 
    icon: "📰", 
    questionCount: 100, 
    color: "hsl(0 84% 60%)",
    subtopics: [
      { id: "ca-national", name: "National Affairs", questionCount: 30 },
      { id: "ca-international", name: "International Affairs", questionCount: 25 },
      { id: "ca-sports", name: "Sports & Awards", questionCount: 20 },
      { id: "ca-economy", name: "Economic Updates", questionCount: 25 },
    ]
  },
  { 
    id: "english", 
    name: "English", 
    icon: "📝", 
    questionCount: 160, 
    color: "hsl(220 70% 50%)",
    subtopics: [
      { id: "eng-grammar", name: "Grammar", questionCount: 40 },
      { id: "eng-vocabulary", name: "Vocabulary", questionCount: 40 },
      { id: "eng-comprehension", name: "Reading Comprehension", questionCount: 40 },
      { id: "eng-idioms", name: "Idioms & Phrases", questionCount: 40 },
    ]
  },
  { 
    id: "teaching-aptitude", 
    name: "Teaching Aptitude", 
    icon: "📝", 
    questionCount: 30, 
    color: "hsl(220 70% 50%)",
    subtopics: [
      { id: "teaching-aptitude", name: "Teaching Aptitude - Part 1", questionCount: 30 },
 
    ]
  },


];

// ============================================
// HOW TO ADD NEW QUESTIONS:
// 1. Find the subject ID or subtopic ID in the sampleQuestions object
// 2. Add a new question object to that array
// Example:
// {
//   id: "unique-id",
//   question: "Your question text here?",
//   options: ["Option A", "Option B", "Option C", "Option D"],
//   correctAnswer: 0,  // 0 = A, 1 = B, 2 = C, 3 = D
//   explanation: "Explanation for the correct answer."
// }
// ============================================
export const sampleQuestions: Record<string, Question[]> = {
  // General Studies Questions
  "general-studies": [
    {
      id: "gs-1",
      question: "Which Article of the Indian Constitution deals with the Right to Education?",
      options: ["Article 19", "Article 21", "Article 21A", "Article 32"],
      correctAnswer: 2,
      explanation: "Article 21A was inserted by the 86th Constitutional Amendment Act, 2002. It provides free and compulsory education to all children between 6 to 14 years of age as a Fundamental Right.",
    },
    {
      id: "gs-2",
      question: "The Preamble to the Indian Constitution was amended by which Constitutional Amendment?",
      options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
      correctAnswer: 0,
      explanation: "The 42nd Constitutional Amendment Act, 1976 added the words 'Socialist', 'Secular' and 'Integrity' to the Preamble. This amendment is also known as the 'Mini Constitution'.",
    },
    {
      id: "gs-3",
      question: "Who was the first Speaker of the Lok Sabha?",
      options: ["Hukam Singh", "G.V. Mavalankar", "M.A. Ayyangar", "Neelam Sanjiva Reddy"],
      correctAnswer: 1,
      explanation: "G.V. Mavalankar was the first Speaker of the Lok Sabha, serving from 1952 to 1956. He is often referred to as the 'Father of the Lok Sabha'.",
    },
    {
      id: "gs-4",
      question: "Which of the following is NOT a Fundamental Right under the Indian Constitution?",
      options: ["Right to Property", "Right to Equality", "Right against Exploitation", "Right to Freedom of Religion"],
      correctAnswer: 0,
      explanation: "Right to Property was originally a Fundamental Right under Article 31, but it was removed by the 44th Constitutional Amendment Act, 1978. It is now a legal right under Article 300A.",
    },
    {
      id: "gs-5",
      question: "The concept of 'Basic Structure' of the Constitution was propounded in which case?",
      options: ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Maneka Gandhi Case"],
      correctAnswer: 1,
      explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati v. State of Kerala case (1973). The Supreme Court held that Parliament cannot amend the basic structure of the Constitution.",
    },
  ],
  // General Studies Subtopics
  "gs-indian-constitution": [
    {
      id: "gsc-1",
      question: "The Constitution of India was adopted on which date?",
      options: ["15th August 1947", "26th January 1950", "26th November 1949", "15th August 1950"],
      correctAnswer: 2,
      explanation: "The Constitution of India was adopted by the Constituent Assembly on 26th November 1949 and came into effect on 26th January 1950.",
    },
    {
      id: "gsc-2",
      question: "Who is known as the Father of the Indian Constitution?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Sardar Patel"],
      correctAnswer: 2,
      explanation: "Dr. B.R. Ambedkar is known as the Father of the Indian Constitution. He was the Chairman of the Drafting Committee.",
    },
  ],
  "gs-governance": [
    {
      id: "gsg-1",
      question: "Which body is responsible for conducting elections in India?",
      options: ["Supreme Court", "Election Commission", "Parliament", "President"],
      correctAnswer: 1,
      explanation: "The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India.",
    },
  ],
  
  // Indian Polity Questions
  "indian-polity": [
    {
      id: "ip-1",
      question: "The President of India can be removed from office by:",
      options: ["Prime Minister", "Parliament through impeachment", "Supreme Court", "Cabinet"],
      correctAnswer: 1,
      explanation: "According to Article 61 of the Constitution, the President can be removed by Parliament through the process of impeachment for 'violation of the Constitution'.",
    },
    {
      id: "ip-2",
      question: "Which Schedule of the Constitution contains provisions related to Anti-Defection Law?",
      options: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"],
      correctAnswer: 2,
      explanation: "The 10th Schedule was added by the 52nd Amendment Act, 1985. It contains provisions for disqualification of members of Parliament and State Legislatures on the ground of defection.",
    },
    {
      id: "ip-3",
      question: "The term of the Rajya Sabha members is:",
      options: ["4 years", "5 years", "6 years", "Life term"],
      correctAnswer: 2,
      explanation: "Members of the Rajya Sabha are elected for a term of 6 years. However, one-third of its members retire every two years, making it a permanent body.",
    },
  ],
  // Indian Polity Subtopics
  "ip-constitutional-framework": [
    {
      id: "ipcf-1",
      question: "How many parts does the Indian Constitution have?",
      options: ["22 Parts", "24 Parts", "25 Parts", "26 Parts"],
      correctAnswer: 2,
      explanation: "The Indian Constitution originally had 22 parts, but now has 25 parts after various amendments.",
    },
  ],
  "ip-fundamental-rights": [
    {
      id: "ipfr-1",
      question: "Which Article provides for Equality before Law?",
      options: ["Article 12", "Article 13", "Article 14", "Article 15"],
      correctAnswer: 2,
      explanation: "Article 14 of the Indian Constitution provides for Equality before Law and Equal Protection of Laws.",
    },
  ],
  
  // History Questions
  "history": [
    {
      id: "h-1",
      question: "The Quit India Movement was launched in which year?",
      options: ["1940", "1942", "1944", "1946"],
      correctAnswer: 1,
      explanation: "The Quit India Movement was launched on August 8, 1942, at the Bombay session of the All India Congress Committee. Mahatma Gandhi gave the call 'Do or Die'.",
    },
    {
      id: "h-2",
      question: "Who founded the Indian National Congress?",
      options: ["Dadabhai Naoroji", "A.O. Hume", "W.C. Bonnerjee", "Surendranath Banerjee"],
      correctAnswer: 1,
      explanation: "Allan Octavian Hume, a retired British civil servant, founded the Indian National Congress in 1885. The first session was held in Bombay with W.C. Bonnerjee as the first President.",
    },
    {
      id: "h-3",
      question: "The Battle of Plassey was fought in which year?",
      options: ["1757", "1764", "1857", "1947"],
      correctAnswer: 0,
      explanation: "The Battle of Plassey was fought on June 23, 1757, between the British East India Company and the Nawab of Bengal, Siraj-ud-Daulah. This battle marked the beginning of British rule in India.",
    },
  ],
  // History Subtopics
  "h-ancient-india": [
    {
      id: "hai-1",
      question: "The Indus Valley Civilization flourished during which period?",
      options: ["5000-3000 BCE", "3300-1300 BCE", "1500-500 BCE", "500 BCE - 500 CE"],
      correctAnswer: 1,
      explanation: "The Indus Valley Civilization flourished from approximately 3300 BCE to 1300 BCE, with its mature phase from 2600-1900 BCE.",
    },
  ],
  "h-freedom-movement": [
    {
      id: "hfm-1",
      question: "Who gave the slogan 'Do or Die'?",
      options: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "Bal Gangadhar Tilak"],
      correctAnswer: 2,
      explanation: "Mahatma Gandhi gave the slogan 'Do or Die' during the Quit India Movement in 1942.",
    },
  ],
  
  // Mathematics Questions
  "mathematics": [
    {
      id: "m-1",
      question: "If x + y = 10 and xy = 21, what is the value of x² + y²?",
      options: ["58", "79", "100", "42"],
      correctAnswer: 0,
      explanation: "Using the identity (x + y)² = x² + 2xy + y², we get 100 = x² + 42 + y². Therefore, x² + y² = 100 - 42 = 58.",
    },
    {
      id: "m-2",
      question: "A train travels 360 km in 4 hours. What is its speed in m/s?",
      options: ["25 m/s", "30 m/s", "90 m/s", "20 m/s"],
      correctAnswer: 0,
      explanation: "Speed = Distance/Time = 360 km / 4 hours = 90 km/h. To convert to m/s, multiply by 5/18: 90 × 5/18 = 25 m/s.",
    },
    {
      id: "m-3",
      question: "What is the compound interest on Rs. 10,000 at 10% per annum for 2 years?",
      options: ["Rs. 2,000", "Rs. 2,100", "Rs. 2,200", "Rs. 1,900"],
      correctAnswer: 1,
      explanation: "CI = P[(1 + r/100)^n - 1] = 10000[(1.1)² - 1] = 10000[1.21 - 1] = 10000 × 0.21 = Rs. 2,100.",
    },
  ],
  // Mathematics Subtopics
  "math-arithmetic": [
    {
      id: "ma-1",
      question: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
      correctAnswer: 1,
      explanation: "15% of 200 = (15/100) × 200 = 30",
    },
  ],
  "math-algebra": [
    {
      id: "malg-1",
      question: "Solve for x: 2x + 5 = 15",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      correctAnswer: 2,
      explanation: "2x + 5 = 15 → 2x = 10 → x = 5",
    },
  ],
  
  // Reasoning Questions
  "reasoning": [
    {
      id: "r-1",
      question: "Find the odd one out: Apple, Mango, Potato, Orange",
      options: ["Apple", "Mango", "Potato", "Orange"],
      correctAnswer: 2,
      explanation: "Potato is a vegetable (root crop), while Apple, Mango, and Orange are all fruits. Hence, Potato is the odd one out.",
    },
    {
      id: "r-2",
      question: "If FRIEND is coded as HUMGPF, how is CANDLE coded?",
      options: ["EDRIRL", "DCPFNG", "ECRFMG", "EDRFNG"],
      correctAnswer: 0,
      explanation: "Each letter is replaced by the letter two positions ahead in the alphabet. C→E, A→D, N→R, D→I, L→R, E→L. So CANDLE becomes EDRIRL.",
    },
  ],
  // Reasoning Subtopics
  "rea-verbal": [
    {
      id: "rv-1",
      question: "Find the synonym of 'Abundant':",
      options: ["Scarce", "Plentiful", "Limited", "Few"],
      correctAnswer: 1,
      explanation: "Abundant means plentiful or existing in large quantities.",
    },
  ],
  "rea-coding": [
    {
      id: "rc-1",
      question: "If CAT = 24, DOG = ?",
      options: ["26", "27", "28", "29"],
      correctAnswer: 0,
      explanation: "C=3, A=1, T=20, CAT=24. D=4, O=15, G=7, DOG=26.",
    },
  ],
  
  // Geography Subtopics
  "geo-physical": [
    {
      id: "gp-1",
      question: "The longest river in India is:",
      options: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
      correctAnswer: 1,
      explanation: "The Ganga is the longest river in India with a length of about 2,525 km.",
    },
  ],
  "geo-indian": [
    {
      id: "gi-1",
      question: "Which state has the longest coastline in India?",
      options: ["Maharashtra", "Gujarat", "Tamil Nadu", "Andhra Pradesh"],
      correctAnswer: 1,
      explanation: "Gujarat has the longest coastline in India, stretching about 1,600 km.",
    },
  ],
  
  // Economics Subtopics
  "eco-basics": [
    {
      id: "eb-1",
      question: "What is GDP?",
      options: ["Gross Domestic Product", "General Domestic Price", "Growth Development Plan", "Global Distribution Protocol"],
      correctAnswer: 0,
      explanation: "GDP stands for Gross Domestic Product, which measures the total value of goods and services produced in a country.",
    },
  ],
  "eco-indian-economy": [
    {
      id: "eie-1",
      question: "Which is the central bank of India?",
      options: ["SBI", "RBI", "NABARD", "SEBI"],
      correctAnswer: 1,
      explanation: "The Reserve Bank of India (RBI) is the central bank of India, established in 1935.",
    },
  ],
  
  // Science Subtopics
  "sci-physics": [
    {
      id: "sp-1",
      question: "What is the SI unit of force?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      correctAnswer: 2,
      explanation: "The SI unit of force is Newton (N), named after Sir Isaac Newton.",
    },
  ],
  "sci-chemistry": [
    {
      id: "sc-1",
      question: "What is the chemical symbol for Gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: 2,
      explanation: "The chemical symbol for Gold is Au, derived from the Latin word 'Aurum'.",
    },
  ],
  "sci-biology": [
    {
      id: "sb-1",
      question: "Which organ is known as the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
      correctAnswer: 2,
      explanation: "Mitochondria is known as the powerhouse of the cell because it produces ATP (energy currency).",
    },
  ],
  
  // Current Affairs Subtopics
  "ca-national": [
    {
      id: "cn-1",
      question: "Who is the current President of India (as of 2024)?",
      options: ["Ram Nath Kovind", "Droupadi Murmu", "Pranab Mukherjee", "Pratibha Patil"],
      correctAnswer: 1,
      explanation: "Droupadi Murmu is the current President of India, having taken office on July 25, 2022.",
    },
  ],
  
  // English Subtopics
  "eng-grammar": [
    {
      id: "eg-1",
      question: "Which is the correct sentence?",
      options: ["He go to school", "He goes to school", "He going to school", "He gone to school"],
      correctAnswer: 1,
      explanation: "He goes to school is correct because 'goes' is the proper present tense form with third person singular.",
    },
  ],
  "eng-vocabulary": [
    {
      id: "ev-1",
      question: "What is the meaning of 'Ephemeral'?",
      options: ["Permanent", "Short-lived", "Ancient", "Modern"],
      correctAnswer: 1,
      explanation: "Ephemeral means lasting for a very short time; short-lived.",
    },
  ],


  //Infromation and Communication Technology
  
"ict-part2": [
  {
    id: "c1",
    question: "1. Which of the following is an example of an output device in a computer system?",
    options: ["Scanner", "Webcam", "Plotter", "Microphone"],
    correctAnswer: 2,  // 0=A, 1=B, 2=C, 3=D
    explanation: "An output device displays or produces information processed by a computer. A plotter produces large-scale printed graphics, while scanner, webcam, and microphone are input devices."
  },
  {
    id: "c2",
    question: "27. Which of the following relatively accurately describes ChatGPT?",
    options: ["An AI-powered virtual assistant", "A hardware device", "A knowledge database", "A social networking platform"],
    correctAnswer: 0,
    explanation: "ChatGPT is an AI-powered virtual assistant using machine learning and natural language processing to interact with users. It is not a physical device, database, or social platform."
  },
  {
    id: "c3",
    question: "3. Which of the following is the correct cloud storage service developed by Google?",
    options: ["Google Drive", "Google Chrome", "OneDrive", "iCloud"],
    correctAnswer: 0,
    explanation: "Google Drive is a cloud storage service by Google for storing, accessing, and sharing files online. Google Chrome is a browser, OneDrive is Microsoft’s service, and iCloud is Apple’s service."
  },
  {
    id: "c4",
    question: "4. In the context of computer memory, which of the following correctly represents the full form of the unit GB?",
    options: ["Graybyte", "Gridbit", "Graybit", "Gigabyte"],
    correctAnswer: 3,
    explanation: "GB stands for Gigabyte, a standard unit of digital storage equal to 1024 Megabytes."
  },
  {
    id: "c5",
    question: "5. A UPS provides automatic backup power to a computer system. In the full form of UPS, what does the letter ‘U’ stand for?",
    options: ["Unceasing", "Unremitting", "Unbreakable", "Uninterruptible"],
    correctAnswer: 3,
    explanation: "UPS stands for Uninterruptible Power Supply. 'Uninterruptible' means continuous power without breaks."
  },
  {
    id: "c6",
    question: "6. Which of the following is not a valid email address?",
    options: ["myname#country@gmail.com", "myname_country@mymail.in", "myname.country@mymail.in", "myname-country@mymail.com"],
    correctAnswer: 0,
    explanation: "A valid email address can include letters, numbers, dots, hyphens, and underscores. The hash (#) symbol is invalid in the username."
  },
  {
    id: "c7",
    question: "7. Which type of wired network is commonly used to share a printer among computers in an office room?",
    options: ["LAN", "MAN", "PAN", "WAN"],
    correctAnswer: 0,
    explanation: "LAN (Local Area Network) connects computers within a small area like an office and allows sharing of printers and files."
  },
  {
    id: "c8",
    question: "8. Which protocol is commonly used to send and receive emails on the internet?",
    options: ["FTP", "SMTP", "HTTPS", "WWW"],
    correctAnswer: 1,
    explanation: "SMTP (Simple Mail Transfer Protocol) is used to send emails. FTP is for file transfer, HTTPS is for secure browsing, and WWW is not a protocol."
  },
  {
    id: "c9",
    question: "9. Which of the following is not an example of application software?",
    options: ["Microsoft Defender", "Microsoft Access", "Microsoft Word", "Microsoft Edge"],
    correctAnswer: 0,
    explanation: "Application software performs specific tasks for users. Microsoft Word, Access, and Edge are applications; Microsoft Defender is security/system software."
  },
  {
    id: "c10",
    question: "10. Which of the following is an open-source spreadsheet software?",
    options: ["Microsoft Excel", "Google Sheets", "LibreOffice Calc", "Apple Numbers"],
    correctAnswer: 2,
    explanation: "LibreOffice Calc is open-source software. Excel, Google Sheets, and Apple Numbers are proprietary."
  },
  {
    id: "c11",
    question: "11. Which of the following keyboard shortcut combinations is commonly used to perform the “Select All” operation in Microsoft Windows?",
    options: ["Ctrl + C", "Ctrl + V", "Ctrl + A", "Ctrl + X"],
    correctAnswer: 2,
    explanation: "Ctrl + A selects all text, files, or items in a document or window. Ctrl+C is copy, Ctrl+V is paste, Ctrl+X is cut."
  },
  {
    id: "c12",
    question: "12. Which of the following is a search engine developed by Microsoft?",
    options: ["Microsoft Access", "Microsoft 365", "Microsoft Edge", "Microsoft Bing"],
    correctAnswer: 3,
    explanation: "Microsoft Bing is a web search engine. Edge is a browser, Access is a database tool, and Microsoft 365 is a software suite."
  },
  {
    id: "c13",
    question: "13. Which of the following file extensions is commonly used for storing video files?",
    options: [".pdf", ".wav", ".avi", ".tiff"],
    correctAnswer: 2,
    explanation: "AVI (Audio Video Interleave) is a video file format. PDF is for documents, WAV for audio, and TIFF for images."
  },
  {
    id: "c14",
    question: "14. The file extension .docx is the default extension for which type of file?",
    options: ["Microsoft Word file", "Database file", "DB2 file", "Microsoft Defender file"],
    correctAnswer: 0,
    explanation: ".docx is the default format for Microsoft Word documents. Other options are incorrect."
  },
  {
    id: "c15",
    question: "15. Which of the following is not a primary and direct characteristic of a digital signature?",
    options: ["Integrity", "Authenticity", "Confidentiality", "Non-repudiation"],
    correctAnswer: 2,
    explanation: "Digital signatures ensure integrity, authenticity, and non-repudiation. Confidentiality relates to encryption, not signatures."
  }
],

"ict-part1": [
  {
    id: "q1",
    question: "1. Who controls the movement of signals between CPU and I/O?",
    options: ["ALU", "Control Unit", "Memory Unit", "Secondary stores"],
    correctAnswer: 1,
    explanation: "The Control Unit coordinates and controls signal flow between the CPU, memory, and input/output devices."
  },
  {
    id: "q2",
    question: "2. Which of the following CPU registers is used by ALU to store operands?",
    options: ["Both program counter and accumulator", "Program counter", "Accumulator", "Address register"],
    correctAnswer: 2,
    explanation: "The accumulator stores intermediate arithmetic and logical values used by the ALU."
  },
  {
    id: "q3",
    question: "3. In a microprogrammed control unit, subsequent instruction words are fetched into the ________.",
    options: ["Instruction Register", "Transistor", "CMOS battery", "Program Counter"],
    correctAnswer: 0,
    explanation: "In microprogrammed control units, instruction words are fetched into the Instruction Register before execution."
  },
  {
    id: "q4",
    question: "4. Computer systems that store instructions and data in the same memory unit are based on which structure?",
    options: ["Harvard", "Babbage", "Knuth", "Von-Neumann"],
    correctAnswer: 3,
    explanation: "Von-Neumann architecture uses a single shared memory for both data and instructions."
  },
  {
    id: "q5",
    question: "5. Which part of the CPU selects, interprets, and monitors execution of program instructions?",
    options: ["Memory", "Register Unit", "Control Unit", "ALU"],
    correctAnswer: 2,
    explanation: "The Control Unit fetches, decodes, and controls the execution of instructions."
  },
  {
    id: "q6",
    question: "6. Which bus specifies memory locations for data transfer?",
    options: ["Control bus", "Data bus", "Address bus", "I/O bus"],
    correctAnswer: 2,
    explanation: "The address bus carries memory addresses from the CPU to memory or I/O devices."
  },
  {
    id: "q7",
    question: "7. What is the full form of VLSI?",
    options: ["Varied Large Scale Integration", "Very Large-Scale Integration", "Varied Large-Scale Interrogation", "Very Large-Scale Interface"],
    correctAnswer: 1,
    explanation: "VLSI stands for Very Large-Scale Integration, used to place millions of transistors on a single chip."
  },
  {
    id: "q8",
    question: "8. Which bus transmits control signals between components of a computer system?",
    options: ["Data Bus", "Address Bus", "Both Data Bus and Address Bus", "Control Bus"],
    correctAnswer: 3,
    explanation: "The control bus carries command and timing signals to coordinate operations."
  },
  {
    id: "q9",
    question: "9. What is the full form of CPU?",
    options: ["Central Programming Unit", "Control Processing Unit", "Computer Processing Unit", "Central Processing Unit"],
    correctAnswer: 3,
    explanation: "CPU stands for Central Processing Unit, which performs processing and control operations."
  },
  {
    id: "q10",
    question: "10. Program instructions are stored in which unit from where CPU fetches and executes them?",
    options: ["Memory", "Memory and chip", "Chip", "Control unit"],
    correctAnswer: 0,
    explanation: "Memory stores program instructions and data for quick access by the CPU."
  },
  {
    id: "q11",
    question: "11. Control Unit is called the ______ of a computer.",
    options: ["Heart", "Nerve center or brain", "Kidney", "All options are correct"],
    correctAnswer: 1,
    explanation: "The Control Unit directs and coordinates all operations of the computer, so it is called the nerve center or brain."
  },
  {
    id: "q12",
    question: "12. An ALU typically uses an accumulator to store operands and results. What is the accumulator?",
    options: ["Register", "Main Memory", "Processing Unit", "Secondary Memory"],
    correctAnswer: 0,
    explanation: "The accumulator is a register inside the CPU used for temporary storage during processing."
  },
  {
    id: "q13",
    question: "13. Which hardware component is considered a storage unit with very small capacity?",
    options: ["Register", "Control Unit", "Data Bus", "ALU"],
    correctAnswer: 0,
    explanation: "Registers are fast memory units with very small storage capacity."
  },
  {
    id: "q14",
    question: "14. Which shows how operational attributes are linked together to realize the computer?",
    options: ["Component design", "Computer architecture", "Computer working", "Computer organization"],
    correctAnswer: 3,
    explanation: "Computer organization explains how hardware components are interconnected and operate together."
  },
  {
    id: "q15",
    question: "15. What is the conceptual design and fundamental operational structure of a computer system?",
    options: ["Computer organization", "Component design", "Computer working", "Computer architecture"],
    correctAnswer: 3,
    explanation: "Computer architecture defines the conceptual design and operational structure."
  },
  {
    id: "q16",
    question: "16. Which unit tells memory, ALU, and I/O devices how to respond to instructions?",
    options: ["Storage Unit", "Input Device", "Control Unit", "Logic Unit"],
    correctAnswer: 2,
    explanation: "The Control Unit directs all components on how to execute instructions."
  },
  {
    id: "q17",
    question: "17. Which material is used to manufacture computer chips?",
    options: ["Silver", "Iron", "Gold", "Semiconductor"],
    correctAnswer: 3,
    explanation: "Silicon is a semiconductor widely used in chip manufacturing."
  },
  {
    id: "q18",
    question: "18. Which among the following is a type of microcontroller in embedded systems?",
    options: ["Neither A nor B", "Only B", "Only A", "Both A and B"],
    correctAnswer: 2,
    explanation: "ARM microcontrollers are widely used in embedded systems."
  },
  {
    id: "q19",
    question: "19. PIC stands for ______.",
    options: ["Prefaced Internet Controller", "Prefaced Interface Controller", "Peripheral Internet Controller", "Peripheral Interface Controller"],
    correctAnswer: 3,
    explanation: "PIC stands for Peripheral Interface Controller."
  },
  {
    id: "q20",
    question: "20. BUS in a computer refers to ______.",
    options: ["Indicates a data item", "A set of physical wires for information transmission", "Indicates an address item", "A file in the operating system"],
    correctAnswer: 1,
    explanation: "A bus is a communication pathway used to transmit data and control signals."
  }
  ],

  // Teaching Aptitude:
"teaching-aptitude": [
  {
    id: "q1",
    question: "1. A science teacher gives students a brief demonstration showing how perception of colour changes with the intensity of a light source and then asks them to design their own experiment to further explore this relationship. This is an example of:",
    options: [
      "Expository teaching",
      "Problem-based learning",
      "Direct instruction",
      "Rote learning"
    ],
    correctAnswer: 1,
    explanation: "Problem-based learning presents learners with a situation and encourages them to investigate and find solutions independently or collaboratively. Here, the teacher initiates learning with a demonstration and then shifts responsibility to students to design experiments, promoting inquiry, critical thinking, and exploration. This goes beyond direct instruction or rote learning."
  },
  {
    id: "q2",
    question: "2. The knowledge gained through personal experience, such as seeing colour, is described as:",
    options: [
      "Intuitive",
      "Reasoned",
      "Experiential",
      "Logical"
    ],
    correctAnswer: 2,
    explanation: "Experiential knowledge is acquired through direct personal experience and interaction with the environment. Seeing colours or observing phenomena involves learning through experience. Intuitive, reasoned, and logical knowledge rely on instinct or thinking processes, whereas experiential knowledge is rooted in direct sensory experience."
  },
  {
    id: "q3",
    question: "3. As per NCFSE 2023, which of the following learning standards are more specific statements that give direction to curriculum development and implementation?",
    options: [
      "Curricular Aims",
      "Curricular Goals",
      "Competencies",
      "Learning Outcomes"
    ],
    correctAnswer: 3,
    explanation: "Learning outcomes are clear, specific, and measurable statements describing what learners should know and be able to do after instruction. NCFSE 2023 emphasizes learning outcomes as they directly guide teaching, assessment, and curriculum implementation, unlike broader aims, goals, or competencies."
  },
  {
    id: "q4",
    question: "4. In a constructivist classroom, the teacher's primary role is to:",
    options: [
      "Deliver lectures and provide notes",
      "Maintain silence and discipline in the classroom",
      "Encourage students to question and facilitate their learning",
      "Evaluate students through standardized tests only"
    ],
    correctAnswer: 2,
    explanation: "Constructivism views learning as an active process where learners build knowledge through experience. The teacher acts as a facilitator who encourages questioning, discussion, and inquiry. Rather than merely delivering content, the teacher supports learners in constructing their own understanding."
  },
  {
    id: "q5",
    question: "5. Learners read a text on mammals and watch a video showing mammals in different environments. Match the activities with the learning processes they best illustrate.",
    options: [
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
      "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)"
    ],
    correctAnswer: 0,
    explanation: "Analysing evidence to verify hypotheses reflects interpretation construction. Making notes of behaviours involves observation. Relating analysis to the text shows contextualisation. Working in groups demonstrates collaboration. These processes align with constructivist learning, where knowledge is built through observation, interpretation, context, and social interaction."
  },
  {
    id: "q6",
    question: "6. Which among the following is true in the context of Sigmund Freud?",
    options: [
      "Only (a) and (b)",
      "Only (c) and (d)",
      "Only (a), (b) and (c)",
      "Only (a), (b) and (d)"
    ],
    correctAnswer: 3,
    explanation: "Freud founded psychoanalysis and proposed the structural model of personality consisting of Id, Ego, and Super Ego. He strongly believed that instincts drive human behaviour and identified two major instincts: life (Eros) and death (Thanatos). Therefore, statements (a), (b), and (d) are correct."
  },
  {
    id: "q7",
    question: "7. Which of the following statement(s) is/are true?\nStatement I: Aptitude refers to special abilities in a particular field of activity.\nStatement II: Interest is a preference for a particular activity.",
    options: [
      "Only Statement I",
      "Only Statement II",
      "Statement I and Statement II",
      "Neither Statement I nor Statement II"
    ],
    correctAnswer: 2,
    explanation: "Aptitude refers to an individual's potential or special ability in a specific area, while interest refers to preference or liking for an activity. Both statements correctly define key concepts used in educational psychology. Hence, both statements are true."
  },
  {
    id: "q8",
    question: "8. Which one of the following is essential for a learner to develop conceptual understanding?",
    options: [
      "Connecting concepts and reflecting on prior knowledge",
      "Practicing recall of facts through repetition",
      "Learning large volumes of unrelated information",
      "Being told the principles directly by the teacher"
    ],
    correctAnswer: 0,
    explanation: "Conceptual understanding develops when learners actively connect new information with existing knowledge. Reflection helps reorganize and deepen understanding. Rote repetition or passive reception of information does not promote meaningful learning or conceptual clarity."
  },
  {
    id: "q9",
    question: "9. Which of the following is not a pathway that leads to growth and development of competence in professional domains as described in the NPST 2023?",
    options: [
      "Experience",
      "Incentives",
      "Exposure and interaction",
      "Continuous professional development"
    ],
    correctAnswer: 1,
    explanation: "NPST 2023 emphasizes growth through experience, exposure, interaction, and continuous professional development. These pathways enhance skills and professional practice. Incentives may motivate externally but do not directly contribute to building professional competence."
  },

  {
    id: "q10",
    question: "10. The key function of instruction in the process of education is to:",
    options: [
      "Guide learners through meaningful experiences that promote understanding",
      "Not involve ideas and values",
      "Involve unscientific methods of communication",
      "Manage the classroom by making children sit passively"
    ],
    correctAnswer: 0,
    explanation: "Instruction plays a central role in helping learners understand concepts through meaningful and purposeful experiences. Effective instruction connects ideas, values, and real-life applications. It encourages thinking, interaction, and engagement. Instruction is not about passive classroom control or unscientific communication."
  },
  {
    id: "q11",
    question: "11. Given below are two statements in the context of Gardner’s Theory of Multiple Intelligences:\nStatement I: It defines intelligence as distinct sets of processing operations that allow individuals to solve problems, create products, and discover new knowledge in culturally valued activities.\nStatement II: According to the theory, each intelligence has a unique biological basis, a distinct developmental course, and different forms of expert or end-state performance.",
    options: [
      "Only Statement I",
      "Only Statement II",
      "Statement I and Statement II",
      "Neither Statement I nor Statement II"
    ],
    correctAnswer: 2,
    explanation: "Howard Gardner’s theory defines intelligence as multiple, distinct abilities rather than a single general intelligence. Statement I correctly explains intelligence in terms of problem-solving and culturally valued activities. Statement II accurately reflects Gardner’s belief that each intelligence has its own biological foundation and developmental path."
  },
  {
    id: "q12",
    question: "12. Which of the following aspects violates the non-negotiable principles of pedagogy that inform classroom planning as outlined in NCFSE 2023?",
    options: [
      "Punishment and fear help to improve learning in the classroom",
      "Inequity in the classroom based on socio-economic conditions and student performance is unacceptable",
      "Memorisation must be the primary form of learning",
      "Students must not be seen as active agents in their own education"
    ],
    correctAnswer: 0,
    explanation: "NCFSE 2023 emphasizes child-friendly, safe, and supportive learning environments. Fear and punishment contradict principles of dignity, well-being, and positive engagement. Students are active participants, and inequity is explicitly rejected."
  },
  {
    id: "q13",
    question: "13. As per NCFSE 2023, which of the following is not part of the curriculum-associated category of school processes?",
    options: [
      "Health and hygiene",
      "Meal-time",
      "School timetable",
      "Teacher professional development"
    ],
    correctAnswer: 3,
    explanation: "Curriculum-associated school processes directly affect students’ daily learning experiences, such as health, hygiene, meal-time, and the school timetable. Teacher professional development is part of systemic support processes, not curriculum-associated processes."
  },
  {
    id: "q14",
    question: "14. What roles do emotions play in children’s learning?\n(a) Emotions enhance attention and memory\n(b) Negative emotions always improve focus\n(c) Positive emotions encourage exploration\n(d) Emotions and learning are unrelated\n(e) Positive relationships nurture positive emotions",
    options: [
      "Only (a), (c), and (e)",
      "Only (b)",
      "Only (d)",
      "Only (c) and (e)"
    ],
    correctAnswer: 0,
    explanation: "Positive emotions enhance attention, motivation, and memory, while supportive relationships foster emotional well-being. Positive emotions encourage curiosity and exploration. Negative emotions do not always improve focus. Learning and emotions are interconnected."
  },
  {
    id: "q15",
    question: "15. As per the National Curriculum Framework for School Education (NCFSE) 2023, homework:",
    options: [
      "Is not an extension of the learning process",
      "Is a consolidation of work done in school",
      "Is intended merely to repeat what has been learnt",
      "Does not include application of concepts"
    ],
    correctAnswer: 1,
    explanation: "Homework reinforces classroom learning. It helps students consolidate concepts already introduced. It should encourage reflection, practice, and application, not rote repetition or mechanical tasks."
  },
  {
    id: "q16",
    question: "16. Textbook-centricity in education refers to:",
    options: [
      "Inclusive notions of thinking",
      "High quality of textbooks",
      "Over-dependence on textbooks",
      "Availability of books"
    ],
    correctAnswer: 2,
    explanation: "Textbook-centricity is excessive reliance on textbooks as the sole source of teaching and learning. It limits creativity, critical thinking, and experiential learning. Modern frameworks promote diverse resources and learner engagement."
  },
  {
    id: "q17",
    question: "17. The 'Pillar Framework' challenges the dichotomy in traditional educational paradigms by:",
    options: [
      "Focusing solely on ancient practices in modern curricula",
      "Equating physical education with emotional intelligence",
      "Ignoring modern educational needs",
      "Offering a body–mind–spirit continuum for holistic practice"
    ],
    correctAnswer: 3,
    explanation: "The Pillar Framework emphasizes holistic education integrating physical, cognitive, emotional, and spiritual dimensions. It challenges traditional separation between mind and body and supports balanced development through unified learning."
  },
  {
    id: "q18",
    question: "18. A major criticism of Piaget’s theory of cognitive development is that:",
    options: [
      "He overemphasized the role of language and environment in cognition",
      "He did not recognize stages of development",
      "He overlooked the influence of social and cultural environments",
      "He believed cognition is a function of both social and cultural forces"
    ],
    correctAnswer: 2,
    explanation: "Piaget emphasized individual cognitive construction and biological maturation. A major criticism is that he underplayed the role of social and cultural factors. Later theorists, especially Vygotsky, highlighted social interaction and cultural context."
  },

  {
    id: "q19",
    question: "19. A teacher designs a plan by reviewing the students’ prior knowledge and then selecting appropriate learning materials and methods. Which components of the teaching plan does this reflect?",
    options: [
      "Only (a) and (b)",
      "Only (c) and (d)",
      "Only (a), (b), and (c)",
      "Only (b), (c), and (d)"
    ],
    correctAnswer: 1,
    explanation: "Reviewing students’ prior knowledge helps in understanding learners’ existing levels. Based on this, the teacher makes pedagogical choices (c) and selects appropriate teaching-learning materials (d). Assessment strategies, competencies, and home assignments are not the primary focus here."
  },
  {
    id: "q20",
    question: "20. The inference of 'knowing through circumstantial implication' in Pramana-Shastra is known as which of the following?",
    options: [
      "Anumana",
      "Anupalabdi",
      "Arthapatti",
      "Upamana"
    ],
    correctAnswer: 2,
    explanation: "Arthapatti refers to knowledge gained through circumstantial implication, where a conclusion is drawn to explain an apparent contradiction. Anumana is inference, Anupalabdi is knowledge through non-perception, and Upamana is comparison-based knowledge."
  },
  {
    id: "q21",
    question: "21. A teacher wants to help students master a skill effectively. Which one of the following approaches aligns comprehensively with constructivist-based pedagogy?",
    options: [
      "Repeating the same exercise daily until students remember it by heart",
      "Encouraging students to practice meaningfully with variety, feedback, and reflection",
      "Asking students to memorise all steps and reproduce them during assessments",
      "Giving homework assignments that repeat classwork without discussion or explanation"
    ],
    correctAnswer: 1,
    explanation: "Constructivist pedagogy emphasizes active learning. Variety in practice helps learners apply skills in different contexts, feedback allows improvement, and reflection encourages deeper thinking. Other options focus on rote learning without understanding."
  },
  {
    id: "q22",
    question: "22. Which of the following are the key aspects of an inclusive classroom?",
    options: [
      "Only (a), (b), and (c)",
      "Only (a), (c), and (d)",
      "Only (b) and (d)",
      "Only (c) and (d)"
    ],
    correctAnswer: 1,
    explanation: "Inclusive classrooms respect cultural diversity, value students’ voices, share activities and learning materials, and promote openness and acceptance. Providing identical instruction to all ignores individual differences, which goes against inclusion."
  },
  {
    id: "q23",
    question: "23. Children process and interpret new knowledge by:\n(a) Recording experiences exactly as they happen\n(b) Fitting new experiences into existing knowledge\n(c) Revising existing understanding based on new input\n(d) Rejecting experiences that do not fit prior knowledge\n(e) Building knowledge through interaction and reflection",
    options: [
      "Only (a), (c), and (e)",
      "Only (b), (c), and (e)",
      "Only (b), (d), and (e)",
      "Only (a), (b), and (c)"
    ],
    correctAnswer: 1,
    explanation: "Children actively construct knowledge by relating new experiences to prior knowledge, revising understanding, and learning through interaction and reflection. They do not merely record experiences or reject unfamiliar experiences outright."
  },
  {
    id: "q24",
    question: "24. As per the NCFSE 2023, how should subject offerings in interdisciplinary and vocational areas be primarily determined?",
    options: [
      "Based on student preferences for contemporary trends",
      "Based only on alignment with traditional academic disciplines",
      "Based on practical applicability and the ability to enter specific work domains or practices",
      "Based on availability of trained faculty in schools"
    ],
    correctAnswer: 2,
    explanation: "NCFSE 2023 emphasizes real-world learning and employability. Subject offerings should develop practical skills relevant to work domains, focusing on applicability and professional preparation."
  },
  {
    id: "q25",
    question: "25. The foundational principle of creating respectful and inclusive classrooms is:",
    options: [
      "Focusing only on students who demonstrate appropriate behaviour and academic excellence",
      "Grouping students based on similar learning abilities and using the same methods and materials for all",
      "Providing equal opportunities regardless of background, and promoting care, empathy, and equity",
      "Ignoring students’ emotions and moods to help them settle and learn better"
    ],
    correctAnswer: 2,
    explanation: "Inclusive classrooms are built on fairness, empathy, and equity. Every learner should receive equal opportunities, and diversity should be valued. Focusing only on high achievers or ignoring emotions contradicts inclusive practices."
  },
  {
    id: "q26",
    question: "26. Which among the following is true in the context of pedagogy?",
    options: [
      "It refers to the art and science of teaching",
      "It is just about teaching the subject content",
      "It is just about examinations",
      "It is just about memorization of lessons"
    ],
    correctAnswer: 0,
    explanation: "Pedagogy includes teaching methods, learning processes, classroom practices, assessment, and interaction. It combines theoretical knowledge (science) and practical application (art), not just content delivery or exams."
  },
  {
    id: "q27",
    question: "27. Research from across the world has provided ideas about how children learn that have practical implications for teaching. Which among the following is true?",
    options: [
      "In children, the brain has little role in learning",
      "Learning is based on the associations and connections that children make",
      "In children, emotions are not connected to learning",
      "Social and cultural environments have no role in children’s learning"
    ],
    correctAnswer: 1,
    explanation: "Learning occurs when children form connections between new information and prior knowledge. Brain function, emotions, and social-cultural environments are central to learning. Hence, option 2 is correct."
  },
  {
    id: "q28",
    question: "28. Which instructional approach is most likely to promote conceptual understanding in a constructivist setting?",
    options: [
      "Direct instruction with repetitive practice",
      "Inquiry-based learning with real-life scenarios",
      "Dictating notes from the blackboard",
      "Weekly standardized testing"
    ],
    correctAnswer: 1,
    explanation: "Constructivist learning emphasizes active participation, exploration, and meaning-making. Inquiry-based learning allows students to investigate problems and connect concepts to real-life situations, promoting conceptual understanding."
  },
  {
    id: "q29",
    question: "29. What is the correct sequence of the five steps in the Panchpadi learning process in Indian tradition?",
    options: [
      "Aditi – Abhyas – Bodh – Prasar – Prayog",
      "Aditi – Bodh – Prasar – Abhyas – Prayog",
      "Prayog – Abhyas – Aditi – Bodh – Prasar",
      "Aditi – Bodh – Abhyas – Prayog – Prasar"
    ],
    correctAnswer: 3,
    explanation: "Panchpadi learning: Aditi (readiness), Bodh (understanding), Abhyas (practice), Prayog (application), Prasar (extension). This sequence progresses naturally from readiness to understanding, practice, application, and dissemination of learning."
  },
  {
    id: "q30",
    question: "30. Collaborative learning enhances understanding by:",
    options: [
      "Allowing students to compete and show authoritarian leadership",
      "Restricting students to work independently",
      "Increasing involvement and promoting shared thinking and reflection",
      "Discouraging individuals from taking varied roles such as observers, mediators, and note-takers"
    ],
    correctAnswer: 2,
    explanation: "Collaborative learning promotes active idea-sharing, questioning assumptions, and collective reflection. It deepens understanding, encourages multiple perspectives, and strengthens responsibility by assigning varied roles in groups."
  },
],

};

export const getQuestionsForSubject = (subjectId: string): Question[] => {
  return sampleQuestions[subjectId] || sampleQuestions["general-studies"];
};

export const getQuestionsForSubtopic = (subtopicId: string): Question[] => {
  return sampleQuestions[subtopicId] || [];
};

export const getExamById = (examId: string): Exam | undefined => {
  return exams.find(e => e.id === examId);
};

export const getSubjectById = (subjectId: string): Subject | undefined => {
  return subjects.find(s => s.id === subjectId);
};

export const getSubtopicById = (subjectId: string, subtopicId: string): Subtopic | undefined => {
  const subject = subjects.find(s => s.id === subjectId);
  return subject?.subtopics.find(st => st.id === subtopicId);
};
