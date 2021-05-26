
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

class Navbar extends React.Component {
  render() {
    return(
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Introducing</ReactBootStrap.Navbar.Brand>
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
