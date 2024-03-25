import { Element } from "react-scroll";
import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { ImBlogger2 as Blogger } from "react-icons/im";
import { FaGithubSquare as GitHub } from "react-icons/fa";

import { FooterStyled } from "./FooterStyled";
import { IContextProps } from "../../context/types/Context.types";
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { isLoading, hasError } = useContext<IContextProps>(Context) as IContextProps;
	const { t } = useTranslation();
	const [user] = useState({
		name: process.env.NEXT_PUBLIC_NAME,
		gitHub: process.env.NEXT_PUBLIC_GITHUB,
		email: process.env.NEXT_PUBLIC_EMAIL,
		linkedIn: process.env.NEXT_PUBLIC_LINKEDIN,
		blogger: process.env.NEXT_PUBLIC_BLOGGER
	});

	return (
		<FooterStyled>
			{!isLoading && !hasError && (
				<Element name="contact">
					<div className="footer">
						<div className="social">
							<a href={user.gitHub} target="_blank" rel="noopener noreferrer">
								<GitHub title="GitHub" className="github" />
							</a>
							<a href={user.linkedIn} target="_blank" rel="noopener noreferrer">
								<Linkedin title="LinkedIn" />
							</a>
							<a href={user.blogger} target="_blank" rel="noopener noreferrer">
								<Blogger title="Blog" className="blogger" />
							</a>
						</div>
						<div className="copyright">
							{t("footer.copyright")} <strong>{user.name}</strong>
						</div>
					</div>
				</Element>
			)}
		</FooterStyled>
	);
};

export default Footer;
