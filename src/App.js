import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
        <Hero />
        <About />
        <Skills />
      
        <Experience />
        <Blog />
        <Services />
        <Certifications />
        <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
