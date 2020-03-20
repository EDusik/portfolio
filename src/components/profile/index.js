import { Element } from 'react-scroll'
import Particles from 'react-particles-js';
import React, { useEffect, useState } from 'react';

import { getUser } from '../../services/github-service';

import './styles.scss';
import config from '../../assets/json/particles.json';

function Projects() {

    const [state, setState] = useState({
        profile: {}
    });    

    useEffect(() => {
        getUser().then(response => {
            setState({profile: response.data});
        });
    }, []);

    return (     
        <Element name="about">
            <div className='profile'>
                <div id="background-particles-js">
                    <Particles 
                        width="100%"
                        height="70vh"
                        params={config}
                    />
                </div>           
                <div className='profile-details'>
                    <img src={state.profile.avatar_url} alt={state.profile.login} />
                    <h1>{state.profile.name}</h1>
                    <h2>Developer</h2>
                    <p>{state.profile.bio}</p>
                </div>
            </div>
        </Element>
    );
}

export default Projects;
