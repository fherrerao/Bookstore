import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteBook } from '../redux/books/books';
import './book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

  const percentage = 37;

  return (
    <li className="book-container container d-flex j-content-between">
      <div>
        <h4 className="category">{category}</h4>
        <h2 className="title-book">{title}</h2>
        <h3 className="author"> {author}</h3>
        <div className="d-flex a-items-center">
          <button className="btn-actions">Comments</button>
          <div className="Line-2"></div>
          <button className="btn-actions" type="button" onClick={removeHandler}>Remove</button>
          <div className="Line-2"></div>
          <button className="btn-actions">Edit</button>
        </div>
      </div>
      <div className="d-flex a-items-center">
        <div className="p-completed d-flex a-items-center">
          <CircularProgressbar className="percentage" value={percentage} />
          <div>
            <p className="p-value">{percentage} %</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="Line-3"></div>
        <div>
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">CHAPTER 17</p>
          <button className="btn-update" type="submit">UPDATE PROGRESS</button>
        </div>
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
