import { Link } from "react-router-dom";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="nav-left">
                    <div className="nav-logo">CoreManager</div>
                </div>

                <div className="nav-center">
                    <div className="search-wrapper">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Buscar por nombre o correo..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="nav-right">
                    <button className="logout-btn" title="Cerrar sesión">
                        <FaSignOutAlt />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
