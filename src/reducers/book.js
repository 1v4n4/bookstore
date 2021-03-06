import { Categories } from '../containers/BookForm';
import { ADD_BOOK, REMOVE_BOOK } from '../actions/index';

const idolize = () => Math.round(Math.random() * 98435);

const initialState = [
  { id: idolize(), title: 'Dune', category: Categories[6] },
  { id: idolize(), title: 'The Master and Margarita', category: Categories[0] },
  { id: idolize(), title: 'I, Robot', category: Categories[6] },
  { id: idolize(), title: 'One Hundred Years of Solitude', category: Categories[4] },
  { id: idolize(), title: 'The Man in the High Castle', category: Categories[6] },
  { id: idolize(), title: 'Cloud Atlas', category: Categories[5] },
  { id: idolize(), title: 'The Man Who Sold the World', category: Categories[1] },
];

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];

    default:
      return state;
  }
};
export default BookReducer;
