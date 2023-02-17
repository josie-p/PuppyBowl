import React from "react";

const SinglePuppy = (props) => {
    
    return(  
        <div className = "puppyCard">
            <div className="cardHeader">
            <h2>{puppy.name}</h2><p>{puppy.id}</p>
            </div>
            <img src={`${puppy.imageUrl}`} alt={`picture of ${puppy.name} the puppy`} className='puppyImg'/>
          <p> {puppy.breed}</p>
        </div>)
    }


    export default SinglePuppy