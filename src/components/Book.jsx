import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteBook } from '../redux/books/books';
import './book.css'

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id,
    category,
    title,
    author,
  } = props;

  const removeHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li className="book-container container">
      <h4 className="category">{category}</h4>
      <h2 className="title-book">{title}</h2>
      <h3 className="author"> {author}</h3>
      <div className="d-flex a-items-center">
        <button className="btn-actions">Comments</button>
        <div class="Line-2"></div>
        <button className="btn-actions" type="button" onClick={removeHandler}>Remove</button>
        <div class="Line-2"></div>
        <button className="btn-actions">Edit</button>
      </div>

    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
