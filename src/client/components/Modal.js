import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';

export default class Modal extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { modalOpen, closeModal } = value;

					if (!modalOpen) {
						return null;
					} else {
						const { img, title, price } = value.modalProduct;
						return (
							<div className="modal">
								<div className="container">
									<div className="row">
										<div
											id="modal"
											className="col-8 clo-md-6 col-lg-4 mx-auto text-center p-5"
										>
											<h5>Item Added to the Cart</h5>
											<img src={img} alt="product" className="img-fluid mt-2" />
											<h5 className="mt-3">{title}</h5>
											<h5 className="text-muted">Price: &#x20b9;{price}</h5>
											<Link to="/">
												<button className="store" onClick={() => closeModal()}>
													Back to Store
												</button>
											</Link>
											<Link to="/cart">
												<button
													className="btn-cart"
													onClick={() => closeModal()}
												>
													Go To Cart
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}
