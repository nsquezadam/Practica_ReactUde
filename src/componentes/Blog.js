import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Blog = () => {
  const [articulos, setarticulos] = useState([])

  useEffect(() => {
   setTimeout(() => {
     setarticulos([
       {
         id:1,
         titulo:'Titulos de mi primer Articulo'
       },
       {
        id:2,
        titulo:'Titulos de mi segundo Articulo'
       },
       {
        id:2,
        titulo:'Titulos de mi tercer Articulo'
       }

     ])
   }, 3000);



    return () => {
     
    }
  }, [])


  return (
    <ContenedorBlog>
      <Titulo>Blog</Titulo>
      <div>
        {articulos.map((articulo, i) =>{
          return  <Articulo key={i}>{articulo.titulo}</Articulo>
        })}
       
     
      </div>
    </ContenedorBlog>
  )
}
const ContenedorBlog =styled.div`
margin: 40px 0 20px 0;

`
const Titulo = styled.h2`
  color:#11CBD7;
  font-size:2rem;
  margin-bottom:10px;
  text-align:center;
`
const Articulo =  styled.p`
  color: #8675A9;
  padding: 10px 0;
  margin-bottom:10px;
  border-Bottom: 1px solid #ccc;
`
export default Blog
