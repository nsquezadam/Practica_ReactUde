import React, {useState} from 'react'
//import styles from './contadorFuncional.module.css'
import Boton from '../elementos/Boton'
import Contador from '../elementos/Contador'

const ContadorFuncional = (props) => {
  //console.log(props)
const [contador, setcontador] = useState(0)
const sumar = (cant) => setcontador(contador + cant)
const restar = (cant) => setcontador(contador - cant)


  

  
  return (
    <div>
        <Contador>Contador :{contador}</Contador>
        {/* <button className={styles.boton} onClick={()=>sumar(props.cantIncr)}>Incrementar</button>
        <button className={styles.boton} onClick={()=>restar(props.cantDism)}>Disminuir</button> */}
      <Boton negro marginRight onClick={()=>sumar(props.cantIncr)}>Incrementar</Boton>
      <Boton negro onClick={()=>restar(props.cantDism)}>Disminuir</Boton>
      </div>
    );

}

export default ContadorFuncional;
