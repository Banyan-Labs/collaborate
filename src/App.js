
import React from 'react';
import ProjectCard from './components/projects/ProjectsCard'
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
      <ProfileCard />
      <Form />
      <ProjectCard />
      <Footer />

    </div>
  );
}

export default App;
