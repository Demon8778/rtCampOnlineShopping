import express from 'express';
import mongoose from 'mongoose';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';

import Product from './models/product';
import Routes from './client/Routes';
import { PrdouctProvider } from './client/context';
import { storeProducts } from './data';

const app = express();

mongoose.connect(
	'mongodb+srv://taskapp:Czr5FUJEFaC3yhF3@cluster0-ix3vz.mongodb.net/online-shopping-development?retryWrites=true',
	{
		useNewUrlParser: true
	}
);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/addproducts', (req, res) => {
	storeProducts.forEach(product => {
		console.log(product.title);
		new Product(product)
			.save()
			.then(result => {
				console.log('product is created');
			})
			.catch(err => {
				console.log(err);
			});
	});
	res.status(200).send('Products are stored');
});

app.get('/products', async (req, res) => {
	const products = await Product.find();
	res.send(products);
});

app.get('*', async (req, res) => {
	const products = await Product.find();

	const app = renderToString(
		<StaticRouter location={req.url} context={{}}>
			<PrdouctProvider products={products}>
				<Routes />
			</PrdouctProvider>
		</StaticRouter>
	);
	const content = `
		<!DOCTYPE html>
		<html>
			<head>
				<title>rtCamp - Online Shopping</title>
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
					integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
					crossorigin="anonymous"
				/>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
				<link rel="stylesheet" type="text/css" href="styles.css" />
				
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
