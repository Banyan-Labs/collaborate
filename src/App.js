
import React from 'react';
import ProjectCard from './components/projects/ProjectsCard';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Layout from './Layout';

function App() {
  return (

    <Layout className="App" >
      <Navbar />
      <Jumbotron />
      <ProjectCard />
      <ContactForm />
      <Footer />
    </Layout>

  );
}

export default App;
