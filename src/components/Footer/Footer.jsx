import { Element } from "react-scroll";
import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { ImBlogger2 as Blogger } from "react-icons/im";
import { FaGithubSquare as GitHub } from "react-icons/fa";

import { FooterStyle } from "../../styles/Footer/FooterStyle";

const Footer = () => {
	const { isLoading, hasError } = useContext(Context);
	const [state] = useState({
		name: "Eduardo Dusik",
		gitHub: "https://github.com/EDusik",
		email: "eduardodusik@gmail.com",
		linkedin: "https://www.linkedin.com/in/eduardo-dos-santos-dusik-095100120/",
		blogger: "https://www.eduardodusik.dev"
	});

	return (
		<FooterStyle>
			{!isLoading && !hasError && (
				<Element name="contact">
					<div className="footer">
						<div className="social">
							<a href={state.gitHub} target="_blank" rel="noopener noreferrer">
								<GitHub title="GitHub" className="github" />
							</a>
							<a href={state.linkedin} target="_blank" rel="noopener noreferrer">
								<Linkedin title="LinkedIn" />
							</a>
							<a href={state.blogger} target="_blank" rel="noopener noreferrer">
								<Blogger title="Blog" className="blogger" />
							</a>
						</div>
						<div className="copyright">
							Desenvolvido por <strong>{state.name}</strong>
						</div>
					</div>
				</Element>
			)}
		</FooterStyle>
	);
};

export default Footer;
