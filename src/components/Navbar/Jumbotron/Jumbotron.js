import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Jumbo() {
    return (
        <div>
            <Jumbotron>
                <h1>Welcome, Everyone!</h1>
                    <p>
                        This is a simple page displaying the projects I have currently finished,
                        please feel free to view them!
                    </p>
                    <Button variant="primary"><a href="My Projects"> </a>My Projects</Button>                    
            </Jumbotron>
        </div>
    )
}

export default Jumbo
