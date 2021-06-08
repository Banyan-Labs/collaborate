
import React, { useContext } from 'react';
import ProjectCard from './ProjectsCard';

import ThemeContext from '../../theme-context';



export default function ProjectsSection(props) {
    const theme = useContext(ThemeContext);
    return (

        <div style={theme} className="mt-3">

            <div>

                <ProjectCard key={Math.random()} />


            </div>
        </div>

    )
}