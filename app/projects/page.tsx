import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "AI Notes & Quiz App",
    description: "An AI-powered notes and quiz application.",
    technology: "TypeScript",
    year: 2026,
  },
  {
    title: "MediStock",
    description: "A medicine inventory management system.",
    technology: "Node.js",
    year: 2025,
  },
  {
    title: "FreeCodeCamp Projects",
    description: "My completed FreeCodeCamp projects.",
    technology: "JavaScript",
    year: 2024,
  },
  {
    title: "My New Project",
    description: "Something I'm building",
    technology: "Next.js",
  }
];

export default function Projects() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>My Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </main>
  );
}