import '../App.css';
import { BookForm } from '../containers/BookForm';
import BookList from '../containers/BookList';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
