import React from 'react';
import ProjectCard from '../components/molecules/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description 1', time: '2 hours', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description 2', time: '3 hours', image: 'path/to/image2.jpg' },
    { id: 1, title: 'Project 1', description: 'Description 1', time: '2 hours', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description 2', time: '3 hours', image: 'path/to/image2.jpg' },
    { id: 1, title: 'Project 1', description: 'Description 1', time: '2 hours', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description 2', time: '3 hours', image: 'path/to/image2.jpg' },
    { id: 1, title: 'Project 1', description: 'Description 1', time: '2 hours', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description 2', time: '3 hours', image: 'path/to/image2.jpg' },
    { id: 1, title: 'Project 1', description: 'Description 1', time: '2 hours', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description 2', time: '3 hours', image: 'path/to/image2.jpg' },
   
    // Add more projects
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;