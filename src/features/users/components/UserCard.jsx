import { Link } from "react-router-dom";
import "../../../styles/AppStyles.css";


const UserCard = ({ user, onDelete }) => {
    const { id, fullName, email, phone, birthDate } = user;
  
    return (
      <div className="usercard">
        <div className="usercard-header">
          <h3>{fullName}</h3>
        </div>
        <div className="usercard-body">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Teléfono:</strong> {phone}</p>
          <p><strong>Nacimiento:</strong> {new Date(birthDate).toLocaleDateString()}</p>
        </div>
        <div className="usercard-actions">
          <Link to={`/users/edit/${id}`} className="btn btn-primary">Editar</Link>
          <button onClick={() => onDelete(id)} className="btn btn-secondary">Eliminar</button>
        </div>
      </div>
    );
  };
  
  export default UserCard;