
import React from 'react';
import { SITE_DATA } from '../../site-data'
import * as ReactBootStrap from 'react-bootstrap';

class Navbar extends React.Component {
  render() {
    return (
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {
          SITE_DATA.logo === "" ?
            null :
            <ReactBootStrap.Navbar.Brand href="/">
              <img src={SITE_DATA.logo} alt="my-logo" style={{ width: 100 }} />
            </ReactBootStrap.Navbar.Brand>
        }

        <ReactBootStrap.Navbar.Brand href="/">{SITE_DATA.developerName}</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/Home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/Contacts">Contacts</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/Projects">Projects</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    )
  }
}
export default Navbar;
