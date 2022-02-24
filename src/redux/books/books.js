const initialState = [];
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZF9EEG52YEvEwT4utW6R/books';

// ACTIONS
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const sentBookAPI = (payload) => (
  async (dispatch) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: payload.title,
        category: payload.category,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    dispatch(addBook(payload));
  }
);

export const getBook = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  dispatch({
    type: GET_BOOKS_SUCCESS,
    payload: data,
  });
};

// REDUCERS
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case GET_BOOKS_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default booksReducer;
