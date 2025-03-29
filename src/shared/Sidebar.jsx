import { Link, useLocation } from "react-router-dom";
import { FaUsers, FaHome, FaBars } from "react-icons/fa";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-header">
                <div className="sidebar-logo">MENU</div>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <FaBars />
                </button>
            </div>
            <ul className="sidebar-menu">
                <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">
                        <FaHome className="icon" /> <span className="label">Inicio</span>
                    </Link>
                </li>
                <li className={location.pathname.startsWith("/users") ? "active" : ""}>
                    <Link to="/users">
                        <FaUsers className="icon" /> <span className="label">Usuarios</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
