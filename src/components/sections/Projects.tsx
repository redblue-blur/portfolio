import ProjectCard from "../ProjectCard";

export const Projects = () => {
    return (
        <section id="projects" className="projects section is-medium">
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="columns">
                    <div className="column is-multiline is-6">
                        <ProjectCard username="redblue-blur" repository="project 1" />
                    </div>
                    <div className="column is-multiline is-half">
                        <ProjectCard username="redblue-blur" repository="movie-recommendation" />
                    </div>
                </div>
                <h1>About yourself</h1>
                <div className="colums">
                    <div className="column is-full">
                        <p
                            style={{ 
                                textAlign: "center",
                                fontSize: "1.2rem",
                            }}
                        >
                            Enter more about yourself.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
