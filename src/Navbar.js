import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h1>The Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
