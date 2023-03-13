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
