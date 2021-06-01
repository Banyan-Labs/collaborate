import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SITE_DATA} from '../../site-data'

function Jumbo() {
    return (
        <div>
            <Jumbotron>
                <h1>{SITE_DATA.jumbotronTxet.heading}</h1>
                    <p>{SITE_DATA.jumbotronTxet.subheading}</p>
                    <Button variant="primary" href="Profile Page">{SITE_DATA.jumbotronTxet.buttonText}</Button>                    
            </Jumbotron>
        </div>
    )
}

export default Jumbo
