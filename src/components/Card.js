import axios from 'axios';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";

import "../styles/card.css";

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
    ghost:'#dace88',
    dark:'#6969698a'
};
function Card({ api }) {
    const [pokemon, setPokemon] = useState({});
    const [stat, setStat] = useState([]);
    const [ability, setAbility] = useState([]);
    const [name,setName]=useState("");
    const e1 = useRef(null);
    
    useEffect(() => {
        axios.get(api.url)
            .then((res) => {
                setPokemon(res.data);
                setStat(res.data.stats);
                setAbility(res.data.types);
                setName(camelCase(res.data.name));
            })
    }, [api.url]);
    useEffect(() => {
        const type = () => {
            if (ability.length === 0) return "normal";
            return ability.slice(0, 1).map((val) => { return val.type.name });
        }
        const colors = {
            fire: '#FDDFDF',
            grass: '#DEFDE0',
            electric: '#FCF7DE',
            water: '#DEF3FD',
            ground: '#f4e7da',
            rock: '#d5d5d4',
            fairy: '#fceaff',
            poison: '#e7c6ee',
            bug: '#f8d5a3',
            dragon: '#97b3e6',
            psychic: '#eaeda1',
            flying: '#ebebeb',
            fighting: '#E6E0D4',
            normal: '#F5F5F5'
        };
        e1.current.style.backgroundColor = colors[type()];
    }, [ability])
    const camelCase=(s)=>{
        const str=s.split('-');
        const s1=str[0].slice(0,1);
        const s2=str[0].slice(1);
        return s1.toUpperCase()+s2;
    }
    let history = useHistory();
    function handleClick() {
        history.push(`/pokemon/${pokemon.id}`);
    }
    return (
        <>
         <div className="card" onClick={handleClick}>
            <div className="card-sec">
                <div className="name">{name}</div>
                <div className="stats">
                    {
                        stat.slice(1, 3).map((val, key) => {
                            return (<div className="stat-card" key={key}>
                                    <div className="stat-val">{val.base_stat}</div>
                                    <div className="stat-name">{camelCase(val.stat.name)}</div>
                                </div>);
                        }
                        )
                    }
                </div>
                <div className="abilities">
                    {
                        ability.map((val, key) => {
                            return (<div className="ability-tag" style={{backgroundColor:`${colours[val.type.name]}`}} key={key}>{camelCase(val.type.name)}</div>);
                        }
                        )
                    }
                </div>
            </div>
            <div ref={e1} className="img-section">
                <img className="image"
                    alt={api.name}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                     //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                    />
            </div>
        </div>
        </>
    )
}
export default Card;
