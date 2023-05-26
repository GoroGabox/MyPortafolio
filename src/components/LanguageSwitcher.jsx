import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}

export default LanguageSwitcher;
