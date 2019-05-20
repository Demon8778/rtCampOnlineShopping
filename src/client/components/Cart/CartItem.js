import React from 'react';

export default ({ product, value }) => {
	const { _id, title, img, price, total, count } = product;
	// console.log(value);
	const { removeItem, increment, decrement } = value;
	return (
		<div className="row my-3 text-capitalize text-center">
			<div className="col-10 mx-auto col-lg-2">
				<img
					src={img}
					style={{ width: '5rem', height: '5rem' }}
					className="img-fluid"
					alt="product"
				/>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">Product : </span>
				{title}
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">Price : </span>
				{price}
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<div className="d-flex justify-content-center">
					<span className="btn btn-black mx-1" onClick={() => decrement(_id)}>
						-
					</span>
					<span className="btn btn-black mx-1">{count}</span>
					<span className="btn btn-black mx-1" onClick={() => increment(_id)}>
						+
					</span>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<div className="cart-icon" onClick={() => removeItem(_id)}>
					<i className="fas fa-trash" />
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<strong>item total : ${total}</strong>
			</div>
		</div>
	);
};
