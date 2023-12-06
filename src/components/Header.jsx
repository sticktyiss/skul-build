import React from "react";
import '../css/Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;