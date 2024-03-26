import { Link } from "react-scroll";
import React, { useContext } from "react";

import { NavbarStyled } from "./NavbarStyled";
import { Context } from "../../context/Context";
import { useScroll } from "../../hooks/useScroll";
import { IContextProps } from "../../context/types/Context.types";
import { useTranslation } from 'react-i18next';

import TogglerSwitch from "./Switch/Switch";

interface INavbarProps {
	toggleTheme: string | boolean | (() => void);
}

const Navbar = ({ toggleTheme }: INavbarProps) => {
	const { isLoading, hasError } = useContext<IContextProps>(Context);
	const { scroll, bottom } = useScroll();
	const { t } = useTranslation();

	return (
		<NavbarStyled>
			{!isLoading && !hasError && (
				<header className={"header " + (scroll ? "color" : "transparent")}>
					<div className="container">
						<nav className="navbar">
							<ul>
								<li>
									<Link activeClass={!bottom ? "active " : "remove"} to="about" spy={true} smooth={true} offset={-150} isDynamic={true} duration={1000} delay={50} alt="sobre">
										{t("navbar.about")}
									</Link>
								</li>
								<li>
									<Link activeClass={!bottom ? "active " : "remove"} to="projects" spy={true} smooth={true} offset={-150} isDynamic={true} duration={1000} delay={50} alt="projetos">
										{t("navbar.projects")}
									</Link>
								</li>
								<li>
									<Link className={bottom ? "active" : ""} to="contact" spy={true} smooth={true} offset={0} duration={1000} isDynamic={true} delay={50} activeClass="active" alt="contato">
										{t("navbar.contact")}
									</Link>
								</li>
							</ul>
						</nav>
						<TogglerSwitch toggleTheme={() => toggleTheme} />
					</div>
				</header>
			)}
		</NavbarStyled>
	);
};

export default Navbar;
