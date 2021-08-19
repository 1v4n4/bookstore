import { combineReducers } from 'redux';
import BookReducer from './book';
import FilterReducer from './filter';

const reducer = combineReducers({
  books: BookReducer,
  filter: FilterReducer,
});

export default reducer;
