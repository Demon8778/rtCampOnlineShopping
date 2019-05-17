import React, { Component } from 'react';

import { ProductConsumer } from '../context';
import Product from './Product';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<h2>Our Products</h2>
					<div className="row">
						<ProductConsumer>
							{value => {
								return value.products.map(product => {
									return <Product key={product.id} product={product} />;
								});
							}}
						</ProductConsumer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
