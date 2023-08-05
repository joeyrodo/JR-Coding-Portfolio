import React, { useState } from "react";
import Project from "../Project/Project";
import './portfolio.css'
import SCREENSHOTS from "../../assets/project-pictures/index.js";


export default function Portfolio() {
    const [projects] =  useState([
        {
            title: 'Explore Beyond',
            image: SCREENSHOTS.ExploreBeyond,
            deployedLink: "https://knudsam.github.io/explore-nearby/",
            github: "https://github.com/knudsam/explore-nearby",
        },
        {
            title: 'JavaScript Quiz',
            image: SCREENSHOTS.JSQuiz,
            deployedLink: "https://joeyrodo.github.io/JavaScript-Quiz/",
            github: "https://github.com/joeyrodo/JavaScript-Quiz",
        },
        {
            title: 'Password Generator',
            image: SCREENSHOTS.PWGen,
            deployedLink: "https://joeyrodo.github.io/Password-Generator/",
            github: "https://github.com/joeyrodo/Password-Generator",
        },
        {
            title: 'SVG Logo Maker',
            image: SCREENSHOTS.SVGMaker,
            deployedLink: "https://github.com/joeyrodo/SVG-Generator",
            github: "https://github.com/joeyrodo/SVG-Generator",
        },
        {
            title: 'Work Day Scheduler',
            image: SCREENSHOTS.WDScheduler,
            deployedLink: "https://joeyrodo.github.io/Work-Day-Scheduler/",
            github: "https://github.com/joeyrodo/Work-Day-Scheduler",
        },
        {
            title: 'Weather Dashboard',
            image: SCREENSHOTS.WeatherDB,
            deployedLink: "https://joeyrodo.github.io/Weather-Dashboard/",
            github: "https://github.com/joeyrodo/Weather-Dashboard",
        },
    ]);

    return (
        <section className="project-space">
            <h2>My Projects</h2>
            <div className="portfolio-sections">
                {projects.map((project, index) => (
                <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}