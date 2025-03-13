import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
              <h3>Social Medias</h3>
                <a href="https://github.com/joeyrodo"
                   className= "github social">
                   <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/joseph-rodante-358913286"
                   className= "linkedin social">
                   <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="mailto:joeyrodo@gmail.com"
                   className= "email">
                   <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
                
        </footer>
    );
}