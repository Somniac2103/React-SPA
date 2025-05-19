import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div>
        <nav aria-label="Footer links">
          <Link to="/" aria-label="Home">
            <p>Home</p>
          </Link>
          <Link to="/about" aria-label="About">
            <p>About</p>
          </Link>
        </nav>
        <p>&copy; {year} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}