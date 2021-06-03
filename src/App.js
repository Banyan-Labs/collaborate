
import React from 'react';
import ProjectSection from './components/ProjectsSection'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import Form from './components/contactForm/contactForm'


function App() {
  return (
    <div className="App">

      <Navbar />
      <Jumbotron />
      <Form />
      <ProjectSection />
      <Footer />

    </div>
  );
}

export default App;
