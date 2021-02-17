import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context/reducer";
import { getUser } from "../../services/gitHub.service";
import { ProfileStyle } from "../../styles/Profile/ProfileStyle";
import { Element } from "react-scroll";

const TEXT_BIO = "Desenvolvedor web front-end apaixonado pelo que faz. Curte escutar power metal e não consegue ficar um dia sem beber :coffee:."

const Projects = () => {
	const { context, dispatch } = useContext(Context);
	const emojis = require("emojis");
	const [state, setState] = useState({
		profile: {},
    bio: "",
	});

	useEffect(() => {
		getUser()
			.then(response => {
				setState({ profile: response.data, bio: TEXT_BIO });
			})
			.catch(() => {
				dispatch({ name: "error", value: true });
			});
	}, [dispatch]);

	return (
		<Element name="about">
			<ProfileStyle>
				<div className="background-particles-js">
					<div id="particles-js"></div>
				</div>
				<div className="profile-details">
					{!context.isLoading && !context.error ? (
						<>
							<img type="image" src={state.profile.avatar_url} alt={state.profile.login} />
							<h1>{state.profile.name}</h1>
							<h2>Desenvolvedor</h2><h2> Front-end</h2>
							<p>{emojis.unicode(state.bio)}</p>
						</>
					) : (
						<></>
					)}{" "}
					{!context.isLoading && context.error ? (
						<React.Fragment>
							<h3> {emojis.unicode("error loading, please try again later :sob:")} </h3>
						</React.Fragment>
					) : (
						<></>
					)}
				</div>
			</ProfileStyle>
		</Element>
	);
}

export default Projects;
