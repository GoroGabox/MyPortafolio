import React, { createContext, useState } from 'react';

// Creamos el contexto de idioma
const LanguageContext = createContext();

// Creamos un proveedor de idioma que envuelve a los componentes
function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  // Pasamos el estado y la función de cambio de idioma como valores del contexto
  const languageContextValue = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Exportamos tanto el contexto como el proveedor
export { LanguageContext, LanguageProvider };
