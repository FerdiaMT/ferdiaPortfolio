import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [

    {
        id: 1,
        title: "Subtitle Translator",
        description: "I teamed up with five others to build a full stack web app in just 8 weeks, with mentorship from Microsoft. We created a tool that lets users upload movie subtitles, translate and edit them easily, and then export the final version in their preferred language.",
        image: "/projects/mstranslator.PNG",
        tags: ["React", "JavaScript", "CSS","MongoDB", "Azure Web Services"],
        demoUrl: "https://github.com/Shelja-Pugaliya/subtitle-translator",
        githubUrl: "https://github.com/Shelja-Pugaliya/subtitle-translator",
    },

    {
        id: 2,
        title: "DMG Gameboy Emulator",
        description: "I built a Game Boy emulator from scratch in modern C++ using SDL3. It features cycle accurate CPU, PPU, memory, and LCD timing, and utilizes pixel FIFO rendering. The emulator passes all CPU tests, ensuring accuracy and performance.",
        image: "/projects/tetris.png",
        tags: ["C++" , "SDL3", "CMake", "Assembly", "Visual Studio Debugger"],
        demoUrl: "https://github.com/FerdiaMT/Gameboy_Emu_CPP",
        githubUrl: "https://github.com/FerdiaMT/Gameboy_Emu_CPP",
    },

    {
        id: 3,
        title: "Etymology Finder",
        description: "Built a React app that lets users input a sentence and view the etymology of each word. A Flask API scrapes data from etymonline.com using BeautifulSoup4 and connects to the frontend via REST endpoints. Deployed on Heroku for easy access.",
        image: "/projects/etm.png",
        tags: ["React", "Python3", "Flask", "Web Scraping", "Heroku"],
        demoUrl: "https://wordorgins.netlify.app/",
        githubUrl: "https://github.com/FerdiaMT/EtymologySearch",
    }


    
]

export const ProjectSection = () => {

    return(
        <section id = "projects" className = "py-24 px-4 relative">
            <div className = "container mx-auto max-w-5xl">

                <h2 className = "text-3xl md:text-4xl font-bold text-center"> 
                    {" "}
                    Featured <span className = "text-primary"> Projects </span>
                </h2>

                <p className = "text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    These projects highlight my abilities in web development, design, and software engineering.
                </p>

                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, key)=> (

                        <div key={key} className= "group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className = "h-48 overflow-hidden">
                                <img src = {project.image} className = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className = "p-6">

                                <div className = "flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className = "px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className = "text-xl font-semibold mb-1">{project.title}</h3>
                                <p className = "text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className = "flex justify-between items-center pt-4">
                                    <div className = "flex space-x-3">

                                        <a href = {project.demoUrl}  target = "_blank" className = "text-primary hover:text-primary/80 transition-colors duration-300"> 
                                            <ExternalLink size={20}/>
                                        </a>

                                        <a href = {project.githubUrl} target = "_blank" className = "text-primary hover:text-primary/80 transition-colors duration-300"> 
                                            <Github  size={20} />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className = "text-center mt-12">

                    <a className = "cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target = "_blank"
                        rel = "noopener noreferrer"
                        href="https://github.com/FerdiaMT" 
                    >
                        Check Out My Github   <ArrowRight size = {16}/>
                    </a>

                </div>

            </div>
        </section>
    );
}