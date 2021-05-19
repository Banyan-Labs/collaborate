import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "./Hero.css";

export default class Hero extends Component {
    render() {
        return (
            <div className="main-hero hero">

                <header className='text-heading'><h1>TITLE PAGE</h1></header>
                <h3 className='text-hero'>  Enim eiusmod high life accusamus
                terry richardson ad squid. </h3>


                <Button className='btn' variant="primary outline-danger" size="lg" active>
                    Activate
                   </Button>


            </div>
        );
    }
}