import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

class PrdouctProvider extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		products: this.props.products,
		cart: [],
		detailProduct: null,
		cartTotal: 0,
		modalOpen: false,
		modalProduct: null,
		searchByName: '',
		searchByCategory: '',
		categories: ['Mobiles', 'Clothes', 'Books'],
		successPurchase: false
	};

	getItem = id => {
		const product = this.state.products.find(product => product._id === id);
		return product;
	};

	onSearchByName = text => {
		this.setState(() => {
			return {
				searchByName: text
			};
		});
	};

	onSearchByCategory = value => {
		this.setState(() => {
			return {
				searchByCategory: value
			};
		});
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
		const product = tempCart.find(product => product._id === id);

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
		const product = tempCart.find(product => product._id === id);

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
		let total = 0;
		this.state.cart.forEach(product => (total += product.total));

		this.setState(() => {
			return {
				cartTotal: total
			};
		});
	};

	removeItem = id => {
		let tempCart = [...this.state.cart];

		const product = this.getItem(id);

		product.inCart = false;
		product.count = 0;
		product.total = 0;

		tempCart = tempCart.filter(product => product._id !== id);

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

	clearCart = async () => {
		const { data } = await axios.get(
			'https://rtcamp-online-shopping.herokuapp.com//products'
		);
		this.setState(() => {
			return {
				cart: [],
				cartTotal: 0,
				products: data
			};
		});
	};

	closeModal = () => {
		this.setState(() => {
			return {
				modalOpen: false
			};
		});
	};

	openModal = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return {
				modalProduct: product,
				modalOpen: true
			};
		});
	};

	onPurchase = async () => {
		await this.clearCart();
		this.setState(
			{
				successPurchase: true
			},
			() => {
				setTimeout(() => {
					this.setState({
						successPurchase: false
					});
				}, 3000);
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
					clearCart: this.clearCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					onSearchByName: this.onSearchByName,
					onSearchByCategory: this.onSearchByCategory,
					onPurchase: this.onPurchase
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { PrdouctProvider, ProductConsumer };
