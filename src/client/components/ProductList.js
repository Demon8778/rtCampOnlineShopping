import React, { Component } from 'react';

import { ProductConsumer } from '../context';
import Product from './Product';
import Search from './Search';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="text-center">
						<h1 className="mt-2 mb-4">Our Products</h1>
					</div>
					<Search />
					<div className="row products">
						<ProductConsumer>
							{value => {
								const category = value.searchByCategory;
								let tempProducts = value.products;
								if (category !== '') {
									tempProducts = value.products.filter(
										product => product.category.toLowerCase() === category
									);
								}
								return tempProducts.map(product => {
									const search = value.searchByName.toLowerCase();
									if (
										search !== '' &&
										product.title.toLowerCase().indexOf(search) === -1
									)
										return null;
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
