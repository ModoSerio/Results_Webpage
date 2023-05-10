import './Services.css';
import {useNavigate} from "react-router-dom"


function Services() {
    const navigate = useNavigate()
  return (
    <div>
        <header className="header">
            <nav>
                <ul>
                <li onClick={()=>{navigate("/")}}><a href="localhost:3000">Inicio</a></li>
                <li onClick={()=>{navigate("/services")}}><a href="localhost:3000">Servicios</a></li>
                <li><a href="localhost:3000">Contacto</a></li>
                <li className="login" onClick={()=>{navigate("/login")}}>
                    <a href="login">Log in</a>
                </li>
                </ul>
            </nav>
        </header>
        <div className = "head">
                <h1>Conoce todos nuestros</h1>
                <h2>procedimientos</h2>
                
            
        </div>

        <div className='container'>
        <p>Encuentre aquí sus examenes médicos</p> 
        </div>
        <div className='footer'>
            <footer>
                <p>&copy; Desarrollo Web Udea 2023</p>
            </footer>
        </div>
    </div>
  );
}

export default Services;