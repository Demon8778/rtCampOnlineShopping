import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	info: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	inCart: {
		type: Boolean,
		default: false
	},
	count: {
		type: Number,
		default: 0
	},
	total: {
		type: Number,
		default: 0
	},
	company: {
		type: String,
		required: true
	}
});

export default mongoose.model('Product', productSchema);
