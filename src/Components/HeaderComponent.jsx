// src/components/NavBar.js
import React from 'react';

const HeaderComponent = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">MyApp</h1>
            <ul className="navbar-links">
              <a href="#">NavBar</a>
            </ul>
        </nav>
    );
};

export default HeaderComponent;
