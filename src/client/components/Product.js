import React, { Component } from 'react';

import { ProductConsumer } from '../context';

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;
		return (
			<div>
				<p>{title}</p>
				<p>{price}</p>
			</div>
		);
	}
}
