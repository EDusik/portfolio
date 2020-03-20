
import React, { useContext } from 'react';

import { Context } from '../../context/reducer';

import './styles.scss';

function Search() {

    const { dispatch } = useContext(Context);

    const onChange = (value) => {
        dispatch({ name: 'search', value: value });
    }

    return (    
        <div className='search'>
            <input type='text' 
                name='search'   
                onChange={(event)=> onChange(event.target.value)}
                placeholder='Search...' 
            />
        </div>
    )
}

export default Search;
