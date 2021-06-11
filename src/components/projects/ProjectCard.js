import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from '../../theme-context';
import { Card } from 'react-bootstrap';
import './card.css'



function ProjectCard(props) {
    const theme = useContext(ThemeContext);
    return (

        <Card style={theme} text="white" className="ml-4 mr-5 mb-4 mt-2 cards ">

            <div className="cardColor" style={theme}>
                <Card.Img style={{ width: "95%", height: "250px", borderRadius: "10%", marginLeft: "12px" }} className=".img-thumbnail cardImg" variant="top" src={props.image} alt="project" />
            </div>
            <Card.Body style={theme} className="cardB">
                <Card.Title as='h2' style={theme}><h2>{props.name}</h2></Card.Title>
                <Card.Text style={theme}>

                    <p style={theme}>{props.description}</p>
                </Card.Text>
            </Card.Body >
            <Card.Body style={theme} className="linkHolder"  >
                <a style={{ color: 'white', backgroundColor: "lime" }} className="btn btn-secondary mr-5 ml-1" href={props.git} >View Code</a>

                <a style={{ color: 'white', backgroundColor: "navy", marginLeft: '150px', float: 'right' }} className="btn btn-secondary ml-5" href={props.site} >View Live</a>
            </Card.Body>
        </Card>






    )
}

export default ProjectCard;