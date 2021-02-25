import styled from "styled-components";

export const ProfileStyle = styled.div`
	font-family: "Open Sans", "Roboto", "sans-serif";
	color: ${props => props.theme.primary_text};
	text-align: center;
	height: 70vh;
	width: 100%;
	position: relative;

	.background-particles-js {
		width: 100%;
		height: 70vh;
		background-image: linear-gradient(180deg, ${props => props.theme.sky_color}, transparent);
		background-position: 50% 50%;
		position: absolute;
	}

	#particles-js {
		width: 100%;
		height: 70vh;
	}

	.profile-details {
		height: 70vh;
		width: 100%;
		padding: 10vh 0px;
		position: absolute;

		img {
			border-radius: 50%;
			width: 200px;
			height: 200px;
			background-color: ${props => props.theme.background_image};
			border: solid 5px ${props => props.theme.secondary_text};
			margin-bottom: 15px;
		}

		h1 {
			font-size: 2rem;
			font-weight: 400;
			letter-spacing: 5px;
			line-height: 1.5rem;
			text-transform: uppercase;
			margin: 1.2rem 0 3rem 0;
			color: ${props => props.theme.primary_text};
			font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		}

		h2 {
			color: ${props => props.theme.secondary_text};
			font-size: 2.4rem;
			font-weight: 700;
			line-height: 1.6rem;
			text-decoration: none;
			display: block;
			margin: 1.2rem 0;
			font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		}

		p {
			text-align: center;
			max-width: 30%;
			font-size: 1.1rem;
			display: inline-flex;
			color: ${props => props.theme.third_text};
			margin: 1.5rem 0.625rem 2rem 0.625rem;
		}

		@media only screen and (max-width: 1820px) {
			p {
				max-width: 40%;
			}
		}

		@media only screen and (max-width: 1380px) {
			p {
				max-width: 50%;
			}
		}

		@media only screen and (max-width: 1200px) {
			p {
				max-width: 80%;
			}
		}

		@media only screen and (max-width: 768px) {
			p {
				max-width: 90%;
			}
		}

		@media only screen and (max-width: 420px) {
			p {
				max-width: 100%;
				font-size: 4vw;
			}

			h1 {
				font-size: 1.5rem;
			}

			h2 {
				font-size: 1.2rem;
				line-height: 0.8rem;
			}
		}

		@media only screen and (max-height: 780px) {
			padding: 8vh 0;
			h1,
			h2 {
				margin: 5px 0;
			}

			img {
				margin-bottom: 0;
			}
		}

		@media only screen and (max-height: 660px) {
			img {
				width: 150px;
				height: 150px;
			}

			h2 {
				line-height: 1.4;
			}
		}

		@media only screen and (max-height: 560px) {
			h2 {
				font-size: 50px;
				line-height: 1;
			}
		}
	}
`;
