import { getAllBooks } from "../../api-helpers/frontend/utils";
import { BookList } from "../../components/BookList";

export default function Books({ books }) {
  return <BookList data={books} />;
}

export const getServerSideProps = async (context) => {
  const books = await getAllBooks();

  return {
    props: {
      books,
    },
  };
};