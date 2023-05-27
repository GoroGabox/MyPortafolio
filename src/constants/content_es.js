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
    chile,
  } from "../assets";

  const flag = chile;

  const aboutInfo = 
    {
      title: "Introducción",
      subTitle: "Descripción general.",
      text: "Soy un desarrollador de software con experiencia en Python y JavaScript, y especializado en frameworks como React, Three.js y Django. Soy un aprendiz rápido y colaboro estrechamente con los clientes para crear soluciones eficientes, escalables y amigables para el usuario que resuelvan problemas del mundo real. ¡Trabajemos juntos para dar vida a tus ideas!",
    }
  ;
  
  const heroInfo = 
    {
      title: "Hola, soy ",
      textUp: "Desarrollo vistas 3D, ",
      textDown: "interfaces de usuario y aplicaciones web",
    }
  ;
  
  const techInfo = 
    {
      title: "Mis habilidades",
      subTitle: "Tecnologías.",
      text: "Como desarrollador Full Stack, tengo una amplia experiencia en la creación de aplicaciones web de principio a fin. Mis habilidades en tecnologías tanto de Frontend como de Backend me permiten crear proyectos de alta calidad que satisfacen las necesidades de los usuarios.",
    }
  ;
  
  const proyectsInfo = 
    {
      title: "Mi trabajo",
      subTitle: "Proyectos.",
      text: "Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos del mundo real de mi trabajo. Cada proyecto se describe brevemente con enlaces a los repositorios de código y demos en vivo. Reflejan mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.",
    }
  ;
  
  const contactInfo = 
    {
      title: "Trabajemos juntos!",
      subTitle: "Contacto.",
    }
  ;
  
  const navLinks = [
    {
      id: "about",
      title: "Info",
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
    
    export { aboutInfo, heroInfo, techInfo, proyectsInfo, contactInfo ,flag , navLinks, services, technologies, projects, social };