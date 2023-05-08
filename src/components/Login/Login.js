import { useState } from "react";
import './Login.css'

const user = {
  id: '123',
  email: 'test@mail.com',
  password: '123456'
}

function Login({ setUser }) {

  const [email, setEmail] = useState()
  const [password, setPasword] = useState()
  function login() {
    if (email === user.email && password === user.password) {
      // fetch('http://localhost:3001', {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({email, password}),
      // })

      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  return (
    <div>
        <header className="header">
            <nav>
                <ul>
                <li><a href="localhost:3000">Inicio</a></li>
                <li><a href="localhost:3000">Servicios</a></li>
                <li><a href="localhost:3000">Contacto</a></li>
                </ul>
            </nav>
        </header>
        <div className = "hero">
                <p>Por favor ingrese su usuario y contraseña</p> 
                <p>Servicio válido solo para personal médico</p> 
            <div className='search'>
                <form>
                    <ul>
                        <li><label>Email: </label> </li>
                        <li><input type="email" onChange={(e) => setEmail(e.target.value)} /> </li>
                        <li><label>Password: </label></li>
                        <li><input type="password" onChange={(e) => setPasword(e.target.value)} /></li> 
                        <button type="submit" onClick={login}>Login</button>
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
}

export default Login;
