import React, { Component } from 'react';
import window from 'global/window';

const ProductContext = React.createContext();
import { storeProducts } from './products';
//Provider and Consumer logic

class PrdouctProvider extends Component {
	constructor(props) {
		console.log('The constructor');
		super(props);
	}

	state = {
		products: this.props.products,
		cart: [],
		detailProduct: null,
		cartTotal: 0
	};

	componentDidMount() {
		this.setProducts();
	}

	setProducts = () => {
		let products = [];
		console.log(this.props.products);
		this.props.products.forEach(product => {
			const prod = { ...product };
			products = [...products, prod];
		});
		this.setState(() => {
			return {
				products
			};
		});
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
				this.addTotals();
			}
		);
	};

	increment = id => {
		const tempCart = [...this.state.cart];
		const product = tempCart.find(product => product.id === id);

		product.count++;
		product.total = product.price * product.count;

		this.setState(
			() => {
				return {
					cart: tempCart
				};
			},
			() => {
				this.addTotals();
			}
		);
	};

	decrement = id => {
		const tempCart = [...this.state.cart];
		const product = tempCart.find(product => product.id === id);

		if (product.count === 1) {
			this.removeItem(id);
			return;
		}
		product.count--;
		product.total = product.price * product.count;

		this.setState(
			() => {
				return {
					cart: tempCart
				};
			},
			() => {
				this.addTotals();
			}
		);
	};

	addTotals = () => {
		console.log('addTotals');
		let total = 0;
		this.state.cart.forEach(product => (total += product.total));

		this.setState(() => {
			return {
				cartTotal: total
			};
		});
	};

	removeItem = id => {
		console.log('removeItem');

		let tempCart = [...this.state.cart];

		const product = this.getItem(id);

		product.inCart = false;
		product.count = 0;
		product.total = 0;

		tempCart = tempCart.filter(product => product.id !== id);

		this.setState(
			() => {
				return {
					cart: tempCart
				};
			},
			() => {
				this.addTotals();
			}
		);
	};

	clearCart = () => {
		this.setState(
			() => {
				return {
					cart: [],
					cartTotal: 0
				};
			},
			() => {
				this.setProducts();
			}
		);
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addItemToCart: this.addItemToCart,
					removeItem: this.removeItem,
					increment: this.increment,
					decrement: this.decrement,
					clearCart: this.clearCart
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { PrdouctProvider, ProductConsumer };
