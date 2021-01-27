import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charset="UTF-8" />
					<meta name="language" content="PT" />

					<title>Eduardo Dusik - Front-End Developer</title>
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" />
					<link rel="stylesheet" href="/assets/scss/globals.scss" />

					<meta name="theme-color" content="#6272a4" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
					/>
					<meta name="author" content="Eduardo Dusik" />
					<meta name="title" content="Eduardo Dusik - Portfolio" />
					<meta name="description" content="Eduardo Dusik - Front-End Developer" />
					<meta name="keywords" content="eduardo, dusik, desenvolvedor, developer, front-end, portfolio, github" />
					<meta name="robots" content="index, follow" />

					<meta property="og:type" content="website" />
					<meta property="og:title" content="Eduardo Dusik - Portfolio" />
					<meta property="og:description" content="Eduardo Dusik - Front-End Developer" />
					<meta property="og:image" content="/static/logo192.png" />
					<meta property="og:site_name" content="Eduardo Dusik - Front-End Developer" />
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
