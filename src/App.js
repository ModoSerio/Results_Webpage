
import './App.css';
import { BrowserRouter as  Router, Route, Routes, useNavigate} from 'react-router-dom';
import Login from './components/Login/Login'
import Main from './components/Main/Main'



function App() {

  
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
  );
}


export default App;
