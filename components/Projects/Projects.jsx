import React, { useEffect, useState, useContext } from "react";
import Loader from "../Loader/Loader";
import { Context } from "../../context/reducer";
import { getRepositories } from "../../services/gitHub.service";
import { ProjectStyle } from "../../styles/Projects/ProjectStyle";
import { Element } from "react-scroll";

const Projects = () => {
	const { context, dispatch } = useContext(Context);
	const emojis = require("emojis");
	const [state, setState] = useState({
		repositories: [],
		showRepositories: []
	});

	useEffect(() => {
		getRepositories()
			.then(response => {
				setState(previousState => ({
					...previousState,
					repositories: response.data,
					showRepositories: response.data
				}));
				setTimeout(() => {
					dispatch({ name: "isLoading", value: false });
				}, 1000);
			})
			.catch(() => {
				dispatch({ name: "isLoading", value: false });
				dispatch({ name: "error", value: true });
			});
	}, [dispatch]);

	useEffect(() => {
		const value = context.search;
		if (value && value.trim() !== "") {
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
	}, [context.search]);

	const concatQuery = value => {
		value = value.toLowerCase();
		const name = state.repositories.filter(x => (x.name ? x.name.toLowerCase().includes(value) : null));
		const language = state.repositories.filter(x => (x.language ? x.language.toLowerCase().includes(value) : null));
		const description = state.repositories.filter(x =>
			x.description ? x.description.toLowerCase().includes(value) : null
		);

		let listOfRepos = name.concat(language);
		listOfRepos = listOfRepos.concat(description);

		return listOfRepos;
	};

	const mapRepositories = repositories => {
		const reposMap = new Map();
		for (const repos of repositories) {
			reposMap.set(repos.id, repos);
		}
		const resultOfMap = [...reposMap.values()];
		return resultOfMap;
	};

	return (
		<ProjectStyle>
			{!context.isLoading && !context.error ? (
				<Element name="projects">
					<div className="repositories">
						{state.repositories && state.showRepositories.length > 0 ? (
							state.showRepositories.map(repo => {
								return (
									<div className="repository" key={repo.id}>
										<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
											{repo.name}
										</a>
										<i>{repo.full_name ? repo.full_name : ""}</i>
										<p>{emojis.unicode(repo.description ? repo.description : "")}</p>
										<p className="language">{repo.language ? repo.language : ""}</p>
									</div>
								);
							})
						) : !context.error ? (
							<p className="no-repo">{emojis.unicode("Nenhum repositório encontrado :sob:")}</p>
						) : (
							<></>
						)}
					</div>
				</Element>
			) : (
				<Loader />
			)}
		</ProjectStyle>
	);
}

export default Projects;
