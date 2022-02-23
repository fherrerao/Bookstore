import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Bookstore CMS</h1>
        <nav>
          <Link to="/">BOOKS</Link>
          <Link to="/categories">CATEGORIES</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
