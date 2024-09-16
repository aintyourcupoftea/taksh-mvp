import React from 'react';

const ProjectDetailsPage = () => {
  // Assuming we have a project object with all the necessary details
  const project = {
    title: 'Sample Project',
    image: 'path/to/image.jpg',
    oneliner: 'A creative intro to this project',
    difficultyLevel: 'Intermediate',
    why: 'Learn important skills',
    what: 'Detailed project description',
    techStack: ['React', 'Node.js', 'MongoDB'],
    skills: ['Web Development', 'Database Management'],
    time: '10 hours',
    prerequisites: ['Basic JavaScript', 'HTML/CSS'],
    resources: ['Link 1', 'Link 2'],
    milestones: ['Step 1', 'Step 2', 'Step 3'],
    discordLink: 'https://discord.gg/example',
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="mb-4 rounded" />
      <p className="text-xl mb-4">{project.oneliner}</p>
      <p className="mb-4">Difficulty: {project.difficultyLevel}</p>
      <h2 className="text-2xl font-bold mb-2">Why this Project?</h2>
      <p className="mb-4">{project.why}</p>
      <h2 className="text-2xl font-bold mb-2">What are we building?</h2>
      <p className="mb-4">{project.what}</p>
      {/* Add more sections for other project details */}
    </div>
  );
};

export default ProjectDetailsPage;