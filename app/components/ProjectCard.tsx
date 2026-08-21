import type { Project }  from "../types/project";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({
    project,
}: ProjectCardProps){
    return (
        <article style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            backgroundColor: "brown",
            boxShadow: "12px 12px 2px 1px rgb(0 0 255 / 0.2)",
            maxWidth: "400px",
        }}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <p>Technology: {project.technology}</p>
            {project.year ? (<p>year: {project.year}</p>
            ):(
                <p>Year: Not specified</p>
            )}
        </article>
    );
}