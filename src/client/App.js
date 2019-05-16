import React from 'react';

const App = props => {
	console.log(props);
	return (
		<React.Fragment>
			<h1>{props.data}</h1>
		</React.Fragment>
	);
};

export default App;
