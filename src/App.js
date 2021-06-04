
import React from 'react';
import ProjectCard from './components/projects/ProjectsCard'
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
      <ProjectCard />
      <ContactForm />
      <Footer />

    </div>
  );
}

export default App;
