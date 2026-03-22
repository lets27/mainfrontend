export type AboutSection = {
  title: string;
  content: string | string[];
};

export type LeadershipMember = {
  name: string;
  role: string;
  image?: string;
  bio?: string | string[];
};

export type NavItem = {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "/about",
    children: [
      { title: "Overview", href: "/about" },
      { title: "Board of Directors", href: "/about/board-of-directors" },
      { title: "Executive Management", href: "/about/executive-management" },
      { title: "Careers", href: "/about/careers" },
    ],
  },
  { title: "Consumer", href: "/" },
  { title: "Regulated Sectors", href: "/" },
  { title: "Licensing", href: "/" },
  { title: "Media", href: "/" },
  { title: "Documents", href: "/" },
];

export const mandateData = [
  {
    title: "Telecommunications",
    description: "Regulating fixed and mobile telecommunications networks and services.",
    icon: "Phone",
  },
  {
    title: "Internet & ICTs",
    description: "Overseeing internet services, domains, and cybersecurity frameworks.",
    icon: "Globe",
  },
  {
    title: "Broadcasting",
    description: "Regulating commercial and community radio, and television broadcasting.",
    icon: "Radio",
  },
  {
    title: "Postal Services",
    description: "Supervising the provision of safe, reliable, and affordable postal services.",
    icon: "Mail",
  },
];

export const aboutOverview: AboutSection = {
  title: "Profile",
  content: [
    "Botswana Communications Regulatory Authority (BOCRA) was established through the Communications Regulatory Authority Act, 2012 (CRA Act) on the 1st of April 2013 to regulate the communications sector in Botswana, comprising telecommunications, Internet and Information and Communications Technologies (ICTs), radio communications, broadcasting, postal services and related matters.",
    "The CRA Act replaced the Broadcasting Act [Cap 72:04], the Telecommunications Act [Cap 72:03], and caused the amendment of the Postal Services Act to create a converged or an integrated regulatory authority for the communications industry."
  ]
};

export const coreValues = [
  { title: "Excellence", description: "We will strive to be the world-class leader in the provision of regulatory services through committed teams and impeccable customer service." },
  { title: "Proactiveness", description: "We will be forward looking in the delivery of our mandate, to keep up with evolving industry trends." },
  { title: "Integrity", description: "In the execution of our mandate we will demonstrate openness, honesty and accountability in all our decisions." },
  { title: "People", description: "We believe that our people are key to driving our success through their commitment and excellence. We shall therefore harness and develop individual skills and strengths to work as one." }
];

export const ceoMessage = {
  author: "Martin Mokgware",
  role: "Chief Executive",
  content: "I have the pleasure to present to you, our valued stakeholder, the new and improved BOCRA website. The improved website marks our continuous efforts to better reach out to you and at the same time receive your feedback so that we can serve you better. The website carries a new look with improved colour scheme and technical capabilities to improve navigation and enhance your user experience. The website can now be accessed through a variety of devices including hand held devices like mobile handsets without a compromise on its functionality. It is also designed to link better with our other online platforms particularly social media platforms. I invite you to explore and provide feedback on your user experience. Your insights are crucial in helping us improve this platform in a way that meets your expectations."
};

