import React from 'react';
import {useState,useEffect,useContext}from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import {Data} from './Context';

import Card from './Card';
import "../styles/pokedex.css";

function Pokedex() {
    const [pokeList,setPokeList]=useState([]);
    const {filteredData,setFilteredData}=useContext(Data);
    const [pageNumber,setPageNumber]=useState(0);
    const pokemonPerPage=12;
    const pagesVisited=pageNumber*pokemonPerPage;

    const displayPokemon=filteredData
    .slice(pagesVisited,pagesVisited+pokemonPerPage)
    .map((val,key)=>{
        return(
            <Card key={key} api={val}/>
        );
    });

    const pageCount=Math.ceil(filteredData.length / pokemonPerPage);

    const changePage=({selected})=>{
        setPageNumber(selected);
    }
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=600")
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
    return (
        <div className="pokedex">
            <div className="grid">
                <div className="dex-text" >800<span> Pokémon </span>for you to choose your favorite
                </div>
                <div className="dex-search">
                    <input type="text"
                    placeholder="Enter your Pokemon...."
                    onChange={handleChange}
                    />
                </div>
                 
                <div className="catlog">
                    {displayPokemon}
                    {filteredData.length>12 && <ReactPaginate 
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={1}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextClassName={"nextBttn"}
                        disabledClassName={"paginationDisalabled"}
                        activeClassName={"paginationActive"}
                    />}
                </div>
            </div>
        </div>
    )
}

export default Pokedex;
