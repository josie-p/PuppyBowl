import React from 'react';


const SearchBar = ()=>{

    const [searchVar, setSearchVar] = useState('');
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

export default SearchBar;