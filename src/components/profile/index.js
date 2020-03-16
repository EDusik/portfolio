import Particles from 'react-particles-js';
import React, { useEffect, useState } from 'react';

import { getEmail, getUser } from '../../services/github-service';

import './styles.scss';
import config from '../../assets/json/particles.json';

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
            <div id="particles-js">
                <Particles 
                    width="100%"
                    height="70vh"
                    params={config}
                />
            </div>           
            <div className='bg-profile'>
                <img src={state.profile.avatar_url} alt={state.profile.login} />
                <h2>{state.profile.name}</h2>
                {/* <a href={state.profile.blog} target='_blank' rel='noopener noreferrer'>Developer</a> */}
                <h3>Developer</h3>
                <p className="bio">{state.profile.bio}</p>
                {/* <p>{state.profile.location}</p>
                <p>{state.profile.company}</p>              
                <p>{state.email}</p> */}
            </div>
        </div>
    );
}

export default Projects;
