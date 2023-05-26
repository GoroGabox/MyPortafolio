import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LangContext";
import { About, Contact, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <div className='relative z-0 bg-primary swap'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Tech />
            <Works />
            <Contact />
          </div>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
