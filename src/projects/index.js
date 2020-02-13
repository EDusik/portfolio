import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './styles.scss';

function Projects() {

    const emojis = require('emojis')
    const [state, setState] = useState({
        url: 'https://api.github.com/users/',
        user: 'EDusik',
        repositories: []
    });    

    useEffect(() => {
        axios.get(`${state.url}${state.user}/repos`).then(response => {
            console.log(response.data);
            setState({repositories: response.data});
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="repositories">
            {state.repositories.map((repo) => {
                return (   
                    <div className="repository" key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a>
                        <i>{repo.name}</i>
                        <p>{emojis.unicode(repo.description)}</p>
                        <p>{repo.language}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;