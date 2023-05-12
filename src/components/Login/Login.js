import { useState } from "react";
import './Login.css'
import Search from "../Search/Search";
import SearchPacientes from '../SearchPacientes/SearchPacientes';

import {useNavigate} from "react-router-dom";


//Esta va a ser nuestra Usuarios, esta misma lógica se puede usar al
//con la busqueda de examenes

const Usuarios=[
  {
    _id: "6436e55843fce05a2b24939c4",
    Documento: "1",
    name: "Valelinda",
    email: "valelinda@crustatia.com",
    password: "1",
    role: 0 //Paciente
  },{
  _id: "6436e55843fce05a2b24939c",
  Documento: "3969131054",
  name: "Wright Chambers",
  email: "wrightchambers@crustatia.com",
  password: "7001811",
  role: 0 //Paciente
},
{
  _id: "6436e55843fce05a2b249399",
  Documento:"2052398140",
  name: "Daugherty Beasley",
  email: "daughertybeasley@crustatia.com",
  password: "7792678",
  role: 0
},
{
  _id: "6436e55843fce05a2b249397",
  Documento: "439647782",
  name: "Hollie Fry",
  email: "holliefry@crustatia.com",
  password: "8313574",
  role: 0
},
{
  _id: "6436e55843fce05a2b24939b",
  Documento: "3574488393",
  name: "Erna Holcomb",
  email: "ernaholcomb@crustatia.com",
  password: "5580185",
  role: 0
},
{
  _id: "6436e55843fce05a2b2494c2",
  Documento: "6303004401",
  name: "Ramsey Hebert",
  email: "ramseyhebert@crustatia.com",
  password: "9728084",
  role: 1
},
{
  _id: "6436e55843fce05a2b2494c1",
  Documento: "1630841005",
  name: "Aguilar Casey",
  email: "aguilarcasey@crustatia.com",
  password: "c",
  role: 1 //Personal salud
}];
const errors = {
  uname: "Email inválido",
  pass: "Contraseña inválida"
};


function Login({ setUser }) {
  const navigate = useNavigate()
  const [errorMessages, setErrorMessages] = useState({});
  const [isPaciente, setisPaciente] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event) => {
  //Prevenir que la pagina se recargue
  event.preventDefault();

  var { uname, pass } = document.forms[0];
  // Encontrar la info pa loguearse
  const userData = Usuarios.find((user) => user.email === uname.value || user.Documento === uname.value);
  
  // Comparar la info
  if (userData) {
    if (userData.password !== pass.value) {
      // Error si la contraseña esta mala
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
      if (userData.role===0){
        setisPaciente(true)

      }
      else(setisPaciente(false))
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
      <div className='search'>
          <form onSubmit={handleSubmit}>
              <ul>
                  <li><label>Email o ID: </label> </li>
                  <li><input type="text"  name="uname" required/> </li>
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
        
        {isSubmitted ? ((!isPaciente && <Search />) || (isPaciente && <SearchPacientes />)): renderForm}
      </div>
    </div>
  )
}

export default Login;
