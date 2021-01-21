import { ThemeProvider } from "styled-components";
import React, { useEffect } from "react";

import { ContextProvider } from "./context/reducer";
import dark from "./styles/themes/dark";
import Footer from "./components/footer";
import GlobalStyle from "./styles/global";
import Header from "./components/header";
import light from "./styles/themes/light";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Search from "./components/search";
import usePersistedState from "./utils";

function App() {
	const [theme, setTheme] = usePersistedState("theme", light);
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
		<React.Fragment>
			<ContextProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Header toggleTheme={toggleTheme} />
					<Profile />
					<Search />
					<Projects />
					<Footer />
				</ThemeProvider>
			</ContextProvider>
		</React.Fragment>
	);
}

export default App;
