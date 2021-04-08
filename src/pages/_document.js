import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="language" content="PT" />

					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" />
					<link rel="stylesheet" href="/assets/scss/globals.scss" />

					<meta name="theme-color" content="#6272a4" />
					<meta name="author" content="Eduardo Dusik" />
					<meta name="title" content="Eduardo Dusik - Portfólio" />
					<meta name="description" content="Eduardo Dusik - Desenvolvedor Front-End" />
					<meta name="keywords" content="eduardo, dusik, desenvolvedor, front-end, portfólio, dev" />

					<meta property="og:type" content="website" />
					<meta property="og:title" content="Eduardo Dusik - Portfólio" />
					<meta property="og:description" content="Eduardo Dusik - Desenvolvedor Front-End" />
					<meta property="og:image" content="/static/logo192.png" />
					<meta property="og:site_name" content="Eduardo Dusik - Desenvolvedor Front-End" />
				</Head>
				<body>
					<Main />
					<NextScript />

					<script type="text/javascript" src="/assets/js/script.js"></script>
				</body>
			</Html>
		);
	}
}
