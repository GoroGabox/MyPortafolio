import React, { useContext } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { LanguageContext } from '../context/LangContext';
import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';

const Tech = () => {

  const { language } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>{content.techInfo.title}</p>
        <h1 className={`${styles.sectionHeadText}`}>{content.techInfo.subTitle}</h1>
      </div>
      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      {content.techInfo.text}
      </p>
      <div className="flex flex-col mt-20 xs:flex-row">
        <div className='flex flex-col w-full xs:w-1/2'>
          <div className={`${styles.sectionSubText} flex justify-center`}>Frontend</div>
          <hr className="w-[80%] mx-auto mt-5"/>
          <div className="flex flex-wrap justify-center mx-auto gap-10 mt-10 max-w-[500px]">
            {content.technologies.map((technology) => {
              if (technology.tag==="frontend") {
                return (
                <div className='w-28 h-28 flex-row' key={technology.name}>
                  <img src={technology.icon} className='w-full h-full'/>
                  <div className='flex justify-center'>{technology.name}</div>
                </div>
                )
              }
            })}
          </div>
        </div>
        <div className='flex flex-col w-full xs:w-1/2 mt-20 xs:mt-0'>
          <div className={`${styles.sectionSubText} flex justify-center`}>Backend</div>
          <hr className="w-[80%] mx-auto mt-5"/>
          <div className="flex flex-wrap justify-center mx-auto gap-10 mt-10 max-w-[500px]">
            {content.technologies.map((technology) => {
              if (technology.tag==="backend") {
                return (
                <div className='w-28 h-28 flex-row' key={technology.name}>
                  <img src={technology.icon} className='w-full h-full'/>
                  <div className='flex justify-center'>{technology.name}</div>
                </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </>
    
  );
};

export default SectionWrapper(Tech, "tech");
