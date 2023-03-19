import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My Skills</p>
        <h1 className={`${styles.sectionHeadText}`}>Technologies</h1>
      </div>
      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      As a Full Stack Developer, I have extensive experience in creating web applications from start to finish.
      My skills in both Frontend and Backend technologies enable me to create high-quality projects that meet the needs of users.
      </p>
      <div className="flex flex-col mt-20 xs:flex-row">
        <div className='flex flex-col w-full xs:w-1/2'>
          <div className={`${styles.sectionSubText} flex justify-center`}>Frontend</div>
          <hr className="w-[80%] mx-auto mt-5"/>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {technologies.map((technology) => {
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
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {technologies.map((technology) => {
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
