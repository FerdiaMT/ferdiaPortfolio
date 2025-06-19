import React from 'react';
import './../ProjectCard.css'; 

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card-content">
          <img src={image} alt={title} className="card-image" />
          <div className="card-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
