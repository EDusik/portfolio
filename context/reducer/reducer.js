import React, { createContext, useReducer } from "react";

const initialContext = {
	search: "",
	isLoading: true,
	error: false
};

const Context = createContext({});

const reducer = (state = initialContext, action) => {
	const newState = { ...state };
	newState[action.name] = action.value;
	return newState;
};

const ContextProvider = ({ children }) => {
	const [context = initialContext, dispatch] = useReducer(reducer);
	const value = { context, dispatch };
	return <Context.Provider value={value}>{children}</Context.Provider>;
};

const ContextConsumer = Context.Consumer;
export { Context, ContextProvider, ContextConsumer };
