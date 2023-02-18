import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
    const puppies = props.puppies;
    const [searchVar, setSearchVar] = useState('');

console.log(puppies, 'this is search puppies');

    function findPuppy(searchVar){

        return(
            puppies.map((puppy) => {
                if(puppy.name === searchVar){
                    console.log(puppy.name, searchVar, 'they match!');
                   return(
                    <div className='searchedPupResult' key={puppy.id}>
                    <Link to={`${puppy.id}`}>See {`${puppy.name}`}</Link>
                </div>
                   )
                    
                }
            })
        )
        
        // puppies.map((puppy) => {
        //     if(puppy.name === searchVar){
        //         console.log(puppy.name, searchVar, 'they match!');
               
        //             <div className='searchedPupResult' key={puppy.id}>
        //                 <Link to={`${puppy.id}`}>See {`${puppy.name}`}</Link>
        //             </div>
                
        //     }
        // })
    }

    return(
        <div>
              <form>
            <label>
                name: 
                <input type = "text"  id='searchID' onChange={(event) => {setSearchVar(event.target.value); console.log(event.target.value); }}/>
            </label>
            <button onClick={(event) => {
                event.preventDefault();
                findPuppy(searchVar);
                console.log(searchVar)}}>Search</button>
        </form>
        </div>
    )
    
}

export default Search;