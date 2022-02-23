import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id,
    category,
    title,
    author,
  } = props;

  const deleteBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <h4>{category}</h4>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={deleteBook}>Remove</button>
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
