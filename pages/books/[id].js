import { BookDetail } from "../../components/BookDetail";
import { getBookById } from "../../api-helpers/frontend/utils";

export default function Book({ book, id }) {
  return <BookDetail fetchedBook={book} id={id} />;
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  //get book by id
  const book = await getBookById(id);

  //console.log(book);

  return {
    props: {
      book,
      id,
    },
  };
};