import React from 'react';
import { ProductConsumer } from '../../context';

export default () => {
	return (
		<ProductConsumer>
			{value => {
				const { onRemove, cartTotal, onPurchase } = value;
				return (
					<React.Fragment>
						<div className="container">
							<div className="row">
								<div className="mx-auto text-center">
									<div className="btn-group">
										<div>
											<button
												className="clear-cart mr-3"
												onClick={() => onRemove()}
											>
												Clear Cart
											</button>
										</div>
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
			}}
		</ProductConsumer>
	);
};
