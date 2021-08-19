import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../actions';

const Categories = ['Satire', 'Biography', 'History', 'Horror', 'Magic realism', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: uuidv4(),
        title,
        category,
      }),
    );
    e.target.reset();
  };
  return (
    <div className="book-form">
      <h3>Create book</h3>
      <p>
        Title:
        {title}
      </p>
      <p>
        Category:
        {category}
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
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
