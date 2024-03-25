import React, { useLayoutEffect } from "react";

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
import { getRepositories, getUser } from "../services/gitHub.service";

import GlobalStyle from "../styles/Global/Global";
import { useDarkMode } from "../hooks/useDarkMode";
import { I18nextProvider, useTranslation } from 'react-i18next';
import { IProfile, IRepository } from "../types/types";
import { LIMIT } from "../utils/constants";

import light from "../themes/light";
import dark from "../themes/dark";
import i18n from '../locales/i18n'

declare const window: {
	particlesJS: {
		load: (id: string, path: string, callback?: () => void) => void;
	};
} & Window;

type IndexPageProps = {
	profile: IProfile;
	repositories: IRepository[];
	isLoading: boolean;
}

const IndexPage = ({ profile, repositories, isLoading } : IndexPageProps) => {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? light : dark;
	const { t } = useTranslation();

	useLayoutEffect(() => {
		if (window.particlesJS) {
			const particlesJS = window.particlesJS;
			particlesJS.load("particles-js", theme === "light" ? "/assets/json/snow.json" : "/assets/json/particles.json");
		}
	}, [theme]);

	return ( 
		<I18nextProvider i18n={i18n} defaultNS={'translation'}>
			<ContextProvider profile={profile} repositories={repositories} isLoading={isLoading}>
				{!isLoading ? (
					<SearchContextProvider>
						<ThemeProvider theme={themeMode}>
							<Head>
								<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 user-scalable=no" />
								<title>{process.env.NEXT_PUBLIC_NAME} - {t("profile.role")}</title>
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
		</I18nextProvider>
	);
};

export default IndexPage;

export const getStaticProps = async () => {
	const repositories = await getRepositories(LIMIT);
	const profile = await getUser();
	
	return {
		props: {
			profile: profile.data,
			repositories: repositories.data,
			isLoading: false
		}
	};
};
