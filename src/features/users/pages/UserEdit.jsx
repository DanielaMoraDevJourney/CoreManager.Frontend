import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/userService";
import "../../../styles/AppStyles.css";
import "../../../styles/Components.css";
import "../../../styles/UserForm.css";

const UserEdit = () => {
  const [form, setForm] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getUserById(id);
        const birthDate = new Date(data.birthDate).toISOString().split("T")[0];
        setForm({ ...data, birthDate });
      } catch (err) {
        alert("Error al cargar usuario");
        console.error(err);
      }
    };

    loadUser();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in form) {
      if (!form[key]) {
        alert("Por favor, completa todos los campos.");
        return;
      }
    }

    const birth = new Date(form.birthDate);
    const today = new Date();
    if (birth > today) {
      alert("La fecha de nacimiento no puede estar en el futuro.");
      return;
    }

    const ageDiff = today.getFullYear() - birth.getFullYear();
    const hasHadBirthday =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

    const actualAge = hasHadBirthday ? ageDiff : ageDiff - 1;

    if (actualAge < 18) {
      alert("El usuario debe tener al menos 18 años.");
      return;
    }

    try {
      await updateUser(id, form);
      navigate("/users");
    } catch (err) {
      alert("Error al actualizar usuario");
      console.error(err);
    }
  };

  const maxBirthDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18))
    .toISOString()
    .split("T")[0];

  return (
    <div className="container">
      <div className="user-form-wrapper">
        <h2 className="form-title">Editar usuario</h2>
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
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
