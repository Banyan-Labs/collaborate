

import React, { useState } from 'react';
import ProjectSection from './components/projects/ProjectSection'
import './App.css';
import ThemeContext, { themes } from './theme-context'
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm'



const customButton = {

  backgroundColor: '#0B0C10',
  borderColor: '#cf4cf7',
  color: '#cf4cf7',
  borderRadius: '100px'
};

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    theme === themes.dark
      ? setTheme(themes.light)
      : setTheme(themes.dark);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className="btnDiv">
        <button className="ml-5 mb-1 mt-1" style={customButton} onClick={toggleTheme}>Change Theme</button>
      </div>

      <Navbar />
      <Jumbotron />
      <ProjectSection />
      <ContactForm />
      <Footer />

    </ThemeContext.Provider>
  );
}

export default App;
