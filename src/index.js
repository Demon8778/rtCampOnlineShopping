require('babel-polyfill');
import express from 'express';
import mongoose from 'mongoose';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { StaticRouter } from 'react-router-dom';

import Product from './models/product';
import Routes from './client/Routes';
import { PrdouctProvider } from './client/context';
// import { storeProducts } from './data';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/rtcamp-products-database', {
	useNewUrlParser: true
});

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// app.use('/addproducts', (req, res) => {
// 	storeProducts.forEach(product => {
// 		console.log(product.title);
// 		new Product(product)
// 			.save()
// 			.then(result => {
// 				console.log('product is created');
// 			})
// 			.catch(err => {
// 				console.log(err);
// 			});
// 	});
// 	res.status(200).send('Products are stored');
// });

app.get('/products', async (req, res) => {
	const products = await Product.find();
	res.send(products);
});

app.get('*', async (req, res) => {
	const products = await Product.find();

	const css = new Set();
	const insertCss = (...styles) =>
		styles.forEach(style => css.add(style._getCss()));

	const app = renderToString(
		<StyleContext.Provider value={{ insertCss }}>
			<StaticRouter location={req.url} context={{}}>
				<PrdouctProvider products={products}>
					<Routes />
				</PrdouctProvider>
			</StaticRouter>
		</StyleContext.Provider>
	);
	const content = `
		<!DOCTYPE html>
		<html>
			<head>
				<title>rtCamp - Online Shopping</title>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
					integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
					crossorigin="anonymous"
				/>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
				<style>${[...css].join('')}</style>
			</head>
			<body>
				<div id="root">${app}</div>
				<script>window.__INITIAL_DATA__ = ${serialize(products)}</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
	res.send(content);
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
