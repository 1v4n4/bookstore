import React from 'react';
import PropTypes from 'prop-types';
import { Categories } from '../containers/BookForm';
import '../CSS/filter.css';

const Filter = ({ handleFilterChange }) => (
  <div className="filter-div">
    <select className="filter-select foptions" onChange={(e) => handleFilterChange(e.target.value)}>
      <option className="foptions" label="CATEGORIES">CATEGORIES</option>
      <option className="foptions" label="All">All</option>
      {Categories.map((category) => <option className="foptions" value={category} key={category}>{category}</option>)}
    </select>
  </div>
);

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
