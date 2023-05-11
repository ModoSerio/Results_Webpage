import { useState } from "react";
import './Login.css'
import Search from "../Search/Search";
import {useNavigate} from "react-router-dom"

//Esta va a ser nuestra database, esta misma lógica se puede usar al
//con la busqueda de examenes

const database = [{
  email: 'test@mail.com',
  password: '123456'
}]
const errors = {
  uname: "Email inválido",
  pass: "Contraseña inválida"
};


function Login({ setUser }) {
  const navigate = useNavigate()
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event) => {
  //Prevenir que la pagina se recargue
  event.preventDefault();

  var { uname, pass } = document.forms[0];
  // Encontrar la info pa loguearse
  const userData = database.find((user) => user.email === uname.value);

  // Comparar la info
  if (userData) {
    if (userData.password !== pass.value) {
      // Error si la contraseña esta mala
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    // Error si el usuario esta malo
    setErrorMessages({ name: "uname", message: errors.uname });
  }
}
//codigo jsx para mensaje de error
const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );



const renderForm = (
<div>
  <header className="header">
      <nav>
          <ul>
          <li onClick={()=>{navigate("/")}}><a href="localhost:3000">Inicio</a></li>
          <li onClick={()=>{navigate("/services")}}><a href="localhost:3000">Servicios</a></li>
          <li><a href="localhost:3000">Contacto</a></li>
          </ul>
      </nav>
  </header>
  <div className = "hero">
          <p>Por favor ingrese su usuario y contraseña</p> 
          <p>Servicio válido solo para personal médico</p> 
      <div className='search'>
          <form onSubmit={handleSubmit}>
              <ul>
                  <li><label>Email: </label> </li>
                  <li><input type="email"  name="uname" required/> </li>
                  {renderErrorMessage("uname")}
                  <li><label>Password: </label></li>
                  <li><input type="password" name="pass" required /></li> 
                  {renderErrorMessage("pass")}
                  <button type="submit" >Login</button>
              </ul>
              
          </form>
      </div>
      <div className='footer'>
      <footer>
          <p>&copy; Desarrollo Web Udea 2023</p>
      </footer>
  </div>
  </div>
  
</div>
)


  return (
    <div>
      <div>
        {isSubmitted ? <Search />: renderForm}
      </div>
    </div>
  )
}

export default Login;
