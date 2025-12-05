// src/components/ProjectCard.tsx
import type { Project } from "../../data/projects";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardStyle = {
    backgroundColor: project.bgColor,
  };

  return (
    <div className="project-card" style={cardStyle}>
      <div className="card-content">
        <div>
          <div className="card-tags">
            {project.tech.map((t) => (
              <span key={t} className="tag-item">
                {t}
              </span>
            ))}
          </div>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-description">{project.description}</p>
        </div>

        <div className="card-actions">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Ver Demo 🚀
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            Código 💻
          </a>
        </div>
      </div>

      <img src={project.image} alt={project.title} className="card-image" />
    </div>
  );
};
