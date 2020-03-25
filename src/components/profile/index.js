import { Element } from 'react-scroll'
import Particles from 'react-particles-js';
import React, { useEffect,  useState, useContext } from 'react';

import { Context } from '../../context/reducer';
import { getUser } from '../../services/github-service';

import './styles.scss';
import config from '../../assets/json/particles.json';

function Projects() {

    const { context, dispatch } = useContext(Context);
    const emojis = require('emojis');
    const [state, setState] = useState({
        profile: {}
    });    

    useEffect(() => {
        getUser()
        .then(response => {
            setState({profile: response.data});
        })
        .catch(() => {
            dispatch({ name: 'error', value: true });
        });
    }, [dispatch]);

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
                    {!context.isLoading && !context.error ?
                        <> 
                            <img src={state.profile.avatar_url} alt={state.profile.login} />
                            <h1>{state.profile.name}</h1>
                            <h2>Developer</h2>
                            <p>{state.profile.bio}</p>
                        </> : <></>
                    } {
                    !context.isLoading && context.error ? 
                        <React.Fragment> 
                            <h3> {emojis.unicode('error loading, please try again later :sob:')} </h3>
                        </React.Fragment>
                        : <></> 
                    }                 
                </div>
            </div>
        </Element>
    );
}

export default Projects;
