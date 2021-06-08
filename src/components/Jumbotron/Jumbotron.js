import React, { useContext } from 'react';
import { Jumbotron } from 'react-bootstrap';

import ThemeContext from '../../theme-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SITE_DATA } from '../../site-data'
import './Jumbotron.css'

function Jumbo() {
    const theme = useContext(ThemeContext);
    return (
        <div style={theme}>
            <Jumbotron id="layout">
                <div>
                    <h1>{SITE_DATA.jumbotronText.heading}</h1>
                    <p>{SITE_DATA.jumbotronText.subheading}</p>
                    <button id='button' href="Profile Page">{SITE_DATA.jumbotronText.buttonText}</button>
                </div>
            </Jumbotron>
        </div>
    )
}

export default Jumbo
