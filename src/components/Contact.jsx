import React, { useContext } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { LanguageContext } from '../context/LangContext';
import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';

const Contact = () => {

  const { language } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{content.contactInfo.title}</p>
        <h3 className={styles.sectionHeadText}>{content.contactInfo.subTitle}</h3>
        {content.social.map((item)=>(
          <a href={item.link} target='_blank' className="flex w-full  mt-10 cursor-pointer" key={item.title}>
            <img src={item.icon} alt="" className="w-20 h-20" srcSet=""/>
            <div className="flex flex-col mx-4 justify-center items-center">
              <div className="">{item.title}</div>
              <div className="text-secondary text-[17px] max-w-3xl leading-[30px]">{item.name}</div>
            </div>
          </a>
        ))}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
