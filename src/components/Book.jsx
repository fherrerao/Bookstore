const Book = ({ category, title, author }) => (
  <li>
    <h4>{category}</h4>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <button>Remove</button>
  </li>
);

export default Book;
