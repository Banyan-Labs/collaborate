import React from 'react';
import ProjectCard from './projects/ProjectsCard';




export default function ProjectsSection(props) {

    return (

        <div className="mt-3">
            <div className="mb-5 border border-bottom-3 border-warning">
                <h1 style={{ textAlign: 'center', color: 'violet', fontFamily: 'Algerian' }}>Project Section</h1>
            </div>
            <div>

                <ProjectCard />


            </div>
        </div>

    )
}


