import React from "react";
import joeypic from "../../assets/pictures/joeypic.png";
import './resume.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5, 
    faCss3,
    faGit,
    faJs,
    faBootstrap,
    faNodeJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
    return (
        <section className="Home">
            <div className="img-cont">
                <img src={joeypic} alt="Me!" className="selfie" />
            </div>
            <div className="tech-list">
                <h2>
                    Developer Proficiencies
                </h2>
                <ul className= "Proficiencies">
                    <li>
                        <FontAwesomeIcon icon={faHtml5} color="#e34f26" size="4x" />
                        <h1>HTML</h1>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCss3} color="#1680C0" size="4x" />
                        <h1>CSS</h1>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGit} color="#333" size="4x" />
                        <h1>Git</h1>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faJs} color="#F0DB4F" size="4x" />
                        <h1>JavaScript</h1>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBootstrap} color="#514999" size="4x" />
                        <h1>Bootstrap</h1>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNodeJs} color="#529d42" size="4x" />
                        <h1>NodeJS</h1>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDatabase} color="#5d84f2" size="4x" />
                        <h1>SQL</h1>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faReact} color="#00d7fe" size="4x" />
                        <h1>React</h1>
                    </li>
                </ul>
            </div>
            <a href="/Joseph Rodante Fullstack Developer Resume (1).pdf" download> <h2>Download my resume here!</h2> </a>
        </section>
    )
}