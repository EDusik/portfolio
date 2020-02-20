import React, { createContext, useReducer } from "react";

import { copyGlobalState } from "../utils";

const initialContext = {
    search: ""
}

const Context = createContext({});

const reducer = (state = initialContext, action) => {
  const newState = copyGlobalState(state);
  newState[action.name] = action.value;
  return newState;
};

const ContextProvider = ({ children }) => {
  const [context = initialContext, dispatch] = useReducer(reducer);
  const value = { context, dispatch };
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
};

const ContextConsumer = Context.Consumer;
export { Context, ContextProvider, ContextConsumer };
