import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SITE_DATA } from '../../site-data'
import { Card, CardGroup } from 'react-bootstrap';

function ProjectCard(props) {
    return (

        <div>
            <div className="mb-5 border border-bottom-3 border-warning">
                <h1 style={{ textAlign: 'center', color: 'indigo', fontFamily: 'Algerian' }}>Project Page</h1>
            </div>

            <CardGroup>
                <Card className="mr-3 mb-5 ml-2">
                    <Card.Img className=" border border-info border-4" variant="top" src={SITE_DATA.projects[0].thumbnailImage} alt="..." responsive />
                    <Card.Body className=" border border-info border-4">
                        <Card.Title className=" border border-primary border-bottom-4" style={{ textAlign: 'center', color: 'navy' }}><h2>{SITE_DATA.projects[0].projectName}</h2></Card.Title>
                        <Card.Text className='color-info'>
                            <h5 style={{ color: 'navy' }}>About project:</h5>
                            <p className='color-info'>{SITE_DATA.projects[0].projectDescription}</p>
                        </Card.Text>
                    </Card.Body >
                    <Card.Footer className="border border-info border-4" style={{ textAlign: 'center', fontFamily: 'Algerian' }}>
                        <a className="btn btn-primary mr-5" href={SITE_DATA.projects[2].githubUrl} >Banyan Labs Github</a>
                        <hr />
                        <a className="btn btn-primary mr-5" href={SITE_DATA.projects[2].liveSiteUrl}  >Banyan Labs</a>
                    </Card.Footer>
                </Card>

            </CardGroup>

        </div>

    )
}

export default ProjectCard;