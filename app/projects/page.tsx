import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "AI Notes & Quiz App",
    description: "An AI-powered notes and quiz application.",
    technology: "TypeScript",
    completedYear: 2026,
    status: "completed",
  },
  {
    title: "MediStock",
    description: "A medicine inventory management system.",
    technology: "Node.js",
    plannedYear: 2025,
    status: "planned",
  },
  {
    title: "FreeCodeCamp Projects",
    description: "My completed FreeCodeCamp projects.",
    technology: "JavaScript",
    completedYear: 2024,
    status: "completed",
  },
  {
    title: "My New Project",
    description: "Something I'm building",
    technology: "Next.js",
    status: "in-progress",
    progress: 40,
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