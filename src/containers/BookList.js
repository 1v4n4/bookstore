import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BookList = () => {
  const list = useSelector((state) => state.books);
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
          <Book book={book} key={book.id} />
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
