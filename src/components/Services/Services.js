import './Service.css';
import { useNavigate } from "react-router-dom"


function Services() {
    const navigate = useNavigate()
    const items = ['Fosfatasa', 'Ferritina', 'Colesterol HDL', 'Trigliceridos', 'Creatina en suero', 'Cuadro hematico',
        'Parcial de orina', 'Coprocopico']
    return (
        <div class='App_services'>
            <div class="app-services">

                <header class="header_services">
                    <nav>
                        <ul>
                            <li onClick={() => { navigate("/") }}><a href="localhost:3000">Inicio</a></li>
                            <li onClick={() => { navigate("/services") }}><a href="localhost:3000">Servicios</a></li>
                            <li onClick={() => { navigate("/contact") }}><a href="localhost:3000">Contacto</a></li>
                            <li class="login" onClick={() => { navigate("/login") }}>
                                <a href="login">Log in</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div class="title-container">
                    <h1 class="title_services">Conoce todos nuestros procedimientos</h1>
                </div>

                <div class="container1">
                    <h3 class="subtitleS1">Laboratorio Clinico</h3>
                    <br></br>
                    <p class="subtitleS2">Encuentre aquí sus examenes médicos de:</p>
                    <br></br>
                </div>

                <div class='container2'>
                    <ul className="lista_services">
                        <li>Fosfatasa</li>
                        <li>Ferritina</li>
                        <li>Colesterol HDL</li>
                        <li>Trigliceridos</li>
                        <li>Creatina en suero</li>
                        <li>Cuadro hematico</li>
                        <li>Parcial de orina</li>
                        <li>Coprocopico</li>
                    </ul>


                </div>



            </div>
            <div class='footer_services'>
                <footer>
                    <p>&copy; Desarrollo Web Udea 2023</p>
                </footer>
            </div>
        </div>
    );
}

export default Services;

/*
<div class='container2'>
                    <div class="row">
                        {items.slice(0, 4).map(item => (
                            <div class="col" key={item}>{item}</div>
                        ))}
                    </div>
                    <div class="row">
                        {items.slice(4).map(item => (
                            <div class="col" key={item}>{item}</div>
                        ))}
                    </div>


                </div>


*/ 