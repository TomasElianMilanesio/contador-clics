import React from 'react';
import './App.css';
import logotipo from './imagenes/logo.jpg';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({numClics}) => ({numClics: numClics + 1}));
  }
  
  reiniciarContador() {
    this.setState({numClics: 0});
  }

  render() {
    return (
      <div className="App">
        <div className="logo-contenedor">
          <img 
            className="logo"
            src={logotipo}
            alt="Logo del contador de clics"/>
         </div>
         <div className="contenedor-principal">
            <Contador
            numClics={this.state.numClics}/>
            <Boton
            texto="Clic"
            esBotonDeClic={true}
            manejarClic={this.manejarClic}/>
            <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador}/>
        </div>
      </div>
    );

  }
}


export default App;
