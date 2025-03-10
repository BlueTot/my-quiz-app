import React, { useState, useEffect } from "react";

// Custom Card component
function Card({ children, className }) {
  return (
    <div className={`border rounded-lg shadow-md p-4 bg-white ${className}`}>
      {children}
    </div>
  );
}

// Custom CardContent component
function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

// Custom Button component
function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
}

const questions = [
  {
    question: "What is the definition of a profession?",
    options: [
      "A casual job with no formal training",
      "A vocation/career involving prolonged training and a formal qualification",
      "A hobby pursued for leisure",
      "A temporary employment position"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT one of the three defining features of a profession?",
    options: [
      "Body of people",
      "Self governing",
      "Entry to profession is controlled",
      "High salary"
    ],
    answer: 3
  },
  {
    question: "What does the term 'body of people' refer to in the context of professions?",
    options: [
      "A group of professionals sharing a common interest",
      "A physical organization or building",
      "A group of unrelated individuals",
      "An international corporation"
    ],
    answer: 0
  },
  {
    question: "Which feature of a profession implies that its members regulate their own standards?",
    options: [
      "Controlled entry",
      "Self-governing",
      "Body of people",
      "Public image"
    ],
    answer: 1
  },
  {
    question: "What is meant by 'controlled entry' in a profession?",
    options: [
      "Anyone can join without qualifications",
      "Membership is regulated through formal qualifications",
      "It means the profession is government-run",
      "It refers to restricted work hours"
    ],
    answer: 1
  },
  {
    question: "Which council is associated with the Engineering Profession?",
    options: [
      "Science Council",
      "Engineering Council",
      "Information Commissioner's Office",
      "British Computer Society"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a UK Engineering Professional Qualification?",
    options: [
      "CSci",
      "IEng",
      "RSciTeach",
      "CITP"
    ],
    answer: 1
  },
  {
    question: "What does 'IEng' stand for in UK Engineering Professional Qualifications?",
    options: [
      "International Engineer",
      "Incorporated Engineer",
      "Independent Engineer",
      "Innovator Engineer"
    ],
    answer: 1
  },
  {
    question: "Which organization is associated with Scientific Professional Qualifications?",
    options: [
      "British Computer Society",
      "Science Council",
      "Engineering Council",
      "Information Commissioner's Office"
    ],
    answer: 1
  },
  {
    question: "What does BCS stand for?",
    options: [
      "British Council of Science",
      "British Computer Society",
      "British Construction Standards",
      "British Compliance Service"
    ],
    answer: 1
  },
  {
    question: "Which is the UK Computing Professional Qualification offered by BCS?",
    options: [
      "CSciTeach",
      "CITP",
      "RSci",
      "IEng"
    ],
    answer: 1
  },
  {
    question: "What is one of the four duties of the BCS Code of Conduct?",
    options: [
      "Public interest",
      "Profit maximization",
      "Personal advancement",
      "Competitive strategy"
    ],
    answer: 0
  },
  {
    question: "Which of the following is a duty under the BCS Code of Conduct?",
    options: [
      "Duty to the authority",
      "Duty to relevant authority",
      "Duty to make profit",
      "Duty to secure clients"
    ],
    answer: 1
  },
  {
    question: "What does 'professional competence and integrity' refer to in the BCS Code of Conduct?",
    options: [
      "The obligation to remain knowledgeable and ethical",
      "The obligation to work long hours",
      "The obligation to follow orders without question",
      "The obligation to maximize profits"
    ],
    answer: 0
  },
  {
    question: "Which duty of the BCS Code of Conduct involves loyalty to the profession?",
    options: [
      "Public interest",
      "Duty to relevant authority",
      "Duty to the profession",
      "Professional competence"
    ],
    answer: 2
  },
  {
    question: "What are the two ways to regulate a profession?",
    options: [
      "Self-governing and controlled entry",
      "Reservation of title and reservation of function",
      "Public interest and professional conduct",
      "Certification and licensing"
    ],
    answer: 1
  },
  {
    question: "Which term refers to continuous learning and updating professional skills?",
    options: [
      "Continuing Professional Development (CPD)",
      "Initial Professional Training (IPT)",
      "Ongoing Career Maintenance (OCM)",
      "Professional Competence Program (PCP)"
    ],
    answer: 0
  },
  {
    question: "In the UK, which areas are included when referring to the Constitution's jurisdiction?",
    options: [
      "England, Scotland, Wales, Northern Ireland",
      "England, Scotland, Wales, Channel Islands",
      "England, Wales, Channel Islands, Isle of Man",
      "England, Scotland, Wales, Ireland"
    ],
    answer: 0
  },
  {
    question: "Which part of the UK is excluded from the definition of the area covered by the Constitution in these notes?",
    options: [
      "Scotland",
      "Wales",
      "Channel Islands",
      "Northern Ireland"
    ],
    answer: 2
  },
  {
    question: "What is another name for Ireland mentioned in the notes?",
    options: [
      "Eire",
      "Gaelic",
      "Hibernia",
      "Erin"
    ],
    answer: 0
  },
  {
    question: "Which of the following is one of the two houses of the UK Parliament?",
    options: [
      "House of Representatives",
      "House of Lords",
      "House of Citizens",
      "House of Delegates"
    ],
    answer: 1
  },
  {
    question: "Which house in the UK Parliament is elected?",
    options: [
      "House of Commons",
      "House of Lords",
      "House of Representatives",
      "House of States"
    ],
    answer: 0
  },
  {
    question: "What is the role of the House of Lords in the UK Parliament?",
    options: [
      "They are elected and make all laws.",
      "They are appointed and review legislation.",
      "They are responsible for judicial decisions.",
      "They handle only local government issues."
    ],
    answer: 1
  },
  {
    question: "Which stage of a bill in Parliament involves a formal presentation with no debate?",
    options: [
      "Second Reading",
      "First Reading",
      "Committee Stage",
      "Report Stage"
    ],
    answer: 1
  },
  {
    question: "During which stage in the parliamentary process is there a general debate on a bill?",
    options: [
      "First Reading",
      "Second Reading",
      "Committee Stage",
      "Report Stage"
    ],
    answer: 1
  },
  {
    question: "What is the last step for a bill to become law in the UK?",
    options: [
      "Third Reading",
      "Committee Stage",
      "Royal Assent",
      "Report Stage"
    ],
    answer: 2
  },
  {
    question: "According to the 1911 Parliament Act, what can the House of Lords do regarding bills?",
    options: [
      "Block bills indefinitely",
      "Delay bills but not block them",
      "Rewrite bills completely",
      "Unilaterally approve bills"
    ],
    answer: 1
  },
  {
    question: "Which type of EU legal instrument takes immediate effect across the entire EU?",
    options: [
      "EU Directive",
      "EU Regulation",
      "EU Recommendation",
      "EU Framework Decision"
    ],
    answer: 1
  },
  {
    question: "What is the primary difference between an EU Directive and an EU Regulation?",
    options: [
      "Directives are optional, regulations are mandatory.",
      "Directives require national implementation, regulations are self-executing.",
      "Regulations require national implementation, directives are automatic.",
      "There is no difference."
    ],
    answer: 1
  },
  {
    question: "In a criminal law case in the UK, who is the prosecutor?",
    options: [
      "The defendant",
      "The jury",
      "The Crown Prosecution Service",
      "The judge"
    ],
    answer: 2
  },
  {
    question: "What is the standard of proof used in a UK criminal law case?",
    options: [
      "Balance of probabilities",
      "Beyond a reasonable doubt",
      "Clear and convincing evidence",
      "Preponderance of evidence"
    ],
    answer: 1
  },
  {
    question: "In a civil law case, what is the deciding factor for the outcome?",
    options: [
      "Beyond a reasonable doubt",
      "Balance of probabilities",
      "Clear and convincing evidence",
      "Absolute certainty"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT part of the hierarchy of courts listed in the notes?",
    options: [
      "Magistrates",
      "County Court",
      "Crown Court",
      "Court of Appeal"
    ],
    answer: 3
  },
  {
    question: "Which court is responsible for major criminal cases in the UK?",
    options: [
      "Magistrates",
      "County Court",
      "Crown Court",
      "Supreme Court"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a key aspect of the Data Protection Act 2018?",
    options: [
      "It is unrelated to EU legislation.",
      "It is associated with the EU GDPR.",
      "It only applies to non-digital data.",
      "It exempts all government bodies."
    ],
    answer: 1
  },
  {
    question: "What does GDPR stand for?",
    options: [
      "General Data Protection Regulation",
      "Global Data Protection Rule",
      "Government Data Privacy Regulation",
      "General Digital Protection Regulation"
    ],
    answer: 0
  },
  {
    question: "What is the maximum penalty for data breaches under GDPR?",
    options: [
      "Up to 10 million euros or 2% of global revenue",
      "Up to 5 million euros or 1% of global revenue",
      "Up to 20 million euros or 4% of global revenue",
      "Up to 50 million euros or 5% of global revenue"
    ],
    answer: 0
  },
  {
    question: "Under GDPR, what is the maximum penalty for violations of obligations?",
    options: [
      "10 million euros or 2% of revenue",
      "20 million euros or 4% of revenue",
      "5 million euros or 1% of revenue",
      "15 million euros or 3% of revenue"
    ],
    answer: 1
  },
  {
    question: "Within how many hours must data breaches be reported under GDPR?",
    options: [
      "24 hours",
      "48 hours",
      "72 hours",
      "96 hours"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT one of the 7 data protection principles?",
    options: [
      "Data processing must be lawful",
      "Data must be processed in a secure manner",
      "Data must be processed for profit only",
      "Controller is accountable"
    ],
    answer: 2
  },
  {
    question: "What does the term 'data subject' refer to?",
    options: [
      "A company processing data",
      "A natural person identified or identifiable",
      "A government agency",
      "An IT system"
    ],
    answer: 1
  },
  {
    question: "Which right is NOT granted to data subjects under GDPR?",
    options: [
      "Access to their data",
      "Right to rectification",
      "Right to data portability",
      "Right to unlimited data storage"
    ],
    answer: 3
  },
  {
    question: "What does 'profiling' involve under data protection rules?",
    options: [
      "Manual data entry by a clerk",
      "Automated processing to determine personal criteria",
      "Secure storage of physical documents",
      "Filing a data subject request"
    ],
    answer: 1
  },
  {
    question: "What is the role of the controller in data protection?",
    options: [
      "Determines the purposes and means of processing personal data",
      "Provides IT support",
      "Approves data breaches",
      "Monitors employee productivity"
    ],
    answer: 0
  },
  {
    question: "Which UK body is responsible for supervising data protection?",
    options: [
      "British Computer Society",
      "Information Commissioner's Office (ICO)",
      "Science Council",
      "Engineering Council"
    ],
    answer: 1
  },
  {
    question: "What is a key requirement of the Freedom of Information Act 2000?",
    options: [
      "Information requests must be made in writing",
      "Information is always free of charge",
      "Only digital records are covered",
      "There is no time limit for responses"
    ],
    answer: 0
  },
  {
    question: "Which of the following is an absolute exemption under the Freedom of Information Act 2000?",
    options: [
      "Environmental information",
      "Trade secrets",
      "Security services information",
      "Public health data"
    ],
    answer: 2
  },
  {
    question: "What does RIDDOR stand for?",
    options: [
      "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations",
      "Regulation of Industrial Data and Documentation",
      "Reporting of Incidents, Damages, and Departmental Operations",
      "Regulation of Injuries and Dangerous Offenses Reporting"
    ],
    answer: 0
  },
  {
    question: "Which act amended the Computer Misuse Act 1990 to increase penalties for hacking?",
    options: [
      "Data Protection Act 2018",
      "Police and Justice Act 2006",
      "Freedom of Information Act 2000",
      "Companies Act 2006"
    ],
    answer: 1
  },
  {
    question: "What is one of the offences under the Computer Misuse Act 1990?",
    options: [
      "Unauthorised access to computer material",
      "Copyright infringement",
      "Defamation",
      "Breach of contract"
    ],
    answer: 0
  },
  {
    question: "What does 'unauthorised modification' under the Computer Misuse Act 1990 involve?",
    options: [
      "Accessing a computer without permission",
      "Changing computer material without permission",
      "Using a computer for educational purposes",
      "Monitoring computer systems legally"
    ],
    answer: 1
  },
  {
    question: "Under the Police and Justice Act 2006, what additional offence was created?",
    options: [
      "Unauthorised copying of computer software",
      "Unauthorised access extradition",
      "Hacking into government databases",
      "Unauthorized use of personal data"
    ],
    answer: 1
  },
  {
    question: "Which act governs the legal interception of data by public bodies?",
    options: [
      "Computer Misuse Act 1990",
      "Regulation of Investigatory Powers Act 2000",
      "Freedom of Information Act 2000",
      "Data Protection Act 1998"
    ],
    answer: 1
  },
  {
    question: "What is required for a public body to intercept data legally?",
    options: [
      "A written request from a citizen",
      "A warrant",
      "No approval is needed",
      "A public vote"
    ],
    answer: 1
  },
  {
    question: "Which of the following does NOT count as copying under intellectual property laws?",
    options: [
      "Downloading from the web",
      "Uploading to the web",
      "Making backups",
      "Attending a lecture"
    ],
    answer: 3
  },
  {
    question: "How long does copyright last in the UK and USA?",
    options: [
      "Life + 50 years",
      "Life + 79 years",
      "15 years",
      "20 years"
    ],
    answer: 1
  },
  {
    question: "What is one allowed purpose of de-compilation?",
    options: [
      "To create a competing product",
      "To correct errors",
      "To bypass licensing",
      "To distribute software illegally"
    ],
    answer: 1
  },
  {
    question: "Which international body is concerned with intellectual property?",
    options: [
      "OECD",
      "WIPO (World Intellectual Property Organisation)",
      "NATO",
      "WHO"
    ],
    answer: 1
  },
  {
    question: "What does ACTA stand for in the context of intellectual property?",
    options: [
      "Anti-Counterfeiting Trade Agreement",
      "Advanced Computer Technology Act",
      "Association of Copyright Trade Agencies",
      "Automated Copyright Trade Agreement"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the EU Copyright Directive?",
    options: [
      "To eliminate copyright laws in the EU",
      "To harmonize copyright law in the Digital Single Market",
      "To increase the duration of copyright",
      "To reduce penalties for copyright infringement"
    ],
    answer: 1
  },
  {
    question: "What is a trademark?",
    options: [
      "A temporary right to exploit an invention",
      "A distinctive name, sign, or logo used to identify goods or services",
      "A legal permission to use copyrighted material",
      "A formal agreement between two companies"
    ],
    answer: 1
  },
  {
    question: "Which legislation governs trademarks in the UK?",
    options: [
      "Copyright, Designs and Patents Act 1988",
      "Trade Marks Act 1994",
      "Companies Act 2006",
      "Computer Misuse Act 1990"
    ],
    answer: 1
  },
  {
    question: "What is a patent?",
    options: [
      "A permanent right to exploit an invention",
      "A temporary right to exploit an invention, usually for 20 years",
      "A form of trademark protection",
      "A copyright for software"
    ],
    answer: 1
  },
  {
    question: "Under European law, what is NOT a requirement for a patented invention?",
    options: [
      "New",
      "Involves an inventive step",
      "Capable of industrial application",
      "Has a long lifespan"
    ],
    answer: 3
  },
  {
    question: "What does whistle-blowing refer to?",
    options: [
      "Reporting illegal or unethical behavior",
      "Promoting company profits",
      "Breaking a patent law",
      "Ignoring safety regulations"
    ],
    answer: 0
  },
  {
    question: "Which act protects whistle-blowers in the UK?",
    options: [
      "Data Protection Act 2018",
      "Public Interest Disclosure Act 1998",
      "Companies Act 2006",
      "Freedom of Information Act 2000"
    ],
    answer: 1
  },
  {
    question: "What is one of the three sources of finance for starting a company?",
    options: [
      "Equity capital",
      "Tax incentives",
      "Foreign aid",
      "Crowdfunding exclusively"
    ],
    answer: 0
  },
  {
    question: "Which of the following is a source of finance for starting a company?",
    options: [
      "Government grants",
      "Personal savings only",
      "Lottery winnings",
      "Cryptocurrency mining"
    ],
    answer: 0
  },
  {
    question: "What is the ratio of loan capital to equity commonly called?",
    options: [
      "Leverage or gearing",
      "Profit margin",
      "Return on investment",
      "Debt ratio"
    ],
    answer: 0
  },
  {
    question: "What does a balance sheet represent?",
    options: [
      "Income and expenses over a period",
      "Assets, liabilities, and net worth at a specific point in time",
      "Cash flow movements",
      "Future financial forecasts"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT part of a balance sheet?",
    options: [
      "Assets",
      "Liabilities",
      "Net Worth",
      "Profit margin"
    ],
    answer: 3
  },
  {
    question: "What does the Profit and Loss Account measure?",
    options: [
      "The movement of cash",
      "The net worth of a company",
      "Income minus expenditure for a period",
      "The assets owned by a company"
    ],
    answer: 2
  },
  {
    question: "What does the Cash Flow Statement show?",
    options: [
      "Company profits over time",
      "Movement of cash within a period",
      "Total liabilities",
      "Net worth calculation"
    ],
    answer: 1
  },
  {
    question: "What is a key principle of double entry bookkeeping?",
    options: [
      "Every transaction is recorded once",
      "Every transaction appears twice",
      "Transactions are recorded only at the end of the year",
      "Only expenses are recorded twice"
    ],
    answer: 1
  },
  {
    question: "What is the difference between an account and a budget?",
    options: [
      "Account is planned, budget is historical",
      "Account shows what has happened, budget shows expected outcomes",
      "They are the same",
      "Budget shows actual data, account is a forecast"
    ],
    answer: 1
  },
  {
    question: "Which costs are directly associated with production?",
    options: [
      "Direct costs",
      "Indirect costs",
      "Overhead costs",
      "Fixed costs"
    ],
    answer: 0
  },
  {
    question: "Which costs include expenses such as rental and bills?",
    options: [
      "Direct costs",
      "Indirect costs",
      "Variable costs",
      "Production costs"
    ],
    answer: 1
  },
  {
    question: "Which of the following is considered a labour cost?",
    options: [
      "Rental fees",
      "National Insurance contributions",
      "Raw materials",
      "Advertising expenses"
    ],
    answer: 1
  },
  {
    question: "What does Discounted Cash Flow Analysis (DCF) help determine?",
    options: [
      "The current value of a future cash flow",
      "Total liabilities of a company",
      "The number of employees",
      "The balance sheet totals"
    ],
    answer: 0
  },
  {
    question: "In DCF analysis, what does the discount factor represent?",
    options: [
      "The interest rate compounded over time",
      "The inflation rate",
      "The company's profit margin",
      "The raw cash flow"
    ],
    answer: 0
  },
  {
    question: "Which factor is NOT typically considered in investment forecasting?",
    options: [
      "Market conditions",
      "Competitors",
      "Credit availability",
      "The company's logo design"
    ],
    answer: 3
  },
  {
    question: "What is a statutory requirement for larger companies regarding financial accounts?",
    options: [
      "They must be kept secret",
      "They must be audited",
      "They are optional",
      "They must be filed with local authorities only"
    ],
    answer: 1
  },
  {
    question: "Where are annual returns and accounts typically filed in the UK?",
    options: [
      "Companies House",
      "The local bank",
      "The Ministry of Finance",
      "HM Revenue and Customs only"
    ],
    answer: 0
  },
  {
    question: "What is contained in a Company Register?",
    options: [
      "A list of directors, secretaries, and shareholders",
      "The company's balance sheet",
      "The annual profit report",
      "Customer contact details"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT one of the six varieties of legal entities mentioned?",
    options: [
      "Partnerships",
      "Individuals",
      "Government Departments",
      "Sole proprietorships"
    ],
    answer: 3
  },
  {
    question: "Under which act is the creation of a partnership governed?",
    options: [
      "Partnership Act 1890",
      "Companies Act 2006",
      "Trade Marks Act 1994",
      "Public Interest Disclosure Act 1998"
    ],
    answer: 0
  },
  {
    question: "How can a company be incorporated?",
    options: [
      "Through a Royal Charter, Act of Parliament, or Companies Act",
      "Only by Royal Charter",
      "By individual shareholders only",
      "Through a public vote"
    ],
    answer: 0
  },
  {
    question: "Which act governs the legalisation of companies in the UK?",
    options: [
      "Companies Act 2006",
      "Computer Misuse Act 1990",
      "Human Rights Act 1998",
      "Freedom of Information Act 2000"
    ],
    answer: 0
  },
  {
    question: "What is the role of a director in a company?",
    options: [
      "To only invest money",
      "To manage and run the company",
      "To act as a silent partner",
      "To audit the company's accounts"
    ],
    answer: 1
  },
  {
    question: "What does the Memorandum of Association originally include?",
    options: [
      "List of directors and their salaries",
      "A legal statement of association signed by initial shareholders",
      "Detailed financial accounts",
      "The company’s marketing strategy"
    ],
    answer: 1
  },
  {
    question: "What document has replaced 'Table A' for articles of association after 1 October 2009?",
    options: [
      "Memorandum of Association",
      "Companies (Model Articles) Regulations 2008",
      "Public Interest Disclosure Act 1998",
      "Articles of Incorporation 2010"
    ],
    answer: 1
  },
  {
    question: "Which principle is NOT a structuring principle for organizations?",
    options: [
      "Function",
      "Location",
      "By product",
      "By season"
    ],
    answer: 3
  },
  {
    question: "Which of the following is an example of a departmental structure in an organization?",
    options: [
      "Production, Finance, Marketing",
      "Project teams only",
      "Random groups",
      "Informal networks"
    ],
    answer: 0
  },
  {
    question: "What type of operational structure is organized around specific projects?",
    options: [
      "Functional structure",
      "Operational structure by project",
      "Geographical structure",
      "Divisional structure"
    ],
    answer: 1
  },
  {
    question: "What is a contract?",
    options: [
      "A casual agreement with no legal standing",
      "A legal agreement between two parties based on common law",
      "An informal promise",
      "A non-binding verbal agreement"
    ],
    answer: 1
  },
  {
    question: "What is the difference between a contract and a licence?",
    options: [
      "A contract involves money, a licence does not",
      "A licence is a legal permission, not a contract",
      "They are the same",
      "A contract is verbal, while a licence is written"
    ],
    answer: 1
  },
  {
    question: "What act applies to contracts with defective software?",
    options: [
      "Unfair Contract Terms Act 1977",
      "Companies Act 2006",
      "Data Protection Act 2018",
      "Freedom of Information Act 2000"
    ],
    answer: 0
  },
  {
    question: "Which area does Human Resources NOT typically deal with?",
    options: [
      "Recruitment",
      "Redundancies and grievances",
      "Staff development",
      "Product manufacturing"
    ],
    answer: 3
  },
  {
    question: "Which act replaced the Factories Act 1961 regarding workplace health and safety?",
    options: [
      "Health and Safety at Work Act 1974",
      "Computer Misuse Act 1990",
      "Companies Act 2006",
      "Public Interest Disclosure Act 1998"
    ],
    answer: 0
  },
  {
    question: "What does RIDDOR require employers to report?",
    options: [
      "All minor workplace accidents",
      "Only financial discrepancies",
      "Deaths, major injuries, near misses, and work-related diseases",
      "Customer complaints"
    ],
    answer: 2
  }
];

// const questions = [
//   {
//     question: "What are the three defining features of a profession?",
//     options: [
//       "Body of people, Self governing, Entry controlled",
//       "High salary, Degree required, Government regulated",
//       "Any job, No formal qualification, Open entry",
//       "Work-life balance, High prestige, Public service"
//     ],
//     answer: 0
//   },
//   {
//     question: "What is the last step for a bill to become law in the UK?",
//     options: [
//       "House of Lords Approval",
//       "Royal Assent",
//       "Third Reading in Commons",
//       "Public Referendum"
//     ],
//     answer: 1
//   },
//   {
//     question: "Which UK body supervises data protection?",
//     options: [
//       "Information Commissioner's Office (ICO)",
//       "British Computer Society (BCS)",
//       "Science Council",
//       "European Court of Justice"
//     ],
//     answer: 0
//   }
// ];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    loadNewQuestion();
  }, []);

  function loadNewQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setSelectedAnswer(null);
    setFeedback("");
  }

  function handleAnswer(index) {
    setSelectedAnswer(index);
    if (index === currentQuestion.answer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect, try again!");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="max-w-md w-full text-center p-4">
        <CardContent>
          {currentQuestion && (
            <>
              <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>
              <div className="mt-4 flex flex-col gap-2">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    className={`w-full ${
                      selectedAnswer === index
                        ? index === currentQuestion.answer
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }`}
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <p className="mt-4 font-bold">{feedback}</p>
              <Button className="mt-4 bg-gray-700 hover:bg-gray-800" onClick={loadNewQuestion}>
                Next Question
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

