import { Book } from "../models/Book";

//get all the books
export const getAllBooks = async (req, res) => {
  let books;

  try {
    //get all books from db
    books = await Book.find();
  } catch (err) {
    return new Error(err);
  }

  if (!books) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  if (books.length === 0) {
    return res.status(404).json({
      message: "No books found",
    });
  }

  return res.status(200).json({
    books,
  });
};

//add a book
export const addBook = async (req, res) => {
  const { title, author, price, imageUrl, featured } = req.body;

  if (
    !title ||
    title.trim() === "" ||
    !author ||
    author.trim() === "" ||
    !price ||
    !imageUrl ||
    imageUrl.trim() === ""
  ) {
    return res.status(422).json({
      message: "Invalid inputs",
    });
  }

  let book;

  try {
    //create a book record
    book = new Book({
      title,
      author,
      price,
      imageUrl,
      featured,
    });

    //save book to db
    book = await book.save();
  } catch (err) {
    //console.log(err);
    return new Error(err);
  }

  //if book is not saved
  if (!book) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  return res.status(201).json({
    book,
  });
};

//update a book
export const updateBook = async (req, res) => {
  const id = req.query.id;

  //console.log(id);

  const { title, author, price, imageUrl, featured } = req.body;

  if (
    !title ||
    title.trim() === "" ||
    !author ||
    author.trim() === "" ||
    !price ||
    !imageUrl ||
    imageUrl.trim() === ""
  ) {
    return res.status(422).json({
      message: "Invalid inputs",
    });
  }

  let book;

  try {
    //find the book by id and update it in db
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      price,
      imageUrl,
      featured,
    });
  } catch (err) {
    return new Error(err);
  }

  //if book is not updated
  if (!book) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  return res.status(200).json({
    message: "successfully updated",
  });
};

//delete a book
export const deleteBook = async (req, res) => {
  const id = req.query.id;
  let book;

  try {
    //find the book by id and delete it in db
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    return new Error(err);
  }

  //if book is not deleted
  if (!book) {
    return res.status(500).json({
      message: "Unable to delete",
    });
  }

  return res.status(200).json({
    message: "successfully deleted",
  });
};

export const getBookById = async (req, res) => {
  const { id } = req.query;

  let book;

  try {
    //find book by id
    book = await Book.findById(id);
  } catch (err) {
    return new Error(err);
  }

  //if book is not found
  if (!book) {
    return res.status(404).json({
      message: "No Book Found",
    });
  }

  return res.status(200).json({
    book,
  });
};