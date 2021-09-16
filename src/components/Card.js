import axios from 'axios';
import React from 'react';
import pokeball from '../assets/pokeball.png';
import {useEffect,useState}from 'react';
function Card({api}) {
    const [pokemon,setPokemon]=useState({});
    useEffect(() => {
        axios.get(api.url)
        .then((res)=>{
            setPokemon(res.data);
        })
    }, [api.url]);
    return (
        <div className="card">
            <div className="img-section">
                <img className="image" alt={api.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
            </div>
            <div className="card-sec">
                <h4>{pokemon.name}</h4>
                <img className="ball"src={pokeball} alt="pokeball"/>
            </div>
        </div>
    )
}

export default Card;
