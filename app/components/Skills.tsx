type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section>
      <h2>My Skills</h2>

      {skills.map((skill) => (
        <p key={skill}>{skill}</p>
      ))}
    </section>
  );
}