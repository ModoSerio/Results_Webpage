import './SearchPacientes.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useContext } from 'react';
import { AppContext } from '../AppContext';

//Lista examenes
const examen = [{
    Description: "Deserunt dolor velit ad id minim minim dolor. Deserunt voluptate mollit pariatur culpa. Tempor dolor elit culpa velit do nulla ea nostrud deserunt nostrud quis. Ad aliquip commodo tempor aliqua consequat sit cupidatat non cillum. Elit nostrud sit incididunt enim eu aliquip pariatur magna aute aute elit voluptate anim enim.\r\n",
    Status: "Pendiente",
    address: "102 Ridgewood Avenue, Clarktown, Michigan, 2794",
    Date: "2022-10-09T08:51:01 +05:00",
    id_paciente: "6436d57043fce05a2b24926d",
    id_usuario: "6436d57043fce05a2b24926d",
    id_tipo_examen: "Trigliceridos",
    resultado: "dentro de rango",
    $id: "6436d57043fce05a2b24926d"
}, {
    Description: "Descripcion 2.\r\n",
    Status: "Realizado",
    address: "102 Ridgewood Avenue, Clarktown, Michigan, 2794",
    Date: "2022-10-09T08:51:01 +05:00",
    id_paciente: "6436d57043fce05a2b24926d",
    id_usuario: "6436d57043fce05a2b24926d",
    id_tipo_examen: "Ferritina",
    resultado: "dentro de rango",
    $id: "6436d57043fce05a2b24926h"
}, {
    Description: "Descripcion 3.\r\n",
    Status: "Realizado",
    address: "102 Ridgewood Avenue, Clarktown, Michigan, 2794",
    Date: "2022-10-09T08:51:01 +05:00",
    id_paciente: "6436d57043fce05a2b24926d",
    id_usuario: "6436d57043fce05a2b24926d",
    id_tipo_examen: "Creatina en suero",
    resultado: "dentro de rango",
    $id: "6436d57043fce05a2b24926j"
}, {
    Description: "Des5.\r\n",
    Status: "Realizado",
    address: "102 Ridgewood Avenue, Clarktown, Michigan, 2794",
    Date: "2022-10-09T08:51:01 +05:00",
    id_paciente: "6436e55843fce05a2b24939h",
    id_usuario: "6436d57043fce05a2b24926d",
    id_tipo_examen: "Ferritina",
    resultado: "dentro de rango",
    $id: "6436d57043fce05a2b24926h"
}, {
    Description: "Des6.\r\n",
    Status: "Realizado",
    address: "102 Ridgewood Avenue, Clarktown, Michigan, 2794",
    Date: "2022-10-09T08:51:01 +05:00",
    id_paciente: "6436e55843fce05a2b24939h",
    id_usuario: "6436e55843fce05a2b24939h",
    id_tipo_examen: "Creatina en suero",
    resultado: "dentro de rango",
    $id: "6436d57043fce05a2b24926j"
}];

//Lista pacientes
const paciente = [{
    id: "6436d57043fce05a2b24926d",
    Documento: "3969131054",
    name: "Wright Chambers",
    age: 72,
    gender: "male",
    email: "wrightchambers@crustatia.com"
}, {
    id: "6436e55843fce05a2b24939h",
    Documento: "3574488393",
    name: "Erna Holcomb",
    age: 60,
    gender: "Female",
    email: "ernaholcomb@crustatia.com",

}, {
    id: "6436e55843fce05a2b24939i",
    Documento: "2052398140",
    name: "Daugherty Beasley",
    age: 30,
    gender: "Female",
    email: "daughertybeasley@crustatia.com",

},
{
    id: "6436e55843fce05a2b24939j",
    Documento: "439647782",
    name: "Hollie Fry",
    age: 30,
    gender: "Female",
    email: "holliefry@crustatia.com",

}];


