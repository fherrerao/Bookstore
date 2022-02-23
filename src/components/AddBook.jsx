/* eslint-disable */
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/books";

const AddBook = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>ADD NEW BOOK</h2>

      <form action="">
        <input type="text" />
        <select name="" id="">
          <option value="">Action</option>
          <option value="">Terror</option>
          <option value="">Comedy</option>
        </select>
        <button type="button" onClick={() => dispatch(addBook('hello'))}>Add Book</button>
      </form>
    </>
  )
};

export default AddBook;
