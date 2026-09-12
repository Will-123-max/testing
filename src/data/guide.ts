export type Campus = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  hosts: string[];
  landmark: string;
};

export const campuses: Campus[] = [
  {
    id: "permanent",
    name: "Permanent Site",
    tag: "Main campus",
    blurb:
      "The big one. Senate Building, the VC's office, the main library and most of the day-to-day lecture theatres sit here on the Abakaliki\u2013Enugu expressway.",
    hosts: ["Science", "Management Sciences", "Social Sciences & Humanities", "Law", "Admin & Bursary"],
    landmark: "Abakaliki\u2013Enugu Expressway, Abakaliki",
  },
  {
    id: "presco",
    name: "Presco Campus",
    tag: "Health & town campus",
    blurb:
      "Inside Abakaliki town, walking distance from the market and most off-campus lodges. The College of Health Sciences crowd basically lives here.",
    hosts: ["Basic Medical Sciences", "Clinical Medicine", "Health Sciences & Technology", "Pre-degree / Diploma"],
    landmark: "Presco Junction, central Abakaliki",
  },
  {
    id: "cas",
    name: "CAS Campus",
    tag: "Agriculture",
    blurb:
      "The College of Agricultural Sciences campus with the teaching farms, fish ponds and soil labs. Wear shoes you don't mind staining.",
    hosts: ["Agriculture & Natural Resource Management", "Teaching farm", "Food Science labs"],
    landmark: "Off Water Works Road, Abakaliki",
  },
  {
    id: "ishieke",
    name: "Ishieke Campus",
    tag: "Education",
    blurb:
      "A short keke ride out of town. Faculty of Education runs from here, including teaching-practice coordination and micro-teaching labs.",
    hosts: ["Education", "Teaching Practice office", "Demonstration school links"],
    landmark: "Ishieke, along Abakaliki\u2013Enugu road",
  },
];

export type Faculty = {
  name: string;
  campus: string;
  color: "moss" | "clay" | "gold" | "sky";
  departments: string[];
};

export const faculties: Faculty[] = [
  {
    name: "Science",
    campus: "Permanent Site",
    color: "moss",
    departments: [
      "Computer Science",
      "Mathematics",
      "Statistics",
      "Physics / Industrial Physics",
      "Chemistry / Industrial Chemistry",
      "Biochemistry",
      "Microbiology",
      "Applied Biology",
      "Biotechnology",
      "Geology",
      "Science Laboratory Technology",
    ],
  },
  {
    name: "Social Sciences & Humanities",
    campus: "Permanent Site",
    color: "clay",
    departments: [
      "Economics",
      "Political Science",
      "Sociology & Anthropology",
      "Mass Communication",
      "Psychology",
      "Public Administration",
      "English & Literary Studies",
      "History & International Relations",
      "Philosophy",
      "Religion & Cultural Studies",
      "Linguistics & Igbo Language",
      "Library & Information Science",
    ],
  },
  {
    name: "Management Sciences",
    campus: "Permanent Site",
    color: "gold",
    departments: [
      "Accountancy",
      "Banking & Finance",
      "Business Management",
      "Marketing",
      "Insurance & Risk Management",
      "Entrepreneurial Studies",
    ],
  },
  {
    name: "Law",
    campus: "Permanent Site",
    color: "sky",
    departments: ["Public & Private Law", "International Law & Jurisprudence", "Commercial Law"],
  },
  {
    name: "Basic Medical Sciences",
    campus: "Presco Campus",
    color: "moss",
    departments: ["Human Anatomy", "Human Physiology", "Medical Biochemistry", "Pharmacology & Therapeutics"],
  },
  {
    name: "Clinical Medicine",
    campus: "Presco Campus",
    color: "clay",
    departments: [
      "Medicine & Surgery (MBBS)",
      "Internal Medicine",
      "Surgery",
      "Paediatrics",
      "Obstetrics & Gynaecology",
      "Community Medicine",
    ],
  },
  {
    name: "Health Sciences & Technology",
    campus: "Presco Campus",
    color: "gold",
    departments: [
      "Nursing Science",
      "Medical Laboratory Science",
      "Public Health",
      "Human Nutrition & Dietetics",
      "Radiography & Radiation Science",
      "Medical Rehabilitation",
    ],
  },
  {
    name: "Agriculture & Natural Resource Management",
    campus: "CAS Campus",
    color: "sky",
    departments: [
      "Agricultural Economics, Management & Extension",
      "Crop Production & Landscape Management",
      "Animal Science",
      "Soil Science & Environmental Management",
      "Fisheries & Aquaculture",
      "Food Science & Technology",
      "Forestry & Wildlife",
    ],
  },
  {
    name: "Education",
    campus: "Ishieke Campus",
    color: "moss",
    departments: [
      "Educational Foundations",
      "Science Education",
      "Arts & Social Science Education",
      "Business Education",
      "Guidance & Counselling",
      "Human Kinetics & Health Education",
      "Adult & Continuing Education",
    ],
  },
];

