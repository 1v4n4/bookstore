import { createStore } from 'redux';
import BookReducer from './book';

const store = createStore(BookReducer);
console.log('store state from reducers', store.getState());

export default store;
