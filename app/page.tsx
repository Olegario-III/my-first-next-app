import Skills from "./components/Skills";
import Counter from "./components/Counter";

export default function Home() {
  const name: string = "Olegario Aleno";
  const course: string = "BSIT";
  const favp: string = "javaScript"
  const certificate: number = 20;
  const isLearningNext: boolean = true;
  const year: number = 4;
  const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js"
];
const projects: string[] = [
  "AI Notes & Quiz App",
  "MediStock",
  "FreeCodeCamp Projects"
];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Hello, {name}!</h1>

      <p>Course: {course}</p>

      <p>Favorite programming language is {favp}</p>

      <p>Certificate: {certificate}</p>

      <p>Studying Next js {isLearningNext.toString()}</p>

      <p>Year: {year}</p>

      <Skills skills = {skills}/>

      {projects.map((project)=>(
        <p key={project}>{project}</p>
      ))}

      <Counter />
    </main>
  );
}