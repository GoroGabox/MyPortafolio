import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { About, Contact, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
