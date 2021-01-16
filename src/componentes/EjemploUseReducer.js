import React, {useReducer} from 'react'
import Boton from '../elementos/Boton'

// accion un objeto como queremos cambiar el estado
//{tipo:'INCREMENTAR'}

// estado inicial 
const contadorInicial = {contador:0}

//Reducer
const reducer = (estado, accion) => {
switch(accion.tipo){
  case 'INCREMENTAR':
    return{ contador: estado.contador + 1}
  case 'DISMINUIR':
    return{ contador: estado.contador - 1}
  case 'REINICIAR':
    return{ contador: 0}
  default:
     return estado;
    
}
}

const EjemploUseReducer = () => {
 const [estado, dispatch] = useReducer(reducer, contadorInicial)
  return (
    <div>
        <h1>Contador: {estado.contador}</h1>
        {/* <button className={styles.boton} onClick={()=>sumar(props.cantIncr)}>Incrementar</button>
        <button className={styles.boton} onClick={()=>restar(props.cantDism)}>Disminuir</button> */}
      <Boton negro marginRight onClick={()=>dispatch({tipo:'INCREMENTAR'})}>Incrementar</Boton>
      <Boton negro onClick={()=>dispatch({tipo:'DISMINUIR'})}>Disminuir</Boton>
      <Boton  onClick={()=>dispatch({tipo:'REINICIAR'})}>Reiniciar</Boton>
      </div>
  )
}

export default EjemploUseReducer
