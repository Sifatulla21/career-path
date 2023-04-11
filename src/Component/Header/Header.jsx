import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <div>
                <h3>Career Path</h3>
            </div>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
            </div>
            <div>
                <button className="all-btn">Start Apply</button>
            </div>
        </div>
    );
};

export default Header;