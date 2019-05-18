import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart/Cart';

export default () => {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route path="/details" component={ProductDetails} />
				<Route path="/cart" component={Cart} />
			</Switch>
		</React.Fragment>
	);
};
