import React, { createContext, useReducer } from "react";
import { ISearchContextProps } from "./types/SearchContext.types";

const initialContext = {
	search: ""
};

const SearchContext = createContext<ISearchContextProps | undefined>({
	context: {
		search: ""
	},
	dispatch: () => {}
});

const reducer = (state = initialContext, action) => {
	const newState = { ...state };
	newState[action.name] = action.value;
	return newState;
};

const SearchContextProvider = ({ children }) => {
	const [context, dispatch] = useReducer(reducer, initialContext);
	const value = { context, dispatch };
	return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

const ContextConsumer = SearchContext.Consumer;
export { SearchContext, SearchContextProvider, ContextConsumer };
