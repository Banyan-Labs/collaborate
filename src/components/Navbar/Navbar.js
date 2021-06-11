import React, { useContext } from 'react';
import { SITE_DATA } from '../../site-data'
import ThemeContext from '../../theme-context';
import * as ReactBootStrap from 'react-bootstrap';
import './Navbar.css'

export default function Navbar() {
  const theme = useContext(ThemeContext);
  return (
    <ReactBootStrap.Navbar style={theme} collapseOnSelect >
      {
        SITE_DATA.logo === "" ?
          null :
          <ReactBootStrap.Navbar.Brand variant="pills" href="/">
            <img src={SITE_DATA.logo} alt="my-logo" style={{ width: 100, background: 'white' }} />
          </ReactBootStrap.Navbar.Brand>
      }
      <ReactBootStrap.Navbar.Brand style={theme} id="Dev-name" href="/">{SITE_DATA.developerName}</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle style={theme} aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse style={theme} id="responsive-navbar-nav">
        <div style={theme} className="links">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link style={theme} id="home-link-name" href="/Home">HOME</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link style={theme} id="projects-link-name" href="/Projects">PROJECTS</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link style={theme} id="contacts-link-name" href="/Contacts">CONTACTS</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </div>
        <ReactBootStrap.Nav>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  )
}


