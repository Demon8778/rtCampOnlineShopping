import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import s from './styles/styles.scss';

const App = props => {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
};

export default withStyles(s)(App);
