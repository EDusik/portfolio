
import React, { useContext } from 'react';

import { Context } from '../../context/reducer';

import './styles.scss';

function Search() {

    const { context, dispatch } = useContext(Context);
    const onChange = (value) => {
        dispatch({ name: 'search', value: value });
    }

    return (    
        <React.Fragment>
            {!context.isLoading && !context.error ?
                <div className='search'>
                    <input 
                        type='text' 
                        name='search'
                        aria-label="search"
                        id="search"
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
