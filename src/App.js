
import React from 'react';
import ProjectSection from './components/projects/ProjectSection'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm'



const customButton = {

  backgroundColor: '#0B0C10',
  borderColor: '#45A293',
  color: '#45A293',
  borderRadius: '100px'
};

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <button style={customButton} onClick={toggleTheme}>Change Theme</button>
      <Navbar />
      <Jumbotron />
      <ProjectSection />
      <ContactForm />
      <Footer />

    </div>
  );
}

export default App;
