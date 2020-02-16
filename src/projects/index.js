import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './styles.scss';

function Projects() {

    const emojis = require('emojis')
    const [state, setState] = useState({
        repositories: [],
        showRepositories: [],
        url: 'https://api.github.com/users/',
        user: 'EDusik',
    });    

    useEffect(() => {
        axios.get(`${state.url}${state.user}/repos`).then(response => {
            setState(previousState => ({
                ...previousState,
                repositories: response.data,
                showRepositories: response.data
            }));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChange = (value) => {
        if (value && value.trim() !== '') {
            const repositories = concatQuery(value);  
            const result = mapRepositories(repositories);         
       
            if (result !== undefined) {
                setState(previousState => ({
                    ...previousState,
                    showRepositories: result
                }));
            } 
        } else {
            setState(previousState => ({
                ...previousState,
                showRepositories: state.repositories
            }));
        }   
    } 
    
    const concatQuery = (value) => {
        value = value.toLowerCase();
        const name = state.repositories.filter(x => x.name.toLowerCase().includes(value));           
        const language = state.repositories.filter(x => x.language.toLowerCase().includes(value));
        const description = state.repositories.filter(x => x.description.toLowerCase().includes(value));

        let listOfRepos = name.concat(language);
        listOfRepos = listOfRepos.concat(description);
        return listOfRepos;
    }

    const mapRepositories = (repositories) => {
        const reposMap = new Map()
        for (const repos of repositories) {
            reposMap.set(repos.id, repos);
        }

        const resultOfMap = [...reposMap.values()]
        return resultOfMap;
    }
        
    return (
        <>
            <>
                <input type="text" 
                    className="form-control form-control-lg" 
                    name=""   
                    onChange={(event)=> onChange(event.target.value)}
                    placeholder="Repositories..." 
                />
            </>
            <div className="repositories">       
                {state.repositories && 
                    state.showRepositories.map((repo) => {
                        return (
                            <div className="repository" key={repo.id}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a>
                                <i>{repo.name}</i>
                                <p>{emojis.unicode(repo.description)}</p>
                                <p>{repo.language}</p>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )

}

export default Projects;