import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { StaticRouter } from 'react-router-dom';

import Routes from './client/Routes';
import App from './client/App';
import { PrdouctProvider } from './client/context';
import { storeProducts } from './client/products';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
	const css = new Set();
	const insertCss = (...styles) =>
		styles.forEach(style => css.add(style._getCss()));

	const app = renderToString(
		<PrdouctProvider>
			<StyleContext.Provider value={{ insertCss }}>
				<StaticRouter location={req.url} context={{}}>
					<Routes />
				</StaticRouter>
			</StyleContext.Provider>
		</PrdouctProvider>
	);
	const content = `
		<!DOCTYPE html>
		<html>
			<head>
				<title>rtCamp - Online Shopping</title>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
				<style>${[...css].join('')}</style>
			</head>
			<body>
				<div id="root">${app}</div>
				<script>window.__INITIAL_DATA__ = ${serialize(storeProducts)}</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
	res.send(content);
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
