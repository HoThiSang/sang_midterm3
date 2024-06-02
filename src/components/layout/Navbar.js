import { Link } from "react-router-dom";

const Navbar = ({theme, toggleTheme }) => {

  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
        <li>
            <button onClick={toggleTheme} className="button-model">
            {theme ==='dark' ? (
              <i className="fa-solid fa-sun icon-button-light"></i>
              ) : (
                <i className="fa-solid fa-moon icon-button-dark"></i> 
                )
                }</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
