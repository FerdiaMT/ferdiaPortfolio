import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return(
    <section id = "about" className = "py-24 px-4 relative">
        {" "}
        <div className = "container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className = "text-primary">Me</span>
            </h2>

            <div className = "grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className= "space-y-6">
                    <h3 className = "text-2xl font-semibold">Who I Am</h3>

                    <p className = "text-muted-foreground">
                       I am a third year Computer Science and Software Engineering student at Maynooth University with a strong interest in full stack development and systems programming. I enjoy building both high level applications and low level tools that deepen my understanding of how software works.
                        </p>
                    <p className = "text-muted-foreground">
                        Recently, I have been working on a GameBoy emulator in C++ and developing web apps using React and Node.js. 
                        <p></p>I am currently seeking a software engineering internship starting in January 2026, where I can apply my skills, learn from experienced developers, and contribute to real-world projects.
                    </p>

                    <div className = "flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                        <a href="#contact" className = "cosmic-button px-6 py-2 rounded-full bg-primary text-white">
                            {" "}
                            Get in Touch 
                        </a>

                        <a href="/Ferdia_Matti_Treacy_CV.pdf" className = "px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300" download>
                            {" "}
                            Download my CV
                        </a>

                    </div>

                </div>

                <div className = "grid grid-cols-1 gap-6">


                    <div className = "gradient-border p-6 card-hover">

                        <div children className = "flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                        </div>

                        <div className = "text-left">
                            <h4 className="font-semibold text-lg"> Achivements </h4>
                            <p className = "text-muted-foreground"> Year 1 Grade: 88.3%</p>
                            <p className = "text-muted-foreground"> Year 2 Grade: 86.7%</p>
                            <p className = "text-muted-foreground"> Data Structures and Algorithms Average: 95%</p>
                            <p className = "text-muted-foreground"> 1st Place in CS society Hackathon December 2024</p>
                            <p className = "text-muted-foreground"> Ranked Third in course for 2023-2024 Year</p>

                            <p className = "text-muted-foreground"> Recieved Mentorship from Microsoft </p>
                        </div>

                    </div>

                    <div className = "gradient-border p-6 card-hover">

                        <div children className = "flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                        </div>

                        <div className = "text-left">
                            <h4 className="font-semibold text-lg"> Employment </h4>
                            <p className = "text-muted-foreground"> </p>
                            <p className = "text-muted-foreground"> Currently seeking an internship</p>
                            <p className = "text-muted-foreground"> Available from January 2026</p>
                            <p></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}