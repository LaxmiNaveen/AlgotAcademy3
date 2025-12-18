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
    subjects: ["ict", "general-studies", "economics"],
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
    id: "ict", 
    name: "Computer Knowledge (ICT)", 
    icon: "📝", 
    questionCount: 20, 
    color: "hsl(220 70% 50%)",
    subtopics: [
      { id: "ict-part1", name: "Information and Communication Technology (ICT) -Part1", questionCount: 20 },
      { id: "ict-part2", name: "Information and Communication Technology (ICT) -Part2 - Coming Soon", questionCount: 40 },
      { id: "ict-part3", name: "Information and Communication Technology (ICT) -Part3 - Coming Soon", questionCount: 40 },
      { id: "ict-part4", name: "Information and Communication Technology (ICT) -Part4 - Coming Soon", questionCount: 40 },
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
"ict-part1": [
  {
    id: "q1",
    question: "Who controls the movement of signals between CPU and I/O?",
    options: ["ALU", "Control Unit", "Memory Unit", "Secondary stores"],
    correctAnswer: 1,
    explanation: "The Control Unit coordinates and controls signal flow between the CPU, memory, and input/output devices."
  },
  {
    id: "q2",
    question: "Which of the following CPU registers is used by ALU to store operands?",
    options: ["Both program counter and accumulator", "Program counter", "Accumulator", "Address register"],
    correctAnswer: 2,
    explanation: "The accumulator stores intermediate arithmetic and logical values used by the ALU."
  },
  {
    id: "q3",
    question: "In a microprogrammed control unit, subsequent instruction words are fetched into the ________.",
    options: ["Instruction Register", "Transistor", "CMOS battery", "Program Counter"],
    correctAnswer: 0,
    explanation: "In microprogrammed control units, instruction words are fetched into the Instruction Register before execution."
  },
  {
    id: "q4",
    question: "Computer systems that store instructions and data in the same memory unit are based on which structure?",
    options: ["Harvard", "Babbage", "Knuth", "Von-Neumann"],
    correctAnswer: 3,
    explanation: "Von-Neumann architecture uses a single shared memory for both data and instructions."
  },
  {
    id: "q5",
    question: "Which part of the CPU selects, interprets, and monitors execution of program instructions?",
    options: ["Memory", "Register Unit", "Control Unit", "ALU"],
    correctAnswer: 2,
    explanation: "The Control Unit fetches, decodes, and controls the execution of instructions."
  },
  {
    id: "q6",
    question: "Which bus specifies memory locations for data transfer?",
    options: ["Control bus", "Data bus", "Address bus", "I/O bus"],
    correctAnswer: 2,
    explanation: "The address bus carries memory addresses from the CPU to memory or I/O devices."
  },
  {
    id: "q7",
    question: "What is the full form of VLSI?",
    options: ["Varied Large Scale Integration", "Very Large-Scale Integration", "Varied Large-Scale Interrogation", "Very Large-Scale Interface"],
    correctAnswer: 1,
    explanation: "VLSI stands for Very Large-Scale Integration, used to place millions of transistors on a single chip."
  },
  {
    id: "q8",
    question: "Which bus transmits control signals between components of a computer system?",
    options: ["Data Bus", "Address Bus", "Both Data Bus and Address Bus", "Control Bus"],
    correctAnswer: 3,
    explanation: "The control bus carries command and timing signals to coordinate operations."
  },
  {
    id: "q9",
    question: "What is the full form of CPU?",
    options: ["Central Programming Unit", "Control Processing Unit", "Computer Processing Unit", "Central Processing Unit"],
    correctAnswer: 3,
    explanation: "CPU stands for Central Processing Unit, which performs processing and control operations."
  },
  {
    id: "q10",
    question: "Program instructions are stored in which unit from where CPU fetches and executes them?",
    options: ["Memory", "Memory and chip", "Chip", "Control unit"],
    correctAnswer: 0,
    explanation: "Memory stores program instructions and data for quick access by the CPU."
  },
  {
    id: "q11",
    question: "Control Unit is called the ______ of a computer.",
    options: ["Heart", "Nerve center or brain", "Kidney", "All options are correct"],
    correctAnswer: 1,
    explanation: "The Control Unit directs and coordinates all operations of the computer, so it is called the nerve center or brain."
  },
  {
    id: "q12",
    question: "An ALU typically uses an accumulator to store operands and results. What is the accumulator?",
    options: ["Register", "Main Memory", "Processing Unit", "Secondary Memory"],
    correctAnswer: 0,
    explanation: "The accumulator is a register inside the CPU used for temporary storage during processing."
  },
  {
    id: "q13",
    question: "Which hardware component is considered a storage unit with very small capacity?",
    options: ["Register", "Control Unit", "Data Bus", "ALU"],
    correctAnswer: 0,
    explanation: "Registers are fast memory units with very small storage capacity."
  },
  {
    id: "q14",
    question: "Which shows how operational attributes are linked together to realize the computer?",
    options: ["Component design", "Computer architecture", "Computer working", "Computer organization"],
    correctAnswer: 3,
    explanation: "Computer organization explains how hardware components are interconnected and operate together."
  },
  {
    id: "q15",
    question: "What is the conceptual design and fundamental operational structure of a computer system?",
    options: ["Computer organization", "Component design", "Computer working", "Computer architecture"],
    correctAnswer: 3,
    explanation: "Computer architecture defines the conceptual design and operational structure."
  },
  {
    id: "q16",
    question: "Which unit tells memory, ALU, and I/O devices how to respond to instructions?",
    options: ["Storage Unit", "Input Device", "Control Unit", "Logic Unit"],
    correctAnswer: 2,
    explanation: "The Control Unit directs all components on how to execute instructions."
  },
  {
    id: "q17",
    question: "Which material is used to manufacture computer chips?",
    options: ["Silver", "Iron", "Gold", "Semiconductor"],
    correctAnswer: 3,
    explanation: "Silicon is a semiconductor widely used in chip manufacturing."
  },
  {
    id: "q18",
    question: "Which among the following is a type of microcontroller in embedded systems?",
    options: ["Neither A nor B", "Only B", "Only A", "Both A and B"],
    correctAnswer: 2,
    explanation: "ARM microcontrollers are widely used in embedded systems."
  },
  {
    id: "q19",
    question: "PIC stands for ______.",
    options: ["Prefaced Internet Controller", "Prefaced Interface Controller", "Peripheral Internet Controller", "Peripheral Interface Controller"],
    correctAnswer: 3,
    explanation: "PIC stands for Peripheral Interface Controller."
  },
  {
    id: "q20",
    question: "BUS in a computer refers to ______.",
    options: ["Indicates a data item", "A set of physical wires for information transmission", "Indicates an address item", "A file in the operating system"],
    correctAnswer: 1,
    explanation: "A bus is a communication pathway used to transmit data and control signals."
  }
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
