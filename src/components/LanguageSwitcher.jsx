import React, { useContext } from 'react';
import { LanguageContext } from '../context/LangContext';
import * as contentEn from '../constants/content_en';
import * as contentEs from '../constants/content_es';


function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const content = language === 'en' ? contentEn : contentEs;
  

  return (
    <div>
      <div className='cursor-pointer' onClick={toggleLanguage}>
        <div className="flex justify-center">
          <img src={content.flag} alt="flag" />
        </div>
        <div className="">EN | ES</div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
