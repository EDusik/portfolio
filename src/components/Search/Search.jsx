import React, { useContext } from "react";

import { Context } from "../../context/Context";
import { SearchContext } from "../../context/SearchContext";

import { SearchStyle } from "../../styles/Search/SearchStyle";

const Search = () => {
	const { isLoading, hasError } = useContext(Context);
	const { dispatch } = useContext(SearchContext);

	const onChange = value => {
		dispatch({ name: "search", value: value });
	};

	return (
		<SearchStyle>
			{!isLoading && !hasError && (
				<div className="search">
					<input type="text" name="search" aria-label="search" id="search" onChange={event => onChange(event.target.value)} placeholder="Pesquisar..." />
				</div>
			)}
		</SearchStyle>
	);
};

export default Search;
