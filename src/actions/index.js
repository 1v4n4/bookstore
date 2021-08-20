const ADD_BOOK = 'ADD BOOK';
const REMOVE_BOOK = 'REMOVE BOOK';
const CHANGE_FILTER = 'CHANGE FILTER';

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,

});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export {
  ADD_BOOK, REMOVE_BOOK, addBook, removeBook, changeFilter, CHANGE_FILTER,
};
