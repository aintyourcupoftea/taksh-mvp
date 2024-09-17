import React from 'react'
import { useEffect, useState } from 'react';
import { FaUserCircle, FaClock, FaDiscord } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { RiEditLine } from "react-icons/ri";
import { getProjects } from '../utils/api';

const ProjectDetailsPage = () => {

  const { lvl, id } = useParams();  // Extract lvl and id from the route
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProjects(lvl, id);  // Pass both lvl and id
        setProject(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProject();
  }, [lvl, id]);  // Add lvl to the dependencies

  if (!project) {
    return <p>No product found.</p>;
  }

  const formatTime = (time) => {
    if (time <= 24) {
      return `${time} hrs`;
    } else if (time <= 36) {
      return `1 Day`;
    } else {
      const days = Math.round(time / 24);
      return `${days} Days`;
    }
  };
  return (
    <div className="bg-primary container mx-auto px-0 py-5 ">

      {/*  Main Title  */}
      <header className="text-center my-1 ">
        <h1 className="text-5xl font-bungee mb-0 inline-block mx-auto">{project.title}</h1>
        <p className="text my-1">{project.oneliner}</p>
      </header>
      {/* Project Image  */}
      <div className="max-w-3xl mx-auto mt-5">
        <img src={project.image} alt={project.title} className="rounded-lg w-full" />
      </div>
      {/* Contributor */}
      <div className="font-suse max-w-3xl mx-auto no-underline mt-6" itemProp="author">
        <div className="flex justify-between items-start">
          {/* Project Contributor Section */}
          <div className="text-lg">
            <FaUserCircle size={48} className="" />
            <span>Project Contributor</span>
            <a className="no-underline ml-2" href="#">{project.contributors}</a>
            <div className="text-sm">and Team</div>

            {/* Clock Icon and Time to Complete */}
            <div className="flex items-center mt-4 ">
              <FaClock size={24} className="mr-2" />
              <span>{formatTime(project.time)} </span> {/* Placeholder for project time */}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="text-center font-suse text-1xl mb-15 max-w-3xl">
            <h2>Tech Stack</h2>
            <div className="flex flex-wrap justify-end">
              {project.techStack.split(',').map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between rounded-lg bg-black bg-opacity-30 shadow-xl aspect-square p-6 w-auto h-auto m-2 border-b-4 border-gray-600"
                >
                  <img src="/placeholder.svg" alt={tech} className="m-0" />
                  <h1 className="mt-4 text-center text-white">{tech}</h1> {/* Name below the image */}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>


      <div className="mx-auto w-64 h-1 my-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>

      <article className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bungee border-gray-600 pb-2 inline-block mt-2">Why this project ? 🤔</h2>
        <p>{project.why}</p>
      </article>

      <article className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bungee border-gray-600 pb-2 inline-block mt-2">What are we building ?🔨</h2>
        <p>{project.what}</p>
      </article>

      <article className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bungee  border-gray-600 pb-2 inline-block mt-2">Am I ready for this ?</h2>
        <ul>
          {project.prerequisites.split(',').map((task, index) => (
            <li key={index}>{task.trim()}</li>
          ))}
        </ul>
      </article>
      <div className="mx-auto w-24 h-1 mb-16 mt-0 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
      <article className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bungee  border-gray-600 pb-2 inline-block mt-2">Resources</h2>
        <ul>
          {Object.entries(project.resources).map(([label, url], index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </article>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bungee border-gray-600 pb-2 inline-block mt-2">Walk with "Dhara"</h2>
      </div>

      <div className="flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-0 mt-5">
          {project.milestones.split(',').map((milestone, index) => (
            <li key={index} className="max-w-sm overflow-hidden shadow-xl bg-gray-800 p-6 rounded-xl relative hover:scale-105 transition-transform">
              <span className="absolute -top-2 -left-5 font-display leading-6 text-center text-3xl w-10 h-10 rounded-full p-2">
                🚀
              </span>
              <h5>
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-0">
                  {String(index + 1).padStart(2) + ". "}
                </span >
                {milestone.trim()}
              </h5>
              <p className="text-secondary">Step description goes here</p>
            </li>
          ))}
        </ul>
      </div>
      {/* Discord Icon with Link */}
      <div className="max-w-3xl mx-auto mt-5">
        <a
          href={project.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-blue-700"
        >
          <FaDiscord size={55} className="flex items-center " />
          <h1 className="ml-4 font-bungee"> Guild Hall</h1> {/* Text with margin-right */}
        </a>
        <div className="mt-6 text-center">
          <button
            // onClick={handleActionClick} // Replace with your action handler
            className="bg-primary-500 hover:bg-secondary text-black font-bold font-suse  py-2 px-4 rounded"
          >
            Booooom! 🔥 Completed the project
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-5">
        {/* Example clickable RiEditLine icon */}
        <a
          // href="/your-target-page" 
          className="text-blue-500 hover:text-blue-700"
        >
          <RiEditLine size={55} />
        </a>
      </div>
    </div>
  )
}

export default ProjectDetailsPage;