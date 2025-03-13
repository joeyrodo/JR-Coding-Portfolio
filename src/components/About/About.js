import React from "react";
import frontpic from "../../assets/pictures/joeypic.png"
import './about.css'

export default function About() {
    return (
        <section className="About-Me">
        <h2>About Me</h2>
        <div className="pic-container">
        <img src={frontpic} alt="This is me, Joseph Rodante!" className="joeypic" />
        </div>
            <p>
                Hello there! My name is Joseph Rodante. <br></br>
                I am a fullstack developer graduated from Rutgers Coding Bootcamp.
                <br></br>Trained in UI Development, Databases, and full-stack web apps.
                <br></br>
                <br></br>
                See my projects in the "Portfolio" tab
                <br></br>Click "Resume" to dowload my resume
                <br></br>See my social media at the bottom of the page
                <br></br>Email me at joeyrodo@gmail.com
            </p>
        </section>
    )
}