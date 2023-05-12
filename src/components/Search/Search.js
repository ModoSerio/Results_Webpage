import { useState } from "react";
import './Search.css';
import {useNavigate} from "react-router-dom"


const examen=[{
    _id: "6439daa1706f22483c4758ef",
    Description: "Nisi anim proident sint amet magna amet irure mollit duis. Irure reprehenderit cillum aute est deserunt laboris quis ipsum ex ullamco nisi occaecat consectetur velit. Qui irure voluptate eu anim esse excepteur veniam adipisicing magna minim tempor ex anim. Pariatur fugiat ut amet eiusmod et qui pariatur nisi veniam. Non Lorem quis enim reprehenderit et Lorem excepteur. In adipisicing exercitation non non nisi non laboris commodo sit laborum cillum proident.\r\n",
    Status: true,
    address: "215 Ira Court, Bath, New Jersey, 4543",
    Date: "2023-01-31T06:19:56 +05:00",
    id_paciente: "6436d57043fce05a2b24926d",
   
    id_tipo_examen:"6436e9c043fce05a2b24952d",
    resultado: "negativo"
  },{
    _id:  "6439daa1706f22483c4758f0",
    Description: "Id quis aliquip proident anim irure nisi nulla cupidatat elit laboris anim. Laboris reprehenderit Lorem qui dolore occaecat quis exercitation eu est cupidatat aute nulla aliquip. Velit laboris sit esse aute velit consectetur voluptate sit officia.\r\n",
    Status: true,
    address: "558 Chestnut Avenue, Dotsero, Ohio, 8389",
    Date: "2023-02-22T04:17:38 +05:00",
    id_paciente:  "6436d57043fce05a2b24926a"   ,
    id_tipo_examen:"6436e9c043fce05a2b24952e",
    resultado: "alto",
    
  },{
    _id:  "6439daa1706f22483c4758f1",
    Description: "Tempor qui adipisicing culpa dolor. Non culpa incididunt amet aliqua. Officia nostrud irure deserunt dolore culpa eu minim labore magna cupidatat ipsum tempor labore eu. Do officia et ex aliqua velit eu exercitation minim cupidatat.\r\n",
    Status: false,
    address: "633 Vermont Street, Coventry, West Virginia, 2131",
    Date: "2023-03-12T12:32:43 +05:00",
    id_paciente:  "6436d57043fce05a2b249268",
    id_tipo_examen: "6436e9c043fce05a2b24952f" ,
    resultado: "alto"
    
  },{
    _id:  "6439daa1706f22483c4758f2"
    ,
    Description: "Minim fugiat adipisicing ad nostrud velit ad enim non id Lorem do consequat. Pariatur eu eiusmod sit consectetur eu excepteur sint quis duis nostrud. Sunt labore excepteur sint dolor. Consequat fugiat ex consectetur pariatur enim laborum occaecat ipsum cupidatat voluptate id. Elit est mollit velit deserunt est cillum commodo laborum ad excepteur. Enim deserunt id incididunt quis ex esse voluptate elit eiusmod laborum ut nostrud magna. Voluptate sit ex reprehenderit est ullamco aliquip nulla enim veniam eiusmod reprehenderit nulla sint occaecat.\r\n",
    Status: true,
    address: "871 Amity Street, Trucksville, Alaska, 8491",
    Date: "2023-03-30T05:20:52 +05:00",
    id_paciente:  "6436d57043fce05a2b24926c",
    id_tipo_examen:  "6436e9c043fce05a2b249530"
    ,
    resultado: "bajo"
   
  },
  {
    _id:  "643ae7bec65b734bfddd685a",
    Description: "Deserunt dolor velit ad id minim minim dolor. Deserunt voluptate mollit pariatur culpa. Tempor dolor elit culpa velit do nulla ea nostrud deserunt nostrud quis. Ad aliquip commodo tempor aliqua consequat sit cupidatat non cillum. Elit nostrud sit incididunt enim eu aliquip pariatur magna aute aute elit voluptate anim enim.\r\n",
    Status: false,
    address: "102 Ridgewood Avenue, Clarktown, Michigan, 2794",
    Date: "2022-10-09T08:51:01 +05:00",
    id_paciente:  "6436d57043fce05a2b24926d",
    id_tipo_examen:  "6436e9c043fce05a2b249534"
    ,
    resultado: "dentro de rango"

  }];

