import React, { useEffect, useState } from 'react';

import { getEmail, getUser } from '../../services/github-service';

import './styles.scss';

function Projects() {

    const [state, setState] = useState({
        profile: {},
        email:''
    });    

    useEffect(() => {
        getUser().then(response => {
            setState({profile: response.data});
        });

        getEmail().then(response => {
            setState(previousState => ({
                ...previousState,
                email: response.data[0].payload.commits[0].author.email,
            }));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='profile'>
            <div id="particles-js"></div>
            <div className='bg-profile'>
                <h2>{state.profile.name}</h2>
                <img src={state.profile.avatar_url} alt={state.profile.login} />
                <p>{state.profile.company}</p>
                <p>{state.profile.location}</p>
                <p>{state.profile.bio}</p>
                <p>{state.email}</p>
                <a href={state.profile.blog} target='_blank' rel='noopener noreferrer'>{state.profile.login}</a>
            </div>
        </div>
    );
}

export default Projects;
