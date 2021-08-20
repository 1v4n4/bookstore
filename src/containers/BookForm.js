import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../actions';
import '../CSS/bookform.css';

const Categories = ['Satire', 'Biography', 'History', 'Horror', 'Magic realism', 'Fantasy', 'Sci-Fi'];

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
      <h4 className="add-txt">ADD NEW BOOK</h4>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
          <optgroup>
            <option label="Category">Category </option>
            {Categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </optgroup>
        </select>
        <button type="submit" className="addbtn addbk-txt">ADD BOOK</button>
      </form>
    </div>
  );
};
export { Categories, BookForm };
