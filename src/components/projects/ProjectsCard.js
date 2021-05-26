import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SITE_DATA } from '../../site-data'
import { Card, CardGroup } from 'react-bootstrap';
import ProjectPicture from "./project_images/project_default1.png";
import ProjectPicture2 from "./project_images/project_default2.png";
import ProjectPicture3 from "./project_images/project_default3.jpg";





function ProjectCard(props) {
    return (

        <div>
            <div className="mb-5 border border-bottom-3 border-warning">
                <h1 style={{ textAlign: 'center', color: 'indigo', fontFamily: 'Algerian' }}>Project Page</h1>
            </div>

            <CardGroup>
                <Card className="mr-3 mb-5 ">
                    <Card.Img variant="top" src={SITE_DATA.projects[0].thumbnailImage} class="rounded-2" alt="..." responsive />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', color: 'navy' }}><h2>{SITE_DATA.projects[0].projectName}</h2></Card.Title>
                        <Card.Text>
                            <h5>About project:</h5>
                            <p>{SITE_DATA.projects[0].projectDescription}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center', fontFamily: 'Algerian' }}>
                        <a className="btn btn-primary mr-5" href={SITE_DATA.projects[2].githubUrl} >Banyan Labs Github</a>
                        <hr />
                        <a className="btn btn-primary mr-3" href={SITE_DATA.projects[2].liveSiteUrl}  >Banyan Labs</a>
                    </Card.Footer>
                </Card>
                <Card className="mr-3 mb-5">
                    <Card.Img variant="top" src={SITE_DATA.projects[1].thumbnailImage} responsive />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', color: 'navy' }}><h2>{SITE_DATA.projects[1].projectName}</h2></Card.Title>
                        <Card.Text>
                            <h5>About project:</h5>
                            <p>{SITE_DATA.projects[1].projectDescription}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center', fontFamily: 'Algerian' }}>
                        <a className="btn btn-primary mr-5" href={SITE_DATA.projects[2].githubUrl} >Banyan Labs Github</a>
                        <hr />
                        <a className="btn btn-primary mr-3" href={SITE_DATA.projects[2].liveSiteUrl}  >Banyan Labs</a>
                    </Card.Footer>
                </Card>
                <Card className="mr-3 mb-5">
                    <Card.Img variant="top" src={SITE_DATA.projects[2].thumbnailImage} responsive />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center', color: 'navy' }}><h2>{SITE_DATA.projects[2].projectName}</h2></Card.Title>
                        <Card.Text>
                            <h5>About project:</h5>
                            <p>{SITE_DATA.projects[2].projectDescription}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center', fontFamily: 'Algerian' }}>
                        <a className="btn btn-primary mr-5" href={SITE_DATA.projects[2].githubUrl} >Banyan Labs Github</a>
                        <hr />
                        <a className="btn btn-primary mr-3" href={SITE_DATA.projects[2].liveSiteUrl}  >Banyan Labs</a>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>

    )
}

export default ProjectCard;