import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css'

function Navigation() {
    return(
    <nav>
        <ul className= "nav-bar">
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'red':''}}}
                to="/" className="about-me">About Me</NavLink> 
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'red':''}}}
                to="/portfolio" className="portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'red':''}}}
                to="/resume" className="resume">Resume</NavLink>
            </li>
        </ul>
    </nav>
    );
}

export default Navigation;