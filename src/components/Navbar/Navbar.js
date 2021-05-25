
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

class Navbar extends React.Component {
  render() {
    return(
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Collaborate</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="/About">About</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/Blog">Blog</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/Contact">Contact</ReactBootStrap.Nav.Link>          
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>      
    )
  }
}
export default Navbar;
