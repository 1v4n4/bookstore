import '../Bookstore.css';
import { BookForm } from '../containers/BookForm';
import BookList from '../containers/BookList';

function Bookstore() {
  return (
    <div className="Bookstore">
      <h1>Bookstore</h1>
      <BookList />
      <BookForm />
    </div>
  );
}

export default Bookstore;
