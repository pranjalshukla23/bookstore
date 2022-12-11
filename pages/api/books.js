import { connectToDatabase } from "../../api-helpers/dbConnect";
import {
  addBook,
  getAllBooks,
} from "../../api-helpers/controllers/books-controller";

//http://localhost:3000/books
export default async function handler(req, res) {
  //connect to database
  await connectToDatabase();

  if (req.method === "GET") {
    //get all books
    return await getAllBooks(req, res);
  } else if (req.method === "POST") {
    //add book to db
    await addBook(req, res);
  }
}