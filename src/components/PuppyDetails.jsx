import React from "react";
import {SinglePuppy} from './';

const PuppyDetails = (props) =>{

    const puppies = props.puppies;
    const clickedPuppy = props.clickedPuppy;

    // console.log(clickedPuppy, 'this is clickedPuppy');

    function handleClick(id){
        // console.log(puppy);
        // console.log(clickedPuppy, 'this is clickedPuppy');
     props.getClickedPuppy(id);
     return(

        <h1>Clicked Puppy: {clickedPuppy}</h1>
     )
        // return(
        //     // <>
        //     // <SinglePuppy puppy={puppy}/>
        //     // </>
        // )
    }

    // console.log(puppies, 'puppy names from puppy details');
    return(
        <div className="allPuppies">
        { 
        puppies.map((puppy, idx) => {
            return(  
            <div key={`the unique key is ${idx}`} className = "puppyCard">
                <div className="cardHeader">
                <h2>{puppy.name}</h2><p>{puppy.id}</p>
                </div>
                <img src={`${puppy.imageUrl}`} alt={`picture of ${puppy.name} the puppy`} className='puppyImg'/>
              <p> {puppy.breed}</p>
              <button onClick={()=>{handleClick(puppy.id); console.log(clickedPuppy)}
            }>See Details</button>
            </div>)
        })
        }
        </div>
    )
}
export default PuppyDetails