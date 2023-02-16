import React, {useState, useEffect} from "react";
import { Navbar } from "./";
import PuppyDetails from "../PuppyDetails";
const BASE = 'https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/players';

const Main = () => {
const [puppies, setPuppies] = useState({});


async function getPuppies(){
    // const response = await fetch(BASE);
    // const result = await response.json();

    try{
        const response = await fetch(`${BASE}`);
        const result = await response.json();
        const puppies = result.data
        console.log(puppies, 'result of fetch!');
        setPuppies(puppies);
    }catch(error){
        console.log(error)
    }
    
}

useEffect(() => {
    getPuppies();
    // console.log(puppies.data.players, 'puppy objects');
}, [])

    return(
        <div id="main">
            <Navbar />
            <PuppyDetails puppies={puppies}/>
        </div>
    )
}

export default Main