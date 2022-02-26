import { Link } from 'react-router-dom';
import user from '../img/user.svg';
import './header.css';

const Header = () => (
  <header className="my-3">
    <div className="header-container d-flex j-content-between a-items-center container">
      <div className="header d-flex a-items-center">
        <h1 className="title">Bookstore CMS</h1>
        <nav className="d-flex">
          <Link className="link-text" to="/">BOOKS</Link>
          <Link className="link-text" to="/categories">CATEGORIES</Link>
        </nav>
      </div>
      <img src={user} alt="user-logo" />
    </div>
  </header>
);

export default Header;
