import React from 'react';
import ReactDOM from 'react-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import { PrdouctProvider } from './context';
import App from './App';

const insertCss = (...styles) => {
	const removeCss = styles.map(style => style._insertCss());
	return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
	<PrdouctProvider>
		<StyleContext.Provider value={{ insertCss }}>
			<App />
		</StyleContext.Provider>
	</PrdouctProvider>,
	document.querySelector('#root')
);
