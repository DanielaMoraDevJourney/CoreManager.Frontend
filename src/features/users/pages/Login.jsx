import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";
import Swal from "sweetalert2";
import "../../../styles/Login.css";
import logo from "../../../resources/LOGO2.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.username || !form.password) {
            Swal.fire("Campos requeridos", "Completa todos los campos.", "warning");
            return;
        }

        try {
            setIsLoading(true);
            const response = await api.post("/admin/login", form);
            const token = response.data.token;

            localStorage.setItem("token", token);
            Swal.fire({
                icon: "success",
                title: "¡Bienvenido!",
                text: "Has iniciado sesión correctamente.",
                timer: 2000,
                showConfirmButton: false,
            });

            setTimeout(() => navigate("/users"), 2000);
        } catch (error) {
            Swal.fire("Error", "Credenciales inválidas o servidor no disponible.", "error");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box animate-fade-slide">
                <div className="login-logo">
                    <img src={logo} alt="CoreManager Logo" className="login-logo-img animated-logo" />
                    <h2>Bienvenido a CoreManager</h2>
                    <p className="login-subtitle">Gestiona con poder. Administra con estilo.</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            placeholder=" "
                        />
                        <label htmlFor="username">Usuario</label>
                    </div>

                    <div className="input-group password-group">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            placeholder=" "
                            aria-label="Contraseña"
                        />
                        <label htmlFor="password">Contraseña</label>
                        <span
                            className="toggle-password"
                            onClick={togglePassword}
                            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && togglePassword()}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Ingresando..." : "Ingresar"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
