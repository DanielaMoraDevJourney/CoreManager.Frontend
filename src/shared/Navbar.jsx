import { FaSignOutAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate(); 
    const adminName = localStorage.getItem("adminName");



    const handleLogout = () => {
        Swal.fire({
            title: "¿Cerrar sesión?",
            text: "Tu sesión actual se cerrará.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7145D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, salir",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token");
                Swal.fire("Sesión cerrada", "Has cerrado sesión correctamente.", "success");
                navigate("/login");
            }
        });
    };

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
                    <button className="logout-btn" title="Cerrar sesión" onClick={handleLogout}>
                        <FaSignOutAlt />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
