import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charset="utf-8" />
					<title>Portfolio - Eduardo Dusik</title>
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link rel="manifest" href="/static/manifest.json" />
					<meta name="description" content="Eduardo Dusik - Portfolio" />
					<meta name="theme-color" content="#282C34" />
					<meta name="author" content="Eduardo Dusik" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
					/>
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
