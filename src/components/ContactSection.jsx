import { Github, Linkedin, Mail, Phone } from "lucide-react";



export const ContactSection = () => {
    return(
    <section id = "contact" className = "py-24 px-4 relative bg-secondary/30">
            <div className = "container mx-auto max-w-5xl">

                <h2 className = "text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className = "text-primary"> Touch </span>
                </h2>

                <p className = "text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                   Feel free to reach out. I am open to internship opportunities, collaboration, or just a chat.
                </p>

                <div className = "grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className = "space-y-8">
                        <h3 className = "text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className = "space-y-6 justify-center">

                            <div className = "flex items-start space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/> {" "}
                                </div>

                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href = "mailto:ferdiatreacy@gmail.com" className= "text-muted-foreground hover:text-primary transition-colors duration-300">
                                        ferdiatreacy@gmail.com
                                    </a>
                                </div>

                            </div>

                            <div className = "flex items-start space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/> {" "}
                                </div>

                                <div>
                                    <h4 className="font-medium">Phone Number</h4>
                                    <p  className= "text-muted-foreground hover:text-primary transition-colors duration-300">
                                        +353 087 7842 759
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                     <div className = "space-y-8">
                        <h3 className = "text-2xl font-semibold mb-6">Socials</h3>

                        <div className = "space-y-6 justify-center">


                            <div className = "flex items-start space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"/> {" "}
                                </div>

                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a href = "https://www.linkedin.com/in/ferdia-matti-treacy-0a3423331/" className= "text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Ferdia Matti Treacy
                                    </a>
                                </div>

                            </div>

                            <div className = "flex items-start space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Github className="h-6 w-6 text-primary"/> {" "}
                                </div>

                                <div>
                                    <h4 className="font-medium">GitHub</h4>
                                    <a href = "https://github.com/FerdiaMT" className= "text-muted-foreground hover:text-primary transition-colors duration-300">
                                        FerdiaMT
                                    </a>
                                </div>

                            </div>


                            
                        </div>
                    </div>



                </div>
            </div>

    </section>
);
}