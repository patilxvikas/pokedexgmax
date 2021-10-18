import React from 'react';
import axios from 'axios';
import { useEffect, useState} from 'react';
import { useHistory,useParams } from "react-router-dom";
import '../styles/pokemon.css';
const colours = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#e7c6ee',
    bug: '#faddb5',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#ebebeb',
    fighting: '#E6E0D4',
    normal: '#dadada',
    ghost: '#dace88',
    dark: '#6969698a'
};
function Pokemon() {
    let hist=useHistory();
    const handleClick=()=> {
        hist.push(`/pokedex`);
    }
    const [pokemon, setPokemon] = useState({});
    const [stat, setStat] = useState([]);
    const [ability, setAbility] = useState([]);
    const [type, setType] = useState([]);
    const [name, setName] = useState("");
    let { pokeid } = useParams();
    const camelCase = (s) => {
        const str = s.split('-');
        const s1 = str[0].slice(0, 1);
        const s2 = str[0].slice(1);
        return s1.toUpperCase() + s2;
    }
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}/`)
            .then((res) => {
                setPokemon(res.data);
                setStat(res.data.stats);
                setAbility(res.data.types);
                setName(camelCase(res.data.name));
                setType(res.data.abilities);
            })
    },[pokeid]);
    return (
        <>
        <div className="pokemon">
            <div className="back" onClick={handleClick}>X</div>
            <div className="poke-card">
                <div className="upper-card">
                    <img className="poke-image"
                        alt={pokeid}
                        //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                    />
                    <div className="abilities">
                        {
                            ability.map((val, key) => {
                                return (<div className="ability-tag" style={{ backgroundColor: `${colours[val.type.name]}` }} key={key}>{camelCase(val.type.name)}</div>);
                            })
                        }
                    </div>
                </div>
                <div className="lower-card">
                    <div className="poke-name">{name}</div>
        
                    <div className="types">
                        <div className="type-h">Abilites</div>
                        <div className="type">
                        {
                            type.map((val,key)=>{
                                return(<div className="type-tag" key={key}>{(val.ability.name)}</div>)
                            })
                        }
                        </div>
                    </div>
                    <div className="stats">
                        {
                            stat.map((val, key) => {
                                return (<div className="stat-card" key={key}>
                                        <div className="stat-name">{(val.stat.name).toUpperCase()}</div>
                                        <div className="stat-val">{val.base_stat}</div>
                                        <div className="stat-bar">
                                            <div className="stat-bar-val" style={{width:`${Math.min(val.base_stat,100)}%`}}></div>
                                        </div>
                                    </div>);
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pokemon;


