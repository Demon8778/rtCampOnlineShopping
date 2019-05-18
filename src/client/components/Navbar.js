import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';

export default () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-sm">
			<Link to="/">
				<img
					src={logo}
					alt="brand-logo"
					className="navbar-brand"
					width="50"
					height="50"
				/>
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						Products
					</Link>
				</li>
			</ul>
			<Link to="/cart" className="ml-auto">
				<button className="btn-cart">
					<span className="mr-2">
						<i className="fas fa-cart-plus" />
					</span>
					My Cart
				</button>
			</Link>
		</nav>
	);
};
