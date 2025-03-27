import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../services/userService";
import UserCard from "../components/UserCard";
import "../../../styles/AppStyles.css";
import "../../../styles/Components.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que quieres eliminar este usuario?");
    if (!confirm) return;

    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      alert("Error eliminando usuario");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="user-list-header">
        <h2 className="section-title">👥 Usuarios registrados</h2>
        <Link to="/users/create" className="btn btn-primary btn-new-user">
          + Nuevo usuario
        </Link>
      </div>

      <div className="user-list">
        {users.map((u) => (
          <UserCard key={u.id} user={u} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
