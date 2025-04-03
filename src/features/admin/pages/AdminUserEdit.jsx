import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api/axios";
import Swal from "sweetalert2";
import "../../../styles/UserForm.css";

const AdminUserEdit = () => {
    const { id } = useParams();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const fetchAdmin = async () => {
        try {
            const response = await api.get(`/admin/users/${id}`);
            setForm({ ...response.data, password: "" });
        } catch (err) {
            Swal.fire("Error", "No se pudo cargar el administrador.", "error");
            console.error(err);
        }
    };

    useEffect(() => {
        fetchAdmin();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.username || !form.email) {
            Swal.fire("Campos incompletos", "Usuario y correo son obligatorios.", "warning");
            return;
        }

        try {
            await api.put(`/admin/users/${id}`, form);
            Swal.fire({
                icon: "success",
                title: "Administrador actualizado",
                text: "Los datos fueron guardados correctamente.",
                timer: 2000,
                showConfirmButton: false,
            });
            setTimeout(() => navigate("/admin-users"), 2000);
        } catch (err) {
            Swal.fire("Error", "No se pudo actualizar el administrador.", "error");
            console.error(err);
        }
    };

    return (
        <div className="container">
            <div className="user-form-wrapper">
                <h2 className="form-title">Editar administrador</h2>
                <form onSubmit={handleSubmit} className="user-form">
                    <div className="form-group">
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Nueva contraseña (opcional)</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Actualizar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminUserEdit;
