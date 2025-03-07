import {
  mobile,
  backend,
  web,
  javascript,
  python,
  reactjs,
  spark,
  tailwind,
  django,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  instagram,
  twitter,
  linkedin,
  usa,
  meta,
  shopify,
  starbucks,
  tesla,
  candel,
  alvolante,
  free,
  rmes,
  umar,
  java, jira, php, linux, cpp, flutter, angular, AWS, firebase, keras, kubernetes, laravel, metasploit, mongoDB, nextjs, OWASP, postgreSQL, scapy, selenium, spring, tensorflow, ts, wireshark
} from "../assets";
import { FaLaptopCode, FaChartBar, FaBug } from "react-icons/fa";

const flag = usa;

const aboutInfo = 
  {
    title:"Introduction",
    subTitle:"Overview.",
    text:"I am a Senior Fullstack Developer with over 5 years of experience in web development, project leadership, and process optimization. My focus is on creating efficient, scalable, and high-performance solutions, utilizing the right technology for each case. My ability to understand business challenges and translate them into technical solutions, combined with my project management skills, has allowed me to drive the success of complex projects from planning to implementation.",
  }
;

const heroInfo = 
  {
    title:"Senior FullStack Developer",
    textUp:"Clean code, smart solutions, real impact.",
    textDown:"",
  }
;

const techInfo = 
  {
    title:"My Skills",
    subTitle:"Technologies.",
    text:"As a Full Stack Developer, I have extensive experience in creating web applications from start to finish. My skills in both Frontend and Backend technologies enable me to create high-quality projects that meet the needs of users.",
  }
;

const proyectsInfo = 
  {
    title:"My work",
    subTitle:"Projects.",
    text:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
  }
;

const contactInfo = 
  {
    title:"Get in touch",
    subTitle:"Contact.",
  }
;

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "exp",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: <FaLaptopCode size={60} color="white" />,
  },  
  {
    title: "Quality Assurance",
    icon: <FaBug size={60} color="white" />,
  },
  {
    title: "Proyect Manager",
    icon: <FaChartBar size={60} color="white" />,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    tag:"frontend"
  },
  {
    name: "TypeScript",
    icon: ts,
    tag:"frontend"
  },
  {
    name: "Angular",
    icon: angular,
    tag:"frontend"
  },
  {
    name: "React JS",
    icon: reactjs,
    tag:"frontend"
  },
  {
    name: "Next.js",
    icon: nextjs,
    tag:"frontend"
  },
  {
    name: "Python",
    icon: python,
    tag:"backend"
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
    tag:"ai"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    tag:"frontend"
  },
  {
    name: "Django",
    icon: django,
    tag:"backend"
  },
  {
    name: "Three JS",
    icon: threejs,
    tag:"frontend"
  },
  {
    name: "Git",
    icon: git,
    tag:"other"
  },
  {
    name: "Figma",
    icon: figma,
    tag:"other"
  },
  {
    name: "Docker",
    icon: docker,
    tag:"other"
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
    tag:"other"
  },
  {
    name: "Java",
    icon: java,
    tag:"backend"
  },
  {
    name: "AWS",
    icon: AWS,
    tag:"other"
  },
  {
    name: "Firebase",
    icon: firebase,
    tag:"backend"
  },
  {
    name: "Spring",
    icon: spring,
    tag:"backend"
  },
  {
    name: "Jira",
    icon: jira,
    tag:"other"
  },
  {
    name: "Selenium",
    icon: selenium,
    tag:"other"
  },
  {
    name: "Linux",
    icon: linux,
    tag:"ai"
  },
  {
    name: "Keras",
    icon: keras,
    tag:"ai"
  },
  {
    name: "Metasploit",
    icon: metasploit,
    tag:"ai"
  },
  {
    name: "OWASP",
    icon: OWASP,
    tag:"ai"
  },
  {
    name: "Scapy",
    icon: scapy,
    tag:"ai"
  },
  {
    name: "WireShark",
    icon: wireshark,
    tag:"ai"
  },
  {
    name: "C++",
    icon: cpp,
    tag:"backend"
  },
  {
    name: "PHP",
    icon: php,
    tag:"backend"
  },
  {
    name: "Laravel",
    icon: laravel,
    tag:"backend"
  },
  {
    name: "Flutter",
    icon: flutter,
    tag:"frontend"
  },
];

