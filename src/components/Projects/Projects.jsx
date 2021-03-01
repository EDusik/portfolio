import React, { useEffect, useState, useContext } from "react";
import { ProjectStyle } from "../../styles/Projects/ProjectStyle";
import { Element } from "react-scroll";

import { Context } from "../../context/Context";
import { SearchContext } from "../../context/SearchContext";

import { NO_REPO_MESSAGE } from "../../utils/constants";

const Projects = () => {
	const emojis = require("emojis");
	const { isLoading, hasError, repositories } = useContext(Context);
	const { context } = useContext(SearchContext);

	const [state, setState] = useState({
		projects: [],
		showProjects: []
	});

	useEffect(() => {
		setState(state => ({
			...state,
			projects: repositories,
			showProjects: repositories
		}));
	}, []);

	useEffect(() => {
		const value = context.search;
		if (value && value.trim() !== "") {
			const projects = concatQuery(value);
			const result = mapProjects(projects);

			if (result !== undefined) {
				setState(previousState => ({
					...previousState,
					showProjects: result
				}));
			}
		} else {
			setState(previousState => ({
				...previousState,
				showProjects: repositories
			}));
		}
	}, [context.search]);

	const concatQuery = value => {
		value = value.toLowerCase();
		const name = state.projects.filter(projectName => (projectName.name ? projectName.name.toLowerCase().includes(value) : null));
		const language = state.projects.filter(projectLanguage => (projectLanguage.language ? projectLanguage.language.toLowerCase().includes(value) : null));
		const description = state.projects.filter(projectDescription => (projectDescription.description ? projectDescription.description.toLowerCase().includes(value) : null));

		let listOfProjects = name.concat(language);
		listOfProjects = listOfProjects.concat(description);

		return listOfProjects;
	};

	const mapProjects = projects => {
		const projectMap = new Map();
		for (const project of projects) {
			projectMap.set(project.id, project);
		}
		const resultOfMap = [...projectMap.values()];
		return resultOfMap;
	};

	return (
		<ProjectStyle>
			{!isLoading && !hasError && (
				<Element name="projects">
					<div className="repositories">
						{state.projects && state.showProjects?.length > 0
							? state.showProjects.map(repo => {
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
							: !hasError && !isLoading && <p className="no-repo">{emojis.unicode(NO_REPO_MESSAGE)}</p>}
					</div>
				</Element>
			)}
		</ProjectStyle>
	);
};

export default Projects;
