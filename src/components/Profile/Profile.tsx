import React, { useContext } from "react";

import { Context } from "../../context/Context";
import { ProfileStyled } from "./ProfileStyled";
import { Element } from "react-scroll";
import { IContextProps } from "../../context/types/Context.types";
import { useTranslation } from 'react-i18next';

const emojis = require("emojis");

const Projects = () => {
	const { profile, isLoading, hasError } = useContext<IContextProps>(Context);
	const { t } = useTranslation();
	
	return (
		<Element name="about">
			<ProfileStyled>
				<div className="background-particles-js">
					<div id="particles-js"></div>
				</div>
				<div className="profile-details">
					{!isLoading && !hasError && (
						<>
							<img src={profile.avatar_url} alt={process.env.NEXT_PUBLIC_NAME} />
							<h1>{profile.name}</h1>
							<h2>{t("profile.role")}</h2>
							<p>{emojis.unicode(t("profile.bio"))}</p>
						</>
					)}
					{!isLoading && hasError && (
						<React.Fragment>
							<h3>{emojis.unicode(t("messages.error"))}</h3>
						</React.Fragment>
					)}
				</div>
			</ProfileStyled>
		</Element>
	);
};

export default Projects;

