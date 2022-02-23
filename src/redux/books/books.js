/* eslint-disable */
const initialState = [];
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

//ACTIONS
export const addBook = (payload) => ({
    type: ADD_BOOK,
    payload,
})

export const removeBook = (id) => ({
    type: REMOVE_BOOK,
    id,
})

//REDUCERS

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload]

        case REMOVE_BOOK:
            return state.filter(book => book.id !== id);

        default:
            return state;
    }
}

export default booksReducer;
