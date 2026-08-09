import ProjectCard from "../components/ProjectCard";

type Project = {
  title: string;
  description: string;
  technology: string;
  year: number;
};

const projects: Project[] = [
  {
    title: "AI Notes & Quiz App",
    description: "An AI-powered notes and quiz application.",
    technology: "Next.js",
    year: 2026,
  },
  {
    title: "MediStock",
    description: "A medicine inventory management system.",
    technology: "React",
    year: 2025,
  },
  {
    title: "FreeCodeCamp Projects",
    description: "My completed FreeCodeCamp projects.",
    technology: "JavaScript",
    year: 2024
  },
];

export default function Projects() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>My Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          technology={project.technology}
          year={project.year}
        />
      ))}
    </main>
  );
}