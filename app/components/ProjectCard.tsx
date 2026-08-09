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
        <article>
            <h2>{title}</h2>

            <p>{description}</p>

            <p>Technology: {technology}</p>
            <p>year: {year}</p>
        </article>
    );
}