import React, { useContext } from "react";

import { Context } from "../../context/Context";
import { ProfileStyled } from "./ProfileStyled";
import { Element } from "react-scroll";

const emojis = require("emojis");

import { TEXT_BIO, ERROR_MESSAGE } from "../../utils/constants";
import { IContextProps } from "../../context/types/Context.types";

const Projects = () => {
	const { profile, isLoading, hasError } = useContext<IContextProps>(Context);

	return (
		<Element name="about">
			<ProfileStyled>
				<div className="background-particles-js">
					<div id="particles-js"></div>
				</div>
				<div className="profile-details">
					{!isLoading && !hasError && (
						<>
							<img src={profile.avatar_url} alt="Eduardo Dusik" />
							<h1>{profile.name}</h1>
							<h2>Desenvolvedor</h2>
							<h2>Front-end</h2>
							<p>{emojis.unicode(TEXT_BIO)}</p>
						</>
					)}
					{!isLoading && hasError && (
						<React.Fragment>
							<h3>{emojis.unicode(ERROR_MESSAGE)}</h3>
						</React.Fragment>
					)}
				</div>
			</ProfileStyled>
		</Element>
	);
};

export default Projects;
