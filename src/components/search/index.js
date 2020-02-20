
import React, { useContext } from 'react';

import { Context } from "../../context/reducer";

import './styles.scss';

function Search() {

    const { dispatch } = useContext(Context);

    const onChange = (value) => {
        dispatch({ name: "search", value: value });
    }

    return (
        <>
            <input type="text" 
                className="form-control form-control-lg" 
                name=""   
                onChange={(event)=> onChange(event.target.value)}
                placeholder="Search..." 
            />
        </>
    )

}

export default Search;
