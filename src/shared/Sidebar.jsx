import { Link, useLocation } from "react-router-dom";
import { FaUsers, FaHome, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) setMobileOpen(false);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLinkClick = () => {
        if (isMobile) setMobileOpen(false);
    };

    return (
        <>
            {isMobile && mobileOpen && (
                <div className="sidebar-overlay" onClick={() => setMobileOpen(false)}></div>
            )}

            {isMobile && !mobileOpen && (
                <button className="hamburger-btn" onClick={() => setMobileOpen(true)}>
                    <FaBars />
                </button>
            )}

            <aside
                className={`sidebar 
    ${isMobile ? (mobileOpen ? "mobile-open" : "mobile-closed") : (collapsed ? "collapsed" : "")}`}
            >

                <div className="sidebar-header">
                    <div className="sidebar-logo">MENU</div>
                    <button
                        className="toggle-btn"
                        onClick={() => {
                            if (isMobile) setMobileOpen(false);
                            else setCollapsed(!collapsed);
                        }}
                    >
                        <FaBars />
                    </button>
                </div>

                <ul className="sidebar-menu">
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/" onClick={handleLinkClick}>
                            <FaHome className="icon" />
                            <span className="label">Inicio</span>
                        </Link>
                    </li>
{/*                     <li className={location.pathname.startsWith("/users") ? "active" : ""}>
                        <Link to="/users" onClick={handleLinkClick}>
                            <FaUsers className="icon" />
                            <span className="label">Usuarios</span>
                        </Link>
                    </li> */}
                </ul>
            </aside>
        </>

    );
};

export default Sidebar;
