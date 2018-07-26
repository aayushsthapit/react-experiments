import React from 'react';


const Search=(props)=>
{
    return(        
        <div>
            <input onChange={(event) =>props.callBackFromChild(event.target.value,'name')}></input>            
        </div>
    )
}

export default Search;