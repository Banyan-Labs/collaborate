import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';
import './card.css'



function ProjectCard(props) {
    return (
        <div>
            <Card bsPrefix='card-group' style={{ width: '24rem', height: '30rem' }} text="white" className="ml-5 mr-5 mb-4 mt-2 cards cardDeckTwo">

                <div style={{ backgroundColor: " rgb(155, 148, 148)" }}>
                    <Card.Img style={{ width: "95%", height: "250px", borderRadius: "10%", marginLeft: "12px" }} className=".img-thumbnail cardImg" variant="top" src={props.image} alt="project" />
                </div>
                <Card.Body className="cardB">
                    <Card.Title as='h2' style={{ color: 'white' }}><h2>{props.name}</h2></Card.Title>
                    <Card.Text >

                        <p style={{ color: 'white' }}>{props.description}</p>
                    </Card.Text>
                </Card.Body >
                <Card.Body style={{ color: 'white', backgroundColor: " rgb(155, 148, 148) " }} className="linkHolder"  >
                    <a style={{ color: 'white', backgroundColor: "lime" }} className="btn btn-secondary mr-5 ml-1" href={props.git} >View Code</a>

                    <a style={{ color: 'white', backgroundColor: "navy", marginLeft: '150px', float: 'right' }} className="btn btn-secondary ml-5" href={props.site} >View Live</a>
                </Card.Body>
            </Card>



        </div>


    )
}

export default ProjectCard;