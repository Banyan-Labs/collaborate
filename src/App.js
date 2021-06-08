
import React, { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ProjectSection from './components/projects/ProjectSection';

import ThemeContext, { themes } from './theme-context'

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    theme === themes.dark
      ? setTheme(themes.light)
      : setTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Navbar />
      <Jumbotron />
      <ContactForm />
      <ProjectSection />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
