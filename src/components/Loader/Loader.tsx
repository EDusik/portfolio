import React from "react";
import { LoaderStyled } from "./LoaderStyled";

const Loader = () => {
	return (
		<LoaderStyled>
			<div className="loader">
				<span></span>
				<span></span>
			</div>
		</LoaderStyled>
	);
};

export default Loader;
