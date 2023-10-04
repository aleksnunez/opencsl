import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <a href="/">📖</a>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/courses">Courses/Modules</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/resources">Resources</a></li>
                    <li><a href="/blog">Blog/News</a></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="user-actions">
                <a href="/profile">Profile</a>
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
            </div>
        </div>
    );
}

export default Header;
