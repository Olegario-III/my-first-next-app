import Skills from "./components/Skills";

export default function Home() {
  const name: string = "Olegario Aleno";
  const course: string = "BSIT";
  const favp: string = "javaScript"
  const certificate: number = 20;
  const isLearningNext: boolean = true;
  const year: number = 4;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Hello, {name}!</h1>

      <p>Course: {course}</p>

      <p>Favorite programming language is {favp}</p>

      <p>Certificate: {certificate}</p>

      <p>Studying Next js {isLearningNext.toString()}</p>

      <p>Year: {year}</p>

      <Skills />
    </main>
  );
}