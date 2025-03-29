import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/userService.ts";
import "../../../styles/AppStyles.css";
import "../../../styles/Components.css";
import "../../../styles/UserForm.css";
import Swal from "sweetalert2";

const UserCreate = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthDate: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const isValidPhone = (phone) => {
        const digitsOnly = phone.replace(/\D/g, "");
        return digitsOnly.length === 9;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        for (const key in form) {
            if (!form[key]) {
                Swal.fire("Campos incompletos", "Por favor, completa todos los campos.", "warning");
                return;
            }
        }

        if (!isValidPhone(form.phone)) {
            Swal.fire("Teléfono inválido", "El número debe tener al menos 9 dígitos.", "warning");
            return;
        }

        if (!isValidEmail(form.email)) {
            Swal.fire("Correo inválido", "Por favor ingresa un correo válido con @ y dominio.", "warning");
            return;
        }

        const birth = new Date(form.birthDate);
        const today = new Date();

        if (birth > today) {
            Swal.fire("Fecha inválida", "La fecha de nacimiento no puede estar en el futuro.", "warning");
            return;
        }

        const ageDiff = today.getFullYear() - birth.getFullYear();
        const hasHadBirthday =
            today.getMonth() > birth.getMonth() ||
            (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

        const actualAge = hasHadBirthday ? ageDiff : ageDiff - 1;

        if (actualAge < 18) {
            Swal.fire("Edad mínima", "El usuario debe tener al menos 18 años.", "warning");
            return;
        }

        try {
            await createUser(form);
            Swal.fire({
                icon: "success",
                title: "Usuario creado",
                text: "El usuario fue registrado correctamente.",
                timer: 2000,
                showConfirmButton: false,
            });
            setTimeout(() => navigate("/users"), 2000);
        } catch (err) {
            Swal.fire("Error", "Ocurrió un error al crear el usuario.", "error");
            console.error(err);
        }
    };

    const maxBirthDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18))
        .toISOString()
        .split("T")[0];

    return (
        <div className="container">
            <div className="user-form-wrapper">
                <h2 className="form-title">Registrar nuevo usuario</h2>
                <form onSubmit={handleSubmit} className="user-form">
                    <div className="form-group">
                        <label>Nombres</label>
                        <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
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
                        <label>Teléfono</label>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de nacimiento</label>
                        <input
                            type="date"
                            name="birthDate"
                            value={form.birthDate}
                            onChange={handleChange}
                            max={maxBirthDate}
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

export default UserCreate;
