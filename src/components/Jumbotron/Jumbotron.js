import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SITE_DATA } from '../../site-data'
import './Jumbotron.css'

function Jumbo() {
    return (
        <Jumbotron id="layout">
            <div>
                <h1>{SITE_DATA.jumbotronText.heading}</h1>
                <p>{SITE_DATA.jumbotronText.subheading}</p>
                <button id='button' href="Profile Page">{SITE_DATA.jumbotronText.buttonText}</button>
            </div>
        </Jumbotron>

    )
}

export default Jumbo
