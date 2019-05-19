import React, { Component } from 'react';

import { ProductConsumer } from '../../context';
import EmptyCart from './EmptyCart';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
	componentDidUpdate() {}
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { cart } = value;
					if (cart.length > 0) {
						return (
							<React.Fragment>
								<CartColumns />
								<CartList value={value} />
								<CartTotals value={value} />
							</React.Fragment>
						);
					}
					return <EmptyCart />;
				}}
			</ProductConsumer>
		);
	}
}
