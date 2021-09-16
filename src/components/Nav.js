import React from 'react';
import logo from '../assets/logo.jpg';
import {NavLink} from "react-router-dom";
function Nav() {
    return (
        <div className="navi">   
            <nav>
                <img className="logo" src={logo} alt="logo"></img>
                <div className="nav-bar">
                <NavLink to="/" activeClassName="home"><div className="nav-item">Home</div></NavLink>
                <NavLink to="/pokedex" activeClassName="home"><div className="nav-item">Pokédex</div></NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
