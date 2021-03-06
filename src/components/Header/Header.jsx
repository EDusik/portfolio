import { Link } from "react-scroll";
import React, { useEffect, useState, useContext } from "react";
import Switch from "react-switch";
import { HeaderStyle } from "../../styles/Header/HeaderStyle";

import { ThemeContext } from "styled-components";
import { Context } from "../../context/Context";

const Header = ({ toggleTheme }) => {
	const { isLoading, hasError } = useContext(Context);
	const { name } = useContext(ThemeContext);

	const [scroll, setScroll] = useState(false);
	const [bottom, setBottom] = useState(false);
	const navbarHeight = 56;

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	const handleScroll = () => {
		document.addEventListener("scroll", () => {
			const about = window.scrollY > navbarHeight;
			if (about !== scroll) {
				setScroll(about);
			}
		});

		window.onscroll = () => {
			if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
				setBottom(true);
			} else {
				setBottom(false);
			}
		};
	};

	return (
		<HeaderStyle>
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
		</HeaderStyle>
	);
};

export default Header;
