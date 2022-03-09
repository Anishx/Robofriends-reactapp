import React from 'react';


const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <input 
                className='pa3 ba' 
                type="search" 
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox; 