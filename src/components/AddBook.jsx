import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { sentBookAPI } from '../redux/books/books';
import './addBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const book = {
    id: uuidv4(),
    title,
    author,
    category,
  };

  const sendBook = (e) => {
    e.preventDefault();
    dispatch(sentBookAPI(book));
  };

  return (
    <>
      <div className="line container">{ }</div>
      <div className="container book-container-b">
        <h2 className="add-book-title ">ADD NEW BOOK</h2>
        <form onSubmit={sendBook} action="" className="d-flex j-content-between">
          <input className="input-text" type="text" placeholder="Title" required onChange={(e) => setTitle(e.target.value)} />
          <input className="input-text" type="text" placeholder="Author" required onChange={(e) => setAuthor(e.target.value)} />
          <select className="combo-box" name="categories" id="category" required onChange={(e) => setCategory(e.target.value)}>
            <option>--Category--</option>
            <option value="suspense">Suspense</option>
            <option value="terror">Terror</option>
            <option value="comedy">Comedy</option>
          </select>
          <button className="btn-add" type="submit">ADD BOOK</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
