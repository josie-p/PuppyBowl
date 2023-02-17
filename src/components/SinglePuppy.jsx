import React from "react";

const SinglePuppy = (props) => {
    const puppy = props.puppy;
    return(  
        <div className = "singlePuppy">
          {console.log(puppy, 'inside of single puppy')}
            {/* <div className="cardHeader"> */}
            {/* <h2>{puppy.name}</h2><p>{puppy.id}</p>
            </div>
            <img src={`${puppy.imageUrl}`} alt={`picture of ${puppy.name} the puppy`} className='puppyImg'/>
          <p> {puppy.breed}</p> */}
          {/* <h1>I am Single Puppy</h1> */}
          <h1>I am {puppy.name}</h1>
        </div>
        )
    }


    export default SinglePuppy;