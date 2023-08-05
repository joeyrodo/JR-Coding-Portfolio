import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

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
                <a href="https://twitter.com/leg_irl"
                   className= "twitter social">
                   <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                
        </footer>
    );
}