export type Step = {
  id: string;
  title: string;
  detail: string;
  meta: string;
};

export const fresherSteps: Step[] = [
  {
    id: "caps",
    title: "Accept your admission on JAMB CAPS",
    detail:
      "Log into the JAMB portal, open CAPS and click ACCEPT on the EBSU offer. Until you accept, EBSU cannot generate your admission letter and you will not appear on the matriculation list.",
    meta: "JAMB portal \u00b7 do this first",
  },
  {
    id: "letter",
    title: "Print JAMB admission letter + result slip",
    detail:
      "Print the JAMB admission letter and the original result slip. Make at least four photocopies of everything \u2014 screening, hostel, faculty and department all want their own copy.",
    meta: "Keep a soft copy in your email too",
  },
  {
    id: "acceptance",
    title: "Pay the acceptance fee on the EBSU portal",
    detail:
      "Create your profile on the student portal, generate an RRR / invoice for the acceptance fee, pay at a bank or online, then go back and confirm the payment so the receipt prints.",
    meta: "Print 2 copies of the receipt",
  },
  {
    id: "screening",
    title: "Physical screening / document verification",
    detail:
      "Take originals AND photocopies: O'Level result(s), JAMB slips, birth certificate, LGA certificate of origin, passport photographs on a white background, and the acceptance receipt.",
    meta: "Go early \u2014 queues start before 8am",
  },
  {
    id: "fees",
    title: "Pay school fees and print the receipt",
    detail:
      "Generate the school fees invoice for your level and faculty on the portal. Fees differ by faculty \u2014 Medicine, Nursing and Law usually pay more than Arts. Never pay cash to an individual.",
    meta: "Portal invoice only \u00b7 never pay an agent",
  },
  {
    id: "course",
    title: "Register your courses for the session",
    detail:
      "Fill the course form on the portal with your course adviser, print three copies and get them signed and stamped by the adviser and HOD. One for you, one for the department, one for the faculty.",
    meta: "Deadlines are real \u2014 late registration attracts a fine",
  },
  {
    id: "id",
    title: "Biometrics, student ID card and email",
    detail:
      "Do your biometric capture and collect your student ID card. It is what gets you into the library, exam halls and hostel gates without stress.",
    meta: "Carry it everywhere during exams",
  },
  {
    id: "hostel",
    title: "Sort accommodation",
    detail:
      "Apply for a bed space on the portal if you want hall of residence, or inspect off-campus lodges around Presco, CAS or the Permanent Site gate with someone who already lives in town.",
    meta: "Never pay a lodge agent before you see the room",
  },
  {
    id: "matric",
    title: "Matriculate and get your matric number",
    detail:
      "Matriculation is the ceremony where you formally become a student and take the matriculation oath. Your matric number becomes your identity for everything after this day.",
    meta: "Gown hire + a good photographer",
  },
  {
    id: "settle",
    title: "Find your people",
    detail:
      "Join your departmental association, save your course rep's number, get on the class WhatsApp group, and locate the faculty notice board. That board decides your life.",
    meta: "Week one, non-negotiable",
  },
];

