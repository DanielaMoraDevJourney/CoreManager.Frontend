import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "../features/users/pages/UserList";
import UserCreate from "../features/users/pages/UserCreate";
import UserEdit from "../features/users/pages/UserEdit";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        
        <Route path="/" element={<MainLayout />}>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<UserCreate />} />
          <Route path="/users/edit/:id" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
