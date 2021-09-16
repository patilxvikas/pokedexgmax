import React from 'react';
import {useState,useEffect}from 'react';
import axios from 'axios';
import Card from './Card';
function Pokedex() {
    const [pokeList,setPokeList]=useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    const [filteredData,setFilteredData]=useState([]);
    const [search,setSearch]=useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=800")
        .then((res)=>{
            setPokeList(res.data.results);
        });
    }, []);
    const handleChange=(e)=>{
        setSearchTerm(e.target.value);
        const data=pokeList.filter((val)=>{
            return val.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setFilteredData(data);
    }
    const handleSubmit=()=>{
        setSearch(filteredData);
    }
    return (
        <div className="pokedex">
            <div className="grid">
                <input type="text"
                 placeholder="Enter your Pokemon...."
                 onChange={handleChange}
                 />
                 <button onClick={handleSubmit}>Search</button>

                 
                <div className="catlog">
                    {search.map((val,key)=>{
                        return(
                            <div key={key}>
                                <Card api={val}/>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Pokedex;
