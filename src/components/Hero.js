import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Background from '../images/backgroupg';
import "./Hero.css";

export default class Her0 extends PureComponent {
    render() {
        return (
            <div className="main-hero">
                <img className="hero-img" src={Background} />
                <Image className="hero2-img" src="../images/hero1.jpg" fluid />
                <Button variant="secondary" size="lg" active>
                    Button
                </Button>


            </div>
        );
    }
}