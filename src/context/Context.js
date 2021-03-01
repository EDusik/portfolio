import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const Context = createContext({});

export const ContextProvider = ({ children, ...rest }) => {
	const [profile, setProfile] = useState(rest.profile ?? {});
	const [repositories, setRepositories] = useState(rest.repositories ?? []);
	const [isLoading, setIsLoading] = useState(rest.isLoading ?? true);
	const [hasError, setHasError] = useState(rest.hasError ?? false);

	return (
		<Context.Provider
			value={{
				profile,
				repositories,
				isLoading,
				hasError,
				setProfile,
				setRepositories,
				setIsLoading,
				setHasError
			}}
		>
			{children}
		</Context.Provider>
	);
};
