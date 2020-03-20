import {  Element  } from 'react-scroll';
import React, { useEffect, useState } from 'react';

import { getEmail, getUser } from '../../services/github-service';

import './styles.scss';

function Footer() {

    const [state, setState] = useState({
        profile: {},
        email:'',
        linkedin: ''
    });    

    useEffect(() => {
        getUser().then(response => {
            setState({profile: response.data});
        });

        getEmail().then(response => {
            setState(previousState => ({
                ...previousState,
                email: response.data[0].payload.commits[0].author.email,
                linkedin: 'https://www.linkedin.com/in/eduardo-dos-santos-dusik-095100120/'
            }));
        });
    }, []);

    return (      
        <>
           <Element name='contact'>
                <div className='footer'>
                    <div className='social'>
                        <a href={`mailto:${state.email}`} target='_top'>
                            <i className='fas fa-envelope-square'></i>
                        </a>
                        <a href={state.profile.html_url} target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-github-square'></i>
                        </a>
                        <a href={state.linkedin} target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>                    
                    <div className='copyright'>
                        Developed by <strong>{state.profile.name}</strong>
                    </div>
                </div>            
            </Element>
        </>      
    );
}

export default Footer;
