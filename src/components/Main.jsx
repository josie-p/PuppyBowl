import React, {useState, useEffect} from "react";
import { Navbar, SinglePuppy } from "./";
import {AllPuppies} from "./";
import { Outlet } from "react-router-dom";
const BASE = 'https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/players';

const Main = () => {
const [puppies, setPuppies] = useState([]);
const [clickedPuppy, setClickedPuppy] = useState({});


async function getPuppies(){
    // const response = await fetch(BASE);
    // const result = await response.json();

    try{
        const response = await fetch(`${BASE}`);
        const result = await response.json();
        const puppiesData = result.data.players;  
        setPuppies(puppiesData);
    }catch(error){
        console.log(error)
    }
    
}

async function getClickedPuppy(puppyId){
    try{
        console.log(puppyId)
        const response = await fetch(`${BASE}/${puppyId}`);
        const result = await response.json();
        const puppyInfo = result.data.player;
        // console.log(puppyInfo, 'puppyInfo');
        setClickedPuppy(puppyInfo);
    }catch(error){
console.log(error)
    }
}

useEffect(() => {
    getPuppies();
    // console.log(puppies.data.players, 'puppy objects');
}, [])

// console.log(puppies, 'the actual puppies data')
    return(
        <div id="main">
            {console.log(clickedPuppy, 'puppyInfo')}
            <Outlet/>
            <Navbar />
            <AllPuppies puppies={puppies}  getClickedPuppy={getClickedPuppy} />
            <SinglePuppy puppies={puppies} clickedPuppy={clickedPuppy} setClickedPuppy={setClickedPuppy} getClickedPuppy={getClickedPuppy}/>
        </div>
    )
}

export default Main