import { useEffect, useState } from "react";

export const useDarkMode = () => {
	const [theme, setTheme] = useState("light");
	const [componentMounted, setComponentMounted] = useState(false);
	const setMode = mode => {
		window.localStorage.setItem("theme", mode);
		setTheme(mode);
	};

	const toggleTheme = () => {
		if (theme === "light") {
			setMode("dark");
		} else {
			setMode("light");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		window.matchMedia && !localTheme ? setMode("light") : localTheme ? setTheme(localTheme) : setMode("dark");
		setComponentMounted(true);
	}, []);

	return [theme, toggleTheme, componentMounted];
};
