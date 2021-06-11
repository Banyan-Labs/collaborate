import React, { useContext } from 'react'
import ProjectCard from './ProjectCard';
import { SITE_DATA } from '../../site-data';
import ThemeContext from '../../theme-context';
import { CardGroup, Container } from 'react-bootstrap';
import './card.css';


export default function ProjectsSection(props) {
    const theme = useContext(ThemeContext);
    return (


        <Container fluid>

            <div className="card-group">
                <CardGroup className="cardSect"  >

                    {SITE_DATA.projects.map(item =>

                        <ProjectCard style={theme} key={item} image={item.thumbnailImage} name={item.projectName}
                            description={item.projectDescription} git={item.githubUrl} site={item.liveSiteUrl} />

                    )}

                </CardGroup>
            </div>
        </Container>

    )
}