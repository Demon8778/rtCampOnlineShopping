import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import App from './client/App';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
	const css = new Set();
	const insertCss = (...styles) =>
		styles.forEach(style => css.add(style._getCss()));

	const name = 'Kirankumar Ahir';
	const app = renderToString(
		<StyleContext.Provider value={{ insertCss }}>
			<App data={name} />
		</StyleContext.Provider>
	);
	const content = `
		<!DOCTYPE html>
		<html>
			<head>
				<title>rtCamp - Online Shopping</title>
				<style>${[...css].join('')}</style>
			</head>
			<body>
				<div id="root">${app}</div>
				<script>window.__INITIAL_DATA__ = ${serialize(name)}</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
	res.send(content);
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
