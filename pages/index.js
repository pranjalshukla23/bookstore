import { getFeaturedBooks } from "../api-helpers/frontend/utils";
import { BookList } from "../components/BookList";
import { Book } from "../api-helpers/models/Book";
import { connectToDatabase } from "../api-helpers/dbConnect";

export default function Home({ books }) {
  return (
    <>
      <BookList data={books} />
    </>
  );
}

export const getStaticProps = async (context) => {
  let books;

  await connectToDatabase();

  try {
    //get all books from db
    books = await Book.find();
  } catch (err) {
    return new Error(err);
  }

  const text = JSON.stringify(books);

  const data = JSON.parse(text);

  const featuredBooks = data.filter((book) => book.featured === true);
  return {
    props: {
      books: featuredBooks,
    },
    revalidate: 10,
  };
};