import { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";

import { ContextProvider } from "../context/reducer/reducer";

import Footer from "../components/Footer/Footer";
import GlobalStyle from "../styles/Global/Global";
import Header from "../components/Header/Header";

import Profile from "../components/Profile/Profile";
// import usePersistedState from "../utils/utils";

import light from "../themes/light";
import dark from "../themes/dark";
import Projects from "../components/Projects/Projects";

const App = () => {
	const [theme, setTheme] = useState("theme", light);
	const toggleTheme = () => {
		setTheme(theme.name === "light" ? dark : light);
	};

	useEffect(() => {
		const particlesJS = window.particlesJS;
		particlesJS.load("particles-js", "particles.json", function () {
			console.log("Success!");
		});
	}, []);

	return (
		<ThemeProvider theme={light}>
			<ContextProvider>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} />
				<Profile />
				<Projects />
				<Footer />
			</ContextProvider>
		</ThemeProvider>
	);
};

export default App;
