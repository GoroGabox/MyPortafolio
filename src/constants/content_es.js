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
      title: "Acerca de mí",
    },
    {
      id: "tech",
      title: "Habilidades",
    },
    {
      id: "work",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Desarrollador Web",
      icon: web,
    },
    {
      title: "Desarrollador de AR",
      icon: mobile,
    },
    {
      title: "Desarrollador Backend",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
      tag: "frontend",
    },
    {
      name: "React JS",
      icon: reactjs,
      tag: "frontend",
    },
    {
      name: "Python",
      icon: python,
      tag: "backend",
    },
    {
      name: "Spark AR",
      icon: spark,
      tag: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      tag: "frontend",
    },
    {
      name: "Django",
      icon: django,
      tag: "backend",
    },
    {
      name: "Three JS",
      icon: threejs,
      tag: "frontend",
    },
    {
      name: "Git",
      icon: git,
      tag: "backend",
    },
    {
      name: "Figma",
      icon: figma,
      tag: "frontend",
    },
    {
      name: "Docker",
      icon: docker,
      tag: "backend",
    },
  ];
  
  const projects = [
    {
      name: "Autoescuela 'Al Volante'",
      description:
        "Aplicación web que permite a los usuarios registrarse y pagar por planes de clases de conducir.",
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
        "Juego web que permite al usuario moverse, construir con 5 cubos diferentes, guardar el progreso en la memoria local y reiniciar la memoria local.",
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
          "Un salón de exposición completo donde los usuarios pueden interactuar con las luces y su intensidad para crear ambientes únicos.",
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
        title: 'Instagram',
        name: '@gg.gabo',
        icon: instagram,
        link: 'https://www.instagram.com/gg.gabo/',
      },
      {
        title: 'Twitter',
        name: '@Gabox253',
        icon: twitter,
        link: 'https://www.twitter.com/Gabriel82830162',
      },
      {
        title: 'LinkedIn',
        name: '@Gabox253',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/gabriel-alfonso-diaz-lopez-61ba02134/',
      },
    ];
    
    export { navLinks, services, technologies, projects, social };