import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children, ...rest }) => {
	const [profile, setProfile] = useState(rest.profile ?? {});
	const [repositories, setRepositories] = useState(rest.repositories ?? {});
	const [search, setSearch] = useState(rest.search ?? "");
	const [isLoading, setIsLoading] = useState(rest.isLoading ?? true);
	const [hasError, setHasError] = useState(rest.hasError ?? false);

	useEffect(() => {
		sessionStorage.setItem("profile", JSON.stringify(profile));
	}, [profile]);

	return (
		<Context.Provider
			value={{
				profile,
				repositories,
				search,
				isLoading,
				hasError,
				setProfile,
				setRepositories,
				setSearch,
				setIsLoading,
				setHasError
			}}
		>
			{children}
		</Context.Provider>
	);
};
