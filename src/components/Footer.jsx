import { ArrowUp } from "lucide-react";



export const Footer = () => {
    return(
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flexbox flex-wrap items-center"> 
            {" "}
            <p className = "text-sm text-muted-foreground justifuy-center"> 
                &copy; {new Date().getFullYear()} ferdia.tech, All rights reserved.{" "}
            </p>

            <a href= "#hero" className="p-2 rounded-full bg-primary/10 hover:pg-primary/20 text-primary transition-colors absolute right-5 top-9"> <ArrowUp size = {20}/></a>
        </footer>
    );
}