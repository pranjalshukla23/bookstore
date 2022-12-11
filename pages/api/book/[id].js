import { connectToDatabase } from "../../../api-helpers/dbConnect";
import {
  deleteBook,
  getBookById,
  updateBook,
}                            from "../../../api-helpers/controllers/books-controller";

//http://localhost:3000/book/123
export default async function handler(req, res) {
  //connect to db
  await connectToDatabase();

  if (req.method === "PUT") {
    //update a book in db
    await updateBook(req, res);
  } else if (req.method === "DELETE") {
    //delete a book by id
    await deleteBook(req, res);
  } else if (req.method === "GET") {
    //get a book by id
    await getBookById(req, res);
  }
}