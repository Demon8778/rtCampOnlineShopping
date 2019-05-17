import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import Navbar from './components/Navbar';

import s from './styles/styles.scss';

const App = props => {
	console.log(props);
	return (
		<React.Fragment>
			<Navbar />
			<h1>{props.data}</h1>
		</React.Fragment>
	);
};

export default withStyles(s)(App);
