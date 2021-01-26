import { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import { ContextProvider } from "../context/reducer/reducer";
import GlobalStyle from "../styles/Global/Global";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import Projects from "../components/Projects/Projects";
import Search from "../components/Search/Search";
import usePersistedState from "../utils/utils";

import light from "../themes/light";
import dark from "../themes/dark";

const App = () => {
	const [theme, setTheme] = usePersistedState("theme", light);
	const toggleTheme = () => {
		setTheme(theme.name === "light" ? dark : light);
	};

	useEffect(() => {
		const particlesJS = window.particlesJS;
		particlesJS.load(
			"particles-js",
			theme.name === "dark" ? "/assets/json/particles.json" : "/assets/json/snow.json",
			() => {
				console.log(theme.name);
			}
		);
	}, [theme]);

	return (
		//  <ThemeProvider theme={theme !== undefined ? theme : dark}>
		<ThemeProvider theme={light}>
    {/*  <ThemeProvider theme={dark}> */}
			<ContextProvider>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} />
				<Profile />
				<Search />
				<Projects />
				<Footer />
			</ContextProvider>
		</ThemeProvider>
	);
};

export default App;
