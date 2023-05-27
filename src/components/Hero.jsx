import { motion } from "framer-motion";
import React, { useContext } from "react";
import { styles } from "../styles";
import { LandingCanvas } from "./canvas";
import { sticker } from "../assets";

import AuthContext from '../context/AuthContext'
import { LanguageContext } from '../context/LangContext';

import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';

const Hero = () => {
  let {isMobile} = useContext(AuthContext) || {}
  const { language } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {content.heroInfo.title}<span className='text-[#915EFF]'>Gabriel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {content.heroInfo.textUp}<br className='sm:block hidden' />
          {content.heroInfo.textDown}
          </p>
        </div>
      </div>
      { isMobile
        ?
        <div className="absolute bottom-[15%] w-full flex justify-center items-center z-0">
          <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='w-full h-full rounded-full mb-1 flex justify-center items-center'
        >
          <img src={sticker} alt="astronaut sticker" className="w-[340px] h-[340px]" />
        </motion.div>
        </div>
          :
        <LandingCanvas />
      }

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about' aria-label="Go to About me">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
