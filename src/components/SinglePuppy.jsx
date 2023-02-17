import React from "react";
import { useParams } from "react-router-dom";

const SinglePuppy = (props) => {
  const puppy = props.puppies;  
  const clickedPuppy = props.clickedPuppy;
console.log(clickedPuppy, 'clicked!')

  let {id} = useParams();


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