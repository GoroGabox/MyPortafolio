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
} from "../assets";

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
];

const projects = [
  {
    name: "Drive School 'Al Volante'",
    description:
      "Web app that allows users to register and pay for driving lesson plans.",
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
    name: "Light Room",
    description:
      "A comprehensive showroom where users can interact with the lights and their intensity to create unique environments.",
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
    source_code_link: "https://github.com/",
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

export { navLinks, services, technologies, projects, social };
