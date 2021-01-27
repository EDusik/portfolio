import { Element } from "react-scroll";
import React, { useEffect, useState, useContext } from "react";

import { Context } from "../../context/reducer";
import { getEmail, getUser } from "../../services/gitHub.service";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FooterStyle } from "../../styles/Footer/FooterStyle";

const Footer = () => {
	const { context } = useContext(Context);
	const [state, setState] = useState({
		profile: {},
		email: "",
		linkedin: ""
	});

	useEffect(() => {
		getUser().then(response => {
			setState({ profile: response.data });
		});

		getEmail().then(() => {
			setState(previousState => ({
				...previousState,
				email: "eduardodusik@gmail.com",
				linkedin: "https://www.linkedin.com/in/eduardo-dos-santos-dusik-095100120/"
			}));
		});
	}, []);

	return (
		<FooterStyle>
			{!context.isLoading && !context.error ? (
				<Element name="contact">
					<div className="footer">
						<div className="social">
							<a href={`mailto:${state.email}`} target="_top">
								<AiOutlineMail />
							</a>
							<a href={state.profile.html_url} target="_blank" rel="noopener noreferrer">
								<AiFillGithub />
							</a>
							<a href={state.linkedin} target="_blank" rel="noopener noreferrer">
								<AiFillLinkedin />
							</a>
						</div>
						<div className="copyright">
							Developed by <strong>{state.profile.name}</strong>
						</div>
					</div>
				</Element>
			) : (
				<></>
			)}
		</FooterStyle>
	);
}

export default Footer;
