import React, {useState, useEffect} from "react";
import { Navbar } from "./";
import {PuppyDetails} from "./";
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
        const puppiesData = result.data.players
        // console.log(puppiesData, 'result of fetch!');            
        setPuppies(puppiesData);
    }catch(error){
        console.log(error)
    }
    
}

// async function getClickedPuppy(puppyId){
//     try{
//         console.log(puppyId)
//         const response = await fetch(`${BASE}/${puppyId}`);
//         const result = await response.json();
//         const puppyInfo = result.data.player;
//         setClickedPuppy(puppyInfo);
//     }catch(error){
// console.log(error)
//     }
// }

useEffect(() => {
    getPuppies();
    // console.log(puppies.data.players, 'puppy objects');
}, [])

// console.log(puppies, 'the actual puppies data')
    return(
        <div id="main">
            <Navbar />
            <PuppyDetails puppies={puppies} clickedPuppy={clickedPuppy} setClickedPuppy={setClickedPuppy}  />
        </div>
    )
}

export default Main