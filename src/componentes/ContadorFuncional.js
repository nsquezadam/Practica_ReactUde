import React, {useState} from 'react';

const ContadorFuncional = (props) => {
  //console.log(props)
  const [contador, setcontador] = useState(0)

const sumar = (cant) => setcontador(contador + cant)
const restar = (cant) => setcontador(contador - cant)
  

  
  return (
    <div>
        <h1>Contador :{contador}</h1>
        <button className="boton" onClick={()=>sumar(props.cantIncr)}>Incrementar</button>
        <button className="boton" onClick={()=>restar(props.cantDism)}>Disminuir</button>
      </div>
    );

}

export default ContadorFuncional;