export type GradeRow = { grade: string; points: number; range: string; verdict: string };

export const gradeScale: GradeRow[] = [
  { grade: "A", points: 5, range: "70 \u2013 100", verdict: "Excellent" },
  { grade: "B", points: 4, range: "60 \u2013 69", verdict: "Very good" },
  { grade: "C", points: 3, range: "50 \u2013 59", verdict: "Good" },
  { grade: "D", points: 2, range: "45 \u2013 49", verdict: "Fair" },
  { grade: "E", points: 1, range: "40 \u2013 44", verdict: "Pass" },
  { grade: "F", points: 0, range: "0 \u2013 39", verdict: "Fail \u00b7 carry-over" },
];

export const classification = [
  { label: "First Class", min: 4.5, max: 5.0 },
  { label: "Second Class Upper (2:1)", min: 3.5, max: 4.49 },
  { label: "Second Class Lower (2:2)", min: 2.4, max: 3.49 },
  { label: "Third Class", min: 1.5, max: 2.39 },
  { label: "Pass", min: 1.0, max: 1.49 },
];

export type CostItem = {
  id: string;
  label: string;
  hint: string;
  low: number;
  high: number;
  preset: number;
  perSemester?: boolean;
};

export const costItems: CostItem[] = [
  { id: "rent", label: "Accommodation", hint: "Hall bed space or a self-con off campus, spread per semester", low: 40000, high: 250000, preset: 90000, perSemester: true },
  { id: "food", label: "Food & water", hint: "Cooking mostly, with the occasional plate of rice outside", low: 15000, high: 70000, preset: 32000 },
  { id: "transport", label: "Transport", hint: "Keke to campus and back, plus a trip home", low: 4000, high: 30000, preset: 10000 },
  { id: "data", label: "Data & airtime", hint: "You will need data for the portal, e-books and group calls", low: 2500, high: 15000, preset: 6000 },
  { id: "handouts", label: "Handouts, printing & lab coats", hint: "Course materials, photocopies, practical kits", low: 3000, high: 25000, preset: 9000 },
  { id: "upkeep", label: "Personal upkeep", hint: "Toiletries, laundry, clothes, medicine, small enjoyment", low: 5000, high: 40000, preset: 14000 },
];

export type Lingo = { term: string; meaning: string };

