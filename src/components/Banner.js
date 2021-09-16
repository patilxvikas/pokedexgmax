import React from 'react';
import {NavLink}from 'react-router-dom';
import banner from '../assets/banner.png';
function Banner() {
    return (
        <div className="center">
            <div className="banner">
                <div className="cover-text">
                    <div className="-h1">Find all your
                        favorite Pokemon</div>
                    <div className="-h2">You can know the type of Pokemon, its strengths,
                        disadvantages and abilities</div>
                    <NavLink to="/pokedex" ActiveClassName=""><div className="pokedex-button ">See Pokemons</div></NavLink>
                </div>
                <div className="banner-art">
                    <img className="banner-art" src={banner} alt="banner"></img>
                </div>
            </div>
        </div>
    )
}

export default Banner;
