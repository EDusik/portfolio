import { Element } from "react-scroll";
import React, { useEffect, useState, useContext } from "react";

import { Context } from "../../context/reducer";
import { getEmail, getUser } from "../../services/gitHub.service";
import { AiFillLinkedin as Linkedin} from "react-icons/ai";
import { ImBlogger2 as Blogger } from "react-icons/im";
import { FaGithubSquare as GitHub} from "react-icons/fa";


import { FooterStyle } from "../../styles/Footer/FooterStyle";

const Footer = () => {
	const { context } = useContext(Context);
	const [state, setState] = useState({
		profile: {},
		email: "",
		linkedin: "",
    blogger: ""
	});

	useEffect(() => {
		getUser().then(response => {
			setState({ profile: response.data });
		});

		getEmail().then(() => {
			setState(previousState => ({
				...previousState,
				email: "eduardodusik@gmail.com",
				linkedin: "https://www.linkedin.com/in/eduardo-dos-santos-dusik-095100120/",
        blogger: "https://www.eduardodusik.dev"
			}));
		});
	}, []);

	return (
		<FooterStyle>
			{!context.isLoading && !context.error ? (
				<Element name="contact">
					<div className="footer">
						<div className="social">
							<a href={state.profile.html_url} target="_blank" rel="noopener noreferrer">
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
							Desenvolvido por <strong>{state.profile.name}</strong>
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
