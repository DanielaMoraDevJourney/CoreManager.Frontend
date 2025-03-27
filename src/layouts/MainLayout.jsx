import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
      <>
        <Navbar />
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </>
    );
  };
  

export default MainLayout;
