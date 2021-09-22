import React from 'react';
import {NavLink}from 'react-router-dom';
import banner from '../assets/banner.png';
import "../styles/banner.css";
function Banner() {
    return (
        <div className="center">
            <div className="banner">
                <div className="cover-text">
                    <div className="-h1"><span>Find</span> all your
                        favorite <span>Pokémon</span></div>
                    <div className="-h2">You can know the type of Pokemon, its strengths and abilities</div>
                    <NavLink to="/pokedex" ActiveClassName="poke-active"><div className="pokedex-button">See Pokemons</div></NavLink>
                </div>
                <img className="banner-art" src={banner} alt="banner"></img>
            </div>
        </div>
    )
}

export default Banner;
