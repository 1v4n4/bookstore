import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = () => {
  const list = useSelector(
    (state) => {
      if (state.filter === 'All' || state.filter === 'Categories') return state.books;
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

  return (
    <div className="books-div">
      {list.map((book) => (
        <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
      ))}
    </div>
  );
};

export default BookList;
