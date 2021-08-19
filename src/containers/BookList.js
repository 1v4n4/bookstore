import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import Filter from '../components/Filter';

const BookList = () => {
  const list = useSelector(
    (state) => {
      if (state.filter === 'All') return state.books;
      return state.books.filter((book) => book.category === state.filter);
    },
  );

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    const { id } = book;
    dispatch(
      removeBook({
        id,
      }),
    );
  };

  const handleFilterChange = (filter) => {
    dispatch(
      changeFilter({
        filter,
      }),
    );
  };

  return (
    <>
      <Filter handleFilterChange={handleFilterChange} />
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
    </>
  );
};

export default BookList;
