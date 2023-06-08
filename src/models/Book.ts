import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	numberOfPages: Number,
	language: String,
	imageUrl: String,
	buyUrl: String,
	whenPurchased: Date,
	comments: [String],
	author: {
		firstName: String,
		lastName: String,
		age: Number,
	},
	email: {
		type: String,
		lowercase: true,
	},
});

export const Book = mongoose.model('book', bookSchema);
