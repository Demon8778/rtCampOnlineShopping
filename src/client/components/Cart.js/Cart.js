import React, { Component } from 'react';

import { ProductConsumer } from '../../context';
import EmptyCart from './EmptyCart';

export default class Cart extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { cart } = value;
					if (cart.length > 0) {
						return (
							<React.Fragment>
								<p>There are some items in the cart</p>
							</React.Fragment>
						);
					} else {
						return <EmptyCart />;
					}
				}}
			</ProductConsumer>
		);
	}
}
