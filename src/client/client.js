import React from 'react';
import ReactDOM from 'react-dom';

import { PrdouctProvider } from './context';
import App from './App';

ReactDOM.hydrate(
	<PrdouctProvider products={window.__INITIAL_DATA__}>
		<App />
	</PrdouctProvider>,
	document.querySelector('#root')
);
