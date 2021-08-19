import { combineReducers } from 'redux';
import BookReducer from './book';

const reducer = combineReducers({
  books: BookReducer,
});

export default reducer;
