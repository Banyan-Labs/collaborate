import React from 'react';
import ProjectCard from './ProjectCard';
import { SITE_DATA } from '../../site-data';
import { CardGroup, Container } from 'react-bootstrap';
import './card.css';


export default function ProjectsSection(props) {

    return (


        <Container fluid>

            <div className="card-group">
                <CardGroup >

                    {SITE_DATA.projects.map(item =>

                        <ProjectCard key={item} image={item.thumbnailImage} name={item.projectName}
                            description={item.projectDescription} git={item.githubUrl} site={item.liveSiteUrl} />

                    )}

                </CardGroup>
            </div>
        </Container>

    )
}