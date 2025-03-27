import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/userService.ts";
import "../../../styles/AppStyles.css";
import "../../../styles/Components.css";
import "../../../styles/UserForm.css"; 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(form);
      navigate("/users");
    } catch (err) {
      alert("Ocurrió un error al crear el usuario.");
      console.error(err);
    }
  };

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
