import React from 'react';
import {NavLink} from "react-router-dom";
import { useState } from 'react';
import "../styles/nav.css";

import logo from '../assets/logo.jpg';

function Nav() {
    const [show,setShow]=useState(false);
    const toggleShow=()=>{
        setShow(!show);
    }
    return (
        <div className="navi">   
            <nav>
                <NavLink to="/" ><img className="logo" src={logo} alt="logo"></img></NavLink>
                <div className="nav-bar">
                    <NavLink exact to="/" activeClassName="active"><div className="nav-item">Home</div></NavLink>
                    <NavLink exact to="/pokedex" activeClassName="active"><div className="nav-item">Pokédex</div></NavLink>
                </div>
                <div className={!show?"nav-bar-mobile hid":"nav-bar-mobile"}>
                    <NavLink exact to="/" activeClassName="active"><div className="nav-item">Home</div></NavLink>
                    <NavLink exact to="/pokedex" activeClassName="active"><div className="nav-item">Pokédex</div></NavLink>
                </div>
                <div className="hamm-burger" onClick={toggleShow}>
                    <div className="ham1"></div>
                    <div className="ham2"></div>
                    <div className="ham3"></div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
