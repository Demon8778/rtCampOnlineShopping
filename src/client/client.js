import React from 'react';
import ReactDOM from 'react-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import App from './App';

const insertCss = (...styles) => {
	const removeCss = styles.map(style => style._insertCss());
	return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
	<StyleContext.Provider value={{ insertCss }}>
		<App data={window.__INITIAL_DATA__} />
	</StyleContext.Provider>,
	document.querySelector('#root')
);
