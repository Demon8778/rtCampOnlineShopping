import React, { Component } from 'react';
import window from 'global/window';

const ProductContext = React.createContext();
import { storeProducts } from './products';
//Provider and Consumer logic

class PrdouctProvider extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		products: storeProducts,
		cart: [],
		detailProduct: null
	};

	getItem = id => {
		const product = this.state.products.find(product => product.id === id);
		return product;
	};

	handleDetail = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return {
				detailProduct: product
			};
		});
	};

	addItemToCart = id => {
		console.log(id);
		const product = this.getItem(id);
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		this.setState(
			() => {
				return {
					cart: [...this.state.cart, product]
				};
			},
			() => {
				console.log('Do something');
			}
		);
	};

	render() {
		// console.log(this.state.products);
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addItemToCart: this.addItemToCart
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { PrdouctProvider, ProductConsumer };
