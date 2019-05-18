import React from 'react';

import CartItem from './CartItem';

export default ({ value }) => {
	const { cart } = value;
	return (
		<div className="container-fluid">
			{cart.map(product => (
				<CartItem key={product.id} product={product} value={value} />
			))}
		</div>
	);
};
