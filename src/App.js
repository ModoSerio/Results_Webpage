
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import Services from './components/Services/Services'
import Search from './components/Search/Search';
import Contact from './components/Contact/Contact';
import SearchPacientes from './components/SearchPacientes/SearchPacientes';
import { AppProvider } from './components/AppContext';

function App() {


  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/Login' element={<Login />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/services' element={<Services />}></Route>
          <Route exact path='/Search' element={<Search />}></Route>
          <Route exact path='/SearchPacientes' element={<SearchPacientes />}></Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}


export default App;
