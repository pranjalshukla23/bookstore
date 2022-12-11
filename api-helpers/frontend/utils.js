import axios from "axios";

export const getAllBooks = async () => {
  //get all books from db
  const res = await axios.get("http://localhost:3000/api/books");

  if (res.status !== 200) {
    return new Error("Internal Server Error");
  }

  return await res.data?.books;
};

export const getFeaturedBooks = async () => {
  const books = await getAllBooks();

  if (books.length === 0) {
    return [];
  }

  return books.filter((book) => book.featured === true);
};

export const sendBook = async (book) => {
  //add a book to db
  const res = await axios.post("http://localhost:3000/api/books", {
    title: book.title,
    author: book.author,
    imageUrl: book.imageUrl,
    featured: book.featured,
    price: Number(book.price),
  });

  if (res.status !== 201) {
    return new Error("Database request rejected");
  }

  return await res.data;
};

export const getBookById = async (id) => {
  //get book by id from db
  const res = await axios.get(`http://localhost:3000/api/book/${id}`);

  if (res.status !== 200) {
    return new Error("unable to fetch book with given id");
  }

  const data = await res.data;

  return data.book;
};

export const updateBook = async (book, id) => {
  //update book in db
  const res = await axios.put(`http://localhost:3000/api/book/${id}`, {
    title: book.title,
    author: book.author,
    imageUrl: book.imageUrl,
    featured: book.featured,
    price: Number(book.price),
  });

  if (res.status !== 200) {
    return new Error("Unable to update book");
  }

  return await res.data;
};

export const deleteBook = async (id) => {
  //delete book by id from db
  const res = await axios.delete(`http://localhost:3000/api/book/${id}`);

  if (res.status !== 200) {
    return new Error("Unable to delete book");
  }

  return await res.data;
};