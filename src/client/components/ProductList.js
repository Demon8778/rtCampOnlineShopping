import React, { Component } from 'react';

import { ProductConsumer } from '../context';
import Product from './Product';
import Search from './Search';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<h2>Our Products</h2>
					<div className="row">
						<Search />
					</div>
					<div className="row">
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

									// console.log(category);
									console.log(product.category, category);
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
