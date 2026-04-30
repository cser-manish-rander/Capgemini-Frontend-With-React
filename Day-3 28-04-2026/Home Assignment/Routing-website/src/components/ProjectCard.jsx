function ProjectCard({ image, title, desc }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button>View Details</button>
      </div>
    </div>
  );
}

export default ProjectCard;