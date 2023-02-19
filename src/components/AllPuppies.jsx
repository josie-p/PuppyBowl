import React, {useState} from "react";
import {Link, useParams, useOutletContext} from 'react-router-dom';

const AllPuppies = (props) =>{
    
    const puppies = useOutletContext();
    const [searchVar, setSearchVar] = useState('');
    const [puppyCardArr] = useState(document.getElementsByClassName('puppyCard'));

    function findPuppy(searchVar){

        console.log(puppyCardArr, 'the puppyCardArr');


        return(
            puppies.map((puppy, idx) => {
                if(puppy.name === searchVar){
                    console.log(puppy, puppy.name, searchVar, 'they match!');
                }else{
                    puppyCardArr[idx].style.display = 'none';
                }
            })
        )}

    return(

        <div className="homePage">
              <div className="searchForm">
              <form className="formSearch">
            <label>
                Search For Puppy By Name:
                {/* <input type = "text"  id='searchID' onChange={(event) => {setSearchVar(event.target.value); console.log(event.target.value); }}/> */}
            </label>
            <input type='text' id='searchID' onChange={(event) => {setSearchVar(event.target.value); console.log(event.target.value); }}/>
            <button onClick={(event) => {
                event.preventDefault();
                findPuppy(searchVar);
                console.log(searchVar)}}>Search</button>
                <button>Clear Search</button>
            </form>
            </div>
            <div className="allPuppies">
            {
        puppies.map((puppy, idx) => {
            return(  
            <div key={`the unique key is ${idx}`} className = "puppyCard">
                <div className="cardHeader">
                <h2>{puppy.name}</h2><p>{puppy.id}</p>
                </div>
                <img src={`${puppy.imageUrl}`} alt={`picture of ${puppy.name} the puppy`} className='puppyImg'/>
              <Link to={`${puppy.id}`}>See Details</Link>
            </div>) 
        })
        } 
            </div>
        </div>
    )
}
export default AllPuppies;