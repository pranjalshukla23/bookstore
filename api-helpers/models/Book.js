import mongoose from "mongoose";

const Schema = mongoose.Schema;

//create a schema
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
  },
});

//create a Book model if it does not exist else return the existing Book model
export const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);