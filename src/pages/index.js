import React, { useEffect } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Profile from "../components/Profile/Profile";
import Projects from "../components/Projects/Projects";
import Search from "../components/Search/Search";

import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { ContextProvider } from "../context/Context";
import { SearchContextProvider } from "../context/SearchContext";

import GlobalStyle from "../styles/Global/Global";
import { useDarkMode } from "../utils/useDarkMode";
import light from "../themes/light";
import dark from "../themes/dark";

import { getRepositories, getUser } from "../services/gitHub.service";
import { LIMIT } from "../utils/constants";

const IndexPage = props => {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? light : dark;

	useEffect(() => {
		if (window.particlesJS) {
			const particlesJS = window.particlesJS;
			particlesJS.load("particles-js", theme === "light" ? "/assets/json/snow.json" : "/assets/json/particles.json");
		}
	}, [theme]);

	return (
		<ContextProvider profile={props.profile} repositories={props.repositories} isLoading={props.isLoading}>
			{!props.isLoading ? (
				<SearchContextProvider>
					<ThemeProvider theme={themeMode}>
						<Head>
							<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 user-scalable=no" />
							<title>Eduardo Dusik - Desenvolvedor Front-End</title>
						</Head>

						<GlobalStyle />
						<Header toggleTheme={toggleTheme} />
						<Profile />
						<Search />
						<Projects />
						<Footer />
					</ThemeProvider>
				</SearchContextProvider>
			) : (
				<Loader />
			)}
		</ContextProvider>
	);
};

export default IndexPage;

export const getServerSideProps = async () => {
	const repositories = await getRepositories(LIMIT);
	const profile = await getUser();

	return {
		props: {
			profile: profile.data,
			repositories: repositories.data,
			isLoading: profile ? false : true
		}
	};
};
