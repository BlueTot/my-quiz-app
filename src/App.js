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

// Custom Input component
function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}
/*
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
  },

  // Abbreviation–style questions (18)
  {
    question: "What does GDPR stand for?",
    answer: "General Data Protection Regulation"
  },
  {
    question: "What does ICO stand for?",
    answer: "Information Commissioner's Office"
  },
  {
    question: "What does RIPA stand for?",
    answer: "Regulation of Investigatory Powers Act"
  },
  {
    question: "What does CPD stand for?",
    answer: "Continuing Professional Development"
  },
  {
    question: "What does CITP stand for?",
    answer: "Chartered Information Technology Practitioner"
  },
  {
    question: "What does IEng stand for?",
    answer: "Incorporated Engineer"
  },
  {
    question: "What does CEng stand for?",
    answer: "Chartered Engineer"
  },
  {
    question: "What does EngTech stand for?",
    answer: "Engineering Technician"
  },
  {
    question: "What does EUR ING stand for?",
    answer: "European Engineer"
  },
  {
    question: "What does CSci stand for?",
    answer: "Chartered Scientist"
  },
  {
    question: "What does RSci stand for?",
    answer: "Registered Scientist"
  },
  {
    question: "What does CSciTeach stand for?",
    answer: "Chartered Science Teacher"
  },
  {
    question: "What does RSciTeach stand for?",
    answer: "Registered Science Teacher"
  },
  {
    question: "What does RIDDOR stand for?",
    answer: "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations"
  },
  {
    question: "What does IPO stand for?",
    answer: "Intellectual Property Office"
  },
  {
    question: "What does WIPO stand for?",
    answer: "World Intellectual Property Organisation"
  },
  {
    question: "What does DCF stand for?",
    answer: "Discounted Cash Flow"
  },
  {
    question: "What does HSE stand for?",
    answer: "Health and Safety Executive"
  },

  // Definition questions (non‑abbreviation) (82)
  {
    question: "What is the term for a vocation requiring prolonged training and formal qualification?",
    answer: "Profession"
  },
  {
    question: "What is the one‑word term for the UK's lower legislative chamber?",
    answer: "Commons"
  },
  {
    question: "What is the one‑word term for the UK's upper legislative chamber?",
    answer: "Lords"
  },
  {
    question: "What is the term for a proposal for new legislation in Parliament?",
    answer: "Bill"
  },
  {
    question: "What is the one‑word term for the final step in a bill becoming law?",
    answer: "Assent"
  },
  {
    question: "What is the one‑word term for a detailed examination of a bill in Parliament?",
    answer: "Committee"
  },
  {
    question: "What is the one‑word term for the UK's constitution, given its unwritten nature?",
    answer: "Uncodified"
  },
  {
    question: "What is the one‑word term for an EU legal instrument that is self‑executing?",
    answer: "Regulation"
  },
  {
    question: "What is the one‑word term for an EU legislative act that sets objectives for member states?",
    answer: "Directive"
  },
  {
    question: "What is the one‑word term for a court process to challenge a decision?",
    answer: "Appeal"
  },
  {
    question: "What is the one‑word term for the minor court that handles less serious cases in the UK?",
    answer: "Magistrates"
  },
  {
    question: "What is the one‑word term for unauthorized access to computer systems?",
    answer: "Hacking"
  },
  {
    question: "What is the one‑word term for the act of altering computer data without permission?",
    answer: "Tampering"
  },
  {
    question: "What is the one‑word term for a legal protection granted to creative works?",
    answer: "Copyright"
  },
  {
    question: "What is the one‑word term for a legally binding promise between two parties?",
    answer: "Contract"
  },
  {
    question: "What is the one‑word term for a temporary legal right granted to an inventor?",
    answer: "Patent"
  },
  {
    question: "What is the one‑word term for a distinctive sign used to identify a brand?",
    answer: "Trademark"
  },
  {
    question: "What is the one‑word term for the process of recording all transactions twice in accounting?",
    answer: "Double-entry"
  },
  {
    question: "What is the one‑word term for money received by a company?",
    answer: "Revenue"
  },
  {
    question: "What is the one‑word term for money spent by a company?",
    answer: "Expense"
  },
  {
    question: "What is the one‑word term for a financial forecast in a business?",
    answer: "Budget"
  },
  {
    question: "What is the one‑word term for the detailed financial record of a company?",
    answer: "Accounts"
  },
  {
    question: "What is the one‑word term for a document outlining a company's operating rules?",
    answer: "Articles"
  },
  {
    question: "What is the one‑word term for the ratio of loan capital to equity?",
    answer: "Gearing"
  },
  {
    question: "What is the one‑word term for a formal complaint about professional behavior?",
    answer: "Grievance"
  },
  {
    question: "What is the one‑word term for an official warning or penalty for professional misconduct?",
    answer: "Sanction"
  },
  {
    question: "What is the one‑word term for the practice of reporting wrongdoing within an organization?",
    answer: "Whistleblowing"
  },
  {
    question: "What is the one‑word term for the act of securely transmitting data over a network?",
    answer: "Encryption"
  },
  {
    question: "What is the one‑word term for a legal permission to use software?",
    answer: "Licence"
  },
  {
    question: "What is the one‑word term for a fundamental system of laws guiding a nation?",
    answer: "Constitution"
  },
  {
    question: "What is the one‑word term for a law passed by Parliament?",
    answer: "Statute"
  },
  {
    question: "What is the one‑word term for the process of making government information available to the public?",
    answer: "Disclosure"
  },
  {
    question: "What is the one‑word term for a temporary team created to achieve a specific goal?",
    answer: "Project"
  },
  {
    question: "What is the one‑word term for the hierarchical arrangement within an organization?",
    answer: "Structure"
  },
  {
    question: "What is the one‑word term for a grouping of similar tasks within a company?",
    answer: "Department"
  },
  {
    question: "What is the one‑word term for a legally recognized business entity?",
    answer: "Company"
  },
  {
    question: "What is the one‑word term for a document that shows a company's financial position at a given time?",
    answer: "BalanceSheet"
  },
  {
    question: "What is the one‑word term for the process of determining the present value of future cash flows?",
    answer: "Discounting"
  },
  {
    question: "What is the one‑word term for a business formed by two or more individuals?",
    answer: "Partnership"
  },
  {
    question: "What is the one‑word term for the illegal activity of computer‑related offenses?",
    answer: "Cybercrime"
  },
  {
    question: "What is the one‑word term for the process of acquiring new skills in a professional context?",
    answer: "Training"
  },
  {
    question: "What is the one‑word term for the set of standards guiding professional behavior?",
    answer: "Ethics"
  },
  {
    question: "What is the one‑word term for the report that led to the 1974 health and safety legislation in the UK?",
    answer: "Robens"
  },
  {
    question: "What is the one‑word term for a formal change made to a bill or law?",
    answer: "Amendment"
  },
  {
    question: "What is the one‑word term for the highest court in the UK?",
    answer: "Supreme"
  },
  {
    question: "What is the one‑word term for the fundamental principle of fairness in law?",
    answer: "Justice"
  },
  {
    question: "What is the one‑word term for the official list of information a public authority must release?",
    answer: "Publication"
  },
  {
    question: "What is the one‑word term for the financial gain after expenses?",
    answer: "Profit"
  },
  {
    question: "What is the one‑word term for the value remaining after subtracting liabilities from assets?",
    answer: "NetWorth"
  },
  {
    question: "What is the one‑word term for predicting future financial trends?",
    answer: "Forecasting"
  },
  {
    question: "What is the one‑word term for the systematic recording of financial transactions?",
    answer: "Bookkeeping"
  },
  {
    question: "What is the one‑word term for the field of law addressing IT and digital issues?",
    answer: "Cyberlaw"
  },
  {
    question: "What is the one‑word term for the legal authorization required for intercepting data?",
    answer: "Warrant"
  },
  {
    question: "What is the one‑word term for the process of legally forming a business entity?",
    answer: "Incorporation"
  },
  {
    question: "What is the one‑word term for the document signed by initial shareholders when forming a company?",
    answer: "Memorandum"
  },
  {
    question: "What is the one‑word term for the act of converting a draft law into an enforceable one?",
    answer: "Enactment"
  },
  {
    question: "What is the one‑word term for the legal system based on precedents in the UK?",
    answer: "Commonlaw"
  },
  {
    question: "What is the one‑word term for the movement of money within a business?",
    answer: "Cashflow"
  },
  {
    question: "What is the one‑word term for the overall system of rules and practices in an organization?",
    answer: "Governance"
  },
  {
    question: "What is the one‑word term for an independent review of financial records?",
    answer: "Audit"
  },
  {
    question: "What is the one‑word term for a financial promise a company must fulfill?",
    answer: "Obligation"
  },
  {
    question: "What is the one‑word term for potential financial uncertainty in business?",
    answer: "Risk"
  },
  {
    question: "What is the one‑word term for a shortfall where liabilities exceed assets?",
    answer: "Deficit"
  },
  {
    question: "What is the one‑word term for a periodic evaluation of a company's performance?",
    answer: "Review"
  },
  {
    question: "What is the one‑word term for the process of legally dissolving a company?",
    answer: "Liquidation"
  },
  {
    question: "What is the one‑word term for a monetary penalty imposed for legal violations?",
    answer: "Fine"
  },
  {
    question: "What is the one‑word term for the right to obtain one's personal data under GDPR?",
    answer: "Access"
  },
  {
    question: "What is the one‑word term for the legal correction of inaccurate personal data?",
    answer: "Rectification"
  },
  {
    question: "What is the one‑word term for the right to transfer personal data to another provider?",
    answer: "Portability"
  },
  {
    question: "What is the one‑word term for the official set of rules governing professional conduct?",
    answer: "Code"
  },
  {
    question: "What is the one‑word term for the act of ending an employment contract legally?",
    answer: "Termination"
  },
  {
    question: "What is the one‑word term for regular payments made to employees?",
    answer: "Salary"
  },
  {
    question: "What is the one‑word term for the process of assigning tasks to employees?",
    answer: "Delegation"
  },
  {
    question: "What is the one‑word term for the process of attracting and selecting new staff?",
    answer: "Recruitment"
  },
  {
    question: "What is the one‑word term for extra pay awarded based on performance?",
    answer: "Bonus"
  },
  {
    question: "What is the one‑word term for a reduction in workforce due to restructuring?",
    answer: "Redundancy"
  },
  {
    question: "What is the one‑word term for the process of legally ending an employee's service due to performance issues?",
    answer: "Dismissal"
  },
  {
    question: "What is the one‑word term for the systematic oversight of company activities?",
    answer: "Governance"
  },
  {
    question: "What is the one‑word term for the process of planning and allocating a company's resources?",
    answer: "Budgeting"
  }
];
*/

