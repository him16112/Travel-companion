import React from "react";
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="main-header" >
                <h2 className="write"> Travel Advisor</h2>
                <div className="explore-component">
                    <h3>Explore New Places</h3>
                    <input type="text" />
                </div>
            </div>

        </>
    );
}

export default Header;