import { CHANGE_FILTER } from '../actions';

const FilterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default FilterReducer;
