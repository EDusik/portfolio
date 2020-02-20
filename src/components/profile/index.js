import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './styles.scss';

function Projects() {

    const [state, setState] = useState({
        url: 'https://api.github.com/users/',
        user: 'EDusik',
        profile: {}
    });    

    useEffect(() => {
        axios.get(`${state.url}${state.user}`).then(response => {
            setState({profile: response.data});
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="profile">
            <h2>{state.profile.name}</h2>
            <img src={state.profile.avatar_url} alt={state.profile.login}/>
            <p>{state.profile.company}</p>
            <p>{state.profile.location}</p>
            <p>{state.profile.bio}</p>
            <a href={state.profile.blog} target="_blank" rel="noopener noreferrer">{state.profile.login}</a>
        </div>
    );
}

export default Projects;
