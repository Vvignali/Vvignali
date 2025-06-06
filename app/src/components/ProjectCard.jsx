import "../styles/ProjectCard.css"

const ProjectCard = ({ title, image, description }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-card-image" />
    <h3 className="project-card-title">{title}</h3>
    <p className="project-card-description">{description}</p>
  </div>
)

export default ProjectCard