const projects = [
  {
    name: "Drive School 'Al Volante'",
    description:
      "Dinamic website for a drive-school.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/GoroGabox/Al_Volante",
    active_url: "https://escuela-alvolante.cl/"
  },
  {
    name: "Home Calculator",
    description:
      "Web application to draw plans, calculate the necessary construction materials and quote their respective values.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/GoroGabox/HomeApp",
    active_url: "https://homecalculator.onrender.com/"
  },
];

const social = [
  {
    title:'Instagram',
    name:'@gg.gabo',
    icon:instagram,
    link:'https://www.instagram.com/gg.gabo/',
  },
  {
    title:'LinkIn',
    name:'@Gabox253',
    icon:linkedin,
    link:'https://www.linkedin.com/in/gabriel-alfonso-diaz-lopez-61ba02134/',
  },
]

const experiences = [
  {
    title: "Fullstack Developer & Project Leader",
    company_name: "Freelance Independent",
    icon: free, // Replace with the appropriate icon
    iconBg: "#fff",
    date: "Dec 2020 – Nov 2023",
    points: [
      "Led the development and delivery of web solutions for various clients, managing projects from inception to implementation.",
      "Transformed outdated platforms into modern solutions, such as revamping a school website with Next.js, improving user interaction, and increasing retention rates by 40%.",
      "Designed and implemented automation systems using Flutter and Dart, reducing operational time by 30%.",
      "Integrated REST APIs and developed scalable databases, optimizing system interoperability and data security.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Autoescuela 'Al Volante'",
    icon: alvolante, // Replace with the appropriate icon
    iconBg: "#fff",
    date: "Jan 2023 – Mar 2024",
    points: [
      "Developed a modern web platform using Next.js and PostgreSQL, increasing online enrollments by 25%.",
      "Implemented scalable backend solutions, ensuring data integrity and reliability.",
      "Managed the successful deployment of the platform into production and provided continuous maintenance.",
    ],
  },
  {
    title: "Web & Mobile Developer",
    company_name: "Candel Medical Company",
    icon: candel, // Replace with the appropriate icon
    iconBg: "#fff",
    date: "Dec 2023 – Feb 2024",
    points: [
      "Developed a React Native mobile application to assist with electrostimulation therapies, improving patient treatment efficiency.",
      "Migrated services from AWS Amplify, enhancing infrastructure scalability and compatibility for future development.",
      "Designed a high-performance web application using Next.js, reducing page load times by 40%.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "RMES Analytics",
    icon: rmes, // Replace with the appropriate icon
    iconBg: "#0081C5ff",
    date: "Mar 2024 – Present",
    points: [
      "Developed interactive user interfaces using HighChart in Angular 15 for data analysis in the mining industry.",
      "Collaborated in the creation of unit tests and process documentation, ensuring robust and reliable code.",
      "Led the implementation of new features, ensuring the platform meets the highest standards of quality and security.",
    ],
  },
  {
    title: "QA Developer & Test Automation",
    company_name: "UMAR",
    icon: umar, // Replace with the appropriate icon
    iconBg: "#fff",
    date: "May 2024 – Oct 2024",
    points: [
      "Performed quality assurance (QA) testing for critical applications, including accounting software and a container tracking system.",
      "Designed and executed detailed manual tests, ensuring early detection of errors and bug resolution before release.",
      "Implemented test automation to improve efficiency and reduce execution times in development cycles.",
      "Developed a Selenium-based crawler to automate interactions with the container tracking application, significantly enhancing test coverage.",
    ],
  },
];


export { aboutInfo, heroInfo, techInfo, proyectsInfo, contactInfo ,flag, navLinks, services, technologies, projects, social, experiences };
