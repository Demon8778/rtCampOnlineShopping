import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';

export default class ProductDetails extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const {
						id,
						company,
						img,
						info,
						price,
						title,
						inCart
					} = value.detailProduct;
					return (
						<div className="container">
							<h1>{title}</h1>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
