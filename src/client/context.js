import React, { Component } from 'react';
import window from 'global/window';

const ProductContext = React.createContext();

//Provider and Consumer logic

class PrdouctProvider extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props);
	}
	state = {
		products: this.props.products,
		detailProduct: null,
		cart: [],
		modalOpen: false,
		cartTotal: 0
	};

	getItem = id => {
		const product = this.state.products.find(product => product.id === id);
		return product;
	};

	handleDetail = id => {
		console.log(id);
		const product = this.getItem(id);
		this.setState(() => {
			return {
				detailProduct: product
			};
		});
	};
	render() {
		// console.log(this.state.products);
		return (
			<ProductContext.Provider
				value={{ ...this.state, handleDetail: this.handleDetail }}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { PrdouctProvider, ProductConsumer };
