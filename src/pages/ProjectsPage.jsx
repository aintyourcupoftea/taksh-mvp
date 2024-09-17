import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/molecules/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { getLevel } from '../utils/api'; // Import the getProjects function
import styles from "../styles/projectspage.module.css";
import { useLocation } from 'react-router-dom';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const { levelId } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects using getProjects
    const fetchProjects = async () => {
      try {
        const response = await getLevel(levelId); // You can pass params if needed
        if (response.data && Array.isArray(response.data)) {
          console.log(response.data);
          setProjects(response.data);
        }
      } catch (err) {
        setError('Failed to fetch projects.');
      } finally {
        setLoading(false);
      }
    };
    if (levelId) {
      fetchProjects();
    }
  }, [levelId]);

  return (
    <div className='my-body'>
      <div className={styles['projects-container']}>
        <div className={styles['projects-header']}>
          <h1 className={styles['projects-title']}>{`Level ${levelId || 'Projects'}`}</h1>
          <h3 className={styles['projects-subtitle']}>
            No more theory, time to build something dope.
          </h3>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={styles['projects-grid']}
          >
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                >
                  <ProjectCard project={{ ...project, time: formatTime(project.time) }} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;