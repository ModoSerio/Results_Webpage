
import './Search.css';
import {useNavigate} from "react-router-dom"


function Search() {
    const navigate = useNavigate()
  return (
    <div>
        <header className="header">
            <nav>
                <ul>
                <li onClick={()=>{navigate("/services")}} ><a href="localhost:3000">Búsqueda</a></li>
                <li><a href="localhost:3000">Agregar exámen</a></li>
                <li className="login" onClick={()=>{navigate("/login")}}>
                    <a href="login">Log out</a>
                </li>
                </ul>
            </nav>
        </header>
        <div className = "hero">
                <h1>Busqueda de resultados</h1>
            <div className='search'>
                <h2>Búsqueda de Exámenes Médicos</h2>
                <form>
                    <label htmlFor="exam-name">Búsqueda por ID:</label>
                    <input type="text" id="exam-name" name="exam-name" />
                    <label htmlFor="exam-name">Búsqueda por Nombre:</label>
                    <input type="text" id="exam-name" name="exam-name" />
                    <label htmlFor="exam-name">Búsqueda por email:</label>
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

export default Search;
