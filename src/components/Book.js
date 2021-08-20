import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import '../CSS/book.css';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  const percentage = Math.round(Math.random() * 100);
  const chapt = Math.round(Math.random() * 10);

  return (
    <div className="book-div">
      <div className="left-book-div">
        <p className="category-p text8">
          {category}
          {' '}
        </p>
        <h3 className="text6">{title}</h3>
        <p className="id-p text-li">
          {id}
          {' '}
        </p>
        <ul className="list">
          <li className="text-li border-li">Comments</li>
          <li className="border-li pleft"><button className="rmvbtn text-li" type="button" onClick={() => handleRemoveBook(book)}>Remove</button></li>
          <li className="text-li pleft">Edit</li>

        </ul>
      </div>
      <div className="right-book-div">
        <div className="circle">
          <CircularProgress variant="determinate" value={percentage} size="4rem" />

        </div>
        <div className="circle-txt">
          <span className="percent-txt">
            {percentage}
            %
          </span>
          <p className="completed foptions">Completed</p>
        </div>
        <div className="chapters">
          <p className="current-chapter chapter-txt">CURRENT CHAPTER</p>
          <p className="chapter-name chapter-name-txt">
            Chapter
            <span className="cspan">{chapt}</span>
          </p>
          <div className="progress-div">
            <p className="progress-p">UPDATE PROGRES</p>
          </div>
        </div>
      </div>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
