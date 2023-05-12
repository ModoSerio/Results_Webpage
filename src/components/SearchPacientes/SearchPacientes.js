import './SearchPacientes.css';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function SearchPacientes() {
    const navigate = useNavigate()
    const location = useLocation();
    const objeto = location.state?.objeto || {};
  return (
    <div>
        <header className="header">
            <nav>
                <ul>
                <li onClick={()=>{navigate("/")}}><a href="localhost:3000">Inicio</a></li>
                <li onClick={()=>{navigate("/services")}} ><a href="localhost:3000">Servicios</a></li>
                <li><a href="localhost:3000">Contacto</a></li>
                <li className="login" onClick={()=>{navigate("/login")}}>
                    <a href="login">Log out</a>
                </li>
                </ul>
            </nav>
        </header>
        <div className = "hero">
                <h1>Busqueda de resultados</h1>
                <p>Encuentre aquí sus examenes médicos</p> 
            <div className='search'>
                <h2>Búsqueda de Exámenes Médicos</h2>
                <p>ID: {objeto.documento}<br/>Nombre: {objeto.nombre}<br/>Email: {objeto.email}</p>
            
            </div>
        </div>
        <div className='footer'>
            <footer>
                <p>&copy; Desarrollo Web Udea 2023</p>
            </footer>
        </div>
    </div>
  );
}

export default SearchPacientes;
