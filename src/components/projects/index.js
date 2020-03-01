import React, { useEffect, useState, useContext } from 'react';

import { Context } from '../../context/reducer'
import { getRepositories } from '../../services/github-service';

import './styles.scss';

function Projects(query) {

    const { context } = useContext(Context);
    const emojis = require('emojis')
    const [state, setState] = useState({
        repositories: [],
        showRepositories: [],
    });

    useEffect(() => {
        getRepositories().then(response => {
            setState(previousState => ({
                ...previousState,
                repositories: response.data,
                showRepositories: response.data
            }));
        });
    }, []);

    useEffect(() => {
        const value = context.search;
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.search]);

    const concatQuery = (value) => {
        value = value.toLowerCase();
        const name = state.repositories.filter(x => x.name.toLowerCase().includes(value));
        const language = state.repositories.filter(x => x.language.toLowerCase().includes(value));
        const description = state.repositories.filter(x => x.description.toLowerCase().includes(value))

        let listOfRepos = name.concat(language);
        listOfRepos = listOfRepos.concat(description);

        return listOfRepos;
    }

    const mapRepositories = (repositories) => {
        const reposMap = new Map();
        for (const repos of repositories) {
            reposMap.set(repos.id, repos);
        }
        const resultOfMap = [...reposMap.values()]
        return resultOfMap;
    }

    return (
        <React.Fragment>
            <div className='repositories'>
                {state.repositories && state.showRepositories.length > 0 ?
                    state.showRepositories.map((repo) => {
                        return (
                            <div className='repository' key={repo.id}>
                                <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>{repo.name}</a>
                                <i>{repo.full_name}</i>
                                <p>{emojis.unicode(repo.description)}</p>
                                <p>{repo.language}</p>
                            </div>
                        );
                    })
                    :
                    <p>No repository found</p>
                }
            </div>
        </React.Fragment>
    )
}

export default Projects;
