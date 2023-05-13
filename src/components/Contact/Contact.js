
import './Contact.css';
import { useNavigate } from "react-router-dom"



function Contact() {
    const navigate = useNavigate()
    
    return (
        <div className='App'>
            <div className="app-content">

                <header className="header">
                    <nav>
                        <ul>
                            <li onClick={() => { navigate("/") }}><a href="localhost:3000">Inicio</a></li>
                            <li onClick={() => { navigate("/services") }}><a href="localhost:3000">Servicios</a></li>
                            <li><a href="localhost:3000">Contacto</a></li>
                            <li className="login" onClick={() => { navigate("/login") }}>
                                <a href="login">Log in</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div class="title-container">
                    <h1 class="title">Conoce nuestros contactos</h1>
                </div>

                <div class='subtitle-container'>
                    <h2 class="subtitle1">IPS</h2>
   
                    <p class="texto1_1"> 
                    Telefonos de contacto: (604) 5186841 - 5194678 ext 115.
                    </p>

                    <h2 class="subtitle2">Asistencia Web</h2>

                    <p class="texto1_2"> 
                    Email: Ips@mail.com - Ips2@mail.com     
                    </p>
                </div>




            </div>
            <div className='footer_contact'>
                <footer>
                <p>&copy; Desarrollo Web Udea 2023</p>
                </footer>
                    

            </div>
        </div>
    );
}

export default Contact;