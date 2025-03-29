import { useState } from "react";
import Sidebar from "../shared/Sidebar";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import "../styles/MainLayout.css";


const MainLayout = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <header className="main-header">
                    <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </header>
                <div className="page-content">
                    <Outlet context={{ searchQuery }} />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
