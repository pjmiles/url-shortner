import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        PJmiles
      </Link>

      <ul>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
        <Link to="/signup" className="nav-link">
          signup
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
