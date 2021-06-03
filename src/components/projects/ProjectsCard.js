import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SITE_DATA } from '../../site-data';
import { Card } from 'react-bootstrap';
import '../card.css'



function ProjectsCard(props) {
    return (
        <div>
            <div className=" card-group">

                {SITE_DATA.projects.map(item => {
                    return (

                        <Card className="border-info mr-3 mb-5 ml-2 mt-5 card-wrap ">

                            <Card.Img className=" border border-info border-4 .img-thumbnail" variant="top" src={item.thumbnailImage} alt="..." responsive />
                            <Card.Body className=" border border-info border-4">
                                <Card.Title as='h2' className=" border border-primary border-bottom-4" style={{ textAlign: 'center', color: 'navy' }}><h2>{item.projectName}</h2></Card.Title>
                                <Card.Text className='color-info'>
                                    <h5 style={{ color: 'navy' }}>Project Description:</h5>
                                    <p style={{ color: 'skyblue' }}>{item.projectDescription}</p>
                                </Card.Text>
                            </Card.Body >
                            <Card.Footer className="border-info " >
                                <Card.Link className="btn btn-info ml-4" href={item.githubUrl} >Banyan Labs Github</Card.Link>
                                {/* <hr /> */}
                                <Card.Link className="btn btn-primary ml-4" href={item.liveSiteUrl} >Banyan Labs</Card.Link>
                            </Card.Footer>
                        </Card>
                    );
                })}

            </div>

        </div >
    )
}

export default ProjectsCard;

