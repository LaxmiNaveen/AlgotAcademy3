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
    subjects: ["general-studies", "indian-polity", "history", "ict", "current-affairs1"],
    color: "hsl(199 89% 48%)",
    icon: "🏛️",
  },
  {
    id: "appsc",
    name: "Andhra Pradesh Public Service Commission",
    shortName: "APPSC",
    description: "Complete preparation for AP state exams",
    subjects: ["general-studies", "indian-polity", "current-affairs1"],
    color: "hsl(167 72% 40%)",
    icon: "📋",
  },
  {
    id: "upsc",
    name: "Union Public Service Commission",
    shortName: "UPSC",
    description: "Civil Services, IAS, IPS preparation",
    subjects: ["current-affairs1", "general-studies", "indian-polity", "geography", "economics"],
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
    subjects: ["current-affairs1", "general-studies", "mathematics", "reasoning"],
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
    subjects: ["current-affairs1", "general-studies", "mathematics", "reasoning"],
    color: "hsl(280 70% 50%)",
    icon: "🚂",
  },
];

export const subjects: Subject[] = [
  { 
    id: "general-studies", 
    name: "General Studies", 
    icon: "📚", 
    questionCount: 65, 
    color: "hsl(199 89% 48%)",
    subtopics: [

      { id: "ict-part1", name: "Information and Communication Technology (ICT) -Part1", questionCount: 20 },
      { id: "ict-part2", name: "Information and Communication Technology (ICT) -Part2", questionCount: 15 },
      { id: "ict-part3", name: "Information and Communication Technology (ICT) -Part3", questionCount: 50 },
      { id: "gs-indian-constitution", name: "Indian Constitution", questionCount: 50 },
      { id: "gs-governance", name: "Governance & Public Policy", questionCount: 40 },
      { id: "gs-social-justice", name: "Social Justice", questionCount: 35 },
      { id: "gs-international-relations", name: "International Relations", questionCount: 45 },
      { id: "gs-environment", name: "Environment & Ecology", questionCount: 40 },
      { id: "gs-ethics", name: "Ethics & Integrity", questionCount: 40 },
     
    ]
  },
    { 
    id: "current-affairs1", 
    name: "Current Affairs", 
    icon: "🏛️", 
    questionCount: 272, 
    color: "hsl(167 72% 40%)",
    subtopics: [
      { id: "imp-appointments", name: "Important Appointments", questionCount: 40 },
      { id: "awards-honours1", name: "Awards and Honours 2025-Part-1", questionCount: 30 },
      { id: "awards-honours2", name: "Awards and Honours 2025-Part-2", questionCount: 132 },
       { id: "summits-conferences", name: "Important Summits and Conferences", questionCount: 70 },
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
      { id: "ict-part3", name: "Information and Communication Technology (ICT) -Part3", questionCount: 50 },
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

"ict-part3": [
  {
    id: "q1",
    question: "1. An 'Optical Character Reader' is an example of:",
    options: ["Control Unit", "Input Unit", "Arithmetic and Logic Unit", "Output Unit"],
    correctAnswer: 1,
    explanation: "OCR (Optical Character Recognition) is an input device that converts printed or handwritten text into machine-readable digital data."
  },
  {
    id: "q2",
    question: "2. A device that is connected to a computer but is NOT part of the core computer architecture is known as:",
    options: ["Processing Device", "Memory Device", "Peripheral Device", "On-board Device"],
    correctAnswer: 2,
    explanation: "Peripheral devices provide input, output, or storage but are not part of the CPU or core architecture."
  },
  {
    id: "q3",
    question: "3. Which input device consists of a hand-held stick that rotates to move the screen cursor?",
    options: ["Microphone", "MICR", "Biometric", "Joystick"],
    correctAnswer: 3,
    explanation: "A joystick is a pointing input device commonly used in games and simulators."
  },
  {
    id: "q4",
    question: "4. Which type of mouse uses laser rays for cursor movement?",
    options: ["Optical", "Electrical", "Gyroscopic", "Mechanical"],
    correctAnswer: 0,
    explanation: "An optical mouse uses LED or laser light to track movement instead of a ball."
  },
  {
    id: "q5",
    question: "5. Which mouse action is commonly used to start a program or open a file?",
    options: ["Right click", "Double Click", "Left click", "Drag and drop"],
    correctAnswer: 1,
    explanation: "Double-clicking opens files or starts programs."
  },
  {
    id: "q6",
    question: "6. Select the odd option:",
    options: ["Joystick", "Printer", "Keyboard", "Mouse"],
    correctAnswer: 1,
    explanation: "Printer is an output device, while the others are input devices."
  },
  {
    id: "q7",
    question: "7. All of the following are input devices EXCEPT:",
    options: ["Speakers", "Keyboard", "Mouse", "Optical Scanner"],
    correctAnswer: 0,
    explanation: "Speakers are output devices."
  },
  {
    id: "q8",
    question: "8. The coordination of two running programs with the I/O stream is called:",
    options: ["Cache", "Pipe", "Buffer", "Thread"],
    correctAnswer: 1,
    explanation: "A pipe connects the output of one program to the input of another."
  },
  {
    id: "q9",
    question: "9. Which statement about input devices is incorrect?",
    options: [
      "They convert input data into digital form",
      "Data entered via keyboard goes directly to MDR",
      "Mouse is an input device",
      "They send data to the computer"
    ],
    correctAnswer: 1,
    explanation: "Keyboard input does not go directly to the MDR; it is first processed and buffered."
  },
  {
    id: "q10",
    question: "10. Which of the following is an input device?",
    options: ["Optical Character Reader", "Projector", "Headphones", "Inkjet Printer"],
    correctAnswer: 0,
    explanation: "OCR is an input device; others are output devices."
  },
  {
    id: "q11",
    question: "11. Which device sends information to a computer system for processing?",
    options: ["Monitor", "Printing", "Input", "Output"],
    correctAnswer: 2,
    explanation: "Input devices send data to the computer for processing."
  },
  {
    id: "q12",
    question: "12. The device that converts a physical image into a digital one is called:",
    options: ["Scanner", "Image Converter", "Printer", "Recorder"],
    correctAnswer: 0,
    explanation: "A scanner digitizes physical documents and images."
  },
  {
    id: "q13",
    question: "13. Which of the following is not an output device?",
    options: ["Printer", "Plotter", "Scanner", "Speaker"],
    correctAnswer: 2,
    explanation: "Scanner is an input device."
  },
  {
    id: "q14",
    question: "14. Which of the following is not a part of input stage?",
    options: ["Data Capture", "Performance of Instructions", "Data Collection", "Encoding"],
    correctAnswer: 1,
    explanation: "Performance of instructions belongs to the processing stage."
  },
  {
    id: "q15",
    question: "15. The Insert key on the keyboard is used to toggle between the ________ and _________ modes during data entry.",
    options: ["Insert, Overwrite", "Backspace, Overwrite", "Delete, Insert", "Delete, Overwrite"],
    correctAnswer: 0,
    explanation: "Insert key switches between insert and overwrite modes."
  },
  {
    id: "q16",
    question: "16. The default layout of most keyboards is called:",
    options: ["Alphabet", "QWERTY", "ASCII", "IEEE"],
    correctAnswer: 1,
    explanation: "QWERTY is the standard keyboard layout."
  },
  {
    id: "q17",
    question: "17. A device that allows you to give instructions to a computer is a/an ______ device.",
    options: ["Storage", "Process", "Input", "Output"],
    correctAnswer: 2,
    explanation: "Input devices provide instructions and data to the computer."
  },
  {
    id: "q18",
    question: "18. Which of the following is an Input device?",
    options: ["Joystick", "Plotter", "Coder", "Printer"],
    correctAnswer: 0,
    explanation: "Joystick is an input device."
  },
  {
    id: "q19",
    question: "19. Which input device consists of a stick that pivots on a base and reports its direction to the CPU?",
    options: ["Microphone", "Light pen", "Keyboard", "Joystick"],
    correctAnswer: 3,
    explanation: "Joystick detects angle and direction of movement."
  },
  {
    id: "q20",
    question: "20. Light pen and Joystick are _______.",
    options: ["Storage devices", "Input devices", "Algorithms", "Output devices"],
    correctAnswer: 1,
    explanation: "Both are input devices."
  },
  {
    id: "q21",
    question: "21. Which of the given options is odd?",
    options: ["Trackball", "Keyboard", "Antivirus", "Mouse"],
    correctAnswer: 2,
    explanation: "Antivirus is software; others are hardware devices."
  },
  {
    id: "q22",
    question: "22. A mouse, trackball and joystick are examples of:",
    options: ["Pointing devices", "Pen input devices", "Data collection devices", "Multimedia devices"],
    correctAnswer: 0,
    explanation: "They are pointing devices used to control the cursor."
  },
  {
    id: "q23",
    question: "23. Touchpad is a good alternative to the mouse, it is an example of:",
    options: ["Software device", "Printing device", "Pointing device", "Temporary device"],
    correctAnswer: 2,
    explanation: "Touchpad is a pointing input device."
  },
  {
    id: "q24",
    question: "24. Which of the following statements is wrong?",
    options: ["Only (ii)", "Both (i) and (ii)", "Neither (i) nor (ii)", "Only (i)"],
    correctAnswer: 2,
    explanation: "Both statements about cordless mouse are correct."
  },
  {
    id: "q25",
    question: "25. The technology of scanning that recognizes handwritten and printed text is:",
    options: ["MICR", "OMR", "OCR", "BCR"],
    correctAnswer: 2,
    explanation: "OCR recognizes printed and handwritten text."
  },
  {
    id: "q26",
    question: "26. The technology of scanning that reads checkboxes inside a predefined space is:",
    options: ["BCR", "OCR", "OMR", "MICR"],
    correctAnswer: 2,
    explanation: "OMR reads marked answers in predefined locations."
  },
  {
    id: "q27",
    question: "27. For reading MCQ answers, which input device is generally used?",
    options: ["Magnetic Ink Card Reader", "Optical Character Reader", "Optical Mark Reader", "Bar Code Reader"],
    correctAnswer: 2,
    explanation: "OMR is used to read multiple-choice answers."
  },
  {
    id: "q28",
    question: "28. Which mouse property is used to swap the functions of the right and left mouse buttons?",
    options: ["Pointer Options", "ClickLock", "Double-click speed", "Button configuration"],
    correctAnswer: 3,
    explanation: "Button configuration allows swapping mouse buttons."
  },
  {
    id: "q29",
    question: "29. Which statement is true about changing mouse properties in Windows 10?",
    options: ["Only (ii)", "Neither (i) nor (ii)", "Both (i) and (ii)", "Only (i)"],
    correctAnswer: 0,
    explanation: "Pointer size can be changed; left button function can also be customized."
  },
  {
    id: "q30",
    question: "30. Which statement is correct about changing mouse properties in Windows 10?",
    options: ["Both (i) and (ii)", "Only (i)", "Only (ii)", "Neither (i) nor (ii)"],
    correctAnswer: 2,
    explanation: "Cursor speed and button functions can be customized."
  },
  {
    id: "q31",
    question: "31. The ClickLock property of the mouse:",
    options: [
      "None of these",
      "Allows to prevent items from getting clicked",
      "Allows to set password for items",
      "Allows to drag without holding mouse button"
    ],
    correctAnswer: 3,
    explanation: "ClickLock enables dragging without holding the mouse button."
  },
  {
    id: "q32",
    question: "32. Microphone is a/an ______ device.",
    options: ["Signal Digitizing", "Audio signal collection", "Audio signal processing", "Input"],
    correctAnswer: 3,
    explanation: "Microphone is an input device."
  },
  {
    id: "q33",
    question: "33. Which input device converts analog information into digital form for drawing?",
    options: ["Microphone", "Bar Code Reader", "Digitizer", "Graphic Plotter"],
    correctAnswer: 2,
    explanation: "Digitizer converts analog drawings into digital data."
  },
  {
    id: "q34",
    question: "34. Which of the following is not an input device?",
    options: ["Track Ball", "Plotter", "Light Pen", "Magnetic Scanner"],
    correctAnswer: 1,
    explanation: "Plotter is an output device."
  },
  {
    id: "q35",
    question: "35. A keyboard is used:",
    options: [
      "To enter text and numbers and send commands",
      "To create new keys",
      "To open the computer",
      "For all of these"
    ],
    correctAnswer: 0,
    explanation: "Keyboard is used to input text, numbers, and commands."
  },
  {
    id: "q36",
    question: "36. Which of the following is a toggle key on a keyboard?",
    options: ["Alt", "Shift", "Scroll lock", "Ctrl"],
    correctAnswer: 2,
    explanation: "Scroll Lock is a toggle key."
  },
  {
    id: "q37",
    question: "37. Parallel ports usually are not used to connect:",
    options: ["Modem", "Scanner", "Printer", "CD Writer"],
    correctAnswer: 0,
    explanation: "Modems generally use serial ports."
  },
  {
    id: "q38",
    question: "38. A combination of the keyboard and the visual display unit is called a:",
    options: ["Mouse", "Port", "Terminal", "Cable"],
    correctAnswer: 2,
    explanation: "A terminal consists of a keyboard and display unit."
  },
  {
    id: "q39",
    question: "39. QWERTY keyboard design was originally intended to:",
    options: [
      "Make typing harder and inefficient",
      "Improve typing accuracy",
      "Make typing more efficient",
      "Improve typing speed"
    ],
    correctAnswer: 0,
    explanation: "QWERTY was designed to reduce typewriter jams."
  },
  {
    id: "q40",
    question: "40. QWERTY refers to:",
    options: [
      "Arrangement of hardware parts",
      "Arrangement of keys on a standard keyboard",
      "Arrangement of only function keys",
      "Arrangement of only numeric keys"
    ],
    correctAnswer: 1,
    explanation: "QWERTY is the standard keyboard layout."
  },
  {
    id: "q41",
    question: "41. The wildcard character for matching any number of characters is:",
    options: ["Hyphen Sign", "Ampersand Sign", "Asterisk Sign", "Dollar Sign"],
    correctAnswer: 2,
    explanation: "Asterisk (*) represents any number of characters."
  },
  {
    id: "q42",
    question: "42. Shift key and Print Screen key are known as:",
    options: ["Special purpose keys", "Standard keys", "Navigation keys", "Function keys"],
    correctAnswer: 0,
    explanation: "They perform special functions."
  },
  {
    id: "q43",
    question: "43. Which key deletes the character to the left of the cursor?",
    options: ["End", "Backspace", "Home", "Delete"],
    correctAnswer: 1,
    explanation: "Backspace deletes the character to the left."
  },
  {
    id: "q44",
    question: "44. Arrow keys, Home, End, Page Up and Page Down are:",
    options: ["Function keys", "Special purpose keys", "Standard keys", "Navigation keys"],
    correctAnswer: 3,
    explanation: "They are used for navigation."
  },
  {
    id: "q45",
    question: "45. Ctrl, Shift and Alt are called:",
    options: ["Adjustment keys", "Function keys", "Modifier keys", "Alphanumeric keys"],
    correctAnswer: 2,
    explanation: "They modify the function of other keys."
  },
  {
    id: "q46",
    question: "46. Which of the following keys work in toggle mode?",
    options: ["Shift", "Caps lock", "Enter", "Ctrl"],
    correctAnswer: 1,
    explanation: "Caps Lock is a toggle key."
  },
  {
    id: "q47",
    question: "47. A computer keyboard generally has _____ function keys.",
    options: ["11", "10", "16", "12"],
    correctAnswer: 3,
    explanation: "Standard keyboards have 12 function keys (F1–F12)."
  },
  {
    id: "q48",
    question: "48. Which is not an option in the Buttons tab of mouse properties?",
    options: ["ClickLock", "Button configuration", "Single Click speed", "Double-click speed"],
    correctAnswer: 2,
    explanation: "Single-click speed is not available."
  },
  {
    id: "q49",
    question: "49. The blinking symbol on the computer screen is called:",
    options: ["Mouse", "Hand", "Cursor", "Logo"],
    correctAnswer: 2,
    explanation: "Cursor shows the current input position."
  },
  {
    id: "q50",
    question: "50. Which is used to read handwritten or printed text to make a digital image?",
    options: ["Printer", "Laser beam", "Scanner", "Touchpad"],
    correctAnswer: 2,
    explanation: "Scanner converts printed or handwritten text into digital form."
  },
],

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
    question: "2. Which of the following relatively accurately describes ChatGPT?",
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
  
  //Current Affairs:
  
"summits-conferences": [
  {
    id: "q1",
    question: "1. Which player won the IPL 2025 Most Valuable Player (MVP) award?",
    options: ["Virat Kohli", "Shubman Gill", "Suryakumar Yadav", "Rohit Sharma"],
    correctAnswer: 2,
    explanation: "Suryakumar Yadav won the IPL 2025 MVP award for his consistent and impactful performances throughout the season, contributing significantly to his team’s success."
  },
  {
    id: "q2",
    question: "2. Dr. Ravi Kannan R. received the Padma Shri 2025 for contribution in which field?",
    options: ["Education", "Social Work", "Medicine", "Science and Technology"],
    correctAnswer: 2,
    explanation: "Dr. Ravi Kannan R., a renowned surgical oncologist, was awarded the Padma Shri for his exceptional service in the field of medicine, especially cancer care in Northeast India."
  },
  {
    id: "q3",
    question: "3. Which country hosted the 55th World Economic Forum Annual Meeting?",
    options: ["France", "Switzerland", "USA", "Germany"],
    correctAnswer: 1,
    explanation: "The World Economic Forum Annual Meeting is traditionally held in Davos, Switzerland, bringing together global political and business leaders."
  },
  {
    id: "q4",
    question: "4. Where was the 8th Indian Ocean Conference held?",
    options: ["Colombo", "Muscat", "Dubai", "Male"],
    correctAnswer: 1,
    explanation: "The 8th Indian Ocean Conference was held in Muscat, Oman, focusing on regional maritime security and cooperation."
  },
  {
    id: "q5",
    question: "5. Which city hosted the WAVES Summit 2025?",
    options: ["New Delhi", "Mumbai", "Pune", "Hyderabad"],
    correctAnswer: 1,
    explanation: "Mumbai hosted the WAVES Summit 2025, emphasizing India’s growing role in global media, entertainment, and creative industries."
  },

  {
    id: "q6",
    question: "6. What was the theme of the 10th NITI Aayog Governing Council Meeting?",
    options: [
      "Inclusive Growth for All",
      "Digital India Vision",
      "Viksit Rajya for Viksit Bharat@2047",
      "Innovation India"
    ],
    correctAnswer: 2,
    explanation: "The theme focused on cooperative federalism and the role of states in achieving a developed India by 2047."
  },
  {
    id: "q7",
    question: "7. Where was Aero India 2025 organized?",
    options: ["Hyderabad", "Chennai", "Bengaluru", "Pune"],
    correctAnswer: 2,
    explanation: "Aero India 2025 was held at Yelahanka Air Force Station, Bengaluru, showcasing global aerospace and defense capabilities."
  },
  {
    id: "q8",
    question: "8. Which country hosted COP29 UN Climate Change Conference?",
    options: ["UAE", "France", "Azerbaijan", "UK"],
    correctAnswer: 2,
    explanation: "COP29 was held in Baku, Azerbaijan, focusing on climate finance and global emission reduction commitments."
  },
  {
    id: "q9",
    question: "9. Where was the first Asian Buddhist Summit held?",
    options: ["Colombo", "Bangkok", "New Delhi", "Kathmandu"],
    correctAnswer: 2,
    explanation: "India hosted the first Asian Buddhist Summit in New Delhi to promote cultural diplomacy and Buddhist heritage."
  },
  {
    id: "q10",
    question: "10. Which city hosted the World Hydrogen Summit 2025?",
    options: ["Paris", "Rotterdam", "Berlin", "New Delhi"],
    correctAnswer: 1,
    explanation: "Rotterdam hosted the summit due to its leadership role in green hydrogen infrastructure and energy transition."
  },

  {
    id: "q11",
    question: "11. Where was the STREE Summit 2025 organized?",
    options: ["Jaipur", "Hyderabad", "Kolkata", "Pune"],
    correctAnswer: 1,
    explanation: "Hyderabad hosted the STREE Summit focusing on women’s safety, empowerment, and inclusive development."
  },
  {
    id: "q12",
    question: "12. Where was the 7th International Solar Alliance Assembly held?",
    options: ["Paris", "Nairobi", "Abu Dhabi", "New Delhi"],
    correctAnswer: 3,
    explanation: "The ISA Assembly was held in New Delhi, as India hosts the headquarters of the International Solar Alliance."
  },
  {
    id: "q13",
    question: "13. Which country hosted the G20 Summit 2024?",
    options: ["India", "Brazil", "South Africa", "Indonesia"],
    correctAnswer: 1,
    explanation: "Brazil hosted the G20 Summit 2024 in Rio de Janeiro under its G20 presidency."
  },
  {
    id: "q14",
    question: "14. Where was the Asia Clean Energy Summit 2024 held?",
    options: ["Tokyo", "Singapore", "Jakarta", "Seoul"],
    correctAnswer: 1,
    explanation: "Singapore hosted the Asia Clean Energy Summit focusing on renewable energy and sustainability."
  },
  {
    id: "q15",
    question: "15. Where was MILAN 2025 naval exercise organized?",
    options: ["Visakhapatnam", "Kochi", "Mumbai", "New Delhi"],
    correctAnswer: 3,
    explanation: "MILAN 2025 was organized in New Delhi, strengthening maritime cooperation among navies."
  },

  {
    id: "q16",
    question: "16. Which country will host the G20 Summit 2025?",
    options: ["India", "Brazil", "South Africa", "Italy"],
    correctAnswer: 2,
    explanation: "South Africa will host the G20 Summit 2025 after assuming the presidency."
  },
  {
    id: "q17",
    question: "17. Where was the Prakriti 2025 Carbon Markets Conference held?",
    options: ["Mumbai", "Hyderabad", "New Delhi", "Pune"],
    correctAnswer: 2,
    explanation: "The conference was held in New Delhi to discuss carbon markets and climate finance."
  },
  {
    id: "q18",
    question: "18. Where was the World Sustainable Development Summit 2025 organized?",
    options: ["Bengaluru", "New Delhi", "Chennai", "Mumbai"],
    correctAnswer: 1,
    explanation: "TERI organized the summit in New Delhi, focusing on sustainable development goals."
  },
  {
    id: "q19",
    question: "19. Where was the Global Space Exploration Conference 2025 held?",
    options: ["Dubai", "Washington D.C.", "New Delhi", "Dhaka"],
    correctAnswer: 2,
    explanation: "India hosted the conference in New Delhi, highlighting advancements in space technology."
  },
  {
    id: "q20",
    question: "20. Where was the 28th National E-Governance Conference held?",
    options: ["Jaipur", "Bhopal", "Visakhapatnam", "Bhubaneswar"],
    correctAnswer: 2,
    explanation: "The conference in Visakhapatnam focused on digital governance and citizen services."
  },

  {
    id: "q21",
    question: "21. Which state hosted the International Youth Conference 2025?",
    options: ["Assam", "Sikkim", "Manipur", "Himachal Pradesh"],
    correctAnswer: 1,
    explanation: "Sikkim hosted the International Youth Conference to promote youth leadership."
  },
  {
    id: "q22",
    question: "22. Where was the 11th BRICS Labour Ministers’ Meeting held?",
    options: ["India", "Russia", "Brazil", "China"],
    correctAnswer: 2,
    explanation: "Brazil hosted the meeting as part of its BRICS presidency."
  },
  {
    id: "q23",
    question: "23. Where was the 9th BRICS Industry Ministers’ Meeting held?",
    options: ["Moscow", "Beijing", "New Delhi", "Brasilia"],
    correctAnswer: 3,
    explanation: "The meeting was held in Brasilia, Brazil, under its BRICS leadership."
  },
  {
    id: "q24",
    question: "24. Where was the India–Bangladesh Joint River Commission meeting held?",
    options: ["Dhaka", "Delhi", "Kolkata", "Guwahati"],
    correctAnswer: 2,
    explanation: "The meeting in Kolkata focused on river water sharing and flood management."
  },
  {
    id: "q25",
    question: "25. Where was the Inclusion Summit 2025 organized?",
    options: ["Mumbai", "Hyderabad", "New Delhi", "Chennai"],
    correctAnswer: 2,
    explanation: "The summit in New Delhi emphasized inclusive growth and social equity."
  },

  {
    id: "q26",
    question: "26. Where was the 3rd BIMSTEC Agriculture Conference held?",
    options: ["Dhaka", "Kathmandu", "Colombo", "Thimphu"],
    correctAnswer: 1,
    explanation: "Kathmandu hosted the conference focusing on sustainable agriculture in BIMSTEC nations."
  },
  {
    id: "q27",
    question: "27. Where was the International Conference on Glaciers’ Preservation held?",
    options: ["Thimphu", "Kathmandu", "Dushanbe", "Islamabad"],
    correctAnswer: 2,
    explanation: "Tajikistan hosted the conference in Dushanbe to address glacier preservation."
  },
  {
    id: "q28",
    question: "28. Where was the 58th Asian Development Bank Annual Meeting held?",
    options: ["Japan", "Philippines", "Italy", "India"],
    correctAnswer: 2,
    explanation: "Italy hosted the ADB Annual Meeting focusing on global economic recovery."
  },
  {
    id: "q29",
    question: "29. Which city hosted the 1st Regional Dialogue on Social Justice?",
    options: ["Mumbai", "Patna", "New Delhi", "Surat"],
    correctAnswer: 2,
    explanation: "New Delhi hosted the dialogue to promote inclusive and fair development."
  },
  {
    id: "q30",
    question: "30. Which countries partnered with India for the Second Blue Talks?",
    options: [
      "Japan and Australia",
      "France and Costa Rica",
      "USA and Canada",
      "Germany and Brazil"
    ],
    correctAnswer: 1,
    explanation: "France and Costa Rica partnered with India due to their leadership in ocean sustainability."
  },

  {
    id: "q31",
    question: "31. Which city hosted the 1st Regional Dialogue on Social Justice 2025?",
    options: ["Surat", "Patna", "New Delhi", "Mumbai"],
    correctAnswer: 2,
    explanation: "The first Regional Dialogue on Social Justice was organized in New Delhi to deliberate on inclusive development, labour rights, and social equity across the South Asian region."
  },
  {
    id: "q32",
    question: "32. Which countries collaborated with India to host the Second Blue Talks in 2025?",
    options: ["Japan and Australia", "France and Costa Rica", "United States and Canada", "Germany and Brazil"],
    correctAnswer: 1,
    explanation: "France and Costa Rica partnered with India for the Second Blue Talks due to their strong global leadership in ocean governance and marine conservation."
  },
  {
    id: "q33",
    question: "33. Om Birla addressed the 149th Inter-Parliamentary Union Assembly in which city?",
    options: ["Geneva", "New York", "Paris", "London"],
    correctAnswer: 0,
    explanation: "The Inter-Parliamentary Union Assembly was held in Geneva, Switzerland, where Lok Sabha Speaker Om Birla highlighted India’s democratic traditions."
  },
  {
    id: "q34",
    question: "34. In which state was the BIMSTEC Youth Summit 2025 organized?",
    options: ["Gandhinagar, Gujarat", "Bhopal, Madhya Pradesh", "Lucknow, Uttar Pradesh", "Patna, Bihar"],
    correctAnswer: 0,
    explanation: "The BIMSTEC Youth Summit 2025 was held in Gandhinagar, Gujarat, to promote youth engagement in regional cooperation."
  },
  {
    id: "q35",
    question: "35. Where was the 55th World Economic Forum Annual Meeting held?",
    options: ["Davos", "Geneva", "New York", "Paris"],
    correctAnswer: 0,
    explanation: "The World Economic Forum Annual Meeting is traditionally held in Davos, Switzerland, bringing together global political and business leaders."
  },
  {
    id: "q36",
    question: "36. Which country will host the 28th Commonwealth Presidents’ Conference in 2026?",
    options: ["India", "United Kingdom", "Canada", "Australia"],
    correctAnswer: 0,
    explanation: "India will host the 28th Commonwealth Presidents’ Conference, reflecting its growing leadership role within the Commonwealth nations."
  },
  {
    id: "q37",
    question: "37. Where was the Global Justice, Love and Peace Summit 2025 held?",
    options: ["New Delhi", "Dubai", "London", "Abu Dhabi"],
    correctAnswer: 0,
    explanation: "The Global Justice, Love and Peace Summit 2025 was held in New Delhi, focusing on peacebuilding, harmony, and global justice."
  },
  {
    id: "q38",
    question: "38. India participated virtually in the 24th Indian Ocean Rim Association meeting organized by which country?",
    options: ["Maldives", "Sri Lanka", "Seychelles", "Indonesia"],
    correctAnswer: 1,
    explanation: "Sri Lanka organized the 24th IORA meeting, with India participating virtually to strengthen maritime cooperation in the region."
  },
  {
    id: "q39",
    question: "39. Which country hosted the 23rd SCO Heads of Government Summit 2024?",
    options: ["India", "China", "United Kingdom", "Pakistan"],
    correctAnswer: 3,
    explanation: "Pakistan hosted the 23rd Shanghai Cooperation Organisation Heads of Government Summit in 2024."
  },
  {
    id: "q40",
    question: "40. Representatives of which countries will participate in the Bodhi Yatra?",
    options: [
      "India, Nepal, Bhutan, Sri Lanka, Myanmar",
      "Thailand, Cambodia, Lao PDR, Vietnam, Myanmar",
      "China, Mongolia, Vietnam, Lao PDR, Myanmar",
      "Japan, South Korea, Malaysia, Thailand, Cambodia"
    ],
    correctAnswer: 1,
    explanation: "The Bodhi Yatra involves representatives from Thailand, Cambodia, Lao PDR, Vietnam, and Myanmar to promote Buddhist cultural exchange."
  },
  {
    id: "q41",
    question: "41. Where was Aero India 2025 organized?",
    options: ["Hyderabad", "Bengaluru", "Chennai", "Kochi"],
    correctAnswer: 1,
    explanation: "Aero India 2025 was held at Yelahanka Air Force Station, Bengaluru, which is the permanent venue of India’s premier air show."
  },
  {
    id: "q42",
    question: "42. Where was the WAVES Summit 2025 inaugurated?",
    options: ["New Delhi", "Mumbai", "Ahmedabad", "Pune"],
    correctAnswer: 1,
    explanation: "The WAVES Summit 2025 was inaugurated in Mumbai, focusing on global media, entertainment, and creative industries."
  },
  {
    id: "q43",
    question: "43. Where was the 8th Indian Ocean Conference held?",
    options: ["Muscat", "Colombo", "Dubai", "Maldives"],
    correctAnswer: 0,
    explanation: "The 8th Indian Ocean Conference was held in Muscat, Oman, to strengthen maritime diplomacy and regional cooperation."
  },
  {
    id: "q44",
    question: "44. What was the theme of the 10th NITI Aayog Governing Council Meeting?",
    options: [
      "Digital India for a New Era",
      "Sustainable Development for All",
      "Viksit Rajya for Viksit Bharat@2047",
      "Innovation and Inclusion India@100"
    ],
    correctAnswer: 2,
    explanation: "The theme focused on cooperative federalism to achieve the goal of a developed India by 2047."
  },
  {
    id: "q45",
    question: "45. Where was the Inclusion Summit 2025 held?",
    options: ["Mumbai", "Hyderabad", "Kolkata", "New Delhi"],
    correctAnswer: 3,
    explanation: "The Inclusion Summit 2025 was held in New Delhi to promote inclusive growth and social equity."
  },
  {
    id: "q46",
    question: "46. Where was the UN Climate Change Conference 2024 held?",
    options: ["Abu Dhabi", "Geneva", "Paris", "Baku"],
    correctAnswer: 3,
    explanation: "The UN Climate Change Conference (COP29) was hosted by Azerbaijan in Baku in November 2024."
  },
  {
    id: "q47",
    question: "47. Where was the 3rd BIMSTEC Agriculture Conference held?",
    options: ["Dhaka", "Kathmandu", "Colombo", "Thimphu"],
    correctAnswer: 1,
    explanation: "The 3rd BIMSTEC Agriculture Conference was held in Kathmandu, Nepal, focusing on sustainable agricultural practices."
  },
  {
    id: "q48",
    question: "48. Where was the first Asian Buddhist Summit held?",
    options: ["New Delhi", "Kathmandu", "Colombo", "Bangkok"],
    correctAnswer: 0,
    explanation: "The first Asian Buddhist Summit was held in New Delhi to promote Buddhist heritage and cultural diplomacy."
  },
  {
    id: "q49",
    question: "49. Which country hosted the 81st IATA Annual General Meeting?",
    options: ["Indonesia", "Japan", "China", "India"],
    correctAnswer: 3,
    explanation: "India hosted the 81st IATA AGM, showcasing its rapidly growing aviation sector."
  },
  {
    id: "q50",
    question: "50. Where was the World Hydrogen Summit 2025 held?",
    options: ["New Delhi", "Rotterdam", "Geneva", "Paris"],
    correctAnswer: 1,
    explanation: "The World Hydrogen Summit 2025 was held in Rotterdam, Netherlands, a major hub for green hydrogen initiatives."
  },
  {
    id: "q51",
    question: "51. Which city hosted the STREE Summit 2025?",
    options: ["Hyderabad", "Pune", "Kolkata", "Jaipur"],
    correctAnswer: 0,
    explanation: "The STREE Summit 2025 was held in Hyderabad, focusing on women’s safety and empowerment."
  },
  {
    id: "q52",
    question: "52. Where was the 10th NITI Aayog Governing Council Meeting held in May?",
    options: ["Mumbai", "New Delhi", "Gandhinagar", "Bhopal"],
    correctAnswer: 1,
    explanation: "The meeting was held in New Delhi at Bharat Mandapam under the chairmanship of the Prime Minister."
  },
  {
    id: "q53",
    question: "53. Where was the 7th International Solar Alliance Assembly held?",
    options: ["Paris", "New Delhi", "Abu Dhabi", "Nairobi"],
    correctAnswer: 1,
    explanation: "The 7th ISA Assembly was held in New Delhi, where the headquarters of the International Solar Alliance is located."
  },
  {
    id: "q54",
    question: "54. Where was the G20 Summit 2024 held?",
    options: ["New Delhi", "Johannesburg", "Rio de Janeiro", "Osaka"],
    correctAnswer: 2,
    explanation: "Brazil hosted the G20 Summit 2024 in Rio de Janeiro in November."
  },
  {
    id: "q55",
    question: "55. Who inaugurated the 2nd International Conference on Green Hydrogen?",
    options: ["Nitin Gadkari", "Rajnath Singh", "Narendra Modi", "Dharmendra Pradhan"],
    correctAnswer: 2,
    explanation: "Prime Minister Narendra Modi inaugurated the conference to promote India’s green energy transition."
  },
  {
    id: "q56",
    question: "56. Where was the Asia Clean Energy Summit 2024 held?",
    options: ["Singapore", "Tokyo", "Kuala Lumpur", "Jakarta"],
    correctAnswer: 0,
    explanation: "The Asia Clean Energy Summit 2024 was held in Singapore, focusing on renewable and clean energy solutions."
  },
  {
    id: "q57",
    question: "57. Where was MILAN 2025 organized?",
    options: ["Visakhapatnam", "Mumbai", "New Delhi", "Kochi"],
    correctAnswer: 2,
    explanation: "MILAN 2025, a multinational naval exercise, was organized by the Indian Navy in New Delhi."
  },
  {
    id: "q58",
    question: "58. Which country will host the G20 Summit 2025?",
    options: ["Brazil", "South Africa", "India", "Indonesia"],
    correctAnswer: 1,
    explanation: "South Africa will host the G20 Summit in 2025 as part of its presidency."
  },
  {
    id: "q59",
    question: "59. Where was the National Environment Conference 2025 inaugurated?",
    options: ["Hyderabad", "New Delhi", "Jaipur", "Bhopal"],
    correctAnswer: 1,
    explanation: "The National Environment Conference 2025 was inaugurated in New Delhi by President Droupadi Murmu."
  },
  {
    id: "q60",
    question: "60. Where was the International Conference on Glaciers’ Preservation held?",
    options: ["Kathmandu", "Dushanbe", "Islamabad", "Thimphu"],
    correctAnswer: 1,
    explanation: "The conference was held in Dushanbe, Tajikistan, to address climate change impacts on glaciers."
  },
  {
    id: "q61",
    question: "61. Where was the 28th National E-Governance Conference held?",
    options: ["Bhopal", "Jaipur", "Bhubaneswar", "Visakhapatnam"],
    correctAnswer: 3,
    explanation: "The conference was held in Visakhapatnam to discuss reforms and innovations in digital governance."
  },
  {
    id: "q62",
    question: "62. Which state hosted the International Youth Conference 2025?",
    options: ["Sikkim", "Manipur", "Himachal Pradesh", "Assam"],
    correctAnswer: 0,
    explanation: "Sikkim hosted the International Youth Conference 2025, emphasizing youth leadership and sustainability."
  },
  {
    id: "q63",
    question: "63. Where was the 11th BRICS Labour Ministers’ Meeting held?",
    options: ["Brazil", "Russia", "India", "China"],
    correctAnswer: 0,
    explanation: "The meeting was held in Brazil as part of its BRICS chairmanship."
  },
  {
    id: "q64",
    question: "64. Which country hosted the Asian Summit 2025?",
    options: ["Thailand", "India", "China", "Malaysia"],
    correctAnswer: 3,
    explanation: "Malaysia hosted the Asian Summit 2025 to strengthen regional cooperation."
  },
  {
    id: "q65",
    question: "65. Where was the 9th BRICS Industry Ministers’ Meeting held?",
    options: ["Beijing", "New Delhi", "Moscow", "Brasilia"],
    correctAnswer: 3,
    explanation: "The meeting was held in Brasilia, Brazil, under its BRICS presidency."
  },
  {
    id: "q66",
    question: "66. Where was the 86th India-Bangladesh Joint River Commission Meeting held?",
    options: ["Kolkata", "Dhaka", "Guwahati", "Delhi"],
    correctAnswer: 0,
    explanation: "The meeting was held in Kolkata to discuss river water sharing and flood management."
  },
  {
    id: "q67",
    question: "67. Where was Prakriti 2025 Carbon Markets Conference held?",
    options: ["Mumbai", "Hyderabad", "New Delhi", "Pune"],
    correctAnswer: 2,
    explanation: "Prakriti 2025 was held in New Delhi focusing on carbon markets and climate finance mechanisms."
  },
  {
    id: "q68",
    question: "68. Where was the 58th Asian Development Bank Annual Meeting held?",
    options: ["India", "Philippines", "Italy", "Japan"],
    correctAnswer: 2,
    explanation: "Italy hosted the 58th ADB Annual Meeting focusing on global economic recovery."
  },
  {
    id: "q69",
    question: "69. Where was the World Sustainable Development Summit 2025 held?",
    options: ["Mumbai", "New Delhi", "Chennai", "Bengaluru"],
    correctAnswer: 1,
    explanation: "The summit was organized by TERI in New Delhi to discuss sustainability challenges."
  },
  {
    id: "q70",
    question: "70. Where was the 12th Global Space Exploration Conference 2025 held?",
    options: ["Dhaka", "Dubai", "Washington D.C.", "New Delhi"],
    correctAnswer: 3,
    explanation: "India hosted the Global Space Exploration Conference 2025 in New Delhi, showcasing advances in space technology."
  },

],


"imp-appointments": [
  {
    id: "q1",
    question: "Who was sworn in as Chief Minister of Bihar for a historic term in 2025?",
    options: ["Tejashwi Yadav", "Nitish Kumar", "Chirag Paswan", "Bhupendra Patel"],
    correctAnswer: 1,
    explanation: "Nitish Kumar was sworn in as the Chief Minister of Bihar in 2025, marking a historic continuation of his leadership. He is one of the longest-serving CMs in the state and has played a key role in Bihar’s governance and development."
  },
  {
    id: "q2",
    question: "Who has been appointed as an Executive Director at the Reserve Bank of India (RBI)?",
    options: ["Viral Acharya", "Usha Janakiraman", "Shaktikanta Das", "N. S. Vishwanathan"],
    correctAnswer: 1,
    explanation: "Usha Janakiraman was appointed as an Executive Director at the RBI. Executive Directors supervise important regulatory and policy departments, contributing to financial stability and banking supervision."
  },
  {
    id: "q3",
    question: "Who has been elected as the first woman President of the Press Club of India?",
    options: ["Nidhi Razdan", "Sangeeta Barooah Pisharoty", "Barkha Dutt", "Rana Ayyub"],
    correctAnswer: 1,
    explanation: "Sangeeta Barooah Pisharoty became the first woman President of the Press Club of India, marking a historic milestone for women’s representation in Indian journalism leadership."
  },
  {
    id: "q4",
    question: "Who has been appointed as the Chairman-cum-Managing Director (CMD) of Coal India?",
    options: ["Pramod Agrawal", "B. Sairam", "Anil Kumar Jain", "P. M. Prasad"],
    correctAnswer: 1,
    explanation: "B. Sairam was appointed as CMD of Coal India. Coal India is the world’s largest coal producer, and its leadership is vital for India’s energy security."
  },
  {
    id: "q5",
    question: "Who has been appointed as Pakistan’s first Chief of Defence Forces?",
    options: ["Raheel Sharif", "Qamar Javed Bajwa", "Asim Munir", "Imran Khan"],
    correctAnswer: 2,
    explanation: "Asim Munir became Pakistan’s first Chief of Defence Forces. This role coordinates the Army, Navy, and Air Force, improving joint military planning and operations."
  },
  {
    id: "q6",
    question: "Who has been appointed as the Managing Director (MD) of LIC of India?",
    options: ["Hemant Bhargava", "Ramakrishnan Chander", "M. R. Kumar", "S. K. Sharma"],
    correctAnswer: 1,
    explanation: "Ramakrishnan Chander was appointed as MD of LIC of India. LIC is the largest insurance provider in India, and the MD plays a crucial role in policy and business decisions."
  },
  {
    id: "q7",
    question: "Who has been elected as the new President of Interpol?",
    options: ["Ahmed Nasser Al-Raisi", "Jürgen Stock", "Lucas Philippe", "Kim Jong Yang"],
    correctAnswer: 2,
    explanation: "Lucas Philippe was elected as the new President of Interpol. The Interpol President presides over its General Assembly and strengthens international police cooperation."
  },
  {
    id: "q8",
    question: "Who has been appointed as the Chief Information Commissioner?",
    options: ["Ashok Lavasa", "Raj Kumar Goyal", "Alok Kumar Verma", "Tushar Mehta"],
    correctAnswer: 1,
    explanation: "Raj Kumar Goyal was appointed as the Chief Information Commissioner, heading the Central Information Commission which ensures transparency under the RTI Act."
  },
  {
    id: "q9",
    question: "Who was recently sworn in as the Prime Minister of the Czech Republic?",
    options: ["Petr Fiala", "Andrej Babiš", "Václav Klaus", "Miloš Zeman"],
    correctAnswer: 1,
    explanation: "Andrej Babiš was sworn in as the Prime Minister of the Czech Republic. The Prime Minister leads the government and plays a central role in national policy-making."
  },
  {
    id: "q10",
    question: "Who has been appointed as the next Director (Chief) of Mossad?",
    options: ["David Barnea", "Roman Gofman", "Yossi Cohen", "Benny Gantz"],
    correctAnswer: 1,
    explanation: "Roman Gofman was appointed as the next Chief of Mossad, Israel’s external intelligence agency responsible for national security and foreign intelligence operations."
  },
  {
    id: "q11",
    question: "Who has taken charge as the new Managing Director (MD) of SBI?",
    options: ["Dinesh Khara", "Ravi Ranjan", "Ashwini Tewari", "Rajnish Kumar"],
    correctAnswer: 1,
    explanation: "Ravi Ranjan took charge as the Managing Director of State Bank of India, India’s largest public sector bank, overseeing major banking operations."
  },
  {
    id: "q12",
    question: "Who has been appointed as the first President & CEO of Reliance Retail?",
    options: ["Mukesh Ambani", "Jeyandran Venugopal", "Aditya Puri", "Kumar Mangalam Birla"],
    correctAnswer: 1,
    explanation: "Jeyandran Venugopal was appointed as the first President & CEO of Reliance Retail, highlighting professional management in India’s largest retail company."
  },
  {
    id: "q13",
    question: "Who has been nominated as the next Executive Chairman of NALSA?",
    options: ["Justice Surya Kant", "Justice Vikram Nath", "Justice D. Y. Chandrachud", "Justice Sanjay Kishan Kaul"],
    correctAnswer: 1,
    explanation: "Justice Vikram Nath was nominated as the Executive Chairman of NALSA, which provides free legal aid to weaker sections of society."
  },
  {
    id: "q14",
    question: "Who has been appointed as the 53rd Chief Justice of India and took oath on 24 November 2025?",
    options: ["Justice Sanjiv Khanna", "Justice Surya Kant", "Justice D. Y. Chandrachud", "Justice B. R. Gavai"],
    correctAnswer: 1,
    explanation: "Justice Surya Kant became the 53rd Chief Justice of India. The CJI is the head of the Indian judiciary and allocates cases in the Supreme Court."
  },
  {
    id: "q15",
    question: "Who has been appointed as a Whole-Time Member of SEBI for a three-year term?",
    options: ["Ajay Tyagi", "Sandip Pradhan", "Madhabi Puri Buch", "Ashwani Bhatia"],
    correctAnswer: 1,
    explanation: "Sandip Pradhan was appointed as a Whole-Time Member of SEBI, the regulator of India’s capital markets, responsible for policy and enforcement."
  },
  {
    id: "q16",
    question: "Jose Antonio Kast has been elected as President of which country in December 2025?",
    options: ["Peru", "Chile", "Brazil", "Poland"],
    correctAnswer: 1,
    explanation: "Jose Antonio Kast was elected President of Chile in December 2025, marking a significant political shift in the country."
  },
  {
    id: "q17",
    question: "RBI appoints whom as the Chairman of Jammu & Kashmir Bank?",
    options: ["S. Krishnan", "T. Rabi Sankar", "S. S. Mundra", "M. Rajeshwar Rao"],
    correctAnswer: 0,
    explanation: "S. Krishnan was appointed as Chairman of Jammu & Kashmir Bank by the RBI, ensuring regulatory stability and effective governance."
  },
  {
    id: "q18",
    question: "Who has been appointed as the Brand Ambassador of the Haryana State Women’s Commission?",
    options: ["Harmanpreet Kaur", "Shafali Verma", "Smriti Mandhana", "Jemimah Rodrigues"],
    correctAnswer: 1,
    explanation: "Shafali Verma was appointed as Brand Ambassador of the Haryana State Women’s Commission to promote women empowerment and inspire young girls."
  },
  {
    id: "q19",
    question: "Who was recently appointed as the Director General of CISF?",
    options: ["Alok Kumar", "Praveer Ranjan", "Rakesh Asthana", "Ajay Kumar Bhalla"],
    correctAnswer: 1,
    explanation: "Praveer Ranjan was appointed as the Director General of CISF, which protects critical infrastructure such as airports and metro systems."
  },
  {
    id: "q20",
    question: "Who has been appointed as the first woman Vice-Chancellor of Nagpur University since 1923?",
    options: ["Shalini Deshmukh", "Manali Makarand Kshirsagar", "Maneka Gandhi", "Kalpana Chawla"],
    correctAnswer: 1,
    explanation: "Manali Makarand Kshirsagar became the first woman Vice-Chancellor of Nagpur University, breaking a century-old tradition in academic leadership."
  },

  {
    id: "q21",
    question: "21. Who has become the new President of ASSOCHAM?",
    options: ["Sanjiv Mehta", "Nirmal Minda", "Kiran Mazumdar-Shaw", "Ramesh Abhishek"],
    correctAnswer: 1,
    explanation: "ASSOCHAM is one of India’s oldest industry associations. Nirmal Minda, a leading industrialist, was appointed as its President. The President represents industry interests and works closely with the government on economic and industrial policy matters."
  },
  {
    id: "q22",
    question: "22. Who was appointed as the Director-General of UNESCO in October 2025?",
    options: ["Audrey Azoulay", "Khaled El-Enany", "Firmin Edouard Matoko", "Amadou-Mahtar M'Bow"],
    correctAnswer: 1,
    explanation: "UNESCO promotes education, science, culture, and heritage globally. Khaled El-Enany was appointed as its Director-General in October 2025. The Director-General sets the organization’s global priorities and policies."
  },
  {
    id: "q23",
    question: "23. Who has been appointed as the Director General of the National Cadet Corps (NCC)?",
    options: ["Gurbirpal Singh", "Virendra Vats", "Vinod Vashisht", "Aniruddha Chakravarty"],
    correctAnswer: 1,
    explanation: "The NCC is a youth organization that builds discipline and leadership among students. Lt. Gen. Virendra Vats was appointed as Director General of NCC, becoming the top authority responsible for its administration and training."
  },
  {
    id: "q24",
    question: "24. Who was elected as the President of the Indian Cricketers' Association?",
    options: ["Harmanpreet Kaur", "Mithali Raj", "Shantha Rangaswamy", "Jhulan Goswami"],
    correctAnswer: 2,
    explanation: "The Indian Cricketers' Association represents the interests of cricketers. Former women’s cricket captain Shantha Rangaswamy was elected as its President, highlighting growing representation of women in sports administration."
  },
  {
    id: "q25",
    question: "25. Who took charge as the Director General of ITBP in 2025?",
    options: ["Rakesh Asthana", "Praveer Ranjan", "Praveen Kumar", "Sanjay Arora"],
    correctAnswer: 2,
    explanation: "The ITBP guards India’s border with China. Praveen Kumar took charge as Director General of ITBP in 2025, playing a crucial role in strengthening border security and operational preparedness."
  },
  {
    id: "q26",
    question: "26. Who has been appointed as the Executive Director of the Reserve Bank of India (RBI)?",
    options: ["Nirmala Sitharaman", "Sonali Sen Gupta", "Urjit Patel", "Shaktikanta Das"],
    correctAnswer: 1,
    explanation: "Executive Directors at RBI supervise key regulatory and policy departments. Sonali Sen Gupta’s appointment strengthens RBI’s leadership in maintaining financial stability and banking regulation."
  },
  {
    id: "q27",
    question: "27. Who has become the new Deputy Chief Minister of Gujarat in the latest Cabinet?",
    options: ["Rushikesh Patel", "Bhupendra Patel", "Harsh Sanghavi", "Kanubhai Desai"],
    correctAnswer: 2,
    explanation: "Harsh Sanghavi was appointed as the Deputy Chief Minister of Gujarat. The Deputy CM assists the Chief Minister in governance and plays a major role in state administration."
  },
  {
    id: "q28",
    question: "28. Who has been appointed as the International Monetary Fund’s (IMF) first Deputy Managing Director?",
    options: ["Christine Lagarde", "Dan Katz", "Kristalina Georgieva", "Raghuram Rajan"],
    correctAnswer: 1,
    explanation: "The IMF ensures global financial stability. Dan Katz was appointed as the IMF’s first Deputy Managing Director, assisting in policy coordination and global economic management."
  },
  {
    id: "q29",
    question: "29. Who has been appointed as the new Controller General of Defence Accounts (CGDA)?",
    options: ["Ajay Kumar", "Vishvajit Sahay", "Anurag Jain", "Rajeev Kumar"],
    correctAnswer: 1,
    explanation: "The CGDA manages defence finances and audits. Vishvajit Sahay’s appointment ensures transparency and efficiency in defence expenditure and financial management."
  },
  {
    id: "q30",
    question: "30. Who has been appointed as the President of FICCI?",
    options: ["Sanjay Agrawal", "Anant Goenka", "Harsh Vardhan", "Nirmal Kr Minda"],
    correctAnswer: 1,
    explanation: "FICCI is a major business association in India. Anant Goenka was appointed as its President, playing a key role in strengthening industry–government engagement and economic policy dialogue."
  },
  
  {
    id: "q31",
    question: "31. Who has been appointed as the Managing Director & CEO of Aditya Birla Capital Limited (ABCL)?",
    options: ["Chanda Kochhar", "Vishakha Mulye", "Usha Sangwan", "Shobhana Bhartia"],
    correctAnswer: 1,
    explanation: "Aditya Birla Capital Limited is a major financial services company in India. Vishakha Mulye was appointed as its MD & CEO, responsible for leading the company’s strategy, operations, and growth across financial services segments."
  },
  {
    id: "q32",
    question: "32. Who became the first transgender member of a Supreme Court-appointed committee?",
    options: ["Joyita Mondal", "Laxmi Narayan Tripathi", "Akkai Padmashali", "Gauri Sawant"],
    correctAnswer: 2,
    explanation: "Akkai Padmashali, a noted transgender rights activist from Karnataka, became the first transgender member of a Supreme Court-appointed committee. This appointment marked a major step toward inclusivity and representation."
  },
  {
    id: "q33",
    question: "33. Who has become the world’s oldest serving President at the age of 92 in 2025?",
    options: ["Yoweri Museveni", "Paul Biya", "Paul Kagame", "Teodoro Obiang Nguema"],
    correctAnswer: 1,
    explanation: "Paul Biya, President of Cameroon since 1982, became the world’s oldest serving President at the age of 92 in 2025, making him one of the longest-serving leaders globally."
  },
  {
    id: "q34",
    question: "34. Who has been appointed as the Chairperson of the NSE Governing Board with SEBI’s approval (September 2025)?",
    options: ["Vikram Limaye", "Ashish Chauhan", "Srinivas Injeti", "Madhabi Puri Buch"],
    correctAnswer: 2,
    explanation: "Srinivas Injeti was appointed as the Chairperson of the NSE Governing Board with SEBI’s approval. The Chairperson plays a vital role in ensuring good governance and regulatory compliance in capital markets."
  },
  {
    id: "q35",
    question: "35. Who has been appointed as the new Chief Secretary of Delhi?",
    options: ["Naresh Kumar", "Rajeev Verma", "T. V. Somanathan", "S. N. Subrahmanyan"],
    correctAnswer: 1,
    explanation: "Rajeev Verma was appointed as the Chief Secretary of Delhi, the highest-ranking civil servant in the UT. He is responsible for administrative coordination and implementation of government policies."
  },
  {
    id: "q36",
    question: "36. Who has been appointed as Nepal’s interim Prime Minister, becoming the first woman to hold that post?",
    options: ["Pushpa Kamal Dahal", "Sushila Karki", "Sher Bahadur Deuba", "Bipin Rawat"],
    correctAnswer: 1,
    explanation: "Sushila Karki, former Chief Justice of Nepal, was appointed as interim Prime Minister, becoming the first woman to hold the post and marking a milestone in Nepal’s political history."
  },
  {
    id: "q37",
    question: "37. Who has been appointed as the 29th Controller General of Accounts (CGA) of India in September 2025?",
    options: ["Meena Agarwal", "T. C. A. Kalyani", "Rajiv Gauba", "Arvind Saxena"],
    correctAnswer: 1,
    explanation: "T. C. A. Kalyani was appointed as the 29th Controller General of Accounts of India. The CGA is responsible for maintaining and overseeing the government’s accounting and financial reporting systems."
  },
  {
    id: "q38",
    question: "38. Who has officially assumed charge as the Director of the All India Institute of Ayurveda (AIIA), New Delhi (September 2025)?",
    options: ["Dr. Rajesh Kotecha", "Professor Bhushan Patwardhan", "Professor Pradeep Kumar Prajapati", "Dr. Tanuja Nesari"],
    correctAnswer: 2,
    explanation: "Professor Pradeep Kumar Prajapati assumed charge as the Director of AIIA, New Delhi. He is responsible for academic leadership, research development, and administration of the institute."
  },
  {
    id: "q39",
    question: "39. Who has been elected as the 15th Vice President of India?",
    options: ["Jagdeep Dhankhar", "C. P. Radhakrishnan", "Venkaiah Naidu", "Justice B. Sudershan Reddy"],
    correctAnswer: 1,
    explanation: "C. P. Radhakrishnan was elected as the 15th Vice President of India. The Vice President is the second-highest constitutional authority and serves as the Chairman of the Rajya Sabha."
  },
  {
    id: "q40",
    question: "40. Who has been given the additional charge as the Governor of Maharashtra (September 2025)?",
    options: ["Thawar Chand Gehlot", "Acharya Devvrat", "Arif Mohammed Khan", "Ramesh Bais"],
    correctAnswer: 1,
    explanation: "Acharya Devvrat was given the additional charge as the Governor of Maharashtra in September 2025. Governors act as constitutional heads of states and ensure smooth administration."
  },
  ],



  
"awards-honours1": [
  {
    id: "ca1",
    question: "1. Who has been awarded the Nobel Prize in Economics for 2025?",
    options: [
      "Peter Howitt, Esther Duflo, and Michael Kremer",
      "Joel Mokyr, Philippe Aghion, and Peter Howitt",
      "Angus Deaton, Paul Krugman, and Robert Shiller",
      "Philippe Aghion, Joseph Stiglitz, and Robert Mundell"
    ],
    correctAnswer: 1,
    explanation: "The 2025 Nobel Prize in Economics was awarded to Joel Mokyr, Philippe Aghion, and Peter Howitt for their significant contributions to understanding economic growth, innovation, and the dynamics of technological progress."
  },
  {
    id: "ca2",
    question: "2. Who has been awarded the Nobel Prize in Literature for 2025?",
    options: ["Olga Tokarczuk", "László Krasznahorkai", "Orhan Pamuk", "Salman Rushdie"],
    correctAnswer: 1,
    explanation: "László Krasznahorkai, the Hungarian novelist known for his complex, dense prose and profound literary works, was awarded the Nobel Prize in Literature 2025 for his unique contributions to contemporary literature."
  },
  {
    id: "ca3",
    question: "3. Who won the Nobel Peace Prize 2025?",
    options: ["Malala Yousafzai", "Maria Corina Machado", "Greta Thunberg", "Ales Bialiatski"],
    correctAnswer: 1,
    explanation: "Maria Corina Machado was awarded the Nobel Peace Prize 2025 for her courageous efforts and advocacy for democracy, human rights, and social justice in Venezuela, inspiring peaceful activism globally."
  },
  {
    id: "ca4",
    question: "4. Who were awarded the 2025 Nobel Prize in Chemistry?",
    options: [
      "Marie Curie, Albert Einstein & Linus Pauling",
      "Susumu Kitagawa, Richard Robson & Omar Yaghi",
      "Ahmed Zewail, Venkatraman Ramakrishnan & Thomas Steitz",
      "Frances Arnold, George Smith & Gregory Winter"
    ],
    correctAnswer: 1,
    explanation: "The 2025 Nobel Prize in Chemistry was awarded to Susumu Kitagawa, Richard Robson, and Omar Yaghi for their groundbreaking research in the design and synthesis of metal-organic frameworks, enabling new applications in material science and catalysis."
  },
  {
    id: "ca5",
    question: "5. Who were awarded the 2025 Nobel Prize in Physics?",
    options: [
      "Albert Einstein, Niels Bohr, and Richard Feynman",
      "John Clarke, Michel H. Devoret, and John M. Martinis",
      "Marie Curie, Enrico Fermi, and Paul Dirac",
      "Stephen Hawking, Kip Thorne, and Roger Penrose"
    ],
    correctAnswer: 1,
    explanation: "John Clarke, Michel H. Devoret, and John M. Martinis received the 2025 Nobel Prize in Physics for their pioneering work on quantum information and superconducting qubits, which have propelled advances in quantum computing."
  },
  {
    id: "ca6",
    question: "6. What is the name of the 2025 Nobel Prize in Physiology or Medicine awardees for their work on peripheral immune tolerance?",
    options: [
      "James Allison, Tasuku Honjo, and Gregg Semenza",
      "Mary E. Brunkow, Fred Ramsdell, and Shimon Sakaguchi",
      "Jennifer Doudna, Emmanuelle Charpentier, and Feng Zhang",
      "William Kaelin, Gregg Semenza, and Peter Ratcliffe"
    ],
    correctAnswer: 1,
    explanation: "Mary E. Brunkow, Fred Ramsdell, and Shimon Sakaguchi were awarded for their research on peripheral immune tolerance, which provides critical insights into how the immune system avoids attacking the body's own tissues, with implications for autoimmune diseases and immunotherapy."
  },
  {
    id: "ca7",
    question: "7. As of Oct 2025 which Malayalam actor was recently honoured with the prestigious Dadasaheb Phalke Award?",
    options: ["Mammootty", "Mohanlal", "Fahadh Faasil", "Dulquer Salmaan"],
    correctAnswer: 1,
    explanation: "Mohanlal, a legendary actor in Malayalam cinema with a career spanning decades and numerous iconic performances, was honoured with the Dadasaheb Phalke Award in recognition of his outstanding contribution to Indian cinema."
  },
  {
    id: "ca8",
    question: "8. Which Indian archer won her maiden gold medal at the World Archery Para Championships 2025?",
    options: ["Jyoti Baliyan", "Deepika Kumari", "Sheetal Devi", "Laxmirani Majhi"],
    correctAnswer: 2,
    explanation: "Sheetal Devi achieved her first gold medal at the World Archery Para Championships 2025, marking a significant milestone in her career and showcasing her talent on the international para-archery stage."
  },
  {
    id: "ca9",
    question: "9. Who recently won a silver medal and set two national records at the World Weightlifting Championships 2025?",
    options: ["Saikhom Mirabai Chanu", "Karnam Malleswari", "Bindyarani Devi", "H. R. Sunita"],
    correctAnswer: 0,
    explanation: "Saikhom Mirabai Chanu continued her dominance in weightlifting by winning a silver medal and breaking two national records at the 2025 World Weightlifting Championships, cementing her status as one of India's top athletes."
  },
  {
    id: "ca10",
    question: "10. India was recently honoured with the ISSA Award for its efforts in which area?",
    options: ["Financial inclusion", "Expanding social security coverage", "Rural employment generation", "Women empowerment"],
    correctAnswer: 1,
    explanation: "India received the ISSA Award for expanding social security coverage, recognizing its efforts to improve welfare, social protection programs, and access to social benefits for citizens across the country."
  },
  {
    id: "ca11",
    question: "11. Which hotel won the Best 5-Star Hotel Award in 2025?",
    options: [
      "Taj Falaknuma Palace, Hyderabad",
      "Novotel Vijayawada Varun",
      "The Leela Palace, Bangalore",
      "ITC Grand Chola, Chennai"
    ],
    correctAnswer: 1,
    explanation: "Novotel Vijayawada Varun was awarded the Best 5-Star Hotel Award in 2025 for its outstanding hospitality, luxury services, and excellence in guest experience in the highly competitive Indian hotel industry."
  },
  {
    id: "ca12",
    question: "12. Which state won the Global Tourism Award 2025 for its outstanding contribution to tourism?",
    options: ["Kerala", "Rajasthan", "Andhra Pradesh", "Goa"],
    correctAnswer: 2,
    explanation: "Andhra Pradesh received the Global Tourism Award 2025 for its innovative tourism initiatives, development of heritage sites, and promotion of cultural and eco-tourism, contributing significantly to global tourism."
  },
  {
    id: "ca13",
    question: "13. Which organization became the first Indian NGO to win the 2025 Magsaysay Award?",
    options: ["Educate Girls", "Pratham", "Smile Foundation", "Teach For India"],
    correctAnswer: 0,
    explanation: "Educate Girls became the first Indian NGO to receive the prestigious Magsaysay Award in 2025 for its exceptional work in improving education access and learning outcomes for girls in India."
  },
  {
    id: "ca14",
    question: "14. Who has been selected to receive the Prof. V.K. Gokak Award in Bengaluru?",
    options: ["Girish Karnad", "U.R. Ananthamurthy", "Anand V. Patil", "Shashi Deshpande"],
    correctAnswer: 2,
    explanation: "Anand V. Patil was selected for the Prof. V.K. Gokak Award 2025 in recognition of his outstanding contributions to Kannada literature and for promoting literary culture in Karnataka."
  },
  {
    id: "ca15",
    question: "15. Younus Ahamed, Executive Director of Middle East Dotspace Coworking, has been honoured with which award by Arabian World Records in 2025?",
    options: ["Golden Falcon Award", "Global Excellence Award", "Camel International Award", "Desert Visionary Award"],
    correctAnswer: 2,
    explanation: "Younus Ahamed received the Camel International Award from Arabian World Records in 2025 for his exceptional leadership and contributions to business innovation and coworking spaces in the Middle East."
  },
  {
    id: "ca16",
    question: "16. Which honour was awarded to British Prime Minister Keir Starmer in September 2025 for promoting closer India-UK relations?",
    options: ["UK-India Friendship Award", "Queen's Award for Enterprise", "Living Bridge Award", "Global Trade Excellence Award"],
    correctAnswer: 2,
    explanation: "Keir Starmer was conferred the Living Bridge Award in 2025 for strengthening diplomatic, cultural, and trade ties between India and the United Kingdom through his proactive engagement."
  },
  {
    id: "ca17",
    question: "17. Which former US president won his third Emmy Award for the Netflix documentary 'Our Oceans'?",
    options: ["Donald Trump", "Barack Obama", "Justin Trudeau", "George W. Bush"],
    correctAnswer: 1,
    explanation: "Barack Obama won his third Emmy Award for his Netflix documentary 'Our Oceans,' which highlights global marine conservation challenges and the importance of protecting ocean ecosystems."
  },
  {
    id: "ca18",
    question: "18. Who was awarded the PV Narasimha Rao Award?",
    options: ["Dr. Manmohan Singh", "Narendra Modi", "CP Radhakrishnan", "Draupadi Murmu"],
    correctAnswer: 0,
    explanation: "Former Prime Minister Dr. Manmohan Singh received the PV Narasimha Rao Award in 2025 in recognition of his visionary economic reforms and contributions to India's development."
  },
  {
    id: "ca19",
    question: "19. Asian Shooting Championship 2025 held in which country where 'Manu Bhaker' won bronze medal in women's 10m air pistol event?",
    options: ["Kazakhstan", "Thailand", "China", "India"],
    correctAnswer: 0,
    explanation: "The 2025 Asian Shooting Championship was hosted by Kazakhstan, where Manu Bhaker won a bronze medal in the women's 10m air pistol event, showcasing her consistent international performance."
  },
  {
    id: "ca20",
    question: "20. Who has been chosen as 'TIME's Kid Of The Year 2025' by the world-famous Time Magazine?",
    options: ["Vaibhav Suryavanshi", "Anish Sarkar", "Tejasvi Manoj", "D Gukesh"],
    correctAnswer: 2,
    explanation: "Tejasvi Manoj was named TIME's Kid Of The Year 2025 for his inspiring achievements, leadership, and contributions that positively impacted society at a young age."
  },
  {
    id: "ca21",
    question: "21. Who received the Lifetime Achievement Award under the National Geoscience Award 2024?",
    options: ["Prof. Devesh Chaturvedi", "Prof. Shyam Sundar Rai", "S. Singhal", "Sushobhan Neogi"],
    correctAnswer: 1,
    explanation: "Prof. Shyam Sundar Rai was honoured with the Lifetime Achievement Award under the National Geoscience Award 2024 for his pioneering work and lifelong contributions in geosciences research and education in India."
  },
  {
    id: "ca22",
    question: "22. Who were the Champions in the recent Durand Cup final 2025?",
    options: ["NorthEast United FC", "Diamond Harbour FC", "Bengaluru FC", "Kerala Blasters"],
    correctAnswer: 0,
    explanation: "NorthEast United FC won the Durand Cup 2025, demonstrating exceptional teamwork and skill to secure the championship in one of India's oldest and most prestigious football tournaments."
  },
  {
    id: "ca23",
    question: "23. Who won the 2025 Krishi Media Award for outstanding contributions to agricultural journalism and farmer awareness?",
    options: ["Shivam Reddy", "Harinikumar Hombale", "Ramesh Chandra", "Amshi Prasannakumar"],
    correctAnswer: 3,
    explanation: "Amshi Prasannakumar was honoured with the 2025 Krishi Media Award for his outstanding contributions to agricultural journalism, raising awareness on farming practices, innovations, and rural development."
  },
  {
    id: "ca24",
    question: "24. Which film won the Best Feature Film at the 71st National Film Awards?",
    options: ["Jawan", "12th Fail", "Kathal", "The Kerala Story"],
    correctAnswer: 1,
    explanation: "The film '12th Fail' won the Best Feature Film award at the 71st National Film Awards, recognized for its compelling storytelling, strong performances, and social relevance."
  },
  {
    id: "ca25",
    question: "25. Who recently won the PFA Player of the Year Award for the third time, making history?",
    options: ["Erling Haaland", "Kevin De Bruyne", "Mohamed Salah", "Harry Kane"],
    correctAnswer: 2,
    explanation: "Mohamed Salah made history by winning the PFA Player of the Year Award for the third time, highlighting his consistent outstanding performance in club football and contributions to the sport."
  },
  {
    id: "ca26",
    question: "26. Who was honoured with the 43rd Lokmanya Tilak National Award 2025?",
    options: ["Nitin Gadkari", "Rajnath Singh", "Piyush Goyal", "Amit Shah"],
    correctAnswer: 0,
    explanation: "Nitin Gadkari received the 43rd Lokmanya Tilak National Award in 2025 in recognition of his exceptional work in infrastructure development, policy initiatives, and contributions to national growth."
  },
  {
    id: "ca27",
    question: "27. Who from The Hindu was selected for the 'Tribal Photo of the Year Award – 2025'?",
    options: ["Aditya Singh", "Vudimudi Peddi Raju", "Ravi Kumar", "Sunil Sharma"],
    correctAnswer: 1,
    explanation: "Vudimudi Peddi Raju from The Hindu won the 'Tribal Photo of the Year Award – 2025' for his remarkable photography capturing the life, culture, and resilience of tribal communities."
  },
  {
    id: "ca28",
    question: "28. Who launched the Global M.S. Swaminathan Award for Food and Peace?",
    options: ["Dr. S. Jaishankar", "PM Narendra Modi", "President Draupadi Murmu", "Union Agriculture Minister"],
    correctAnswer: 1,
    explanation: "PM Narendra Modi launched the Global M.S. Swaminathan Award for Food and Peace, honoring innovations in sustainable agriculture and efforts to ensure food security and peace through scientific research."
  },
  {
    id: "ca29",
    question: "29. Who is the filmmaker of the short film 'Vasu' recently selected as a finalist at the Student Academy Awards 2025?",
    options: ["Adoor Gopalakrishnan", "Sidharth Harikumar", "Anurag Kashyap", "Kabir Khan"],
    correctAnswer: 1,
    explanation: "Sidharth Harikumar directed the short film 'Vasu,' which was selected as a finalist at the 2025 Student Academy Awards for its creative storytelling, technical excellence, and impactful narrative."
  },
  {
    id: "ca30",
    question: "30. Who is awarded with the Diversity in Cinema Award at the Indian Film Festival of Melbourne 2025?",
    options: ["Deepika Padukone", "Aditi Rao Hydari", "Alia Bhatt", "Taapsee Pannu"],
    correctAnswer: 1,
    explanation: "Aditi Rao Hydari received the Diversity in Cinema Award at the Indian Film Festival of Melbourne 2025, recognizing her contributions to inclusive storytelling and representation of diverse voices in cinema."
  }
],
"awards-honours2":[
  {
    id: "ca31",
    question: "31. How many personnel were honoured by the Government of India with Gallantry and Service Medals on Independence Day 2025?",
    options: ["1,000", "1,090", "900", "1,200"],
    correctAnswer: 1,
    explanation: "On Independence Day 2025, the Government of India honoured 1,090 personnel with Gallantry and Service Medals. These awards recognize extraordinary bravery, distinguished service, and exceptional contribution by members of the armed forces, paramilitary, and civilian personnel."
  },
  {
    id: "ca32",
    question: "32. Recently who received the Vir Chakra posthumously?",
    options: ["Sanjay Jasjit Singh", "Mohammad Imtiaz", "Nagesh Kapoor", "Deepak Chingkham"],
    correctAnswer: 1,
    explanation: "Mohammad Imtiaz was posthumously awarded the Vir Chakra for his exceptional courage and sacrifice in the line of duty. The Vir Chakra is India's third-highest military decoration awarded for acts of gallantry in the presence of the enemy."
  },
  {
    id: "ca33",
    question: "33. Who was crowned Miss Universe India 2025?",
    options: ["Manika Sheokand", "Harnaaz Sandhu", "Manika Vishwakarma", "Sini Shetty"],
    correctAnswer: 2,
    explanation: "Manika Vishwakarma was crowned Miss Universe India 2025, recognized for her elegance, poise, and advocacy for social causes. She will represent India at the international Miss Universe pageant."
  },
  {
    id: "ca34",
    question: "34. Who became the first Indian to win the 'Oscar for Magicians' at FISM 2025?",
    options: ["P.C. Sorcar", "Gopinath Muthukad", "Suhani Shah", "Karan Singh"],
    correctAnswer: 2,
    explanation: "Suhani Shah became the first Indian magician to win the 'Oscar for Magicians' at the FISM 2025 World Championship of Magic. This achievement highlighted her innovative performances and international recognition in the field of magic."
  },
  {
    id: "ca35",
    question: "35. Which app won the WSIS Champion Award 2025 for excellence in digital governance?",
    options: ["Aarogya Setu", "Meri Panchayat", "DigiLocker", "Umang"],
    correctAnswer: 1,
    explanation: "The 'Meri Panchayat' app won the WSIS Champion Award 2025 for its innovative use of digital governance in empowering local government bodies. It promotes transparency, citizen engagement, and accessibility of public services at the grassroots level."
  },
  {
    id: "ca36",
    question: "36. Who won the Long Jump title at the Portugal Sports Meet?",
    options: ["Neeraj Chopra", "Murali Sreeshankar", "Ankit Sharma", "M. Sreeshankar"],
    correctAnswer: 1,
    explanation: "Murali Sreeshankar won the Long Jump title at the Portugal Sports Meet, demonstrating his exceptional athletic ability and consistency in international track and field competitions."
  },
  {
    id: "ca37",
    question: "37. Who won the men's singles title at the Japan Open 2025?",
    options: ["Alex Lanier", "Shi Yuqi", "Kunlavut Vitidsarn", "Jonatan Christie"],
    correctAnswer: 1,
    explanation: "Shi Yuqi claimed the men's singles title at the Japan Open 2025, showcasing his skill and dominance in badminton. The win added an important international title to his career achievements."
  },
  {
    id: "ca38",
    question: "38. Who was conferred with the 'Hem Bahadur Malla Award' for outstanding contributions in Nepal's judicial sector in 2025?",
    options: ["Kedar Bhakta Mathema", "Dr. Bhesh Bahadur Thapa", "Kalyan Shrestha", "Dr. Gauri Shankar Lal Das"],
    correctAnswer: 2,
    explanation: "Kalyan Shrestha received the 'Hem Bahadur Malla Award' for his exceptional contributions to Nepal's judiciary. His work strengthened the legal system and promoted justice and fairness within the country."
  },
  {
    id: "ca39",
    question: "39. At which edition of the International Chemistry Olympiad did India win two gold and two silver medals?",
    options: ["54th", "55th", "56th", "57th"],
    correctAnswer: 3,
    explanation: "India achieved remarkable success at the 57th International Chemistry Olympiad by winning two gold and two silver medals. This reflects the high level of preparation, talent, and dedication of Indian students in chemistry."
  },
  {
    id: "ca40",
    question: "40. Who was recently awarded the Kalinga Ratna Award 2024?",
    options: ["Narendra Modi", "Dharmendra Pradhan", "Amit Shah", "Rajnath Singh"],
    correctAnswer: 1,
    explanation: "Dharmendra Pradhan was conferred the Kalinga Ratna Award 2024 in recognition of his significant contributions to education, industry, and social development, emphasizing his role in national progress."
  },
  {
    id: "ca41",
    question: "41. Who won the 2025 PEN Pinter Prize for her powerful storytelling rooted in Sudanese culture and global themes?",
    options: ["Chimamanda Ngozi Adichie", "Leila Aboulela", "Arundhati Roy", "Zadie Smith"],
    correctAnswer: 1,
    explanation: "Leila Aboulela received the 2025 PEN Pinter Prize for her compelling narratives that intertwine Sudanese cultural heritage with global perspectives, showcasing her mastery in literature and storytelling."
  },
  {
    id: "ca42",
    question: "42. In which national cleanliness survey did Vijayawada receive a top award in 2024-25?",
    options: ["National Urban Sanitation Ranking", "Swachh Survekshan", "Smart City Award", "Green City Challenge"],
    correctAnswer: 1,
    explanation: "Vijayawada received the top award in the Swachh Survekshan 2024-25 for exemplary cleanliness and sanitation practices, highlighting the city's commitment to hygiene, waste management, and citizen participation."
  },
  {
    id: "ca43",
    question: "43. Who is the 87th Grandmaster of India in chess, as of July 2025?",
    options: ["Harikrishnan A Ra", "R Praggnanandhaa", "Gukesh D", "Arjun Erigaisi"],
    correctAnswer: 0,
    explanation: "Harikrishnan A Ra became India's 87th Grandmaster in July 2025, a prestigious title awarded by FIDE to players demonstrating exceptional skill, strategy, and consistency in international chess tournaments."
  },
  {
    id: "ca44",
    question: "44. Who became the Indian Navy's first woman fighter pilot and received the prestigious 'Wings of Gold' in July 2025?",
    options: ["Bhawana Kanth", "Avani Chaturvedi", "Aastha Poonia", "Sofiya Qureshi"],
    correctAnswer: 2,
    explanation: "Aastha Poonia became the Indian Navy's first woman fighter pilot and was awarded the 'Wings of Gold' in July 2025, marking a historic achievement in Indian military aviation and gender inclusion."
  },
  {
    id: "ca45",
    question: "45. Who won the 2025 British Grand Prix held at Silverstone?",
    options: ["Max Verstappen", "Oscar Piastri", "Lando Norris", "Nico Hülkenberg"],
    correctAnswer: 2,
    explanation: "Lando Norris won the 2025 British Grand Prix at Silverstone, demonstrating skillful driving, strategic excellence, and endurance to secure victory in one of Formula 1's most prestigious events."
  },
  {
    id: "ca46",
    question: "46. Prime Minister Narendra Modi received the Grand Collar of the National Order of the Southern Cross from which country?",
    options: ["Argentina", "Brazil", "South Africa", "Portugal"],
    correctAnswer: 1,
    explanation: "PM Narendra Modi received Brazil's Grand Collar of the National Order of the Southern Cross, the highest honour awarded to foreign dignitaries, recognizing his role in strengthening India-Brazil bilateral relations."
  },
  {
    id: "ca47",
    question: "47. Which country defeated the United States 2-1 to win their record-extending 10th CONCACAF Gold Cup title in 2025?",
    options: ["Canada", "Mexico", "Costa Rica", "Jamaica"],
    correctAnswer: 1,
    explanation: "Mexico defeated the United States 2-1 in the 2025 CONCACAF Gold Cup final, securing their record-extending 10th title and reaffirming their dominance in North American football tournaments."
  },
  {
    id: "ca48",
    question: "48. Who were the recipients of the 21st P. Kesavadev Awards announced in 2025?",
    options: ["Shashi Tharoor and Dr. Banshi Saboo", "Shashi Tharoor and Barkha Dutt", "Ravish Kumar and Dr. Banshi Saboo", "Shashi Tharoor and Amitabh Kant"],
    correctAnswer: 0,
    explanation: "Shashi Tharoor and Dr. Banshi Saboo were awarded the 21st P. Kesavadev Awards in 2025 in recognition of their contributions to literature, public discourse, and societal development."
  },
  {
    id: "ca49",
    question: "49. Which country achieved a historic Test victory at Edgbaston on July 6, 2025, beating England by 336 runs?",
    options: ["Australia", "India", "South Africa", "New Zealand"],
    correctAnswer: 1,
    explanation: "India achieved a historic Test victory at Edgbaston, defeating England by 336 runs. This win was celebrated for outstanding team performance, strategic gameplay, and key individual contributions."
  },
  {
    id: "ca50",
    question: "50. Which district won the Kerala Fisheries Department Excellence Award 2025 for outstanding achievements in aquaculture?",
    options: ["Alappuzha", "Kollam", "Kasaragod", "Ernakulam"],
    correctAnswer: 2,
    explanation: "Kasaragod district was awarded the Kerala Fisheries Department Excellence Award 2025 for its exceptional achievements in sustainable aquaculture, innovative practices, and contribution to the state's fisheries development."
  },
  {
    id: "ca51",
    question: "51. Which country won a record 11 medals, including 3 gold, 5 silver, and 3 bronze, at the World Boxing Cup 2025 held in Astana, Kazakhstan?",
    options: ["Brazil", "India", "Kazakhstan", "Uzbekistan"],
    correctAnswer: 1,
    explanation: "India achieved a historic medal haul at the World Boxing Cup 2025, winning 11 medals in total. This performance demonstrated the growing strength and international competitiveness of Indian boxing."
  },
  {
    id: "ca52",
    question: "52. Who won the 2025 Shakti Bhatt Prize?",
    options: ["Kynpham Sing Nongkynrih", "Zara Chowdhary", "Mridula Koshy", "Tony Joseph"],
    correctAnswer: 1,
    explanation: "Zara Chowdhary won the 2025 Shakti Bhatt Prize for her exceptional writing and storytelling abilities, recognized for literary excellence and contribution to contemporary Indian literature."
  },
  {
    id: "ca53",
    question: "53. Which country conferred the 'Order of the Star' honour on Prime Minister Narendra Modi in 2025?",
    options: ["Nigeria", "Ghana", "Kenya", "South Africa"],
    correctAnswer: 1,
    explanation: "Ghana conferred the 'Order of the Star' on PM Narendra Modi in 2025, one of its highest civilian honours, recognizing his efforts to strengthen bilateral relations, trade, and cultural ties between India and Ghana."
  },
  {
    id: "ca54",
    question: "54. Who has been honoured with the GP BIRLA MEMORIAL AWARD?",
    options: ["Dr. K Sivan", "Dr. A S Kiran Kumar", "Dr. Tessy Thomas", "Dr. V. Narayanan"],
    correctAnswer: 3,
    explanation: "Dr. V. Narayanan was honoured with the GP Birla Memorial Award for his significant contributions to science, engineering, and technology, highlighting innovation and leadership in his field."
  },
  {
    id: "ca55",
    question: "55. Who won the Kerala Sahitya Akademi Award for Best Novel in 2024?",
    options: ["G.R. Indugopan", "Sasidharan Naduvil", "K.R. Ajayan", "V. Shinilal"],
    correctAnswer: 0,
    explanation: "G.R. Indugopan won the Kerala Sahitya Akademi Award for Best Novel 2024 for his outstanding literary work, reflecting depth, creativity, and significant contribution to Malayalam literature."
  },
  {
    id: "ca56",
    question: "56. Who has been awarded the Mental Health Award 2025?",
    options: ["Abhishek Jain", "Rohit Yadav", "Katherene Delina", "Saima Wazed"],
    correctAnswer: 3,
    explanation: "Saima Wazed received the Mental Health Award 2025 in recognition of her work in mental health advocacy, awareness, and policy initiatives, particularly in improving mental health services globally."
  },
  {
    id: "ca57",
    question: "57. Who became the first Turkish player in the Open Era to reach the third round of a Grand Slam tournament at Wimbledon 2025?",
    options: ["Çağla Büyükakçay", "Ipek Soylu", "Zeynep Sönmez", "Marsel İlhan"],
    correctAnswer: 2,
    explanation: "Zeynep Sönmez made history by becoming the first Turkish player in the Open Era to reach the third round of a Grand Slam at Wimbledon 2025, marking a major milestone for Turkish tennis on the global stage."
  },
  {
    id: "ca58",
    question: "58. Which state won the women's Hockey India Masters Cup 2025?",
    options: ["Punjab", "Bihar", "Odisha", "Maharashtra"],
    correctAnswer: 2,
    explanation: "Odisha won the Women's Hockey India Masters Cup 2025, demonstrating strong performance, teamwork, and dominance in national-level hockey competitions."
  },
  {
    id: "ca59",
    question: "59. Which airline is named the World's Best Airline at the 2025 Skytrax World Airline Awards?",
    options: ["Emirates", "Singapore Airlines", "Qatar Airways", "Cathay Pacific Airways"],
    correctAnswer: 2,
    explanation: "Qatar Airways was named the World's Best Airline at the 2025 Skytrax World Airline Awards, recognized for excellence in service, safety, passenger comfort, and global operations."
  },
  {
    id: "ca60",
    question: "60. The ICC World Test Championship (WTC) 2025 was won by which country?",
    options: ["India", "Australia", "South Africa", "England"],
    correctAnswer: 2,
    explanation: "South Africa won the ICC World Test Championship 2025, demonstrating consistent excellence in the longest format of cricket with strong team performance, strategy, and key individual contributions."
  },

  {
    id: "ca61",
    question: "61. Which film has become the first Indian animation film to win the Jury Award for Best Commissioned Film?",
    options: ["All We Imagine as Light", "White Elephant", "Hukuhama", "Desi Oon"],
    correctAnswer: 3,  // D
    explanation: "“Desi Oon” became the first Indian animated film to win the Jury Award for Best Commissioned Film, marking a milestone in India’s animation industry. The award recognizes excellence in storytelling, animation quality, and creativity, highlighting India’s growing presence in international animation festivals."
  },
  {
    id: "ca62",
    question: "62. How many authors were honoured with the Bal Sahitya Puraskar 2025?",
    options: ["10", "15", "24", "30"],
    correctAnswer: 2,  // C
    explanation: "In 2025, 24 authors were honoured with the Bal Sahitya Puraskar, recognizing writers who contribute significantly to children's literature in India. The award encourages creativity, educational value, and literary quality in works aimed at young readers."
  },
  {
    id: "ca63",
    question: "63. Indian tennis player Ankita Raina recently won her 32nd career doubles title at the Guimaraes ITF tournament in Portugal. Who was her doubles partner?",
    options: ["Prarthana Thombare", "Sania Mirza", "Alice Robbe", "Kristina Mladenovic"],
    correctAnswer: 2,  // C
    explanation: "Ankita Raina won her 32nd doubles title partnering with Alice Robbe. Their teamwork, coordination, and strategies on the court helped them secure the title at the Guimaraes ITF tournament, marking another milestone in Ankita’s doubles career."
  },
  {
    id: "ca64",
    question: "64. Recently, Prime Minister Narendra Modi was conferred with Cyprus's highest civilian honour. What is the name of this honour?",
    options: ["Order of the Golden Fleece", "Order of Makarios III", "Order of the Phoenix", "Order of the Lion"],
    correctAnswer: 1,  // B
    explanation: "PM Narendra Modi was awarded the Order of Makarios III, Cyprus's highest civilian honour. This recognition was for his contribution to strengthening bilateral relations, fostering cultural ties, and promoting collaboration between India and Cyprus."
  },
  {
    id: "ca65",
    question: "65. Who won the 2025 Stuttgart Open men's singles title by defeating Alexander Zverev in straight sets?",
    options: ["Novak Djokovic", "Taylor Fritz", "Daniil Medvedev", "Carlos Alcaraz"],
    correctAnswer: 1,  // B
    explanation: "Taylor Fritz won the 2025 Stuttgart Open men's singles title by defeating Alexander Zverev in straight sets. His victory demonstrated superior skill, mental toughness, and consistent performance, adding another prestigious ATP title to his career."
  },
  {
    id: "ca66",
    question: "66. Which media organization was named Champion of Digital Media Awards South Asia 2025?",
    options: ["The Times of India", "The Hindu", "The Quint", "Hindustan Times"],
    correctAnswer: 1,  // B
    explanation: "The Hindu was named Champion at the Digital Media Awards South Asia 2025 for excellence in digital journalism. The award recognized its innovative reporting, impactful storytelling, and effective use of digital platforms to engage audiences."
  },
  {
    id: "ca67",
    question: "67. Who won the men's javelin throw event at the Paris Diamond League 2025?",
    options: ["Anderson Peters", "Julian Weber", "Neeraj Chopra", "Luiz Mauricio da Silva"],
    correctAnswer: 2,  // C
    explanation: "Neeraj Chopra won the men's javelin throw at the Paris Diamond League 2025, showcasing exceptional athletic skill, technique, and consistency. His win reflects India’s rising prominence in international athletics, particularly in field events."
  },
  {
    id: "ca68",
    question: "68. Which country hosted the U23 Asian Wrestling Championships 2025?",
    options: ["India", "China", "Vietnam", "Japan"],
    correctAnswer: 2,  // C
    explanation: "Vietnam hosted the U23 Asian Wrestling Championships 2025, bringing together emerging wrestling talent from across Asia. The championship provided a platform for young athletes to compete at an international level and gain experience."
  },
  {
    id: "ca69",
    question: "69. Who won the mixed doubles title in the 2nd Asian Squash Doubles Championship 2025?",
    options: ["Anahat Singh and Abhay Singh", "Anahat Singh and Velavan Senthilkumar", "Aina Amani and Yi Jing Yi", "Abhay Singh and Joshna Chinappa"],
    correctAnswer: 0,  // A
    explanation: "Anahat Singh and Abhay Singh won the mixed doubles title in the 2nd Asian Squash Doubles Championship 2025. Their teamwork, agility, and tactical gameplay helped them overcome other top pairs, highlighting India's growing presence in international squash competitions."
  },
  {
    id: "ca70",
    question: "70. How many medals did Indian archers win in the Archery Asia Cup 2025 Singapore leg 2?",
    options: ["6 medals", "8 medals", "2 medals", "10 medals"],
    correctAnswer: 1,  // B
    explanation: "Indian archers won a total of 8 medals in the Archery Asia Cup 2025, Singapore leg 2, demonstrating their dominance and consistency in the sport. This achievement reflects effective training programs, talent development, and India’s commitment to excelling in archery internationally."
  },
  {
    id: "ca71",
    question: "71. Which city is hosting the inaugural Hockey India Masters Cup, starting from June 18, 2025?",
    options: ["Mumbai", "New Delhi", "Chennai", "Bengaluru"],
    correctAnswer: 2,  // C
    explanation: "Chennai hosted the inaugural Hockey India Masters Cup starting June 18, 2025. The city provided world-class facilities and infrastructure to ensure smooth conduct of the tournament. Hosting the event promotes hockey at regional levels and inspires emerging athletes."
  },
  {
    id: "ca72",
    question: "72. Which city is the venue of World Para Athletics Championship 2025?",
    options: ["New Delhi", "Bhopal", "Chennai", "Hyderabad"],
    correctAnswer: 0,  // A
    explanation: "New Delhi was the venue for the World Para Athletics Championship 2025. The championship highlighted inclusivity in sports, providing a platform for differently-abled athletes to showcase their talent and compete at an international level, bringing recognition to para-sports in India."
  },
  {
    id: "ca73",
    question: "73. Who won the 2025 Queen's Club Championships men's singles title?",
    options: ["Novak Djokovic", "Jiri Lehecka", "Carlos Alcaraz", "Daniil Medvedev"],
    correctAnswer: 2,  // C
    explanation: "Carlos Alcaraz won the 2025 Queen’s Club Championships men’s singles title with outstanding performance and consistency. The victory is a testament to his skill, stamina, and ability to perform under pressure in prestigious ATP tournaments."
  },
  {
    id: "ca74",
    question: "74. Who recently won the UzChess Cup and became India's top-ranked chess player?",
    options: ["Viswanathan Anand", "Pentala Harikrishna", "R. Praggnanandhaa", "Vidit Gujrathi"],
    correctAnswer: 2,  // C
    explanation: "R. Praggnanandhaa won the UzChess Cup and became India’s top-ranked chess player. His win highlights his strategic brilliance, international experience, and rapid rise in the global chess ranking, reflecting India’s growing chess prominence."
  },
  {
    id: "ca75",
    question: "75. Which Indian cricket player has been inducted into the ICC Hall of Fame in June 2025?",
    options: ["Ishant Sharma", "Virat Kohli", "Rahul Dravid", "Mahendra Singh Dhoni"],
    correctAnswer: 3,  // D
    explanation: "Mahendra Singh Dhoni was inducted into the ICC Hall of Fame in June 2025, recognizing his exceptional career, leadership, and contribution to Indian cricket. His achievements, including World Cups and captaincy milestones, have left a lasting legacy in the sport."
  },
  {
    id: "ca76",
    question: "76. Who Became India's 89th Chess Grandmaster?",
    options: ["R Praggnanandhaa", "Gukesh D.", "Rohith Krishna S.", "Fulwati Sadhukha"],
    correctAnswer: 2,  // C
    explanation: "Rohith Krishna S. became India’s 89th Chess Grandmaster, showcasing exceptional talent, dedication, and success in international chess tournaments. Achieving the GM title is one of the highest honors in chess and reflects India’s growing influence in the sport."
  },
  {
    id: "ca77",
    question: "77. Who is set to award David Beckham a knighthood?",
    options: ["Queen Elizabeth II", "King Charles III", "Prince William", "Prime Minister Keir Starmer"],
    correctAnswer: 1,  // B
    explanation: "King Charles III is set to award David Beckham a knighthood, recognizing his contribution to football, philanthropy, and global influence. The honour reflects Beckham’s achievements both on and off the field, including charitable work and sports promotion."
  },
  {
    id: "ca78",
    question: "78. Javed Akhtar was awarded the Dostoevsky Star Award in 2025 for:",
    options: ["His achievements in Indian cinema direction", "His remarkable influence on cultural heritage and literary dialogue", "His contributions to science and technology", "His philanthropic work in education"],
    correctAnswer: 1,  // B
    explanation: "Javed Akhtar received the Dostoevsky Star Award in 2025 for his influential work in literature and culture. His poetry, songwriting, and essays have contributed significantly to Indian literary discourse and global appreciation of cultural heritage."
  },
  {
    id: "ca79",
    question: "79. Who has been conferred with the Srimanta Sankardeva Award in June 2025?",
    options: ["Guru A. Madhav Chakyar", "Pandit Birju Maharaj", "Dr. Sonal Mansingh", "Malini Awasthi"],
    correctAnswer: 2,  // C
    explanation: "Dr. Sonal Mansingh received the Srimanta Sankardeva Award in June 2025 for her outstanding contribution to classical dance and Indian cultural heritage. Her dedication to promoting traditional arts has enriched the cultural landscape of India."
  },
  {
    id: "ca80",
    question: "80. Who won the 'Most Impactful Environmentalist' award in 2025?",
    options: ["Vandana Shiva", "Acharya Prashant", "Sunita Narain", "Jackie Shroff"],
    correctAnswer: 1,  // B
    explanation: "Acharya Prashant won the ‘Most Impactful Environmentalist’ award in 2025 for his significant work in environmental awareness and sustainable living practices. His initiatives promote ecological balance, climate consciousness, and community engagement."
  },
  {
    id: "ca81",
    question: "81. Who was awarded the 2024 Mathrubhumi Literary Award?",
    options: ["Benyamin", "K. Satchidanandan", "Sugathakumari", "Sarah Joseph"],
    correctAnswer: 3,  // D
    explanation: "Sarah Joseph received the 2024 Mathrubhumi Literary Award for her outstanding contributions to Malayalam literature. Her novels, essays, and short stories reflect social issues, feminism, and literary excellence, earning her national recognition."
  },
  {
    id: "ca82",
    question: "82. How many medals did India win in the Taiwan Athletics Open (World Athletics Continental Tour bronze event)?",
    options: ["10 medals", "16 medals", "15 medals", "12 medals"],
    correctAnswer: 1,  // B
    explanation: "India won 16 medals at the Taiwan Athletics Open, showcasing the depth and talent of Indian athletes. The achievement highlights India’s growing competitiveness in athletics on the international stage."
  },
  {
    id: "ca83",
    question: "83. At which event did Priyanka Goswami win her gold medal?",
    options: ["20 km race walk", "5 km race walk", "10 km race walk", "50 km race walk"],
    correctAnswer: 2,  // C
    explanation: "Priyanka Goswami won the gold medal in the 10 km race walk, demonstrating endurance, technique, and consistency. Her victory strengthens India’s position in race walking at international competitions."
  },
  {
    id: "ca84",
    question: "84. Who Became the First-Ever Indian Player to Win Prestigious Poligras Magic Skill Award?",
    options: ["Deepika Sehrawat", "Shakil Khanna", "Shital Chunnari", "Vandana Katariya"],
    correctAnswer: 0,  // A
    explanation: "Deepika Sehrawat became the first Indian to win the Poligras Magic Skill Award, marking a historic achievement. The award recognizes her skill, innovation, and excellence in field hockey."
  },
  {
    id: "ca85",
    question: "85. Which Gram Panchayat is the Gold Prize winner in the National e-Governance Awards 2025?",
    options: ["Rohini Gram Panchayat", "Palsana Gram Panchayat", "Suakati Gram Panchayat", "West Majlishpur Gram Panchayat"],
    correctAnswer: 0,  // A
    explanation: "Rohini Gram Panchayat won the Gold Prize in the National e-Governance Awards 2025 for excellence in digital governance, citizen services, and innovative use of technology at the grassroots level."
  },
  {
    id: "ca86",
    question: "86. Who is set to receive the Justice K.S. Hegde Award in 2025?",
    options: ["Sudha Murthy", "Rani Machaiah", "S.L. Bhyrappa", "Debdutt Baidya"],
    correctAnswer: 0,  // A
    explanation: "Sudha Murthy is set to receive the Justice K.S. Hegde Award in 2025 for her contributions to social service, philanthropy, and education. Her initiatives have positively impacted society, especially in rural and educational development."
  },
  {
    id: "ca87",
    question: "87. Who is the first woman Navy officer to be appointed as Aide-de-Camp to the President of India?",
    options: ["Lieutenant Commander Prerna Deosthalee", "Lieutenant Commander Yashasvi Solanki", "Lieutenant Commander Vartika Joshi", "Lieutenant Commander Shubhangi Swaroop"],
    correctAnswer: 1,  // B
    explanation: "Lieutenant Commander Yashasvi Solanki became the first woman Navy officer to serve as Aide-de-Camp to the President of India, a prestigious ceremonial role. Her appointment signifies recognition of her professional excellence and leadership in the Navy."
  },
  {
    id: "ca88",
    question: "88. Who was awarded the 2025 Princess of Asturias Award for Sports?",
    options: ["Serena Williams", "Rafael Nadal", "Carolina Marín", "Eliud Kipchoge"],
    correctAnswer: 0,  // A
    explanation: "Serena Williams received the 2025 Princess of Asturias Award for Sports in recognition of her remarkable tennis career and global influence. Her achievements have inspired millions and set new benchmarks in women’s sports worldwide."
  },
  {
    id: "ca89",
    question: "89. Who won the 2025 UN Population Award?",
    options: ["Medha Patkar", "Varsha Deshpande", "Prakhar Sinha", "Medha Sattyam"],
    correctAnswer: 1,  // B
    explanation: "Varsha Deshpande won the 2025 UN Population Award for her outstanding contribution to population studies, policy advocacy, and sustainable development initiatives. Her work addresses demographic challenges and promotes community health and awareness."
  },
  {
    id: "ca90",
    question: "90. Who among the following was awarded the USISPF Global Leadership Award in 2025?",
    options: ["Nandan Nilekani", "Ratan Tata", "Kumar Mangalam Birla", "Mukesh Ambani"],
    correctAnswer: 2,  // C
    explanation: "Kumar Mangalam Birla was awarded the USISPF Global Leadership Award in 2025 for his exemplary contributions to business, leadership, and fostering India-US economic ties. The award recognizes his strategic vision, innovation, and global influence."
  },


  {
    id: "ca91",
    question: "91. Who won the 72nd Miss World title held in Hyderabad, India?",
    options: ["Hasset Dereje Admassu", "Maja Klajda", "Opal Suchata Chuangsri", "Nandini Gupta"],
    correctAnswer: 2,  // C
    explanation: "Opal Suchata Chuangsri won the 72nd Miss World title held in Hyderabad, India. Her victory represents Thailand on the global stage and highlights her poise, talent, and advocacy, which impressed the international panel of judges."
  },
  {
    id: "ca92",
    question: "92. Which film won the best film award at 2025 IIFA awards?",
    options: ["Good News", "Kick", "Stree 2", "Laapataa Ladies"],
    correctAnswer: 3,  // D
    explanation: "Laapataa Ladies won the best film award at the 2025 IIFA Awards for its compelling story, direction, and performances. The film stood out for its innovative narrative and social relevance, receiving acclaim from critics and audiences alike."
  },
  {
    id: "ca93",
    question: "93. Which of the following Indian chess players recently won over former World No. 1 Magnus Carlsen in Round 6 of ongoing Norway Chess 2025 tournament?",
    options: ["R. Praggnanandhaa", "Arjun Erigaisi", "D. Gukesh", "None of these"],
    correctAnswer: 2,  // C
    explanation: "D. Gukesh defeated Magnus Carlsen in Round 6 of the Norway Chess 2025 tournament. This win demonstrates Gukesh's exceptional skill, strategy, and composure under pressure, marking a major milestone in his international chess career."
  },
  {
    id: "ca94",
    question: "94. Who has been honoured with the LATA DEENANATH MANGESHKAR AWARD 2025?",
    options: ["Kumar Mangalam Birla", "Jay Shah", "Narayana Sinha", "Adar Poonawala"],
    correctAnswer: 0,  // A
    explanation: "Kumar Mangalam Birla was honoured with the Lata Deenanath Mangeshkar Award 2025 for his contributions to arts, culture, and philanthropy. The award recognizes his support in promoting music, cultural initiatives, and social causes in India."
  },
  {
    id: "ca95",
    question: "95. Which country hosted the Ulaanbaatar Open 2025 wrestling ranking series?",
    options: ["Maldives", "Thailand", "Nepal", "Mongolia"],
    correctAnswer: 3,  // D
    explanation: "Mongolia hosted the Ulaanbaatar Open 2025 wrestling ranking series, bringing together top wrestlers from around the world. The event provided crucial ranking points for athletes and strengthened Mongolia's reputation in international wrestling."
  },
  {
    id: "ca96",
    question: "96. Which football club has won the 2024-25 UEFA Champions League?",
    options: ["Real Madrid", "Paris Saint-Germain (PSG)", "Manchester City", "Internazionale Milan"],
    correctAnswer: 1,  // B
    explanation: "Paris Saint-Germain (PSG) won the 2024-25 UEFA Champions League, demonstrating their dominance in European football. Key tactical planning, strong squad performance, and decisive victories in knockout stages contributed to their historic win."
  },
  {
    id: "ca97",
    question: "97. Who won the 2025 Spanish Grand Prix and is currently leading the championship?",
    options: ["Oscar Piastri", "Max Verstappen", "Charles Leclerc", "Lando Norris"],
    correctAnswer: 0,  // A
    explanation: "Oscar Piastri won the 2025 Spanish Grand Prix and is currently leading the championship. His consistent performance, race strategy, and precision driving helped him secure a decisive victory at one of the season’s most challenging tracks."
  },
  {
    id: "ca98",
    question: "98. Which tournament did Novak Djokovic win to claim his 100th singles title?",
    options: ["Australian Open", "Geneva Open", "Wimbledon", "US Open"],
    correctAnswer: 1,  // B
    explanation: "Novak Djokovic won the Geneva Open to claim his 100th singles title, joining an elite group of players with triple-digit career wins. His victory is a testament to his enduring skill, physical fitness, and experience on the ATP tour."
  },
  {
    id: "ca99",
    question: "99. Who is the recipient of the 2025 Genesis Prize?",
    options: ["Michael Bloomberg", "Steven Spielberg", "Javier Milei", "Barbra Streisand"],
    correctAnswer: 2,  // C
    explanation: "Javier Milei received the 2025 Genesis Prize for his exceptional contributions in public life. The award recognizes individuals who promote excellence, innovation, and leadership on a global scale."
  },
  {
    id: "ca100",
    question: "100. Who Became The First Black Woman To Be Crowned Mrs. World 2025?",
    options: ["Umanni Gayle", "Diman Heitmyer", "Tshego Gaelae", "Kolaniya Glenn"],
    correctAnswer: 2,  // C
    explanation: "Tshego Gaelae became the first Black woman to be crowned Mrs. World 2025, breaking barriers in international pageantry. Her victory emphasizes diversity, empowerment, and representation on the global stage."
  },
  {
    id: "ca101",
    question: "101. Which Indian city will host the 2026 Asian Weightlifting Championship?",
    options: ["Bhubaneswar", "Ahmedabad", "Indore", "Lucknow"],
    correctAnswer: 1,  // B
    explanation: "Ahmedabad has been selected to host the 2026 Asian Weightlifting Championship. The city will provide world-class facilities and infrastructure to athletes, further promoting weightlifting and sports development in India."
  },
  {
    id: "ca102",
    question: "102. Who won the 2025 Monaco Grand Prix?",
    options: ["Max Verstappen", "Charles Leclerc", "Lando Norris", "Oscar Piastri"],
    correctAnswer: 2,  // C
    explanation: "Lando Norris won the 2025 Monaco Grand Prix, one of the most prestigious races in Formula 1. His exceptional driving, strategy, and consistency on the challenging Monaco circuit secured his victory."
  },
  {
    id: "ca103",
    question: "103. Who was conferred with the 'Global Indian of the Year' award by the Canada India Foundation?",
    options: ["Dr. Manmohan Singh", "Sadhguru", "Indra Nooyi", "Ratan Tata"],
    correctAnswer: 1,  // B
    explanation: "Sadhguru was awarded the 'Global Indian of the Year' by the Canada India Foundation in recognition of his spiritual, social, and environmental initiatives that have had a significant global impact."
  },
  {
    id: "ca104",
    question: "104. Who recently presented the 'National Florence Nightingale Awards' 2025?",
    options: ["Prime Minister Narendra Modi", "Health Minister Mansukh Mandaviya", "President Droupadi Murmu", "Vice President Jagdeep Dhankhar"],
    correctAnswer: 2,  // C
    explanation: "President Droupadi Murmu presented the National Florence Nightingale Awards 2025, recognizing outstanding contributions of nurses in India towards healthcare, patient welfare, and dedication in the medical field."
  },
  {
    id: "ca105",
    question: "105. Which Iranian filmmaker won the prestigious Palme d'Or at the 2025 Cannes Film Festival for his film It Was Just an Accident?",
    options: ["Asghar Farhadi", "Abbas Kiarostami", "Jafar Panahi", "Mohammad Rasoulof"],
    correctAnswer: 2,  // C
    explanation: "Jafar Panahi won the Palme d'Or at the 2025 Cannes Film Festival for 'It Was Just an Accident.' The award recognizes his exceptional direction, storytelling, and contribution to global cinema despite facing significant challenges in Iran."
  },
  {
    id: "ca106",
    question: "106. Which team did Arsenal defeat to win the 2024-25 UEFA Women's Champions League title?",
    options: ["Chelsea", "Barcelona", "Lyon", "Bayern Munich"],
    correctAnswer: 1,  // B
    explanation: "Arsenal defeated Barcelona to win the 2024-25 UEFA Women's Champions League, showcasing their skill, teamwork, and tactical mastery. This victory added a major European trophy to Arsenal’s women's football achievements."
  },
  {
    id: "ca107",
    question: "107. Which Song Won 'Album of the Year' Award At Grammy Awards 2025?",
    options: ["Back to friends", "Cowboy Carter", "Water meets fire", "Shape of you"],
    correctAnswer: 1,  // B
    explanation: "'Cowboy Carter' won the 'Album of the Year' at the Grammy Awards 2025, recognized for its exceptional composition, production quality, and musical innovation, setting a high standard in the music industry."
  },
  {
    id: "ca108",
    question: "108. Which State/Union Territory topped the medal table of the first Khelo India Beach Games 2025?",
    options: ["Nagaland", "Manipur", "Tamil Nadu", "Delhi"],
    correctAnswer: 1,  // B
    explanation: "Manipur topped the medal table at the first Khelo India Beach Games 2025 due to its strong performance across multiple sports. This achievement highlights the state's focus on sports development and nurturing athletic talent."
  },
  {
    id: "ca109",
    question: "109. Who won the gold medal in the women's 10m air pistol event?",
    options: ["Kanak Budhwar", "Anna Dulce", "Prachi", "Chen Yen-ching"],
    correctAnswer: 0,  // A
    explanation: "Kanak Budhwar won the gold medal in the women's 10m air pistol event, demonstrating precision, concentration, and excellence in competitive shooting at an international level."
  },
  {
    id: "ca110",
    question: "110. Which team won the 2025 Indian Premier League (TATA IPL 2025) final, and by what margin?",
    options: ["Punjab Kings defeated Royal Challengers Bengaluru by 6 runs", "Royal Challengers Bengaluru defeated Punjab Kings by 6 runs", "Royal Challengers Bengaluru defeated Chennai Super Kings by 6 wickets", "Punjab Kings defeated Mumbai Indians by 6 wickets"],
    correctAnswer: 1,  // B
    explanation: "Royal Challengers Bengaluru defeated Punjab Kings by 6 runs to win the IPL 2025 final. The match was closely contested, with strategic batting and bowling performances deciding the victory."
  },
  {
    id: "ca111",
    question: "111. Who won the International Booker Prize 2025?",
    options: ["Arundhati Roy", "Deepa Bhasthi", "Banu Mushtaq", "Amitav Ghosh"],
    correctAnswer: 2,  // C
    explanation: "Banu Mushtaq won the International Booker Prize 2025 for her outstanding literary contribution. The award recognizes exceptional writing that combines creativity, thematic depth, and global literary relevance."
  },
  {
    id: "ca112",
    question: "112. Which Indian actor was honoured with the Locarno Film Festival Career Award in July 2024?",
    options: ["Amitabh Bachchan", "Shah Rukh Khan", "Rajinikanth", "Aamir Khan"],
    correctAnswer: 1,  // B
    explanation: "Shah Rukh Khan was honoured with the Locarno Film Festival Career Award in July 2024, recognizing his iconic career in Indian cinema and his impact on global film culture through remarkable performances and versatility."
  },
  {
    id: "ca113",
    question: "113. Who took the most wickets in IPL 2025?",
    options: ["Josh Hazlewood", "Yuzvendra Chahal", "Prasidh Krishna", "Harshal Patel"],
    correctAnswer: 2,  // C
    explanation: "Prasidh Krishna took the most wickets in IPL 2025, highlighting his consistency, pace, and ability to perform under pressure. His contributions were crucial in helping his team win matches throughout the season."
  },
  {
    id: "ca114",
    question: "114. Who received the Pravasi Bharatiya Samman Award in January 2025?",
    options: ["Sundar Pichai", "Christine Carla", "Satya Nadella", "Indra Nooyi"],
    correctAnswer: 1,  // B
    explanation: "Christine Carla received the Pravasi Bharatiya Samman Award in January 2025 for her exceptional contribution to society, culture, and promoting India’s interests abroad. The award honours distinguished members of the Indian diaspora."
  },
  {
    id: "ca115",
    question: "115. Which player scored the most runs in IPL 2025?",
    options: ["Rishabh Pant", "Sai Sudharsan", "Shubman Gill", "Virat Kohli"],
    correctAnswer: 1,  // B
    explanation: "Sai Sudharsan scored the most runs in IPL 2025, showcasing his batting consistency, technique, and ability to perform under pressure. His contribution was pivotal for his team's overall performance in the tournament."
  },
  {
    id: "ca116",
    question: "116. Who has been awarded the Sahitya Akademi Yuva Puraskar 2025 For Hindi?",
    options: ["Parvati Tirkey", "Mohan Das", "Tanushreeta Sarkar", "Abu Qadri"],
    correctAnswer: 0,  // A
    explanation: "Parvati Tirkey was awarded the Sahitya Akademi Yuva Puraskar 2025 for Hindi literature, recognizing her outstanding contribution as a young writer. The award celebrates creativity, literary excellence, and influence in modern Hindi literature."
  },
  {
    id: "ca117",
    question: "117. In 2025, Sharda Sinha (Posthumous) received the Padma Vibhushan award, in which field?",
    options: ["Medicine", "Public affairs", "Art", "Science and engineering"],
    correctAnswer: 2,  // C
    explanation: "Sharda Sinha received the Padma Vibhushan posthumously in 2025 in the field of Art. Her lifelong contributions to folk music and cultural preservation earned her this prestigious civilian award."
  },


  {
    id: "ca118",
    question: "118. Which player won the IPL 2025 Most Valuable Player (MVP)?",
    options: ["Rishabh Pant", "Suryakumar Yadav", "Jasprit Bumrah", "Shubman Gill"],
    correctAnswer: 1,  // 0=A, 1=B, 2=C, 3=D
    explanation: "Suryakumar Yadav of Mumbai Indians won the IPL 2025 MVP award, earning ₹10 lakh and a trophy. He had an outstanding season with consistent performances. Previous winners include Jos Buttler (2022), Shubman Gill (2023), and Sunil Narine (2024)."
  },
  {
    id: "ca119",
    question: "119. What area of expertise did Dr. Ravi Kannan R. receive the Padma Shri for in 2025?",
    options: ["Social Work", "Medicine", "Science and Engineering", "Public Affairs"],
    correctAnswer: 1,
    explanation: "Dr. Ravi Kannan R., a distinguished surgical oncologist and director of Cachar Cancer Hospital and Research Centre, received the Padma Shri 2025 for Medicine. He provides free cancer treatment for underprivileged patients and has also received the Ramon Magsaysay Award."
  },
  {
    id: "ca120",
    question: "120. Which Indian short film was nominated for best live action short film at the 97th Oscar Awards?",
    options: ["Anuja", "Leave One Day", "The Spectacle", "Screamboat"],
    correctAnswer: 0,
    explanation: "The 22-minute short film 'Anuja', produced by Guneet Monga, Priyanka Chopra Jonas, and Mindy Kaling, was nominated at the 97th Oscars. Though it lost to 'I'm Not a Robot', the nomination highlighted the growing recognition of Indian short films internationally."
  },
  {
    id: "ca121",
    question: "121. Who was named BBC Sports Personality of the Year 2024 after claiming Olympic and European titles in the 800m?",
    options: ["Keely Hodgkinson", "Mo Farah", "Dina Asher-Smith", "Adam Peaty"],
    correctAnswer: 0,
    explanation: "Keely Hodgkinson won BBC Sports Personality of the Year 2024 due to her exceptional performance in the 800m, securing both Olympic and European titles. Her achievements brought her international recognition and inspired young athletes."
  },
  {
    id: "ca122",
    question: "122. Who was honoured with the Padma Bhushan for their contributions to Indian music in 2025?",
    options: ["A.R. Rahman", "Pankaj Udhas", "Zakir Hussain", "Lata Mangeshkar"],
    correctAnswer: 1,
    explanation: "Pankaj Udhas was posthumously awarded the Padma Bhushan in 2025 for his contributions to Indian music, particularly ghazals. His melodious voice and contribution to music enriched India's cultural heritage."
  },
  {
    id: "ca123",
    question: "123. Which Indian athlete was awarded the 2024 Arjuna Award for excellence in javelin throw?",
    options: ["Neeraj Chopra", "Kishore Jena", "Navdeep Singh", "Shivpal Singh"],
    correctAnswer: 2,
    explanation: "Navdeep Singh received the 2024 Arjuna Award for his excellence in javelin throw. The award recognizes outstanding performance in national and international athletics competitions."
  },
  {
    id: "ca124",
    question: "124. Which field did Ashok Kumar Mahapatra receive the Padma Shri for in 2025?",
    options: ["Art", "Literature", "Medicine", "Public Affairs"],
    correctAnswer: 2,
    explanation: "Eminent neurosurgeon Ashok Kumar Mahapatra was awarded the Padma Shri in 2025 for Medicine. He served as Principal Advisor (Health Sciences) at Siksha 'O' Anusandhan, headed AIIMS Bhubaneswar, and contributed significantly to neurosurgery in India."
  },
  {
    id: "ca125",
    question: "125. Who received the Dadasaheb Phalke Award 2024 for outstanding contribution to Indian cinema?",
    options: ["Rajinikanth", "Amitabh Bachchan", "Mithun Chakraborty", "Kamal Haasan"],
    correctAnswer: 2,
    explanation: "Mithun Chakraborty was honoured with the 2024 Dadasaheb Phalke Award, recognizing his exceptional contribution to Indian cinema over decades. He is celebrated for his versatility and iconic performances."
  },
  {
    id: "ca126",
    question: "126. Who was honoured with the Best FIFA Men's Player Award 2024?",
    options: ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Vinícius Júnior"],
    correctAnswer: 3,
    explanation: "Vinícius Júnior received the Best FIFA Men's Player Award 2024 for his outstanding performances in club and international football. Other 2024 FIFA award winners include Aitana Bonmati (Best Women's Player) and Alejandro Garnacho (Puskas Award)."
  },
  {
    id: "ca127",
    question: "127. Who has been conferred the Sangita Kalanidhi award in 2024 by the Madras Music Academy?",
    options: ["Aruna Sairam", "N G Ganesan", "Ritha Rajan", "T M Krishna"],
    correctAnswer: 3,
    explanation: "Renowned Carnatic vocalist T M Krishna was conferred the Sangita Kalanidhi award 2024 for his contributions to music and innovative approach. He is known for challenging social barriers in classical music."
  },
  {
    id: "ca128",
    question: "128. Which Indian actor won the Best Actor award at the Filmfare Awards 2024?",
    options: ["Ranbir Kapoor", "Shah Rukh Khan", "Vicky Kaushal", "Allu Arjun"],
    correctAnswer: 0,
    explanation: "Ranbir Kapoor won the Best Actor award at the 2024 Filmfare Awards for his performance in 'Animal'. The award recognizes exceptional acting skills and contribution to Indian cinema."
  },
  {
    id: "ca129",
    question: "129. In 2025, Sunil Mittal received what honorary award from the UK?",
    options: ["Order of Merit", "Honorary Knighthood", "British Empire Medal", "Order of the Garter"],
    correctAnswer: 1,
    explanation: "Sunil Mittal, the founder of Bharti Enterprises, was conferred an Honorary Knighthood in 2025 by the UK for his contribution to telecommunications and global business."
  },
  {
    id: "ca130",
    question: "130. Which organization was honored with the Subhash Chandra Bose Aapda Prabandhan Puraskar-2025?",
    options: ["NDMA", "INCOIS", "DRDO", "Indian Red Cross Society"],
    correctAnswer: 1,
    explanation: "INCOIS (Indian National Center for Ocean Information Services) was honored in 2025 for its disaster management and ocean monitoring services. It operates under the Ministry of Earth Sciences and is based in Hyderabad."
  },
  {
    id: "ca131",
    question: "131. Who became the first Indian to win the Ramsar Award for Wetland Wise Use?",
    options: ["Unnan Krishnan", "Sourav Sinha", "Jayshree Vencatesan", "Ajay Samanta"],
    correctAnswer: 2,
    explanation: "Jayshree Vencatesan was recognized by the Ramsar Convention in March 2025 for her efforts in global wetland conservation, making her the first Indian to receive this award."
  },
  {
    id: "ca132",
    question: "132. Hariman Sharma, known as 'The Apple Man of India' was awarded which award in 2025?",
    options: ["Padma Vibhushan", "Padma Bhushan", "Padma Shri", "Bharat Ratna"],
    correctAnswer: 2,
    explanation: "Hariman Sharma received the Padma Shri in 2025 for his contribution to horticulture, particularly developing the HRMN-99 apple variety, boosting India’s apple cultivation."
  },
  {
    id: "ca133",
    question: "133. Chandrika Tandon's 'Triveni' won a Grammy Award for what category?",
    options: ["Best Pop Vocal Album", "Best New Age Album", "Best World Music Album", "Best Classical Album"],
    correctAnswer: 1,
    explanation: "'Triveni', a collaboration between Chandrika Tandon, Wouter Kellerman, and Eru Matsumoto, won the Grammy for Best New Age Album in 2025, recognized for its fusion of global musical styles."
  },
  {
    id: "ca134",
    question: "134. Where were the 82nd Annual Golden Globe Awards held?",
    options: ["New York", "California", "London", "Paris"],
    correctAnswer: 1,
    explanation: "The 82nd Annual Golden Globe Awards were held in California, USA. The event celebrated global achievements in film and television for 2024."
  },
  {
    id: "ca135",
    question: "135. In the WEF 2025, which of the following people were honoured with a Crystal Award?",
    options: ["David Beckham", "Diane von Furstenberg", "Riken Yamamoto", "All of the above"],
    correctAnswer: 3,
    explanation: "At the 55th World Economic Forum in Davos, Switzerland, all listed individuals, including David Beckham, Diane von Furstenberg, and Riken Yamamoto, received the Crystal Award for their contributions to arts, culture, and society."
  },
  {
    id: "ca136",
    question: "136. Travis Head won which award at the 2025 Australian Cricket Awards?",
    options: ["The Border-Gavaskar Trophy", "Allan Border Medal", "The Ashes Medal", "The Chappell-Hadlee Trophy"],
    correctAnswer: 1,
    explanation: "Travis Head won the Allan Border Medal at the 2025 Australian Cricket Awards, recognizing him as Australia’s most outstanding male cricketer for the season."
  },
  {
    id: "ca137",
    question: "137. In 2025, who was awarded the Padma Shri for contributions to Literature and Education, particularly in Odisha?",
    options: ["Manoj Das", "Pratibha Satpathy", "Sitakant Mahapatra", "Jayanta Mahapatra"],
    correctAnswer: 1,
    explanation: "Pratibha Satpathy, a renowned Odia poet and editor of the poetry magazine Udbhasa, was awarded the Padma Shri 2025 for her contributions to literature and education in Odisha."
  },
  {
    id: "ca138",
    question: "138. Who has been honoured with the Sangita Kalanidhi Award 2025?",
    options: ["Fulwanti Sinha", "M. Rajeshwar Rao", "R.K. Shriramkumar", "Rishabh Rikhiram Sharma"],
    correctAnswer: 2,
    explanation: "Violinist R.K. Shriramkumar was honoured with the Sangita Kalanidhi Award 2025 for his mastery in Carnatic music, especially in the compositions of Muthuswami Dikshitar and the Sangita Sampradaya Pradarshini tradition."
  },
  {
    id: "ca139",
    question: "139. Who received the Sangeet Natak Akademi Fellowship (Akademi Ratna) in 2025 for their contribution to Indian classical dance?",
    options: ["Saroja Vaidyanathan", "Pandit Birju Maharaj (posthumous)", "Teejan Bai", "Yamini Krishnamurthy"],
    correctAnswer: 0,
    explanation: "Saroja Vaidyanathan received the Sangeet Natak Akademi Fellowship in 2025 for her exceptional contributions to Indian classical dance, along with previously receiving Padma Shri (2002) and Padma Bhushan (2013)."
  },
  {
    id: "ca140",
    question: "140. How many Padma Vibhushan awards were conferred in 2025?",
    options: ["113", "19", "7", "1"],
    correctAnswer: 2,
    explanation: "In 2025, 7 Padma Vibhushan awards were conferred. The total Padma Awards included 19 Padma Bhushan and 113 Padma Shri, summing up to 139 awards across various fields."
  },
  {
    id: "ca141",
    question: "141. Which institution was awarded the National Intellectual Property Awards 2025 for Top Academic Institution?",
    options: ["IIT Delhi", "IIT Madras", "IISc Bangalore", "IIT Bombay"],
    correctAnswer: 1,
    explanation: "IIT Madras received the National Intellectual Property Award 2025 for Top Academic Institution, recognizing its innovations, patents, and contribution to intellectual property development in India."
  },
  {
    id: "ca142",
    question: "142. Who has been honoured with the Maharaja Hari Singh Peace and Harmony Award 2024-25?",
    options: ["Manoj Sinha", "Jagan Sarkar", "Dr. Karan Singh", "Himanshu Shukla"],
    correctAnswer: 0,
    explanation: "Manoj Sinha, Lt. Governor of Jammu & Kashmir, received the Maharaja Hari Singh Peace and Harmony Award 2024-25 for his efforts in administrative reforms and promoting good governance in the region."
  },
  {
    id: "ca143",
    question: "143. The Golden Peacock HR Excellence Award was given to which company?",
    options: ["Tata Consultancy Services", "Infosys", "Startek India", "Wipro"],
    correctAnswer: 2,
    explanation: "Startek India was awarded the Golden Peacock HR Excellence Award for its exceptional human resource practices, employee engagement, and contribution to HR innovation."
  },
  {
    id: "ca144",
    question: "144. Which Indian state received the 'Best State' award in the National Water Awards 2025?",
    options: ["Maharashtra", "Odisha", "Uttar Pradesh", "Rajasthan"],
    correctAnswer: 1,
    explanation: "Odisha was recognized as the 'Best State' in the National Water Awards 2025 for efficient water management and sustainable practices, with Uttar Pradesh second and Gujarat & Puducherry tied for third."
  },
  {
    id: "ca145",
    question: "145. Recently, who has been conferred the Nritya Kalanidhi Award 2024?",
    options: ["Vasanthalakshmi Narasimhachari", "Jayashri", "Neena Prasad", "Vid Bragha Bessell"],
    correctAnswer: 2,
    explanation: "Neena Prasad, an eminent Mohiniyattam exponent, was awarded the Nritya Kalanidhi Award 2024 for her outstanding contribution to classical dance."
  },
  {
    id: "ca146",
    question: "146. Which state won the most National Panchayat Awards in 2025?",
    options: ["Uttar Pradesh", "Madhya Pradesh", "Odisha", "Rajasthan"],
    correctAnswer: 2,
    explanation: "Odisha won the most National Panchayat Awards in 2025, recognizing its Panchayati Raj institutions’ efficiency, governance, and development initiatives."
  },
  {
    id: "ca147",
    question: "147. Who is set to receive the Padmapani Lifetime Achievement Award?",
    options: ["R. Aswin", "Akshay Kumar", "Amitabh Bachchan", "Sai Paranjpye"],
    correctAnswer: 3,
    explanation: "Sai Paranjpye, renowned filmmaker known for films like 'Sparsh' (1980) and 'Chashme Buddoor' (1981), was set to receive the Padmapani Lifetime Achievement Award for her contributions to Indian cinema."
  },
  
  {
    id: "ca148",
    question: "148. Which film won Best Film Awards at 'BAFTA Awards 2025'?",
    options: ["Conclave", "The Brutalist", "Humanity", "Anora"],
    correctAnswer: 0,  // 0=A, 1=B, 2=C, 3=D
    explanation: "The film 'Conclave' won the Best Film award at the BAFTA Awards 2025. Other winners included Adrien Brody (Best Actor, The Brutalist) and Mikey Madison (Best Actress, Anora)."
  },
  {
    id: "ca149",
    question: "149. Which men's footballer became the 1st to win the 'Presidential Medal of Freedom', the highest civilian honour of the USA?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Md. Salah", "Neymar Jr."],
    correctAnswer: 0,  // 0=A, 1=B, 2=C, 3=D
    explanation: "Lionel Messi became the first male soccer player and the first Argentine to receive the Presidential Medal of Freedom from President Joe Biden, recognizing his global impact in football."
  },
  {
    id: "ca150",
    question: "150. Which film won the 'Best picture (drama)' award at the Golden Globes 2025?",
    options: ["The Brutalist", "Interstellar", "Oppenheimer", "RRR"],
    correctAnswer: 0,
    explanation: "'The Brutalist' won the Best Picture (Drama) award at the 2025 Golden Globes, highlighting its critical acclaim and storytelling excellence."
  },
  {
    id: "ca151",
    question: "151. Which team won the title of 78th '2024–25 Santosh Trophy'?",
    options: ["West Bengal", "Manipur", "Bihar", "Kerala"],
    correctAnswer: 0,
    explanation: "West Bengal won the 78th Santosh Trophy in 2024-25, defeating Kerala 1-0 in the final, with Robi Hansda scoring the only goal. Kerala was the runner-up."
  },
  {
    id: "ca152",
    question: "152. Who won the Ramnath Goenka Award for excellence in journalism 2025 (Hindi)?",
    options: ["Tanushka Kaur", "Pranjal Sarkar", "Mridulika Jha", "Ravinder Shukla"],
    correctAnswer: 2,
    explanation: "Mridulika Jha of Aaj Tak won the 2025 Ramnath Goenka Award for Hindi journalism for her coverage on 'Dunki route', highlighting youth migration from Haryana."
  },
  {
    id: "ca153",
    question: "153. Which state won Best Tableau Award of Republic Day parade 2025?",
    options: ["Uttar Pradesh", "Odisha", "Kerala", "Haryana"],
    correctAnswer: 0,
    explanation: "Uttar Pradesh won the Best Tableau Award at the Republic Day parade 2025 with the theme 'Mahakumbh'. Tripura secured 2nd place and Andhra Pradesh 3rd."
  },
  {
    id: "ca154",
    question: "154. Who received the 'Sri Chandrasekarendra Saraswathi' Award for Leadership?",
    options: ["J.P. Nadda", "S. Jaishankar", "Nirmala Sitharaman", "Rajnath Singh"],
    correctAnswer: 1,
    explanation: "External Affairs Minister S. Jaishankar received the Sri Chandrasekarendra Saraswathi Award for Leadership, awarded by the South Indian Education Society (SIES)."
  },
  {
    id: "ca155",
    question: "155. Who won the Stockholm Water Prize 2025?",
    options: ["Cincinnati Black", "Marco Anthony", "Günter Blöschl", "Glenn Smile"],
    correctAnswer: 2,
    explanation: "Austrian hydrologist Günter Blöschl won the Stockholm Water Prize 2025 for his outstanding contributions to water research and management."
  },
  {
    id: "ca156",
    question: "156. Which city has been declared as the cleanest city in India in 9th Edition of Swachh Survekshan?",
    options: ["Ahmedabad", "Guwahati", "Indore", "Kolkata"],
    correctAnswer: 2,
    explanation: "Indore was declared the cleanest city in India in the 9th edition of Swachh Survekshan, recognized for sustained efforts in sanitation, waste management, and public participation."
  },
  {
    id: "ca157",
    question: "157. Who has been conferred with the Maharashtra Bhushan Award 2024?",
    options: ["Ram V. Sutar", "Palak Mucchal", "Asha Bhonsle", "Shaan"],
    correctAnswer: 0,
    explanation: "Renowned sculptor Ram V. Sutar received the Maharashtra Bhushan Award 2024 for his iconic works including the Statue of Unity and Lord Ram statue in Ayodhya. The award includes ₹25 lakh cash and a memento."
  },
  {
    id: "ca158",
    question: "158. Which film won the Best Film Award at Oscar 2025?",
    options: ["Hit & Run", "The Brutalist", "Anora", "Conjuring: Last Part"],
    correctAnswer: 2,
    explanation: "'Anora' won the Best Film Award at the Oscars 2025, recognized for its cinematic excellence and storytelling."
  },
  {
    id: "ca159",
    question: "159. Who has been honoured with the prestigious Ugadi Award 2025 for Historical Research?",
    options: ["MyNaa Swamy", "Irfan Habib", "Satish Chandra", "Ramachandra Guha"],
    correctAnswer: 0,
    explanation: "MyNaa Swamy received the Ugadi Award 2025 for Historical Research for his epigraphical discoveries of ancient inscriptions related to the Vijayanagara Empire."
  },
  {
    id: "ca160",
    question: "160. Who won the 2024–25 Indian Super League (ISL) Title?",
    options: ["Sunrisers Hyderabad", "Kerala Blasters", "Mohun Bagan", "Lucknow Super Giants"],
    correctAnswer: 2,
    explanation: "Mohun Bagan won the 2024–25 ISL title, with Alaeddine Ajaraie as the top goalscorer, registering 23 goals in the season."
  },
  {
    id: "ca161",
    question: "161. Who won Laureus Sportsman of the Year Award 2025?",
    options: ["Mondo Duplantis", "Lionel Messi", "Neymar Jr.", "Sai Sudarshan"],
    correctAnswer: 0,
    explanation: "Swedish pole vaulter Mondo Duplantis won the Laureus Sportsman of the Year Award 2025 for his outstanding achievements and records in athletics."
  },
  {
    id: "ca162",
    question: "162. Who won 2025 World Food Prize for Advancements in Biological Nitrogen Fixation?",
    options: ["Shuvam Kant", "Jigyasha Shadhukha", "Ranveer Oberoy", "Mariangela Hungria"],
    correctAnswer: 3,
    explanation: "Brazilian microbiologist Mariangela Hungria won the 2025 World Food Prize for her work on Biological Nitrogen Fixation, which significantly reduces chemical fertilizer use and saves approximately USD 40 billion annually."
  },

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
    question: "5. Match the following activities (Column A) with the learning processes (Column B):\n\nColumn A:\n(a) Learners analyse and generate evidence to verify hypotheses\n(b) Learners make notes of key events or behaviours\n(c) Learners relate their analysis to the given text\n(d) Learners form groups to work on the task\n\nColumn B:\n(i) Interpretation construction\n(ii) Observation\n(iii) Contextualisation\n(iv) Collaboration",
    options: [
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
    ],
    correctAnswer: 0, // Option A
    explanation: "Analysing evidence corresponds to interpretation construction. Making notes involves observation. Relating analysis to the text reflects contextualisation. Group work represents collaboration."
  },
  {
    id: "q6",
    question:
      "6. Which among the following is true in the context of Sigmund Freud?\n\n" +
      "(a) Psychoanalysis as a system of school of psychology was his brainchild\n" +
      "(b) He used id, ego and super ego for explaining the structure of the psyche\n" +
      "(c) He does not believe in the role of instinct in driving human behaviour\n" +
      "(d) He postulated two main instincts namely the life instinct and the death instinct",
    options: [
      "Only (a) and (b)",
      "Only (c) and (d)",
      "Only (a), (b) and (c)",
      "Only (a), (b) and (d)"
    ],
    correctAnswer: 3, // Option 4
    explanation:
      "Sigmund Freud founded psychoanalysis and explained the psyche using id, ego and super ego. He strongly believed that instincts drive human behaviour and proposed two main instincts: life instinct (Eros) and death instinct (Thanatos). Hence, statements (a), (b) and (d) are correct, while (c) is incorrect."
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
   question:
      "19. A teacher designs a plan by reviewing the students’ prior knowledge and then by selecting appropriate learning materials and methods. Which components from the teaching plan does this reflect?\n\n" +
      "(a) Assessment strategies\n" +
      "(b) Competencies to be achieved\n" +
      "(c) Pedagogical choices based on student understanding\n" +
      "(d) Content and teaching-learning materials' selection\n" +
      "(e) Home assignments",
    options: [
      "Only (a) and (b)",
      "Only (c) and (d)",
      "Only (a), (b) and (c)",
      "Only (b), (c) and (d)"
    ],
    correctAnswer: 1, // Option 2
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
    question:
      "14. The key aspects of an inclusive classroom are:\n\n" +
      "(a) Valuing cultural diversity and students’ voices\n" +
      "(b) Providing identical instruction to all students\n" +
      "(c) Sharing activities and learning materials\n" +
      "(d) Promoting openness and acceptance\n\n" +
      "Choose the correct option:",
    options: [
      "Only (a), (b) and (c)",
      "Only (a), (c) and (d)",
      "Only (b) and (d)",
      "Only (c) and (d)"
    ],
    correctAnswer: 1, // Option 2
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
