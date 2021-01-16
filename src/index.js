import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from  './componentes/Usuario'
import FomularioInicioSesion from './componentes/FomularioInicioSesion'
//import ContadorClass from './componentes/ContadorClass';
//import ContadorFuncional from './componentes/ContadorFuncional'
import Boton from './elementos/Boton'
import EjemploUseReducer  from './componentes/EjemploUseReducer'
import Blog from './componentes/Blog'

import "./index.css"



 const App =() =>  {
  
const [sesion, cambiarEstadoSesion]= useState(false)  
  // const cerraSesion = () =>{
  //   // alert('hola')
    
  // }
  
return (
  <div className="contenedor">
  {sesion === true ? 
<div>
  <Usuario/> 
  {/* <ContadorClass cantIncrementar={5} cantDiminuir={3} /> */}
  {/* <ContadorFuncional cantIncr={3} cantDism={4} />  */}
  <Blog/>
  <EjemploUseReducer />
  {/* <button onClick={()=> cambiarEstadoSesion(false)} >Cerrar Sesion</button> */}
    <Boton  largo marginTop  onClick={()=> cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
  </div>
  :
  <div>
  
  <FomularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
  {/* <button onClick={()=> cambiarEstadoSesion(true)} > Iniciar Sesion</button> */}
  </div>
   } 
  </div>
  );
};

// const verificarSesion = (sesion) =>{
// if(sesion === true) {
//   return jsx;
// }else{
//   return <h1>no has iniciado sesion </h1>
// }

// }

// ReactDOM.render(verificarSesion(sesion),document.getElementById('root'));
ReactDOM.render(<App />,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

