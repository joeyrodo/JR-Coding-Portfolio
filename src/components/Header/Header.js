import React from 'react';
import './header.css'
import Navigation from '../Navigation/Navigation';

export default function Header() {
    return (
    <header className="header">
      <div >
        <h1>Joseph Rodante</h1>
        <Navigation />
      </div>
    </header>
);

}