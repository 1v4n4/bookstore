import '../CSS/App.css';
import { BookForm } from '../containers/BookForm';
import BookList from '../containers/BookList';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
