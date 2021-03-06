import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';

export default class ProductDetails extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const {
						_id,
						company,
						img,
						info,
						price,
						title,
						inCart
					} = value.detailProduct;
					return (
						<div className="container py-3">
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted my-3">
									<h1>{title}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3 text-center">
									<img src={img} className="img-fluid" alt={title} />
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
										made by: <span className="text-uppercase">{company}</span>
									</h4>
									<h4 className="text-blue">
										<strong>
											price : <span>&#x20b9;</span>
											{price}
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										some info about product :
									</p>
									<p className="text-muted lead">{info}</p>
									<div className="">
										<Link to="/">
											<button className="store text-capitalize">
												Back to products
											</button>
										</Link>

										{inCart ? (
											<button
												className="btn-cart"
												onClick={() => {
													this.props.history.push('/cart');
													console.log(this.props);
												}}
											>
												go to cart
											</button>
										) : (
											<button
												className="btn-cart"
												onClick={() => {
													value.addItemToCart(_id);
													value.openModal(_id);
												}}
											>
												add to cart
											</button>
										)}
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
