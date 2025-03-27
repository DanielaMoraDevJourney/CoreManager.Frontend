import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="nav-logo">CoreManager</div>
        <ul className="nav-links">
          <li><Link to="/users">Usuarios</Link></li>
          <li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
