import { useState, useEffect } from "react";

function usePersistedState(key, inititalState) {
	const [state, setState] = useState(() => {
		console.log(window.localStorate);

		const storageValue = localStorage.getItem(key);

		if (storageValue) {
			return JSON.parse(storageValue);
		} else {
			return inititalState;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}

export default usePersistedState;

// import React from "react";

// const useStickyState = (defaultValue, key) => {
// 	debugger;
// 	const [value, setValue] = React.useState(defaultValue);

// 	React.useEffect(() => {
// 		const stickyValue = window.localStorage.getItem(key);

// 		if (stickyValue !== null) {
// 			setValue(JSON.parse(stickyValue));
// 		}
// 	}, [key]);

// 	React.useEffect(() => {
// 		window.localStorage.setItem(key, JSON.stringify(value));
// 	}, [key, value]);

// 	return [value, setValue];
// };

// export default useStickyState;
