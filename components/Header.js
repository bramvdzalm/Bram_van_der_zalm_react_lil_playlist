import React from "react";
import { Link } from "react-router-dom";

function Header() {

        return (
            <div>
                <h1>Playlist</h1>
                <ul>
                    <Link to='/about'><li>about</li></Link>
                    <Link to='/'><li>home</li></Link>
                </ul> 
        </div>
        )}


export default Header