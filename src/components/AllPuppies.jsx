import React from "react";
import {SinglePuppy} from '.';
import {Link, useParams, useOutletContext} from 'react-router-dom';

const AllPuppies = (props) =>{
    
    const puppies = useOutletContext();

    // const puppies = props.puppies;
    // const clickedPuppy = props.clickedPuppy;
    // const getClickedPuppy = props.getClickedPuppy;

    // function handleClick(id){
    //     console.log(id);
    //  getClickedPuppy(id);
    //  return(

    //     <h1>Clicked Puppy: {clickedPuppy}</h1>
    //  )
    // }

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
              {/* <p> {puppy.breed}</p> */}
              {/* <button onClick={() => {
                getClickedPuppy(puppy.id)
              }}>See Details</button> */}
              <Link to={`${puppy.id}`}>See Details</Link>
              {/* <Link to={`${puppy.id}`}>See Details!</Link> */}
            </div>) 
        }) 
        } 
        {/* {console.log(clickedPuppy, 'outside clicked puppy')} */}
        {/* <SinglePuppy puppies={puppies} /> */}

        </div> 
    )
}
export default AllPuppies;