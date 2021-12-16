import React from 'react'
import "./Header.css"


const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h1>The Daily Blog</h1>
            </div>
            <div className="header__options">
                <h4 className="header__option">Home</h4>
                <h4 className="header__option">Blogs</h4>
                <h4 className="header__option">About Us</h4>
                <h4 className="header__option">Privacy</h4>
            </div>
            <div className="header__actions">
                <button>Join Now</button>
            </div>
        </div>
    )
}

export default Header
