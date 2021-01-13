import React, { Component } from 'react';

 class ContadorClass extends Component {
  constructor(props){
    super(props);
    this.state = { contador: 0}
  }

  componentDidMount(){
    console.log('el componente se cargo')
    // llamamos a la API
  }

  componentDidUpdate (propiedadesAnteriores, estadoAnterior){
    console.log('el componente se actualizo')
    console.log('propiedade anteriores:', propiedadesAnteriores)
    console.log('estadoanteriores:', estadoAnterior)
  }

  componentWillUnmount(){
    console.log('adios componente')
//...terminamos la llamada  a la api  
}

  incrementar(cant){
   // console.log('+1')
   this.setState((estadoAnterior)=>{
    return {
      contador: estadoAnterior.contador + cant
    }

   })
  } 
  disminuir(cant){
    //console.log('-1')
    this.setState((estadoAnterior)=>{
      return{
        contador : estadoAnterior.contador - cant
      }
    })
  }  
ContadorClass
  render() {
    return (
      <div>
        <h1>Contador :{this.state.contador}</h1>
        <button onClick={()=>this.incrementar(this.props.cantIncrementar)}>Incrementar</button>
        <button onClick={()=> this.disminuir(this.props.cantDisminuir) }>Disminuir</button>
      </div>
    );
  }
}

export default ContadorClass;
