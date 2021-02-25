import React, { useEffect } from "react";
import { ContextProvider } from "../context/reducer";
import GlobalStyle from "../styles/Global/Global";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import Projects from "../components/Projects/Projects";
import Search from "../components/Search/Search";

import Head from "next/head";

import light from "../themes/light";
import dark from "../themes/dark";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../utils/useDarkMode";

const App = () => {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? light : dark;

	useEffect(() => {
		const particlesJS = window.particlesJS;
		particlesJS.load("particles-js", theme === "light" ? "/assets/json/snow.json" : "/assets/json/particles.json");
	}, [theme]);

	return (
		<ContextProvider>
			<ThemeProvider theme={themeMode}>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 user-scalable=no" />
				</Head>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} />
				<Profile />
				<Search />
				<Projects />
				<Footer />
			</ThemeProvider>
		</ContextProvider>
	);
};

export default App;
