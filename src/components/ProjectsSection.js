import React from 'react';
import ProjectCard from './projects/ProjectCard';

export default function ProjectsSection(props) {
  return (
    <div className='mt-3'>
      <div>
        <ProjectCard key={Math.random()} />
      </div>
    </div>
  );
}
