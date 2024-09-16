import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, image, title, description, time }) => (
  <Link to={`/projects/${id}`} className="block">
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-600 text-sm mt-2">Estimated time: {time}</p>
      </div>
    </div>
  </Link>
);

export default ProjectCard;