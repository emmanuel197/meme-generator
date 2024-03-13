import React from "react";
import  memeLogo from "../images/trollface.png"
function Header() {
    return (
        <header className="generator-header">
            <img className="generator-logo" src={memeLogo} alt="meme-logo" />
            <h1 className="header-title">Meme Generator</h1>
        </header>
    )
}

export default Header