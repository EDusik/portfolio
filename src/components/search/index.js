
import React, { useContext } from 'react';

import { Context } from '../../context/reducer';

import './styles.scss';

function Search() {

    const { dispatch, context } = useContext(Context);
    const onChange = (value) => {
        dispatch({ name: 'search', value: value });
    }

    return (    
        <React.Fragment>
            {!context.isLoading ? 
                <div className='search'>
                    <input type='text' 
                        name='search'   
                        onChange={(event)=> onChange(event.target.value)}
                        placeholder='Search...' 
                    />
                </div> : 
                <></> 
            } 
        </React.Fragment>
    )
}

export default Search;
