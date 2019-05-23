import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { ProductConsumer } from '../context';

class Product extends Component {
	render() {
		const { _id, title, img, price, inCart } = this.props.product;

		return (
			<div className="product col-9 col-md-6 col-lg-3 mx-auto my-3">
				<div className="card">
					<ProductConsumer>
						{value => (
							<div className="img-container p-5">
								<Link to="/details">
									<img
										src={img}
										alt="product"
										className="card-img-top"
										onClick={() => {
											value.handleDetail(_id);
										}}
									/>
								</Link>
								{inCart ? (
									<button
										className="product-btn__cart"
										onClick={() => {
											this.props.history.push('/cart');
											console.log(this.props);
										}}
									>
										Go to cart
									</button>
								) : (
									<button
										className="product-btn__add"
										onClick={() => {
											value.addItemToCart(_id);
											value.openModal(_id);
										}}
									>
										<i className="fas fa-cart-plus" />
									</button>
								)}
							</div>
						)}
					</ProductConsumer>
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{title}</p>
						<h5 className="mb-0">&#x20b9;{price}</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Product);
