import React, { useContext } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { LanguageContext } from '../context/LangContext';
import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => { 

  return (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)};

const About = () => {

  const { language } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{content.aboutInfo.title}</p>
        <h2 className={styles.sectionHeadText}>{content.aboutInfo.subTitle}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {content.aboutInfo.text}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {content.services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
