import React, { createContext, useReducer } from "react";

const initialContext = {
	search: ""
};

const SearchContext = createContext({});

const reducer = (state = initialContext, action) => {
	const newState = { ...state };
	newState[action.name] = action.value;
	return newState;
};

const SearchContextProvider = ({ children }) => {
	const [context = initialContext, dispatch] = useReducer(reducer);
	const value = { context, dispatch };
	return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

const ContextConsumer = SearchContext.Consumer;
export { SearchContext, SearchContextProvider, ContextConsumer };