const paciente = [
    {
        _id: "6436d57043fce05a2b24926d"
        ,
        Documento:  "3969131054"
        ,
        name: "Wright Chambers",
        age: 72,
        gender: "male",
        email: "wrightchambers@crustatia.com",
        phone: "+57 (905) 413-3188",
        address: "157 Autumn Avenue, Smock, Tennessee, 8484"
      },
      {
        _id: "6436d57043fce05a2b24926a"
        ,
        Documento: "2052398140",
        name: "Daugherty Beasley",
        age: 17,
        gender: "male",
        email: "daughertybeasley@crustatia.com",
        phone: "+57 (966) 488-3248",
        address: "493 Railroad Avenue, Manchester, Missouri, 2800"
      },
      {
        _id: "6436d57043fce05a2b249268"
        ,
        Documento: "439647782",
        name: "Hollie Fry",
        age: 47,
        gender: "female",
        email: "holliefry@crustatia.com",
        phone: "+57 (973) 529-2595",
        address: "538 Seigel Street, Chapin, New Mexico, 390"
      },
      {
        _id: "6436d57043fce05a2b24926c"
        ,
        Documento:  "3574488393"
        ,
        name: "Erna Holcomb",
        age: 90,
        gender: "female",
        email: "ernaholcomb@crustatia.com",
        phone: "+57 (922) 590-2525",
        address: "136 Church Lane, Bayview, Nebraska, 1197"
      }];

const Usuarios=[{
  _id: "6436e55843fce05a2b24939c",
  Documento: "3969131054",
  name: "Wright Chambers",
  email: "wrightchambers@crustatia.com",
  password: "7001811",
  role: 0
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
  password: "3441735",
  role: 1
}];

function Search() {
    const navigate = useNavigate()
    const [texto, setTexto] = useState('');
    const [datapaciente_examen, setTextoGenerado] = useState('');
    const [mostrarexamen, setMostrarexamen] = useState(false);
    const [mostrarerror, setMostrarerror] = useState(false);

    const manejarCambioTexto = (event) => {
        setTexto(event.target.value);
      };
    const manejarClickBoton = () => {
        const userData = paciente.find((user) => user.Documento === texto || user.email===texto );
        if (userData){
            setTextoGenerado({documento:userData.Documento,nombre:userData.name,edad:userData.age,genero:userData.gender});
            console.log("Se encontro el documento",texto);
            var doc=userData.id
            var Examen=examen.find((e) => e.id_paciente===doc);
            console.log("adress",Examen.address);
            setTextoGenerado({documento:userData.Documento,nombre:userData.name,edad:userData.age,genero:userData.gender, datosexamen:Examen});
            setMostrarexamen(true);

        }
        else{
            console.log("No se encontro el documento", texto);
            setMostrarexamen(false);
            setMostrarerror(true)
                
        }
        // Aquí puedes realizar cualquier otra acción con el texto, como enviarlo a una API o almacenarlo en el estado de tu componente principal.
    };


return (
    <div>
        <header className="header">
            <nav>
                <ul>
                <li onClick={()=>{navigate("/Search")}} ><a href="localhost:3000">Búsqueda</a></li>
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
                    <label htmlFor="exam-name">Búsqueda por ID:</label>
                    <input type="text" onChange={manejarCambioTexto} />
                    <button type="submit" onClick={manejarClickBoton}>Buscar</button> 
                                      
            </div>
            {mostrarexamen && <div className='search'>
            <p>ID: {datapaciente_examen.documento}<br/>Nombre: {datapaciente_examen.nombre}<br/>Edad: {datapaciente_examen.edad}<br/>Genero: {datapaciente_examen.genero}</p>
            
            <p>Informacion del examen<br/>
            Estado: {!datapaciente_examen.datosexamen.Status && "Pendiente"}{datapaciente_examen.datosexamen.Status && "Realizado"}<br/>
            Fecha: {datapaciente_examen.datosexamen.Date}<br/>
            Descripción del examen: {datapaciente_examen.datosexamen.Description} <br/>
            

            </p>

            </div>}
            <p>{!mostrarexamen && mostrarerror && "Documento no encontrado"}</p>
            

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
