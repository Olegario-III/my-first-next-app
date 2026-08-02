export default function Skills() {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js"
  ];

  return (
    <section>
      <h2>My Skills</h2>

      {skills.map((skill) => (
        <p key={skill}>{skill}</p>
      ))}
    </section>
  );
}