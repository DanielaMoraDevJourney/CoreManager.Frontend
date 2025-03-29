import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { getUsers, deleteUser } from "../services/userService";
import UserCard from "../components/UserCard";
import "../../../styles/AppStyles.css";
import "../../../styles/Components.css";
import Swal from "sweetalert2";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { searchQuery } = useOutletContext();
  const [loadingError, setLoadingError] = useState(false);

  const filteredUsers = users.filter((u) =>
    u.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setLoadingError(true);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás segura/o?",
      text: "Esta acción eliminará el usuario permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6f42c1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await deleteUser(id);
        setUsers(users.filter((u) => u.id !== id));
        Swal.fire("¡Eliminado!", "El usuario fue eliminado correctamente.", "success");
      } catch (err) {
        Swal.fire("Error", "No se pudo eliminar el usuario.", "error");
        console.error(err);
      }
    }
  };

  return (
    <div className="container">
      <div className="titletitle">
        <h2 className="section-title">👥 Usuarios registrados</h2>
        <Link to="/users/create" className="btn btn-primary btn-new-user">
          + Nuevo usuario
        </Link>
      </div>

      <div className="user-list">
        {loadingError ? (
          <div className="status-box error">
            <span className="icon">🚫</span>
            <h3>Sin conexión con el servidor</h3>
            <p>Verifica que el backend esté activo y funcionando.</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="status-box empty">
            <span className="icon">📭</span>
            <h3>No hay usuarios registrados</h3>
            <p>Haz clic en <strong>"+ Nuevo usuario"</strong> para agregar uno.</p>
          </div>
        ) : (
          filteredUsers.map((u) => (
            <UserCard key={u.id} user={u} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
