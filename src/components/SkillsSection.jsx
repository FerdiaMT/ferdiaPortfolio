import React, { useState } from 'react';
import { cn } from "../lib/utils";

const skills = [
    {name: "Java", level: 100, category: "Programming Languages"},
    {name: "C++", level: 95, category: "Programming Languages"},
    {name: "JavaScript", level: 95, category: "Programming Languages"},
    {name: "Python", level: 80, category: "Programming Languages"},
    {name: "C", level: 70, category: "Programming Languages"},
    {name: "Rust", level: 50, category: "Programming Languages"},
    {name: "Assembly", level: 50, category: "Programming Languages"},
    {name: "R", level: 30, category: "Programming Languages"},

    {name: "HTML", level: 100, category: "Web Development"},
    {name: "CSS", level: 80, category: "Web Development"},
    {name: "React", level: 95, category: "Web Development"},
    {name: "Node.js", level: 90, category: "Web Development"},
    {name: "Express.js", level: 80, category: "Web Development"},
    {name: "Tailwind CSS", level: 60, category: "Web Development"},

    {name: "Git", level: 95, category: "Tools"},
    {name: "Visual Studio", level: 95, category: "Tools"},
    {name: "Postman", level: 70, category: "Tools"},
    {name: "MySQL", level: 70, category: "Tools"},
    {name: "MongoDB", level: 70, category: "Tools"},
    {name: "Azure", level: 80, category: "Tools"},
    {name: "SDL3", level: 90, category: "Tools"},
    {name: "CMake", level: 80, category: "Tools"},
    {name: "Flask", level: 80, category: "Tools"},
    {name: "Heroku", level: 70, category: "Tools"},

];

const categories = ["All","Programming Languages","Web Development","Tools"];


export const SkillsSection = () => {

    const[activeCategory, setActiveCategory] = useState("All")

    const filteredSkills = skills.filter(
        (skill) =>
        activeCategory === "All" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary">

            <div className = "container max-w-5xl mx-auto">
               <h2 className = "text-3xl md:text-4xl font-bold text-center mb-12">  
                    My <span className="text-primary">Skills</span> 
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">

                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            className= {cn("px-4 py-2 rounded-full transition-colors duration-300" ,
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-primary/10"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                        {category.charAt(0).toUpperCase() + category.slice(1)}

                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className = "font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className= "w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out " 
                                style={{width: `${skill.level}%`}}
                            />
                            </div>

                            <div className = "text-right mt-1">
                                <span className = "text-sm text-muted-foreground">{`${skill.level}%`}</span>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>

    );
}