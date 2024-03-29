import styled from "styled-components";

export const LoaderStyled = styled.div`
	.loader span {
		position: fixed;
		display: inline-block;
		width: 300px;
		height: 300px;
		border-radius: 100%;
		background: ${props => props.theme.loader_color};
		top: calc(50% - 150px);
		left: calc(50% - 150px);
		animation: loading 1.5s linear infinite;
	}

	.loader span:last-child {
		animation-delay: -0.9s;
		-webkit-animation-delay: -0.9s;
	}

	@keyframes loading {
		0% {
			transform: scale(0, 0);
			opacity: 0.8;
		}
		100% {
			transform: scale(1, 1);
			opacity: 0;
		}
	}

	@-webkit-keyframes loading {
		0% {
			-webkit-transform: scale(0, 0);
			opacity: 0.8;
		}
		100% {
			-webkit-transform: scale(1, 1);
			opacity: 0;
		}
	}
`;
