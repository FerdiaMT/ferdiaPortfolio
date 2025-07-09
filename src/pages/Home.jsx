import { Navbar } from "../components/NavBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground} from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () =>{

    return (
        <div className= "min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        {/* Background Effects */}
            <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main Section */}
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <SkillsSection />
                <ContactSection />
            </main>
        {/* Footer */}
        <Footer/>

        </div>
    );
}