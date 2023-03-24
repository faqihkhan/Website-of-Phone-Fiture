import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className="name">
                <h1><span>FAQIH KHAN</span></h1>
                <p className="details">WHAT WE DO IN LIFE ECHOES IN ETERNITY</p>
                <a href="#" className="cv-btn">Download</a>
            </div>
        </div>
    )
}

export default Header;