import { useSelector } from 'react-redux';
import Book from './Book';

const Library = () => {
  const arrBooks = useSelector((state) => state.booksReducer);

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
    </ul>
  );
};

export default Library;
