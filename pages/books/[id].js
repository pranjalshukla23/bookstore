import { BookDetail } from "../../components/BookDetail";
import { getBookById } from "../../api-helpers/frontend/utils";
import { Book } from "../../api-helpers/models/Book";

export default function getBook({ book, id }) {
  return <BookDetail fetchedBook={book} id={id} />;
}

export const getServerSideProps = async (context) => {
  console.log("id", context.query.id);
  const { id } = context.query;

  let book;

  try {
    //find book by id in db
    book = await Book.findById(id);

    //console.log("book is", book);
  } catch (err) {
    console.log("error", err);
    return {
      props: {},
    };
  }
  if (!book) {
    console.log("book not found");
    return {
      props: {},
    };
  }

  const text = JSON.stringify(book);

  book = JSON.parse(text);

  return {
    props: {
      book,
      id,
    },
  };
};