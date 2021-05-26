
import React from 'react';
import ProfileCard from './components/ProfileCard'
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
      <Footer />

    </div>
  );
}

export default App;
