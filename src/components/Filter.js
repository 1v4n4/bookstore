import React from 'react';
import PropTypes from 'prop-types';
import { Categories } from '../containers/BookForm';

const Filter = ({ handleFilterChange }) => (
  <div className="filter-div">
    <select className="filter-select" onChange={(e) => handleFilterChange(e.target.value)}>

      <option label="All">All</option>
      {Categories.map((category) => <option value={category} key={category}>{category}</option>)}
    </select>
  </div>
);

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
