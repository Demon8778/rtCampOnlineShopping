import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import deepMerge from 'deepmerge';

import Navbar from './components/Navbar';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import b from 'bootstrap/dist/css/bootstrap.min.css';
import s from './styles/styles.scss';

// const composedStyles = deepMerge(b, s);

const App = props => {
	return (
		<React.Fragment>
			<Navbar />
			<div>This is an app component!!</div>
		</React.Fragment>
	);
};

export default withStyles(s)(App);
