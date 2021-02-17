import React, { useContext } from "react";

import { Context } from "../../context/reducer";
import { SearchStyle } from "../../styles/Search/SearchStyle";

const Search = () => {
	const { context, dispatch } = useContext(Context);
	const onChange = value => {
		dispatch({ name: "search", value: value });
	};

	return (
		<SearchStyle>
			{!context.isLoading && !context.error ? (
				<div className="search">
					<input
						type="text"
						name="search"
						aria-label="search"
						id="search"
						onChange={event => onChange(event.target.value)}
						placeholder="Pesquisar..."
					/>
				</div>
			) : (
				<></>
			)}
		</SearchStyle>
	);
}

export default Search;
