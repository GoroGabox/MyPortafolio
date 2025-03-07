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
    java, 
    jira, 
    php, 
    linux, 
    cpp, 
    meta,
    shopify,
    starbucks,
    tesla,
    candel,
    alvolante,
    free,
    rmes,
    umar,
    flutter, angular, AWS, firebase, keras, kubernetes, laravel, metasploit, mongoDB, nextjs, OWASP, postgreSQL, scapy, selenium, spring, tensorflow, ts, wireshark
  } from "../assets";
  import { FaLaptopCode, FaChartBar, FaBug } from "react-icons/fa";

  const flag = chile;

  const aboutInfo = 
    {
      title: "Introducción",
      subTitle: "Descripción general.",
      text: "Soy un programador Fullstack Senior con más de 5 años de experiencia en desarrollo web, liderazgo de proyectos y optimización de procesos. Mi enfoque está en crear soluciones eficientes, escalables y de alto rendimiento, utilizando la tecnología adecuada para cada caso. Mi capacidad para entender los desafíos empresariales y traducirlos en soluciones técnicas, junto con mis habilidades en gestión de proyectos, me han permitido impulsar el éxito de proyectos complejos, desde su planificación hasta su implementación.",
    }
  ;
  
  const heroInfo = 
    {
      title: "Programador Senior FullStack",
      textUp: "Código limpio, soluciones inteligentes, impacto real.",
      textDown: "",
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
      id: "exp",
      title: "Experiencia",
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
      title: "Desarrollador Fullstack",
      icon: <FaLaptopCode size={60} color="white" />,
    },
    {
      title: "Asegurador de Calidad",
      icon: <FaBug size={60} color="white" />,
    },
    {
      title: "Administracion de Proyectos",
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
        title: 'Instagram',
        name: '@gg.gabo',
        icon: instagram,
        link: 'https://www.instagram.com/gg.gabo/',
      },
      {
        title: 'LinkedIn',
        name: '@Gabox253',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/gabriel-alfonso-diaz-lopez-61ba02134/',
      },
    ];
  
    const experiences = [
      {
        title: "Fullstack Developer & Project Leader",
        company_name: "Freelance Independiente",
        icon: free, // Reemplaza con el ícono adecuado
        iconBg: "#fff",
        date: "Dic 2020 – Nov 2023",
        points: [
          "Lideré el desarrollo y entrega de soluciones web para diversos clientes, gestionando proyectos desde su inicio hasta su implementación.",
          "Transformé plataformas obsoletas en soluciones modernas, como la renovación de un sitio web escolar con Next.js, mejorando la interacción con usuarios y aumentando la tasa de retención en un 40%.",
          "Diseñé e implementé sistemas de automatización con Flutter y Dart, reduciendo el tiempo de operación en un 30%.",
          "Integré APIs REST y desarrollé bases de datos escalables, optimizando la interoperabilidad entre sistemas.",
        ],
      },
      {
        title: "Web Developer",
        company_name: "Autoescuela 'Al Volante'",
        icon: alvolante, // Reemplaza con el ícono adecuado
        iconBg: "#fff",
        date: "Ene 2023 – Mar 2024",
        points: [
          "Desarrollé una plataforma web moderna con Next.js y PostgreSQL, aumentando las inscripciones online en un 25%.",
          "Implementé soluciones backend escalables, asegurando la integridad de los datos.",
          "Gestioné el despliegue exitoso de la plataforma en producción y proporcioné mantenimiento continuo.",
        ],
      },
      {
        title: "Web & Mobile Developer",
        company_name: "Candel Medical Company",
        icon: candel, // Reemplaza con el ícono adecuado
        iconBg: "#fff",
        date: "Dic 2023 – Feb 2024",
        points: [
          "Desarrollé una aplicación móvil en React Native para asistir en terapias de electroestimulación.",
          "Migré servicios de AWS Amplify, mejorando la escalabilidad de la infraestructura.",
          "Diseñé una aplicación web de alto rendimiento con Next.js, reduciendo los tiempos de carga en un 40%.",
        ],
      },
      {
        title: "Web Developer",
        company_name: "RMES Analytics",
        icon: rmes, // Reemplaza con el ícono adecuado
        iconBg: "#0081C5ff",
        date: "Mar 2024 – Hoy",
        points: [
          "Desarrollé interfaces de usuario interactivas utilizando HighChart en Angular 15 para análisis de datos en la industria minera.",
          "Colaboré en la creación de pruebas unitarias y documentación de procesos, asegurando código robusto y confiable.",
          "Lideré la implementación de nuevas funcionalidades, cumpliendo con altos estándares de calidad y seguridad.",
        ],
      },
      {
        title: "QA Developer & Automatización de Pruebas",
        company_name: "UMAR",
        icon: umar, // Reemplaza con el ícono adecuado
        iconBg: "#fff",
        date: "Mayo 2024 – Oct 2024",
        points: [
          "Realicé pruebas de calidad (QA) para un software de contabilidad y un sistema de seguimiento de contenedores.",
          "Diseñé y ejecuté pruebas manuales detalladas, asegurando detección temprana de errores.",
          "Implementé la automatización de pruebas, reduciendo tiempos de ejecución en ciclos de desarrollo.",
          "Desarrollé un crawler con Selenium para pruebas automatizadas en la aplicación de seguimiento de contenedores.",
        ],
      },
    ];
    
    
    export { aboutInfo, heroInfo, techInfo, proyectsInfo, contactInfo ,flag , navLinks, services, technologies, projects, social, experiences };