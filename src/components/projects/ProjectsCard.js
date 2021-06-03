import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SITE_DATA } from '../../site-data';
import { Card, CardGroup } from 'react-bootstrap';




function ProjectsCard(props) {
    return (
        <div>
            <CardGroup>
                {SITE_DATA.projects.map(item => {
                    return (

                        <Card style={{ width: '30rem' }} className="mr-3 mb-5 ml-2 mt-5">
                            <Card.Header as="h1" className="text-center border border-info " style={{ color: 'indigo' }}>PROJECT</Card.Header>
                            <Card.Img className=" border border-info border-4 .img-thumbnail" variant="top" src={item.thumbnailImage} alt="..." responsive />
                            <Card.Body className=" border border-info border-4">
                                <Card.Title as='h2' className=" border border-primary border-bottom-4" style={{ textAlign: 'center', color: 'navy' }}><h2>{item.projectName}</h2></Card.Title>
                                <Card.Text className='color-info'>
                                    <h5 style={{ color: 'navy' }}>Project Description:</h5>
                                    <p style={{ color: 'skyblue' }}>{item.projectDescription}</p>
                                </Card.Text>
                            </Card.Body >
                            <Card.Footer className="border border-info border-4" >
                                <Card.Link className="btn btn-info" href={item.githubUrl} >Banyan Labs Github</Card.Link>
                                {/* <hr /> */}
                                <Card.Link className="btn btn-primary" href={item.liveSiteUrl} >Banyan Labs</Card.Link>
                            </Card.Footer>
                        </Card>
                    );
                })}

            </CardGroup>

        </div>
    )
}

export default ProjectsCard;

{/* <ProjectCard key={Math.random()} name={item.projectName} description={item.projectDescription} image={item.thumbnailImage} git={item.GithubUrl}
                            site={item.liveSiteUrl} /> */}
// style={{ textAlign: 'center', fontFamily: 'Algerian' }}