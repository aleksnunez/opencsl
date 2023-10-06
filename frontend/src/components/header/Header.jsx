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
                    <li><a href="/lessons">Lessons</a></li>
                    <li><a href="/resources">Resources</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <div className="user-actions">
                <a href="/create">Create</a>
                <a href="/signin">Sign in</a>
            </div>
        </div>
    );
}

export default Header;
