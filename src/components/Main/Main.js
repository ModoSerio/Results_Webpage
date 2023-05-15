import './Main.css';
import { useNavigate } from "react-router-dom" //Navegar


function Main() {
    const navigate = useNavigate()//Navegar
    return (
        <div>
            <header className="header">
                <nav>
                    <ul>{/*Navbar */} 
                        <li onClick={() => { navigate("/") }}><a href="localhost:3000">Inicio</a></li>
                        <li onClick={() => { navigate("/services") }} ><a href="localhost:3000">Servicios</a></li>
                        <li onClick={() => { navigate("/contact") }}><a href="localhost:3000">Contacto</a></li>
                        <li className="login" onClick={() => { navigate("/login") }}>
                            <a href="login">Log in</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="hero">{/* imagen*/} 

            </div>
            {/* Texto*/} 
            <div className="texto_main">
                <h1 >Busqueda de resultados de examenes medicos</h1>
                <p>Ingrese en login para realizar una busqueda</p>
            </div>
            {/*Footer */} 
            <div className='footer_main'>
                <footer>
                    <p>&copy; Desarrollo Web Udea 2023</p>
                </footer>


            </div>
        </div>
    );
}

export default Main;