function SearchPacientes() {
    const navigate = useNavigate()//Navegar
    const { myObject } = useContext(AppContext);//Contexto 
    const [datapaciente_examen] = useState([]);//Vsriables
    const [mostrarexamen, setMostrarexamen] = useState(false);
    const [mostrarerror] = useState(false);



    //setTextoGenerado({documento:userData.Documento,nombre:userData.name,edad:userData.age,genero:userData.gender});

    const hasExecuted = useRef(false);

    useEffect(() => {//Para que no se recargue la pagina
        if (!hasExecuted.current) {
            const userData = paciente.find((user) => user.Documento === myObject.Documento);//Filtro por documento
            console.log("Se encontro el documento", userData.id);
            var doc = userData.id//Documento
            var Examen = examen.filter((e) => e.id_paciente === doc);//Filtro examen por documento
            if (Examen.length !== 0) {//Si hay examenes
                console.log(Examen[0])
                console.log("adress", Examen[1].address);
                console.log("longitud", Examen.length)

                for (let i = 0; i < Examen.length; i++) {//Lista de examenes
                    var temp = { documento: userData.Documento, nombre: userData.name, edad: userData.age, genero: userData.gender, datosexamen: Examen[i] }
                    datapaciente_examen.push(temp)//Push de los examenes a la lista
                    console.log(datapaciente_examen)

                }
                //setTextoGenerado({ documento: userData.Documento, nombre: userData.name, edad: userData.age, genero: userData.gender, datosexamen: Examen });
                setMostrarexamen(true);
                console.log('La función se ejecutó solo una vez');
                hasExecuted.current = true;
            }
            else {//Si no hay examenes
                //setTextoGenerado({ documento: userData.Documento, nombre: userData.name, edad: userData.age, genero: userData.gender, datosexamen: Examen });

                console.log('no hay examenes');
                document.getElementById('no_examen').innerHTML = 'No hay examenes de este paciente';
                hasExecuted.current = true;
            }




        }
    });





    return (
        <div>
            <header className="header">
                <nav>
                    <ul>
                        <li onClick={() => { navigate("/") }}><a href="localhost:3000">Inicio</a></li>
                        <li onClick={() => { navigate("/services") }} ><a href="localhost:3000">Servicios</a></li>
                        <li onClick={() => { navigate("/contact") }}><a href="localhost:3000">Contacto</a></li>
                        <li className="login" onClick={() => { navigate("/login") }}>
                            <a href="login">Log out</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="hero_pacientes">
                <h1>Busqueda de resultados</h1>
                <p>Encuentre aquí sus examenes médicos</p>
                {/*Si hay examenes entra*/} 
                {mostrarexamen && <div className='search_pacientes'>

                    <div Class="table_container_pacientes">

                        <table style={{ borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{ borderBottom: '1px solid black', padding: '0.5rem' }}>ID</th>
                                    <th style={{ borderBottom: '1px solid black', padding: '0.5rem' }}>Nombre</th>
                                    <th style={{ borderBottom: '1px solid black', padding: '0.5rem' }}>Edad</th>
                                    <th style={{ borderBottom: '1px solid black', padding: '0.5rem' }}>Estado</th>
                                    <th style={{ borderBottom: '1px solid black', padding: '0.5rem' }}>Fecha</th>
                                    <th style={{ borderBottom: '1px solid black', padding: '0.5rem' }}>Descripcion</th>
                                    <th style={{ borderBottom: '1px solid black', padding: '0.5rem' }}>Tipo de Examen</th>
                                    <th style={{ borderBottom: '1px solid black', padding: '0.5rem' }}>PDF</th>
                                </tr>
                            </thead>
                            <tbody>{/*Cantidad de examenes para las filas con la funcion map*/} 
                                {datapaciente_examen.map(exam => (
                                    <tr key={exam.id}>

                                        <td style={{ border: '1px solid black', padding: '0.5rem' }}>{exam.documento}</td>
                                        <td style={{ border: '1px solid black', padding: '0.5rem' }}>{exam.nombre}</td>
                                        <td style={{ border: '1px solid black', padding: '0.5rem' }}>{exam.edad}</td>
                                        <td style={{ border: '1px solid black', padding: '0.5rem' }}>{exam.datosexamen.Status}</td>
                                        <td style={{ border: '1px solid black', padding: '0.5rem' }}>{exam.datosexamen.Date}</td>
                                        <td style={{ border: '1px solid black', padding: '0.5rem' }}>{exam.datosexamen.Description}</td>
                                        <td style={{ border: '1px solid black', padding: '0.5rem' }}>{exam.datosexamen.id_tipo_examen}</td>
                                        <td style={{ border: '1px solid black', padding: '0.5rem' }}>Link_PDF</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>}{/*Si no hay examenes entra*/} 
                <p>{!mostrarexamen && mostrarerror && "Documento no encontrado"}</p>

                <div id="no_examen"></div>


            </div>
            <div className='footer_spacientes'>
                <footer>
                    <p>&copy; Desarrollo Web Udea 2023</p>
                </footer>


            </div>
        </div>
    );
}

export default SearchPacientes;
