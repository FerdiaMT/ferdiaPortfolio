import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return(
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className = "container max-w-4xl mx-auto z-10">
                <div className = "space-y-6">
                    <h1 className = "text-4xl md:text-6xl font-bold tracking-tight">
                        <span className = "opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className = "text-primary opacity-0 animate-fade-in-delay-1">Ferdia </span>
                        <span className = "text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Treacy</span>

                    </h1>

                    <p className = "text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Im a third year Computer Science and Software Engineering student at Maynooth University.   <br></br>
                        I enjoy building full stack web apps and low level systems.                                    <br></br>
                        Currently seeking a software engineering internship for January 2026.
                    </p>

                    <div className = "pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button px-6 py-2 rounded-full bg-primary text-white">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className = "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className = "text-sm text-muted-foreground mb-2"> Scroll</span>
                <ArrowDown className="h-6 w-6 text-primary mt-2 animate-pulse" />
            </div>

        </section>
    )
}