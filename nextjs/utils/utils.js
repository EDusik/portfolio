import { useState, useEffect } from "react";

function usePersistedState(key, inititalState) {
	const [state, setState] = useState(() => {
		debugger;
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
