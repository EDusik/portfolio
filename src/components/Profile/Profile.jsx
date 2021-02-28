import React, { useContext } from "react";

import { Context } from "../../context/Context";
import { ProfileStyle } from "../../styles/Profile/ProfileStyle";
import { Element } from "react-scroll";

import { TEXT_BIO, ERROR_MESSAGE } from "../../utils/constants";

const Projects = () => {
	const { profile, isLoading, hasError } = useContext(Context);
	const emojis = require("emojis");

	return (
		<Element name="about">
			<ProfileStyle>
				<div className="background-particles-js">
					<div id="particles-js"></div>
				</div>
				<div className="profile-details">
					{!isLoading && !hasError && (
						<>
							<img type="image" src={profile.avatar_url} alt="Eduardo Dusik" />
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
			</ProfileStyle>
		</Element>
	);
};

export default Projects;
