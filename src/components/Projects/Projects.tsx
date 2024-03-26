import React, { useContext } from "react";

import { ProjectStyled } from "./ProjectStyled";
import { Element } from "react-scroll";
import { Context } from "../../context/Context";
import { SearchContext } from "../../context/SearchContext";
import { useTranslation } from 'react-i18next';

import useSearch from "../../hooks/useSearch";

const Projects = () => {
	const emojis = require("emojis");
	const { isLoading, hasError, repositories } = useContext(Context);
	const { context } = useContext(SearchContext);
	const { t } = useTranslation();
	const { showProjects } = useSearch(context.search, repositories);

	return (
		<ProjectStyled>
			{!isLoading && !hasError && (
				<Element name="projects">
					<div className="repositories">
						{repositories && showProjects?.length > 0
							? showProjects.map(repo => {
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
							: !hasError && !isLoading && <p className="no-repo">{emojis.unicode(t("search.noRepo"))}</p>}
					</div>
				</Element>
			)}
		</ProjectStyled>
	);
};

export default Projects;
