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
                I am a fullstack developer graduating from Rutgers Coding Bootcamp.
                <br></br>
                <br></br>
                Click the "Portfolio" text at the top right of the page to check out my portfolio of projects!
                <br></br>Click "Resume" to see my resume (to be uploaded)
                <br></br>and click "Contact" to see where you can contact me!.
            </p>
        </section>
    )
}