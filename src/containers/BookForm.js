import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../actions';

const Categories = ['Satire', 'Biography', 'History', 'Horror', 'Magic realism', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: uuidv4(),
        title: e.target.title.value,
        category: e.target.category.value,
      }),
    );
    e.target.reset();
  };
  return (
    <div className="book-form">
      <h3>Create book</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" />
        <select name="category" id="category">
          <option label=" ">Choose category </option>
          {Categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};
export { Categories, BookForm };
