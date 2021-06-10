
import React from 'react';
import ProjectSection from './components/projects/ProjectSection'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm'


function App() {
  return (
    <div className="App">

      <Navbar />
      <Jumbotron />
      <ProjectSection />
      <ContactForm />
      <Footer />

    </div>
  );
}

export default App;
