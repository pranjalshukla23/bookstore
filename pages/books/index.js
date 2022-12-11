import { getAllBooks } from "../../api-helpers/frontend/utils";
import { BookList } from "../../components/BookList";
import { Book } from "../../api-helpers/models/Book";

export default function Books({ books }) {
  return <BookList data={books} />;
}

export const getServerSideProps = async (context) => {
  let books;

  try {
    //get all books from db
    books = await Book.find();
  } catch (err) {
    return new Error(err);
  }

  if (!books) {
    return {
      props: {
        books: [],
      },
    };
  }

  const text = JSON.stringify(books);

  books = JSON.parse(text);

  return {
    props: {
      books,
    },
  };
};