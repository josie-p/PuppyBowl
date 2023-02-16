import React from "react";

const PuppyDetails = (props) =>{

    const puppies = props.puppies;

    console.log(puppies, 'puppy names from puppy details');
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
            </div>)
        })
        }
        </div>
   
    )
}
export default PuppyDetails