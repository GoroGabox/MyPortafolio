import React from "react";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
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
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <div className='flex flex-row flex-wrap justify-center'>{technology.name}</div>
          </div>
        ))}
      </div>
    </>
    
  );
};

export default SectionWrapper(Tech, "tech");
