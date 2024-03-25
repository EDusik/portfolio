import { Link } from "react-scroll";
import React, { useEffect, useState, useContext } from "react";
import Switch from "react-switch";
import { HeaderStyled } from "./HeaderStyled";

import { ThemeContext } from "styled-components";
import { Context } from "../../context/Context";

import { useScroll } from "../../hooks/useScroll";
import { IContextProps } from "../../context/types/Context.types";

const Header = ({ toggleTheme }) => {
	const { isLoading, hasError } = useContext<IContextProps>(Context);
	const { name } = useContext(ThemeContext);
	const { scroll, bottom } = useScroll();

	return (
		<HeaderStyled>
			{!isLoading && !hasError && (
				<header className={"header " + (scroll ? "color" : "transparent")}>
					<div className="container">
						<nav className="navbar">
							<ul>
								<li>
									<Link activeClass={!bottom ? "active " : "remove"} to="about" spy={true} smooth={true} offset={-150} isDynamic={true} duration={1000} delay={50} alt="sobre">
										sobre
									</Link>
								</li>
								<li>
									<Link activeClass={!bottom ? "active " : "remove"} to="projects" spy={true} smooth={true} offset={-150} isDynamic={true} duration={1000} delay={50} alt="projetos">
										projetos
									</Link>
								</li>
								<li>
									<Link className={bottom ? "active" : ""} to="contact" spy={true} smooth={true} offset={0} duration={1000} isDynamic={true} delay={50} activeClass="active" alt="contato">
										contato
									</Link>
								</li>
							</ul>
						</nav>
						<div className="switch">
							<Switch
								name="switch"
								id="switch"
								aria-checked={name === "dark"}
								aria-readonly="false"
								aria-label="switch"
								offHandleColor="#E0E0DC"
								onHandleColor="#E0E0DC"
								onChange={toggleTheme}
								checked={name === "dark"}
								checkedIcon={false}
								uncheckedIcon={false}
								height={14}
								width={32}
								offColor="#CCCCCC"
								handleDiameter={20}
								onColor="#6272a4"
							/>
						</div>
					</div>
				</header>
			)}
		</HeaderStyled>
	);
};

export default Header;
