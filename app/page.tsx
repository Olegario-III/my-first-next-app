import Skills from "./components/Skills";
import Counter from "./components/Counter";
import ProjectCard from "./components/ProjectCard";
import NameInput from "./components/NameInput";
import UserForm from "./components/UserForm";
import type { Project } from "./types/project";
import type { Skill } from "./types/skill";

export default function Home() {
  const name: string = "Olegario Aleno";
  const course: string = "BSIT";
  const favp: string = "JavaScript";
  const certificate: number = 20;
  const isLearningNext: boolean = true;
  const year: number = 4;
  const skills: Skill[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js"
  ];

  const projects: Project[] = [
    {
      title: "AI Notes & Quiz App",
      description: "An AI-powered notes and quiz application.",
      technology: "React",
      year: 2026,
    },
    {
      title: "MediStock",
      description: "A medicine inventory management system.",
      technology: "React",
      year: 2026,
    },
    {
      title: "FreeCodeCamp Projects",
      description: "My completed FreeCodeCamp projects.",
      technology: "JavaScript",
      year: 2026,
    },
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Hello, {name}!</h1>

      <p>Course: {course}</p>

      <p>Favorite programming language is {favp}</p>

      <p>Certificate: {certificate}</p>

      <p>Studying Next js {isLearningNext.toString()}</p>

      <p>Year: {year}</p>

      <Skills skills={skills} />

      <UserForm />

      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}

      <NameInput />

      <Counter />
    </main>
  );
}