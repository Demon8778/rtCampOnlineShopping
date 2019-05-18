import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;

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
											value.handleDetail(id);
										}}
									/>
								</Link>
								<button
									className="cart-btn"
									disabled={inCart ? true : false}
									onClick={() => {
										value.addItemToCart(id);
									}}
								>
									{inCart ? (
										<p className="text-capitalize mb-0" disabled>
											in cart
										</p>
									) : (
										<i className="fas fa-cart-plus" />
									)}
								</button>
							</div>
						)}
					</ProductConsumer>
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center">{title}</p>
						<h5>{price}</h5>
					</div>
				</div>
			</div>
		);
	}
}
