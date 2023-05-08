
import './Main.css';
import {useNavigate} from "react-router-dom"


function Main() {
    const navigate = useNavigate()
  return (
    <div>
        <header className="header">
            <nav>
                <ul>
                <li onClick={()=>{navigate("/")}}><a href="localhost:3000">Inicio</a></li>
                <li><a href="localhost:3000">Servicios</a></li>
                <li><a href="localhost:3000">Contacto</a></li>
                <li className="login" onClick={()=>{navigate("/login")}}>
                    <a href="login">Log in</a>
                </li>
                </ul>
            </nav>
        </header>
        <div className = "hero">
                <h1>Busqueda de resultados</h1>
                <p>Encuentre aquí sus examenes médicos</p> 
            <div className='search'>
                <h2>Búsqueda de Exámenes Médicos</h2>
                <form>
                    <label htmlFor="exam-name">Digite su ID:</label>
                    <input type="text" id="exam-name" name="exam-name" />
                    <button type="submit">Buscar</button>
                </form>
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

export default Main;