export const lingo: Lingo[] = [
  { term: "Jambite", meaning: "A first-year student. Worn proudly for about three weeks, then denied forever." },
  { term: "Stalite", meaning: "Anyone in 200 level and above. The people who know which lecturer actually shows up." },
  { term: "Carry-over", meaning: "A failed compulsory course you must repeat and pass before you can graduate." },
  { term: "Spillover", meaning: "Staying an extra session because of outstanding courses. Avoidable with early seriousness." },
  { term: "Course form", meaning: "The signed and stamped list of courses you registered. No form, no result." },
  { term: "Handout", meaning: "Lecturer-produced course material. Read it, but never read only it." },
  { term: "Course rep", meaning: "Your class representative and unofficial news agency. Save the number." },
  { term: "GST", meaning: "General Studies courses everybody offers \u2014 use, English, philosophy, entrepreneurship. Easy marks if you attend." },
  { term: "Aluta", meaning: "Student protest / activism, from 'a luta continua'. Stay informed, stay safe." },
  { term: "SIWES / IT", meaning: "Industrial attachment for science, agric, engineering and tech students. Plan your placement early." },
  { term: "TP", meaning: "Teaching Practice \u2014 the term Education students spend teaching in a real school." },
  { term: "Keke", meaning: "The three-wheeled tricycle taxi that is basically EBSU's public transport system." },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "When does the EBSU academic session usually start?",
    a: "Sessions and resumption dates shift, so treat any date you hear in a WhatsApp group as a rumour until you see it on ebsu.edu.ng or your faculty notice board. Follow the official portal announcements and your departmental group for the confirmed calendar.",
  },
  {
    q: "How much are EBSU school fees?",
    a: "Fees vary by faculty, level and whether you are an indigene of Ebonyi State. Clinical and health science programmes cost the most. The only figure you should trust is the invoice the student portal generates for your own profile.",
  },
  {
    q: "Can I change my course or department after admission?",
    a: "Change of course is possible but not automatic. It goes through your current department, the department you want, and the Admissions Office \u2014 and your JAMB subject combination and O'Level results must qualify you. Start the process in your first weeks, not in 200 level.",
  },
  {
    q: "Do I have to live in a hall of residence?",
    a: "No. Bed spaces are limited, so most students rent off campus around Presco, CAS, Ishieke or the Permanent Site gate. Halls are cheaper and closer; off-campus gives you space and quiet. Inspect before you pay, and pay only to a verified landlord or caretaker.",
  },
  {
    q: "What is a good CGPA to aim for?",
    a: "Anything from 3.50 keeps you in Second Class Upper territory, which is the practical cut-off for most graduate schemes and scholarships. 4.50 and above is First Class. Your first year is the cheapest time to build a buffer \u2014 the courses are lighter then.",
  },
  {
    q: "What happens if I miss course registration?",
    a: "An unregistered course does not exist. You can sit the exam and still get no result. If you miss the window, go straight to your course adviser and HOD \u2014 late registration usually attracts a penalty fee and Senate approval.",
  },
  {
    q: "Is the campus safe at night?",
    a: "Abakaliki is generally calm, but use normal sense: move in groups after dark, keep your phone out of sight in traffic, know your lodge caretaker, and avoid unlit shortcuts between the Permanent Site and town. Save the campus security number before you need it.",
  },
  {
    q: "How do I get my transcript or statement of result?",
    a: "Apply through your department and the Exams & Records unit, pay the prescribed fee on the portal, and give it real lead time \u2014 transcripts are never same-day. Clear every outstanding fee and library item first.",
  },
  {
    q: "Someone is asking for money to 'help' with admission or results. What do I do?",
    a: "Walk away and report it. Every legitimate EBSU payment produces an invoice or RRR on the official portal in your own name. No individual account, no agent, no 'connection' inside the system.",
  },
  {
    q: "Is this an official EBSU website?",
    a: "No. This is an independent, student-made orientation guide. It exists to explain how things actually work in plain language. Every date, fee and requirement must be confirmed against ebsu.edu.ng, the student portal and your department.",
  },
];

export const survivalTips = [
  {
    title: "Attendance is currency",
    body: "Many lecturers tie 10\u201330% of your score to attendance and class tests. Showing up is the cheapest mark in the university.",
  },
  {
    title: "Photocopy everything, twice",
    body: "Receipts, course forms, ID, admission letter. Keep a physical folder and a folder in your email. Offices lose paper; you should not.",
  },
  {
    title: "Befriend the notice board",
    body: "Time-table changes, test dates and Senate announcements land on the faculty board before they land online. Check it twice a week.",
  },
  {
    title: "Start the semester like it is exam week",
    body: "The students with First Class are not smarter \u2014 they started reading in week one while everyone else was still buying buckets.",
  },
  {
    title: "Learn one skill outside your course",
    body: "Design, data, tailoring, phone repair, content writing. It pays your data bill now and cushions you after NYSC.",
  },
  {
    title: "Protect your health",
    body: "Register at the medical centre early, drink treated water, sleep, and take malaria seriously. A hospitalised week costs more than any handout.",
  },
];

export const officialLinks = [
  { label: "EBSU official website", href: "https://ebsu.edu.ng", note: "News, faculties, senate announcements" },
  { label: "EBSU student portal", href: "https://ebsu.edu.ng", note: "Fees, invoices, course registration, results" },
  { label: "JAMB CAPS", href: "https://portal.jamb.gov.ng", note: "Accept admission, print admission letter" },
  { label: "NYSC portal", href: "https://portal.nysc.org.ng", note: "Final-year mobilisation and senate list" },
  { label: "WAEC result checker", href: "https://waecdirect.org", note: "O'Level verification during screening" },
];
