import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserList from "../features/users/pages/UserList";
import UserCreate from "../features/users/pages/UserCreate";
import UserEdit from "../features/users/pages/UserEdit";
import MainLayout from "../layouts/MainLayout";
import Login from "../features/users/pages/Login";
import AdminUserList from "../features/admin/pages/AdminUserList";
import AdminUserCreate from "../features/admin/pages/AdminUserCreate";
import AdminUserEdit from "../features/admin/pages/AdminUserEdit";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleAuthChange);
    return () => {
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {isAuthenticated ? (
          <Route path="/" element={<MainLayout />}>
            <Route path="/users" element={<UserList />} />
            <Route path="/users/create" element={<UserCreate />} />
            <Route path="/users/edit/:id" element={<UserEdit />} />
            <Route path="/admin-users" element={<AdminUserList />} />
            <Route path="/admin-users/create" element={<AdminUserCreate />} />
            <Route path="/admin-users/edit/:id" element={<AdminUserEdit />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
