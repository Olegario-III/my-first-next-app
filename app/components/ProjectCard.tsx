type ProjectCardProps = {
    title: string;
    description: string;
    technology: string;
    year: number;
};

export default function ProjectCard({
    title,
    description,
    technology,
    year,
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
            <h2>{title}</h2>

            <p>{description}</p>

            <p>Technology: {technology}</p>
            <p>year: {year}</p>
        </article>
    );
}