import React from 'react';

import CartItem from './CartItem';
import { ProductConsumer } from '../../context';

export default () => {
	return (
		<ProductConsumer>
			{value => {
				const { cart } = value;
				return (
					<div className="container-fluid">
						{cart.map(product => (
							<CartItem key={product.id} product={product} />
						))}
					</div>
				);
			}}
		</ProductConsumer>
	);
};
