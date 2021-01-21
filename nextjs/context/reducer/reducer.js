import React, { createContext, useReducer } from "react";
import light from "../../themes/light";

const initialContext = {
	search: "",
	isLoading: true,
	error: false,
	theme: light
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
