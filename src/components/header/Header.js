import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'


const Header = () => (
    <div className="header-container">
        <div className="header">
            <Link to="/videos" className="videos">Media</Link>
            <Link to="/writing" className="writing">Writing</Link>
            <Link to="/projects" className="projects">Projects</Link>
            <Link to="/books" className="writing">Books</Link>
            <Link to="/about" className="about">About</Link>
        </div>
    </div>
)

export default Header;
