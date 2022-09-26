import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        PJmiles
      </Link>

      <ul>
        <Link to="/login" className="nav-link">
          Log in
        </Link>
        <Link to="/pricing" className="nav-link">
          Pricing
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
