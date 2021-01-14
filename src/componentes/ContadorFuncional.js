import React, {useState} from 'react';
import styles from './contadorFuncional.module.css'

const ContadorFuncional = (props) => {
  //console.log(props)
  const [contador, setcontador] = useState(0)

const sumar = (cant) => setcontador(contador + cant)
const restar = (cant) => setcontador(contador - cant)
  

  
  return (
    <div>
        <h1>Contador :{contador}</h1>
        <button className={styles.boton} onClick={()=>sumar(props.cantIncr)}>Incrementar</button>
        <button className={styles.boton} onClick={()=>restar(props.cantDism)}>Disminuir</button>
      </div>
    );

}

export default ContadorFuncional;
