import React, { useContext } from 'react';
import { SITE_DATA } from '../../site-data'
import ThemeContext from '../../theme-context';
import * as ReactBootStrap from 'react-bootstrap';
import './Navbar.css'

export default function Navbar() {
  const theme = useContext(ThemeContext);
  return (
    <ReactBootStrap.Navbar collapseOnSelect >
      {
        SITE_DATA.logo === "" ?
          null :
          <ReactBootStrap.Navbar.Brand href="/">
            <img src={SITE_DATA.logo} alt="my-logo" style={{ width: 100 }} />
          </ReactBootStrap.Navbar.Brand>
      }
      <ReactBootStrap.Navbar.Brand style={theme} id="Dev-name" href="/">{SITE_DATA.developerName}</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <div style={theme} className="links">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link id="home-link-name" href="/Home">HOME</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link id="projects-link-name" href="/Projects">PROJECTS</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link id="contacts-link-name" href="/Contacts">CONTACTS</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </div>
        <ReactBootStrap.Nav>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  )
}


