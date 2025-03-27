import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/userService";
import "../../../styles/AppStyles.css";
import "../../../styles/Components.css";


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
    try {
      await updateUser(id, form);
      navigate("/users");
    } catch (err) {
      alert("Error al actualizar usuario");
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Editar usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombres</label>
          <input type="text" name="firstName" className="form-control" value={form.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Apellidos</label>
          <input type="text" name="lastName" className="form-control" value={form.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input type="text" name="phone" className="form-control" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Fecha de nacimiento</label>
          <input type="date" name="birthDate" className="form-control" value={form.birthDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
    </div>
  );
};

export default UserEdit;
