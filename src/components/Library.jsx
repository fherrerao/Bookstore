import { useSelector } from 'react-redux';
import Book from './Book';
// import { getBook } from '../redux/books/books';

const Library = () => {
  const arrBooks = useSelector((state) => state.booksReducer);
  // const dispatch = useDispatch();
  // const booksAPI = useSelector((store) => store.booksReducer);
  // console.log(booksAPI);

  return (
    <ul>
      {
        arrBooks.map((item) => (
          <Book
            key={item.id}
            id={item.id}
            category={item.category}
            title={item.title}
            author={item.author}
          />
        ))
      }
      {/* <button onClick={() => dispatch(getBook())}>getBooks</button> */}
    </ul>
  );
};

export default Library;
