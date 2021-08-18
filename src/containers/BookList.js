import React from 'react';
import Book from '../components/Book';
import store from '../reducers';

const BookList = () => {
  const list = store.getState();
  console.log(list);
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
