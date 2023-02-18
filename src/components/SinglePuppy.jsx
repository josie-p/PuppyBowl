import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
const BASE = 'https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/players';

const SinglePuppy = (props) => {
  const clickedPuppy = props.clickedPuppy;
  const [singlePuppy, setSinglePuppy] = useState({});
console.log(clickedPuppy, 'clicked!')

  let { id } = useParams();
console.log(id, 'the id');

  async function testClickedPuppy(puppyId){
    try{
        console.log(puppyId)
        const response = await fetch(`${BASE}/${puppyId}`);
        const result = await response.json();
        const puppyInfo = result.data.player;
        setSinglePuppy(puppyInfo);
        console.log(puppyInfo, 'puppyInfo!');
    }catch(error){
console.log(error)
    }
}

useEffect(() => {
  testClickedPuppy(id);
}, [])

 return(
  <div className="puppy">
    <div className="singlePuppyHeader">
    <h1>{singlePuppy.name}</h1> <p>{singlePuppy.id}</p>
    <h3>{singlePuppy.breed}</h3>
    </div>
    <img src={`${singlePuppy.imageUrl}`} className='singlePuppyImg'/>
    <div className="specifics">
      <p>Team ID : {singlePuppy.teamId}</p>
      <p>Cohort ID: {singlePuppy.cohortId}</p>
    </div>
  </div>
 )

    // return(
      // <div className='onePuppy'>
      // <div>{clickedPuppy.name}</div>
      //   <header>
      //   <h1>{clickedPuppy.name}</h1>
      //   <h2>ID: #{`${puppy.id}`}</h2>
      //   </header>
      //   <div className="singleMain">
      //     <img src={`${puppy.imageUrl}`} alt={`picture of ${puppy.name} the puppy`}/>
      //     <p>Breed: {puppy.breed}</p>
      //     <p>Status: {puppy.status}</p>
      //     <p>Team ID: {puppy.teamId}</p>
      //     <p>Cohort ID: {puppy.cohortId}</p>
      //   </div>
      // </div>
    // )  
    
}


    export default SinglePuppy;