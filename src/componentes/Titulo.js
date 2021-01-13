import React from 'react';

// destructurar  , quiero que mi props se convierta en variable
// dejar valore spor defecto  =
const Titulo = ({usuario = 'usuario', color = 'grey'}) => {
  // const nombre = props.usuario;

  return (
    <>
       <h1 className="titulo" style={{color :color}}>hola {usuario}</h1>
    </>
  );
}


export {
  Titulo
 };
