import React from 'react';
import { Link } from 'react-router-dom';

export default ({ value }) => {
	const { clearCart } = value;
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<Link to="/">
						<button
							className="btn btn-outline-danger"
							onClick={() => value.clearCart()}
						>
							Clear Cart
						</button>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};
