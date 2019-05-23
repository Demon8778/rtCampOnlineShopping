import React, { Component } from 'react';

import { ProductConsumer } from '../../context';
import EmptyCart from './EmptyCart';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import SuccessAlert from './SuccessAlert';
import DangerAlert from './DangerAlert';

export default class Cart extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { cart, successPurchase, successRemove } = value;
					if (cart.length > 0) {
						return (
							<React.Fragment>
								<div className="text-center">
									<h1 className="mt-2 mb-4">Your Cart</h1>
								</div>
								<CartColumns />
								<CartList />
								<CartTotals />
							</React.Fragment>
						);
					} else {
						if (successPurchase) return <SuccessAlert />;
						if (successRemove) return <DangerAlert />;
						return <EmptyCart />;
					}
				}}
			</ProductConsumer>
		);
	}
}
