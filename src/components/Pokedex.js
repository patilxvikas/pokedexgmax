import React from 'react';
import {useState,useEffect}from 'react';
import axios from 'axios';
import Card from './Card';
import "../styles/pokedex.css"
function Pokedex() {
    const [pokeList,setPokeList]=useState([]);
    const [filteredData,setFilteredData]=useState([]);
    const [search,setSearch]=useState([]);

   

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=800")
        .then((res)=>{
            setPokeList(res.data.results);
        });
    }, []);
    const handleChange=(e)=>{
        const searchTerm=e.target.value;
        const data=pokeList.filter((val)=>{
            return val.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        if(searchTerm==="")
        setFilteredData([]);
            else
        setFilteredData(data);
    }
    const handleSubmit=(event)=>{
        if (event.key === 'Enter') {
            setSearch(filteredData);
        }
    }
    return (
        <div className="pokedex">
            <div className="grid">
                <div className="dex-text">800<span> Pokémon </span> for you to choose your favorite
                </div>
                <div className="dex-search">
                    <input type="text"
                    placeholder="Enter your Pokemon...."
                    onChange={handleChange}
                    onKeyDown={handleSubmit}
                    />
                    <button onClick={handleSubmit}>Search</button>
                </div>
                {/* <div className="dex-search-list">
                    {
                        filteredData.slice(0,4).map((val,key)=>{
                            return(<div key={key} className="dex-search-val" onClick={handleSubmit}>{val.name}</div>)
                        })
                    }
                </div> */}
                 
                <div className="catlog">
                    {search.map((val,key)=>{
                        return(
                            <Card key={key} api={val}/>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Pokedex;
