import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
	return (
		<nav className="navbar navbar-dark">
			<Link to="/">
				<img alt="brand-logo" className="navbar-brand" />
			</Link>
		</nav>
	);
};
