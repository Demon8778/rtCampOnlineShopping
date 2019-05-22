import React, { Component } from 'react';

import { ProductConsumer } from '../../context';
import EmptyCart from './EmptyCart';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import SuccessAlert from './SuccessAlert';

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
								<div className="text-center">
									<h1 className="mt-2 mb-4">Your Cart</h1>
								</div>
								<CartColumns />
								<CartList value={value} />
								<CartTotals value={value} />
							</React.Fragment>
						);
					} else {
						if (value.successPurchase) return <SuccessAlert />;
						return <EmptyCart />;
					}
				}}
			</ProductConsumer>
		);
	}
}
