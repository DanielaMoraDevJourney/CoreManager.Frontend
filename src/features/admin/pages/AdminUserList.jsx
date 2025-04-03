import { useEffect, useState } from "react";
import api from "../../../api/axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../../styles/AppStyles.css";
import "../../../styles/Components.css";

const AdminUserList = () => {
    const [admins, setAdmins] = useState([]);
    const [loadingError, setLoadingError] = useState(false);

    const fetchAdmins = async () => {
        try {
            const response = await api.get("/admin/users");
            setAdmins(response.data);
        } catch (err) {
            setLoadingError(true);
            console.error("Error cargando administradores:", err);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "¿Estás segura/o?",
            text: "Esta acción eliminará al administrador permanentemente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6f42c1",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });

        if (result.isConfirmed) {
            try {
                await api.delete(`/admin/users/${id}`);
                setAdmins(admins.filter((a) => a.id !== id));
                Swal.fire("Eliminado", "El administrador fue eliminado correctamente.", "success");
            } catch (err) {
                Swal.fire("Error", "No se pudo eliminar el administrador.", "error");
                console.error(err);
            }
        }
    };

    useEffect(() => {
        fetchAdmins();
    }, []);

    return (
        <div className="container">
            <div className="user-list-header">
                <h2 className="section-title">🔐 Administradores</h2>
                <Link to="/admin-users/create" className="btn btn-primary btn-new-user">
                    + Nuevo administrador
                </Link>
            </div>

            <div className="user-list">
                {loadingError ? (
                    <div className="status-box error">
                        <span className="icon">🚫</span>
                        <h3>Error al cargar</h3>
                        <p>No se pudo conectar al servidor.</p>
                    </div>
                ) : admins.length === 0 ? (
                    <div className="status-box empty">
                        <span className="icon">📭</span>
                        <h3>No hay administradores registrados</h3>
                    </div>
                ) : (
                    admins.map((admin) => (
                        <div key={admin.id} className="usercard">
                            <div className="usercard-header">
                                <h3>{admin.username}</h3>
                            </div>
                            <div className="usercard-body">
                                <p><strong>Email:</strong> {admin.email}</p>
                            </div>
                            <div className="usercard-actions">
                                <Link to={`/admin-users/edit/${admin.id}`} className="btn btn-primary">Editar</Link>
                                <button onClick={() => handleDelete(admin.id)} className="btn btn-secondary">Eliminar</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminUserList;
