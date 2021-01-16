import React, { useState } from 'react';
import styles from './formularioInicioSesion.module.css'
import Boton from '../elementos/Boton'


const FormularioInicioSesion = (props) => {
  const [usuario, cambiarUsuario]= useState('')
  const [password, cambiarPassword]= useState('')

 
//   const onChangeUsuario=(e) =>{
    
//    // console.log('el input cambio')
//           //console.log(e.target.value)
//           cambiarUsuario(e.target.value)

// }
//   const onChangePassword =(e) =>{
    
//       cambiarPassword(e.target.value)
  
//   }
  const onChange = (evento) =>{
    if(evento.target.name === 'usuario'){
      cambiarUsuario(evento.target.value)

    }else if (evento.target.name === 'password'){
      cambiarPassword(evento.target.value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // alert('datos enviaron')
    if(usuario === 'Naty' && password === '123'){
      // alert('datos correctos')
      props.cambiarEstadoSesion(true)
    }else{
      alert('no exste usuario')
      cambiarUsuario('')
      cambiarPassword('')
    }

  }

  return (
    <form onSubmit={onSubmit} className={styles.formulario}>
      {/* <p>Usuario:{usuario}</p>
      
      <p>Contraseña:{password}</p> */}
      <div>
      <h1>No has iniciado sesión</h1>
        <label htmlFor="usuario" className={styles.label}>Usuario</label>
        <input 
        type="text" 
        name="usuario" 
        id="usuario"
        value={usuario}
        onChange={onChange}
        className="input"
        />
        
      </div>
      <div>
        <label htmlFor="password" className={styles.label}>Contraseña</label>
        <input 
          type="password" 
          name="password" 
          id="password"
          value={password}
          onChange={onChange}
          className="input"/>
      </div>
      {/* <button  type="submit"className={styles.boton} >Iniciar sesion </button>  */}
      <div>
        <Boton largo type="submit">Iniciar Sesion</Boton>
      </div>
    </form>
  ); 
}

export default FormularioInicioSesion;
