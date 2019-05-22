import React from 'react';
import { Link } from 'react-router-dom';

export default ({ value }) => {
	const { clearCart, cartTotal, successPurchase, onPurchase } = value;
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="mx-auto text-center">
						<div className="btn-group">
							<Link to="/">
								<button
									className="clear-cart mr-3"
									onClick={() => value.clearCart()}
								>
									Clear Cart
								</button>
							</Link>
							<div className="mb-3">
								<button
									className="checkout"
									onClick={() => {
										onPurchase();
									}}
								>
									Checkout
								</button>
							</div>
						</div>
						<h5>
							<span>Total: </span>
							<strong>&#x20b9;{cartTotal}</strong>
						</h5>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
