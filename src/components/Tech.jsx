import React, { useContext, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { LanguageContext } from '../context/LangContext';
import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';

const Tech = () => {
  const { language } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;
  
  const [selectedSection, setSelectedSection] = useState("frontend");

  return (
    <div className="">
      <p className={`${styles.sectionSubText}`}>{content.techInfo.title}</p>
      <h1 className={`${styles.sectionHeadText}`}>{content.techInfo.subTitle}</h1>
          
      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {content.techInfo.text}
      </p>
      
      <hr className="w-full mx-auto my-5" />
      <div className="block md:flex">
        {/* Sidebar de navegación */}
        <div className="md:w-1/4 w-full bg-gray-800 text-white h-auto min-h-[300px] p-6 rounded-lg shadow-lg flex md:block flex-wrap">
          <button 
            className={`w-full py-2 text-left px-4 rounded-lg transition-all ${selectedSection === "frontend" ? "bg-blue-500" : "hover:bg-gray-700"}`} 
            onClick={() => setSelectedSection("frontend")}
          >
            Frontend
          </button>
          <button 
            className={`w-full py-2 text-left px-4 mt-2 rounded-lg transition-all ${selectedSection === "backend" ? "bg-blue-500" : "hover:bg-gray-700"}`} 
            onClick={() => setSelectedSection("backend")}
          >
            Backend
          </button>
          <button 
            className={`w-full py-2 text-left px-4 mt-2 rounded-lg transition-all ${selectedSection === "ai" ? "bg-blue-500" : "hover:bg-gray-700"}`} 
            onClick={() => setSelectedSection("ai")}
          >
            Automatization / AI
          </button>
          <button 
            className={`w-full py-2 text-left px-4 mt-2 rounded-lg transition-all ${selectedSection === "other" ? "bg-blue-500" : "hover:bg-gray-700"}`} 
            onClick={() => setSelectedSection("other")}
          >
            Other tools
          </button>
        </div>

        {/* Contenido dinámico */}
        <div className="w-3/4 p-8 mt-10 md:mt-0">
          {/* Renderizado dinámico basado en la sección seleccionada */}
          <div className="flex flex-wrap justify-center mx-auto gap-10 max-w-[600px]">
            {content.technologies
              .filter((tech) => tech.tag === selectedSection)
              .map((technology) => (
                <div className='w-28 h-28 flex flex-col items-center justify-end' key={technology.name}>
                  <img src={technology.icon} className='w-full h-full'/>
                  <div className='text-center mt-2 text-white'>{technology.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "tech");
