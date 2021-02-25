import React from "react";
import { LoaderStyle } from "../../styles/Loader/LoaderStyle";

const Loader = () => {
	return (
		<LoaderStyle>
			<div className="loader">
				<span></span>
				<span></span>
			</div>
		</LoaderStyle>
	);
};

export default Loader;
