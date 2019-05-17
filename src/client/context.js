import React, { Component } from 'react';

const ProductContext = React.createContext();

//Provider and Consumer logic

class PrdouctProvider extends Component {
	state = {
		products: window.__INITIAL_DATA__ || [],
		cart: [],
		modalOpen: false,
		cartTotal: 0
	};

	render() {
		// console.log(this.state.products);
		return (
			<ProductContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { PrdouctProvider, ProductConsumer };
