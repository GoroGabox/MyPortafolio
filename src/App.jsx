import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LangContext";
import { About, Contact, Hero, Navbar, Tech, Works } from "./components";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <div className='relative z-0 bg-black swap'>
            <div className=''>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Tech />
            <Experience />
            <Works />
            <Contact />
          </div>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
