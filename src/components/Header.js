import React from 'react';
import '../CSS/header.css';
import { IoIosPerson } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import Filter from './Filter';
import { changeFilter } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => {
    dispatch(
      changeFilter({
        filter,
      }),
    );
  };

  return (
    <header>
      <div className="left-div">
        <h1 className="text5 margin-headline">Bookstore CMS</h1>
        <div>
          <p className="book-header">BOOKS</p>
        </div>
        <div className="filter-options">
          <Filter handleFilterChange={handleFilterChange} />
        </div>
      </div>
      <div className="right-div">
        <i>
          <IoIosPerson />
        </i>
      </div>
    </header>
  );
};
export default Header;
