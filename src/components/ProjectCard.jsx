import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="card">
      <h3>{project.title}</h3>
    </Link>
  );
}