export const boardOfDirectors: LeadershipMember[] = [
  {
    name: "Dr. Bokamoso Basutli",
    role: "Board Member",
    bio: [
      "Dr. Bokamoso Basutli is a Professional Engineer and Senior Member of the Institute of Electrical and Electronics Engineers (IEEE). He is currently the Head of the Department of Electrical and Communications Systems Engineering at the Botswana International University of Science and Technology (BIUST), where he leads the delivery and coordination of Satellite Communications, Digital Signal Processing, and Artificial Intelligence (AI) modules.",
      "He serves as the leader of the Signal Processing, Networks, and Systems Research (SPNS) Group. He was the Principal Investigator (PI) and originator of the BotswanaSat-1 project, Botswana’s pioneering satellite initiative.",
      "Before joining academia, Dr. Basutli served as an Installation Engineer and later Lead Engineer with Singapore Technologies Electronics. He then worked as a Senior Telecommunications Engineer with the Civil Aviation Authority of Botswana (CAAB). He earned his Ph.D. in Electronics, Electrical, and Systems Engineering from Loughborough University, United Kingdom."
    ]
  },
  {
    name: "Moabi Pusumane",
    role: "Board Member",
    bio: [
      "Moabi Pusumane is a dynamic and results-driven executive with over 15 years of cross-functional experience in telecommunications, project management, market intelligence, route to market, and commercial leadership. Currently serving as Commercial Director at Coca-Cola Beverages Botswana, with responsibilities that include, driving sustainable revenue growth, portfolio innovation, and market expansion.",
      "His key achievements include the successful launch of the Schweppes Mixology campaign, which was later adopted across Africa; driving portfolio innovation during the COVID-19 pandemic with the successful introduction of the 1.5L pack; and leading Coca-Cola Beverages Botswana to win the 2023 Africa Customer Excellence Award."
    ]
  },
  {
    name: "Montle Phuthego",
    role: "Board Member",
    bio: [
      "Montle Phuthego is a seasoned business development, trade and investment expert who holds a Master of Science Degree in Economics from the University of Warwick in the United Kingdom. She has substantial experience in economic research, business development, trade and investment, coupled with a strong expertise and experience gained from several executive positions spanning over 20 years.",
      "She has previously served on a number of Boards - SPEDU, Letlole la Rona and Sechaba Brewery Holdings. Montle is currently the Country Director for TechnoServe, an international non-profit organisation delivering business solutions that build and strengthen businesses across various sectors."
    ]
  },
  {
    name: "Alta Dimpho Seleka",
    role: "Board Member",
    bio: [
      "Alta Dimpho Seleka is a distinguished finance professional with over two decades of senior leadership in public financial management and fiscal governance. She is a Fellow of both the Association of Chartered Certified Accountants (FCCA-UK) and the Botswana Institute of Chartered Accountants (FCPA-BICA).",
      "As Acting Commissioner for Finance and Administration at the Botswana Unified Revenue Service (BURS), Alta manages multibillion-pula tax revenues and corporate expenditure. Her mandate extends beyond financial reporting and audit oversight to include shared services, procurement, and the human resources functions of the Finance and Administration Division."
    ]
  },
  {
    name: "Lebogang George",
    role: "Board Member",
    bio: [
      "Lebogang George is a Partner at AJA/MCL, and an attorney admitted to the High Courts of Botswana. She has extensive experience in commercial law, procurement law, ICT law, IT governance, and data protection & privacy law in Botswana, South Africa, and the EU.",
      "She specialises in drafting and negotiating complex software agreements, commercial agreements and advising clients on compliance and governance matters. Her expertise covers the Botswana Data Protection Act, South Africa’s Protection of Personal Information Act, and the European General Data Protection Regulation."
    ]
  },
  {
    name: "Ronald Kgafela",
    role: "Board Member",
    bio: [
      "Ronald Kgafela is a seasoned Human Capital leader with over 20 years of experience spanning Human Resources, Organisational Development, Employment Relations, Change, and Transformation. He is a Certified Professional Business Coach (PBC), a Chartered Organisational Development Practitioner (CODP™️), and an Organisational Development Certified Consultant (ODCC) with GIODN.",
      "His career spans multiple industries, including utilities, manufacturing, mining, construction, retail, consulting, and banking. He held senior roles such as Head of Organisational Development, Country HR Manager, HR Business Partner, and Acting HR Director at FNBB, and currently serves as Head of HR at NBFIRA."
    ]
  },
  {
    name: "Dr. Kennedy Ramojela",
    role: "Board Member",
    bio: [
      "Dr Kennedy Ramojela holds a PhD in Media and Communications from Royal Melbourne Institute of Technology (RMIT) University, Melbourne, Australia. He did Master of Philosophy in film and broadcasting from the University of Southampton, UK.",
      "He is a Media and Communications practitioner and a senior executive with a keen focus on management, operations and strategy. Currently serving as a Media and Communications lecturer at the University of Botswana, Dr Ramojela oversees and lecturers in all digital media courses in the Department of Media Studies."
    ]
  }
];

export const executiveManagement: LeadershipMember[] = [
  {
    name: "Martin Mokgware",
    role: "Chief Executive",
    bio: ["Leading the Botswana Communications Regulatory Authority..."]
  }
];

export const careersData = {
  intro: "Botswana Communications Regulatory Authority (BOCRA) is the regulator of the Botswana communications sector, with responsibilities over telecommunications, broadcasting, postal and radio communication services. Technology is fast changing every aspect of our economy and telecommunications regulation is fast changing to keep pace with all these changes in the industry. This is an exciting time to be at the heart of this fast-moving sector. You can be part of it. Come and find out more about working for BOCRA and our current opportunities.",
  lifeAtBocra: "BOCRA is an organisation in which talented people work together, thrive and develop. We are committed to investing and supporting our Colleagues.",
  whatWeOffer: [
    "At BOCRA, people are our greatest asset, so developing our people is a fundamental part of our ethos. We take professional development very seriously.",
    "a comprehensive set of internal training courses;",
    "investment to attend appropriate external courses;",
    "sponsorships for professional or academic qualifications; and",
    "memberships of professional bodies."
  ],
  benefits: [
    "Pension allowance",
    "25 days holiday",
    "Private Medical Insurance",
    "Life Assurance",
    "Option to purchase additional annual leave",
    "Travel insurance"
  ]
};
