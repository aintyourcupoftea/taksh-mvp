// ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/projectcard.module.css';
import { FaClock } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const { title, description, time, image } = project;

  return (
    <motion.div
      className={styles['project-card']}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <img src={image} alt={title} className={styles.thumbnail} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.time}>
          <p>{<FaClock />} {time}</p>
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;