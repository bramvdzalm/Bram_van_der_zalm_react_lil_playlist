import React from "react";
import { FaInfoCircle, FaHome, FaCompactDisc } from "react-icons/fa"
import { Link } from "react-router-dom";

function Header() {

        return (
            <div className="header-container">
                <p className="header-icon-disc"><FaCompactDisc /></p>
                <h1 className="header-text">Playlist</h1>
                <div className="header-icon-container">
                    <Link to='/about'><p className="header-icon"><FaInfoCircle /></p></Link>
                    <Link to='/'><p className="header-icon"><FaHome /></p></Link>
                </div>
            </div>
        )}


export default Header