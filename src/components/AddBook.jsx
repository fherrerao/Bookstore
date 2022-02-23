import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addBook } from "../redux/books/books";

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const book = {
    id: uuidv4(),
    title,
    author,
    category
  }

  const sendBook = (e) => {
    e.preventDefault();
    dispatch(addBook(book))
  }

  return (
    <>
      <h2>ADD NEW BOOK</h2>

      <form onSubmit={sendBook} action="">
        <input type="text" placeholder="Title" required onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" required onChange={e => setAuthor(e.target.value)} />

        <select name="categories" id="category" required onChange={e => setCategory(e.target.value)}>
          <option>--Category--</option>
          <option value="suspense">Suspense</option>
          <option value="terror">Terror</option>
          <option value="comedy">Comedy</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  )
};

export default AddBook;
