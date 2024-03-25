import React, { useContext } from "react";

import { Context } from "../../context/Context";
import { SearchContext } from "../../context/SearchContext";

import { SearchStyled } from "./SearchStyled";
import { ISearchContextProps } from "../../context/types/SearchContext.types";
import { IContextProps } from "../../context/types/Context.types";

const Search = () => {
	const { isLoading, hasError } = useContext<IContextProps>(Context);
	const { dispatch } = useContext<ISearchContextProps>(SearchContext);

	const onSearchChange = (value: string) => {
		dispatch({ action: "search", payload: value });
	};

	return (
		<SearchStyled>
			{!isLoading && !hasError && (
				<div className="search">
					<input 
					type="text" 
					name="search" 
					aria-label="search" 
					id="search" 
					onChange={event => onSearchChange(event.target.value)}
					placeholder="Pesquisar..." 
				/>
				</div>
			)}
		</SearchStyled>
	);
};

export default Search;
