import React from "react";
import Footer from "../components/Footer/Footer";
import { ContextProvider } from "../context/reducer/reducer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/Global/Global";
import dark from "../themes/dark";

const IndexPage = () => {
	return (
		<ThemeProvider theme={dark}>
			<GlobalStyle />
			<ContextProvider>
				<Footer />
			</ContextProvider>
		</ThemeProvider>
	);
};

export default IndexPage;
