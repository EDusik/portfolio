import styled from "styled-components";

export const HeaderStyled = styled.div`
	.header {
		.transparent {
			background-color: ${props => props.theme.navbar_background};
		}

		border: 0;
		box-shadow: none;
		position: absolute;
		z-index: 1;
		width: 100%;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-ms-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;

		.container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;
			width: 1200px;
			max-width: 100%;
			padding: 0px 15px;
			height: 56px;
			margin: 0 auto;
			transition: 1s;

			.navbar {
				color: ${props => props.theme.navbar_button};
				width: 80%;
				padding-left: 20%;

				@media only screen and (max-width: 510px) {
					width: 100%;
					padding-left: 0;
					padding: 14px;
				}

				ul {
					padding-left: 0;
					text-align: center;
					li {
						display: inline;
						padding: 0.5em 2.8em;

						@media only screen and (max-width: 720px) {
							padding: 0.5em 1.2em;
						}

						@media only screen and (max-width: 632px) {
							padding: 0.5em 1em;
						}

						a {
							font-size: 0.95em;
							font-weight: bold;
							text-transform: uppercase;
							letter-spacing: 0.1em;
							text-decoration: none;

							@media only screen and (max-width: 380px) {
								font-size: 0.8em;
							}

							&:hover {
								color: ${props => props.theme.navbar_button_hover};
								cursor: pointer;
							}
						}
						.active {
							color: ${props => props.theme.navbar_button_active};
						}
					}
				}
			}
		}

		.switch {
			display: flex;
			align-items: center;
			width: 20%;

			@media only screen and (max-width: 510px) {
				width: 100%;
				justify-content: center;
			}
		}
	}

	.color {
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-ms-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		position: fixed;
		height: 52px;
		background-color: ${props => props.theme.navbar_background_scrolled};

		@media only screen and (max-width: 510px) {
			height: 94px;
		}

		.navbar {
			ul {
				margin: 0em 0 0.5em;
			}
		}
	}
`;
