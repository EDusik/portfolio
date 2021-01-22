import { Link } from "react-scroll";
import React, { useEffect, useState, useContext } from "react";
import Switch from "react-switch";
import { HeaderStyle } from "../../styles/Header/HeaderStyle";
import { ThemeContext } from "styled-components";
import { Context } from "../../context/reducer/reducer";

const Header = ({ toggleTheme }) => {
	// const { name } = useContext(ThemeContext);
	const { context } = useContext(Context);
	const [scroll, setScroll] = useState(false);
	const [bottom, setBottom] = useState(false);
	const navbarHeight = 56;

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const about = window.scrollY > navbarHeight;
			if (about !== scroll) {
				setScroll(about);
			}
		});

		window.onscroll = function () {
			if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
				setBottom(true);
			} else {
				setBottom(false);
			}
		};
	});

	return (
		<HeaderStyle>
			<header className={"header " + (scroll ? "color" : "transparent")}>
				<div className="container">
					<nav className="navbar">
						<ul>
							<li>
								<Link
									activeClass={!bottom ? "active " : "remove"}
									to="about"
									spy={true}
									smooth={true}
									offset={-150}
									isDynamic={true}
									duration={1000}
									delay={50}
									alt="about"
								>
									about
								</Link>
							</li>
							<li>
								<Link
									activeClass={!bottom ? "active " : "remove"}
									to="projects"
									spy={true}
									smooth={true}
									offset={-150}
									isDynamic={true}
									duration={1000}
									delay={50}
									alt="projects"
								>
									projects
								</Link>
							</li>
							<li>
								<Link
									className={bottom ? "active" : ""}
									to="contact"
									spy={true}
									smooth={true}
									offset={0}
									duration={1000}
									isDynamic={true}
									delay={50}
									activeClass="active"
									alt="contact"
								>
									contact
								</Link>
							</li>
						</ul>
					</nav>
					<div className="switch">
						<Switch
							onChange={toggleTheme}
							checked={context === "dark"}
							checkedIcon={false}
							uncheckedIcon={false}
							height={14}
							width={32}
							offColor="#ccc"
							handleDiameter={20}
							onColor="#6272a4"
						/>
					</div>
				</div>
			</header>
		</HeaderStyle>
	);
};

export default Header;
