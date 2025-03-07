import React, { useContext } from "react";
import { motion } from "framer-motion";

import { LanguageContext } from '../context/LangContext';
import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => { 

  return (
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-slate-500 hover:cursor-pointer hover:scale-105 transition-all'
      >
        {icon}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
)};

const About = () => {

  const { language } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;

  return (
    <>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {content.aboutInfo.text}
      </motion.p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-10'>
        {content.services.map((service, index) => (
          <ServiceCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>
    </>
  );
};



export default SectionWrapper(About, "about");
