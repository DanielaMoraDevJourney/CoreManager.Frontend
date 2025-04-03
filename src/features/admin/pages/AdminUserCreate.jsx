import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";
import Swal from "sweetalert2";
import "../../../styles/UserForm.css";

const AdminUserCreate = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        for (const key in form) {
            if (!form[key]) {
                Swal.fire("Campos incompletos", "Por favor completa todos los campos.", "warning");
                return;
            }
        }

        try {
            await api.post("/admin/users", form);
            Swal.fire({
                icon: "success",
                title: "Administrador creado",
                text: "El administrador fue registrado correctamente.",
                timer: 2000,
                showConfirmButton: false,
            });
            setTimeout(() => navigate("/admin-users"), 2000);
        } catch (err) {
            Swal.fire("Error", "No se pudo registrar el administrador.", "error");
            console.error(err);
        }
    };

    return (
        <div className="container">
            <div className="user-form-wrapper">
                <h2 className="form-title">Registrar nuevo administrador</h2>
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
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminUserCreate;
