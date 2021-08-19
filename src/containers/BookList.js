import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = () => {
  const list = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    const { id } = book;
    dispatch(
      removeBook({
        id,
      }),
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {list.map((book) => (
          <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
