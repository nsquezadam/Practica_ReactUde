import React from 'react';
import {
  Titulo
  } from './Titulo'

const Usuario = () => {

const pais = 'chile';
const amigos = ['ale', 'manu', 'dan']
  return (
    <div>
       <div>
   < Titulo  />
   < Titulo usuario="ale" color="blue" />
    <p>curso react</p>
    {pais && <p>mi pais : {pais}</p>}
   {amigos.map((amigo, index) =>  <li key={index}>{amigo}</li>)}
   <p style={{color: 'pink'}}>que tengas un buen dia</p>
   </div> 
    </div>
  );
} 

export default Usuario;
