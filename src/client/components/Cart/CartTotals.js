import React from 'react';
import { Link } from 'react-router-dom';

export default ({ value }) => {
	const { clearCart, cartTotal } = value;
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-8 text-right col-sm-8 mt-2 ml-md-auto mt-2 ml-sm-5 ml-md-auto">
						<Link to="/">
							<button
								className="btn btn-outline-danger mb-3"
								onClick={() => value.clearCart()}
							>
								Clear Cart
							</button>
						</Link>
						<div className="mb-3">
							<button className="btn btn-outline-success">Checkout</button>
						</div>
						<h5>
							<span>Total: </span>
							<strong>$ {cartTotal}</strong>
						</h5>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