const questions = [
  // Section 1: Law and Government
  {
    question: "Area covered by a single legal system and a set of laws",
    answer: "jurisdiction"
  },
  {
    question: "England, Scotland, Wales, Northern Ireland (excluding Channel Islands, Isle of Man)",
    answer: "United Kingdom"
  },
  {
    question: "Organisation that has been incorporated to give it the same legal status as a natural person",
    answer: "legal person"
  },
  {
    question: "Court action under the criminal law",
    answer: "criminal litigation"
  },
  {
    question: "Organisation that prosecutes a person for a criminal offence",
    answer: "crown prosecution service"
  },
  {
    question: "Person being prosecuted in a criminal case",
    answer: "defendant"
  },
  {
    question: "Test used to prosecute a person on criminal law",
    answer: "beyond reasonable doubt"
  },
  {
    question: "A body of people chosen to listen to all facts in a court trial and decide guilt or innocence",
    answer: "jury"
  },
  {
    question: "Individual who oversees a court case and decides the penalties",
    answer: "judge"
  },
  {
    question: "Which of the following is NOT a reason for appeal in criminal law?",
    options: [
      "Quash conviction",
      "Order new trial",
      "Increase penalty",
      "Dismiss case"
    ],
    answer: 3
  },
  {
    question: "Court action under the civil law",
    answer: "civil litigation"
  },
  {
    question: "Party that initiates a civil litigation",
    answer: "claimant"
  },
  {
    question: "Test used to prosecute a person on civil law",
    answer: "balance of probabilities"
  },
  {
    question: "Which of the following can result in a civil law case?",
    options: [
      "Contracts",
      "Libel",
      "Family Law",
      "Criminal activity"
    ],
    answer: 0
  },
  {
    question: "Which court in the hierarchy deals specifically with criminal cases?",
    options: [
      "Magistrates",
      "County Court",
      "Crown Court",
      "European Court of Justice"
    ],
    answer: 2
  },
  {
    question: "Which court typically handles civil cases without a jury?",
    options: [
      "County Court",
      "Supreme Court",
      "Crown Court",
      "Magistrates' Court"
    ],
    answer: 0
  },
  {
    question: "Decision of judges in the past over the centuries",
    answer: "common law"
  },
  {
    question: "Similar cases decided in the past",
    answer: "precedents"
  },
  {
    question: "Law signed by Act of Parliament",
    answer: "statute law"
  },
  {
    question: "Elected, lower house in the Chambers of Parliament",
    answer: "House of Commons"
  },
  {
    question: "Appointed, upper house in the Chambers of Parliament",
    answer: "House of Lords"
  },
  {
    question: "Bill presented to one house as a formality with no debate",
    answer: "first reading"
  },
  {
    question: "Stage in Parliament involving general debate and a vote",
    answer: "second reading"
  },
  {
    question: "Stage in Parliament where a bill undergoes detailed scrutiny and amendments",
    answer: "committee stage"
  },
  {
    question: "Stage in Parliament for further amendments after the committee stage",
    answer: "report stage"
  },
  {
    question: "Final stage in Parliament before a bill becomes law",
    answer: "third reading"
  },
  {
    question: "Formal approval by the monarch for a bill to become law",
    answer: "royal assent"
  },
  {
    question: "Which house of Parliament can delay but not block bills, as per the 1911 Parliament Act?",
    options: [
      "House of Commons",
      "House of Lords",
      "European Court of Justice",
      "None of the above"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a component of the European Union?",
    options: [
      "European Parliament",
      "Council of Ministers",
      "European Commission",
      "None of the above"
    ],
    answer: 0
  },
  {
    question: "Self-executing legalisation that takes immediate effect across the whole EU",
    answer: "EU Regulation"
  },
  {
    question: "Legislative act that sets out a goal for all EU countries to achieve and must be enacted by individual countries",
    answer: "EU Directive"
  },
  {
    question: "Which body is part of the USA Legislature?",
    options: [
      "Senate",
      "House of Representatives",
      "Both Senate and House of Representatives",
      "Supreme Court"
    ],
    answer: 2
  },
  {
    question: "Which function is NOT part of the US government structure?",
    options: [
      "Legislature",
      "Judiciary",
      "Executive",
      "Electoral College"
    ],
    answer: 3
  },
  // Section 2: The Computing Profession
  {
    question: "Body of people, self governing, and controlled entry to a profession",
    answer: "profession"
  },
  {
    question: "Which of the following is a professional computing body in the UK founded in 1957?",
    options: [
      "British Computer Society",
      "Institution of Engineering and Technology",
      "Institute of Electrical and Electronics Engineers",
      "Association for Computing Machinery"
    ],
    answer: 0
  },
  {
    question: "UK professional computing body known as BCS",
    answer: "BCS"
  },
  {
    question: "Professional computing body in the USA founded in 1946",
    answer: "IEEE"
  },
  {
    question: "Professional computing body in the USA founded in 1947",
    answer: "ACM"
  },
  {
    question: "Which professional body is part of the UK Computing Profession and offers the CITP qualification?",
    options: [
      "BCS",
      "ACM",
      "IEEE",
      "IET"
    ],
    answer: 0
  },
  {
    question: "Formal document signed by the monarch that establishes an organisation and its purpose",
    answer: "royal charter"
  },
  {
    question: "Which of the following is NOT a part of the BCS Code of Conduct?",
    options: [
      "Public Interest",
      "Professional Competence and Integrity",
      "Duty to Relevant Authority",
      "Financial Profit Maximisation"
    ],
    answer: 3
  },
  {
    question: "Method of keeping professionals' knowledge up to date after qualifying",
    answer: "CPD"
  },
  {
    question: "Quarterly publication by BCS for members on new developments",
    answer: "ITNOW"
  },
  {
    question: "Which of the following is a BCS membership category?",
    options: [
      "Standard Grade",
      "Professional Grade",
      "CITP Status",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Which method of controlling entry to a profession involves registration with a professional board, e.g., under the Architects Act 1997?",
    options: [
      "Reservation of Title",
      "Reservation of Function",
      "Both",
      "None"
    ],
    answer: 0
  },
  // Section 3: What is an Organisation?
  {
    question: "Which of the following is NOT one of the six varieties of legal entities?",
    options: [
      "Partnerships",
      "Individuals",
      "Sole Trader",
      "Charities"
    ],
    answer: 2
  },
  {
    question: "Individual who runs their own business",
    answer: "sole trader"
  },
  {
    question: "The UK's tax authority responsible for revenue and customs",
    answer: "HMRC"
  },
  {
    question: "Tax added to the value of goods and services",
    answer: "VAT"
  },
  {
    question: "Relationship between persons carrying on a business with a view of profit",
    answer: "partnership"
  },
  {
    question: "Most common commercial organisation type",
    answer: "company limited by shares"
  },
  {
    question: "Which of the following is NOT a principle of a company limited by shares?",
    options: [
      "Corporate legal identity",
      "Ownership divided into shares",
      "Unlimited liability for owners",
      "Limited liability for owners"
    ],
    answer: 2
  },
  {
    question: "Company that can offer shares for sale to the public, indicated by 'plc'",
    answer: "public limited company"
  },
  {
    question: "Company that cannot offer shares for sale to the public, indicated by 'ltd'",
    answer: "private limited company"
  },
  {
    question: "Government agency handling the formation and dissolution of UK companies",
    answer: "Companies House"
  },
  {
    question: "Which of the following is a method of creating a limited company?",
    options: [
      "Act of Parliament",
      "Royal Charter",
      "Companies Act 2006",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Legal statement signed by all initial shareholders agreeing to form the company",
    answer: "memorandum of association"
  },
  {
    question: "Written rules about running the company agreed by shareholders and directors",
    answer: "articles of association"
  },
  {
    question: "Specimen set of articles of association introduced from the Companies Act 1948",
    answer: "Table A"
  },
  {
    question: "Part of authorised capital issued to shareholders",
    answer: "Issued Share Capital"
  },
  {
    question: "Private agreement by shareholders about how shares are transferred",
    answer: "shareholders' agreement"
  },
  {
    question: "Which of the following refers to moving business activities to another country?",
    options: [
      "Outsourcing",
      "Off-shoring",
      "Merger",
      "Takeover"
    ],
    answer: 1
  },
  {
    question: "What is the term for contracting out business processes to another organisation?",
    options: [
      "Outsourcing",
      "Off-shoring",
      "Merger",
      "Partnership"
    ],
    answer: 0
  },
  {
    question: "One company gains control of another by acquiring a majority of its shares",
    answer: "takeover"
  },
  {
    question: "Takeover where both companies come on equal terms and then cease to exist",
    answer: "merger"
  },
  // Section 4: Structure and Management of Organisations
  {
    question: "Theory founded by Max Weber, Mary Parker Follett, Henri Fayol, and Lyndall Urwick",
    answer: "organisational theory"
  },
  {
    question: "Primary purpose of an organisation",
    answer: "core business"
  },
  {
    question: "Which of the following is a structuring principle based on function?",
    options: [
      "Simplicity",
      "Local knowledge",
      "Product differentiation",
      "Technology differentiation"
    ],
    answer: 0
  },
  {
    question: "Which structuring principle is important for multinationals due to local laws and presence?",
    options: [
      "Function",
      "Location",
      "By product",
      "By market sector"
    ],
    answer: 1
  },
  {
    question: "Which structuring principle focuses on clear differentiation of consumables?",
    options: [
      "By product",
      "By technology",
      "By market sector",
      "By location"
    ],
    answer: 0
  },
  {
    question: "Which structuring principle is crucial for service products requiring sector differentiation?",
    options: [
      "By market sector",
      "By product",
      "By location",
      "By technology"
    ],
    answer: 0
  },
  {
    question: "Which structuring principle is associated with software companies and technology differentiation?",
    options: [
      "By technology",
      "By product",
      "By market sector",
      "By function"
    ],
    answer: 0
  },
  // Section 5: Financing a Start-up Company
  {
    question: "Which of the following is a common expense for a start-up company?",
    options: [
      "Salaries",
      "Rent",
      "Equipment",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Most flexible form of loan offered by banks, where interest is payable only on the amount owed",
    answer: "overdraft"
  },
  {
    question: "Loan made for a fixed period with a fixed rate of interest",
    answer: "long term loan"
  },
  {
    question: "Loans to the company through the stock exchange",
    answer: "corporate bonds"
  },
  {
    question: "Which of the following is a source of finance for start-up companies?",
    options: [
      "Equity capital",
      "Corporate bonds",
      "Government grants",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Wealthy individuals who provide equity capital for start-ups",
    answer: "business angels"
  },
  {
    question: "Companies investing in small companies with high growth potential",
    answer: "venture capitalists"
  },
  {
    question: "Practice of funding a project by raising money from a large number of people",
    answer: "crowdfunding"
  },
  {
    question: "Ratio between loan capital and equity capital",
    answer: "gearing"
  },
  {
    question: "Money paid to a company in exchange for a share in its ownership",
    answer: "equity capital"
  },
  // Sections 6, 7, 8: Financial Accounting, Management Accounting, Investment Appraisal
  {
    question: "Statement showing what a company owns and owes and its net worth",
    answer: "balance sheet"
  },
  {
    question: "What a company owns, classified as current or fixed",
    answer: "assets"
  },
  {
    question: "What a company owes, including creditors",
    answer: "liabilities"
  },
  {
    question: "Difference between assets and liabilities",
    answer: "net worth"
  },
  {
    question: "Statement measuring net worth (income minus expenditure) of an account",
    answer: "profit and loss account"
  },
  {
    question: "Financial statement that shows the movement of cash",
    answer: "cash flow statement"
  },
  {
    question: "Non-physical assets, such as intellectual property",
    answer: "intangible assets"
  },
  {
    question: "Bookkeeping system where every entry appears twice",
    answer: "double entry bookkeeping"
  },
  {
    question: "Which of the following is true about accounts and budgets?",
    options: [
      "Accounts record past events; budgets forecast future events",
      "Accounts forecast future events; budgets record past events",
      "Both record past events",
      "Neither records any events"
    ],
    answer: 0
  },
  {
    question: "Financial plan that breaks down expected income and expenses over specific time periods",
    answer: "profiled budget"
  },
  {
    question: "Total expense incurred by a company for employing workers",
    answer: "payroll cost"
  },
  {
    question: "Which of the following are considered direct costs?",
    options: [
      "Labour and raw materials",
      "Rental and advertising",
      "Telecoms and insurance",
      "Staff training and postage"
    ],
    answer: 0
  },
  {
    question: "Which of the following are examples of indirect costs?",
    options: [
      "Direct labour",
      "Raw materials",
      "Overhead expenses",
      "None of the above"
    ],
    answer: 2
  },
  {
    question: "Amount of money invested in day-to-day operations, calculated as Current Assets minus Current Liabilities",
    answer: "working capital"
  },
  {
    question: "Combined expense including salaries, employer contributions, and benefits",
    answer: "labour costs"
  },
  {
    question: "Investment appraisal method using a discount factor to determine present value",
    answer: "DCF"
  },
  {
    question: "Metric that indicates if a project is financially viable",
    answer: "rate of return"
  },
  {
    question: "Which of the following could be considered an investment forecasting problem?",
    options: [
      "Market conditions",
      "Competitors",
      "Interest rates",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Annual financial statement filed with Companies House and HMRC, often audited for larger companies",
    answer: "annual accounts"
  },
  {
    question: "List of directors, secretaries, and shareholders held at the registered office",
    answer: "company register"
  },
  {
    question: "Process of formally checking and verifying documents by registered auditors",
    answer: "audit"
  },
  // Section 9: Human Resources Issues
  {
    question: "Department dealing with appraisals, recruitment, redundancies, dismissal, grievances, remuneration, and staff development",
    answer: "human resources"
  },
  {
    question: "Which of the following Acts is associated with human rights in the workplace?",
    options: [
      "Human Rights Act 1998",
      "Equality Act 2010",
      "Public Interest Disclosure Act 1998",
      "All of the above"
    ],
    answer: 0
  },
  {
    question: "Process of soliciting applications for a job",
    answer: "recruitment"
  },
  {
    question: "Process of selecting applicants to whom job offers will be made",
    answer: "selection"
  },
  {
    question: "Scheme used to collect income tax and national insurance contributions from employees",
    answer: "pay as you earn"
  },
  {
    question: "Arrangement where an individual provides services but is not considered an employee",
    answer: "off-payroll working"
  },
  {
    question: "Tax legislation concerning off-payroll working",
    answer: "IR35"
  },
  {
    question: "Elimination of positions due to business factors",
    answer: "redundancy"
  },
  {
    question: "Termination of an employee's contract due to misconduct or performance issues",
    answer: "dismissal"
  },
  {
    question: "Act protecting employees who raise concerns about wrongdoing",
    answer: "Public Interest Disclosure Act 1998"
  },
  // Section 10: Equality, Diversity and Inclusion
  {
    question: "Act that prohibits discrimination based on protected characteristics, enacted in 2010",
    answer: "Equality Act 2010"
  },
  {
    question: "Which of the following is NOT a protected characteristic under the Equality Act 2010?",
    options: [
      "Age",
      "Disability",
      "Nationality",
      "Political opinion"
    ],
    answer: 3
  },
  {
    question: "When one person is treated less favourably than another due to a protected characteristic",
    answer: "direct discrimination"
  },
  {
    question: "When general conditions have a disproportionate effect on one group",
    answer: "indirect discrimination"
  },
  // Section 11: Intellectual Property Rights
  {
    question: "Right concerned with copying a written document, picture, music, recording, or computer program",
    answer: "copyright"
  },
  {
    question: "Licence to exploit an invention for a certain period",
    answer: "patent"
  },
  {
    question: "Information received in circumstances that require it not to be passed on",
    answer: "confidential information"
  },
  {
    question: "Name used to identify a product of a particular manufacturer",
    answer: "trademark"
  },
  {
    question: "Legislation covering copyrights, designs, and patents enacted in 1988",
    answer: "Copyright, Designs and Patents Act 1988"
  },
  {
    question: "Regulations concerning quotation and parody of copyrighted works enacted in 2014",
    answer: "Copyright and Rights in Performances Regulations 2014"
  },
  {
    question: "Legal protection that applies to software, but not its functionality",
    answer: "software copyright"
  },
  {
    question: "Which of the following agreements criminalises some classes of IP infringement and makes ISPs responsible for their users' online use?",
    options: [
      "Berne Convention",
      "ACTA",
      "EU Copyright Directive",
      "Trade Marks Act 1994"
    ],
    answer: 1
  },
  {
    question: "Directive on copyright in the Digital Single Market passed in 2018",
    answer: "EU Copyright Directive"
  },
  {
    question: "Which of the following is a right of a copyright owner?",
    options: [
      "Right to make copies",
      "Right to issue copies to the public",
      "Right to adapt the work",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Copyright duration for works, lasting 70 years after the author's death",
    answer: "70 years"
  },
  {
    question: "Legal period for database copyright protection",
    answer: "15 years"
  },
  {
    question: "Breach of the exclusive rights of the copyright owner",
    answer: "primary infringement"
  },
  {
    question: "When primary infringement occurs in a commercial context",
    answer: "secondary infringement"
  },
  {
    question: "Convention that sets copyright duration at life plus 50 years",
    answer: "Berne Convention"
  },
  {
    question: "Which of the following is NOT a requirement for something to be patented under the Patents Act 1977?",
    options: [
      "It must be new",
      "It must involve an inventive step",
      "It must be capable of industrial application",
      "It must be already publicly disclosed"
    ],
    answer: 3
  },
  {
    question: "Office where a patent application is filed",
    answer: "intellectual property office"
  },
  {
    question: "International organization that governs intellectual property",
    answer: "WIPO"
  },
  {
    question: "Which statement best describes USA software patenting?",
    options: [
      "It is part of a product that is eligible for a patent",
      "It controls a process with physical effect",
      "Both",
      "Neither"
    ],
    answer: 2
  },
  {
    question: "Act that protects employees who raise concerns about wrongdoing (whistle-blowing)",
    answer: "Public Interest Disclosure Act 1998"
  },
  {
    question: "Act enacted in 1994 that governs trademarks",
    answer: "Trade Marks Act 1994"
  },
  {
    question: "Government body that registers trademarks, known by the acronym IPO",
    answer: "IPO"
  },
  {
    question: "Organisation that manages domain names, known as the Internet Corporation for Assigned Names and Numbers",
    answer: "ICANN"
  },
  // Section 12: Contracts and Licences
  {
    question: "An agreement between two or more persons that can be enforced in a court of law",
    answer: "contract"
  },
  {
    question: "Which of the following is NOT a necessary element of a contract?",
    options: [
      "Intention to create legal relationship",
      "Competence of parties",
      "Consideration",
      "Mutual admiration"
    ],
    answer: 3
  },
  {
    question: "Legal permission to use something, which is not a contract",
    answer: "licence"
  },
  {
    question: "Licence that allows licensees to run unlimited copies of software on specified premises",
    answer: "site licence"
  },
  {
    question: "Agreement covering software purchases and rights to use it",
    answer: "licence agreement"
  },
  {
    question: "Which of the following is an arrangement where a supplier provides services of staff at an agreed rate?",
    options: [
      "Outsourcing",
      "Contract hire",
      "Consultancy",
      "Merger"
    ],
    answer: 1
  },
  {
    question: "Up-market version of contract hire",
    answer: "consultancy"
  },
  {
    question: "Which of the following is NOT one of the four aspects of a consultancy contract?",
    options: [
      "Confidentiality",
      "Terms of reference",
      "Liability",
      "Profit sharing"
    ],
    answer: 3
  },
  {
    question: "Act that makes it not possible to limit damages payable for defective software",
    answer: "unfair contract terms act 1977"
  },
  // Section 13: Data Protection, Privacy and Freedom of Information
  {
    question: "UK legislation associated with the Council of Europe Convention on Data Protection enacted in 1984",
    answer: "Data Protection Act 1984"
  },
  {
    question: "UK legislation associated with the EU Data Protection Directive enacted in 1998",
    answer: "Data Protection Act 1998"
  },
  {
    question: "UK legislation associated with the EU GDPR enacted in 2018",
    answer: "Data Protection Act 2018"
  },
  {
    question: "EU regulation on data protection, also known as the General Data Protection Regulation",
    answer: "GDPR"
  },
  {
    question: "Time frame within which data breaches must be reported under GDPR",
    answer: "72 hours"
  },
  {
    question: "Which of the following is one of the seven data protection principles?",
    options: [
      "Lawfulness",
      "Efficiency",
      "Profitability",
      "Anonymity"
    ],
    answer: 0
  },
  {
    question: "Which of the following is one of the seven data protection principles?",
    options: [
      "Relevance",
      "Redundancy",
      "Impartiality",
      "Volition"
    ],
    answer: 0
  },
  {
    question: "Which of the following is one of the seven data protection principles?",
    options: [
      "Accuracy",
      "Anonymity",
      "Availability",
      "Authenticity"
    ],
    answer: 0
  },
  {
    question: "Term for the individual about whom personal data is stored and processed",
    answer: "data subject"
  },
  {
    question: "Data processing involves the collection, recording, and storage of data. This term is:",
    answer: "data processing"
  },
  {
    question: "Personal data stored and processed about an individual",
    answer: "personal data"
  },
  {
    question: "Automated processing used to determine personal criteria",
    answer: "profiling"
  },
  {
    question: "Person who determines why and how personal data is processed",
    answer: "data controller"
  },
  {
    question: "Person who processes personal data on behalf of the data controller",
    answer: "data processor"
  },
  {
    question: "Data that reveals a person's protected characteristics",
    answer: "sensitive personal data"
  },
  {
    question: "UK's supervisory authority on data protection",
    answer: "ICO"
  },
  {
    question: "Officer required in public authorities and entities that monitor data subjects on a large scale",
    answer: "Data Protection Officer"
  },
  {
    question: "UK Act covering freedom of information for public bodies, enacted in 2000",
    answer: "Freedom of Information Act 2000"
  },
  {
    question: "What is the maximum time limit for a Freedom of Information request?",
    options: [
      "20 working days",
      "30 days",
      "60 days",
      "90 days"
    ],
    answer: 0
  },
  {
    question: "Which of the following is an absolute exemption under the Freedom of Information Act 2000?",
    options: [
      "Security services",
      "Health and safety",
      "Educational records",
      "Employment contracts"
    ],
    answer: 0
  },
  {
    question: "List of information expected to be published by a public authority",
    answer: "publication scheme"
  },
  {
    question: "The power to enforce disclosure when a public authority's complaints procedure has been followed",
    answer: "enforce disclosure"
  },
  {
    question: "Data protection takes precedence over which other act?",
    answer: "Freedom of Information"
  },
  // Section 15: Computer Misuse
  {
    question: "Legislation applicable to computer misuse enacted in 1990",
    answer: "Computer Misuse Act 1990"
  },
  {
    question: "Which of the following is NOT one of the three offences under the Computer Misuse Act 1990?",
    options: [
      "Unauthorised access to computer material",
      "Unauthorised access with intent to commit a crime",
      "Unauthorised modification of computer material",
      "Unauthorised software development"
    ],
    answer: 3
  },
  {
    question: "Causing a computer to perform any function with intent to secure access without authorization",
    answer: "unauthorised access"
  },
  {
    question: "Maximum punishment for unauthorised access under the Computer Misuse Act",
    answer: "5 years imprisonment"
  },
  {
    question: "Attempting to impair the operation of a computer or hinder access to data",
    answer: "unauthorised modification"
  },
  {
    question: "Maximum punishment for unauthorised modification under the Computer Misuse Act",
    answer: "5 years imprisonment"
  },
  {
    question: "Act that amended the Computer Misuse Act in 2006, increasing penalties and making unauthorised access extraditable",
    answer: "Police and Justice Act 2006"
  },
  {
    question: "Act that applies to public law enforcement bodies regarding computer misuse, enacted in 2000",
    answer: "Regulation of Investigatory Powers Act 2000"
  },
  {
    question: "Act enacted in 2016 allowing equipment interference by security services and requiring ISPs to hold 12 months of internet history",
    answer: "RIPA 2016"
  },
  {
    question: "Which of the following is a legal purpose for monitoring computer systems?",
    options: [
      "Prevention of crime",
      "Effective system use",
      "Compliance with regulations",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Interception of communications is illegal without what?",
    answer: "warrant"
  },
  {
    question: "Obtained by a public body or by decision of the Secretary of State, required for interception",
    answer: "warrant"
  },
  {
    question: "Items that must be handed over if data cannot be provided unencrypted",
    answer: "encryption keys"
  },
  // Additional Questions to reach 200
  {
    question: "Which of the following is a type of legal person (an incorporated organisation)?",
    options: [
      "Sole trader",
      "Partnership",
      "Company",
      "Charity"
    ],
    answer: 2
  },
  {
    question: "Which stage in the parliamentary process involves a formal presentation of the bill without debate?",
    options: [
      "First Reading",
      "Second Reading",
      "Committee Stage",
      "Report Stage"
    ],
    answer: 0
  },
  {
    question: "Which professional qualification is offered by the BCS for IT practitioners?",
    options: [
      "CITP",
      "IEng",
      "CEng",
      "EngTech"
    ],
    answer: 0
  },
  {
    question: "Which document outlines the rules for running a company and may include board meetings and director's powers?",
    options: [
      "Memorandum of Association",
      "Articles of Association",
      "Shareholders' Agreement",
      "Table A"
    ],
    answer: 1
  },
  {
    question: "Which is a component of the profit and loss account?",
    options: [
      "Assets",
      "Income",
      "Working Capital",
      "Direct Costs"
    ],
    answer: 1
  },
  {
    question: "What is the method that uses a discount factor to determine the present value of future cash flows?",
    answer: "DCF"
  },
  {
    question: "Which of the following is NOT a member of the EU's legislative bodies?",
    options: [
      "European Parliament",
      "Council of Ministers",
      "European Commission",
      "House of Lords"
    ],
    answer: 3
  },
  {
    question: "Legislation that makes it illegal to intercept communications without authorization is known as:",
    answer: "RIPA"
  },
  {
    question: "Which act primarily governs computer misuse in the UK?",
    options: [
      "Computer Misuse Act 1990",
      "Police and Justice Act 2006",
      "Regulation of Investigatory Powers Act 2000",
      "All of the above"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT an aspect of the BCS Code of Conduct?",
    options: [
      "Public Interest",
      "Professional Competence",
      "Duty to the Profession",
      "Direct Profit"
    ],
    answer: 3
  },
  {
    question: "Legal document recording detailed scrutiny and amendments of a bill in Parliament is called the",
    answer: "committee stage"
  },
  {
    question: "What is the final step in making a law in Parliament?",
    answer: "royal assent"
  },
  {
    question: "Which of the following is required for a valid contract?",
    options: [
      "Intention to create legal relationship",
      "Consideration",
      "Competence of parties",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "What financial metric is calculated as current assets minus current liabilities?",
    answer: "working capital"
  },
  {
    question: "Which of the following best describes off-payroll working?",
    options: [
      "Employee",
      "Self-employed contractor",
      "Full-time staff",
      "Temporary worker"
    ],
    answer: 1
  }
];

console.log(questions.length)

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    document.title = `CS133 Revision Quiz - ${questions.length} Questions`
    loadNewQuestion();
  }, []);

  function loadNewQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setSelectedAnswer(null);
    setUserInput("");
    setFeedback("");
    setWrongAttempts(0);
    setShowCorrectAnswer(false);
  }

  function handleMultipleChoiceAnswer(index) {
    if (index === currentQuestion.answer) {
      setFeedback("✅ Correct!");
      setShowCorrectAnswer(false);
    } else {
      const newWrongAttempts = wrongAttempts + 1;
      setFeedback(`❌ Incorrect! (${newWrongAttempts}/3)`);
      setWrongAttempts(newWrongAttempts);
      if (newWrongAttempts >= 3) {
        setShowCorrectAnswer(true);
      }
    }
    setSelectedAnswer(index);
  }

  function handleTextAnswer() {
    if (userInput.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback("✅ Correct!");
      setShowCorrectAnswer(false);
    } else {
      const newWrongAttempts = wrongAttempts + 1;
      setFeedback(`❌ Incorrect! (${newWrongAttempts}/3)`);
      setWrongAttempts(newWrongAttempts);
      if (newWrongAttempts >= 3) {
        setShowCorrectAnswer(true);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="max-w-md w-full text-center p-4">
        <CardContent>
          {currentQuestion && (
            <>
              <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>

              {currentQuestion.options ? (
                // Multiple-choice questions
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
                      onClick={() => handleMultipleChoiceAnswer(index)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              ) : (
                // Open-ended questions
                <div className="mt-4">
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your answer..."
                  />
                  <Button className="mt-2 bg-blue-500 hover:bg-blue-600" onClick={handleTextAnswer}>
                    Check Answer
                  </Button>
                </div>
              )}

              <p className="mt-4 font-bold">{feedback}</p>

              {showCorrectAnswer && (
                <p className="mt-2 text-red-500">✅ Correct Answer: {currentQuestion.answer}</p>
              )}

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
