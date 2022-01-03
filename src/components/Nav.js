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
                    <NavLink exact to="/" activeClassName="active" style={{ textDecoration: 'none' }}><div className="nav-item">Home</div></NavLink>
                    <NavLink exact to="/pokedex" activeClassName="active" style={{ textDecoration: 'none' }}><div className="nav-item">Pokédex</div></NavLink>
                </div>
                <div className={!show?"nav-bar-mobile ":"nav-bar-mobile hid"}>
                    <NavLink exact to="/" activeClassName="active" style={{ textDecoration: 'none' }}><div className="nav-item">Home</div></NavLink>
                    <NavLink exact to="/pokedex" activeClassName="active" style={{ textDecoration: 'none' }}><div className="nav-item">Pokédex</div></NavLink>
                </div>
                <div className="hamm-burger" onClick={toggleShow}>
                    <div className={show?"ham1c ham1":"ham1 ham1l"}></div>
                    <div className={show?"ham3c ham3":"ham3 ham3l"}></div>
                </div> 
            </nav>
        </div>
    )
}

export default Nav;
