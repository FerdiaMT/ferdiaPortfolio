import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <div className="projects">
        <h1>Projects</h1>
        <p>Here are some of my projects:</p>

        <div className="project-list">
            <ProjectCard
                image="https://raw.githubusercontent.com/FerdiaMT/ferdiaPortfolio/main/src/assets/portfolio.png"
                title="Portfolio Website"
                description="This is my portfolio website, built with React and Vite."
                link=""
            />

            <ProjectCard
                image="https://raw.githubusercontent.com/FerdiaMT/EtymologySearch/refs/heads/main/thumbnail.png"
                title="Etymology Search"
                description="A React app that highlights the etymology of words in a sentence. Powered by a custom Flask API scraping."
                link="https://github.com/FerdiaMT/EtymologySearch"
            />


        </div>

        </div>
    )
}

export default Projects;