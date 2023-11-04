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
  java, jira, php, linux, cpp, flutter
} from "../assets";

const flag = usa;

const aboutInfo = 
  {
    title:"Introduction",
    subTitle:"Overview.",
    text:"I'm a skilled software developer with experience in Python and JavaScript, and expertise in frameworks like React, Three.js, and Django. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
  }
;

const heroInfo = 
  {
    title:"Hi, I'm ",
    textUp:"I develop 3D visuals, user ",
    textDown:"interfaces and web applications",
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
    title: "Web Developer",
    icon: web,
  },  
  {
    title: "AR Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    tag:"frontend"
  },
  {
    name: "React JS",
    icon: reactjs,
    tag:"frontend"
  },
  {
    name: "Python",
    icon: python,
    tag:"backend"
  },
  {
    name: "Spark AR",
    icon: spark,
    tag:"frontend"
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
    tag:"backend"
  },
  {
    name: "Figma",
    icon: figma,
    tag:"frontend"
  },
  {
    name: "Docker",
    icon: docker,
    tag:"backend"
  },
  {
    name: "Java",
    icon: java,
    tag:"backend"
  },
  {
    name: "Jira",
    icon: jira,
    tag:"backend"
  },
  {
    name: "Linux",
    icon: linux,
    tag:"backend"
  },
  {
    name: "C++",
    icon: cpp,
    tag:"backend"
  },
  {
    name: "PHP",
    icon: php,
    tag:"frontend"
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
  },
  {
    name: "Minecraft-Clone",
    description:
      "Web game that allow user to move around, build with 5 different cubes, save the progress in local memory and reset the local memory.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/GoroGabox/MinecraftClone",
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
    title:'Twitter',
    name:'@Gabox253',
    icon:twitter,
    link:'https://www.twitter.com/Gabriel82830162',
  },
  {
    title:'LinkIn',
    name:'@Gabox253',
    icon:linkedin,
    link:'https://www.linkedin.com/in/gabriel-alfonso-diaz-lopez-61ba02134/',
  },
]

export { aboutInfo, heroInfo, techInfo, proyectsInfo, contactInfo ,flag, navLinks, services, technologies, projects, social };
