import ProjectCard from "../components/ProjectCard";
import "../style/projects.css";

const projects = [
  { id: 1, title: "Portfolio Website" },
  { id: 2, title: "Ecommerce App" },
  { id: 3, title: "Dashboard UI" },
];

export default function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
