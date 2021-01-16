import React from 'react';
import styled from 'styled-components'
import Lista from '../elementos/Lista'
import {
  Titulo
  } from './Titulo'

const Usuario = () => {

const pais = 'chile';
const amigos = ['ale', 'manu', 'dan']
  return (
    <div>
       <div>

   < Titulo usuario="Naty" color="blue" />
    <Parrafo>Curso react</Parrafo>
    {pais && <p>mi pais : {pais}</p>}
   {amigos.map((amigo, index) =>  <Lista key={index}>{amigo}</Lista>)}
   <p style={{color: 'pink'}}>que tengas un buen dia</p>
   </div> 
    </div>
  );
} 

const Parrafo = styled.p`
margin: 20px 0;
color: magenta;

`
export default Usuario;
