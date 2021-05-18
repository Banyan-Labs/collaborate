import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Background from '../images/background_hero.jpg';
import "./Hero.css";

export default class Hero extends Component {
    render() {
        return (
            <div className="main-hero hero">
                <header className='text-heading'><h1>HERO PAGE</h1></header>
                <h4 className='text-heading'>  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.</h4>
                <Button variant="secondary" size="lg" active>
                    Activate
                   </Button>


            </div>
        );
    }
}