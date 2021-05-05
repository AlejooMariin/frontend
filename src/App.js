import logo from './logo.svg';
import './App.css';
import fuego from './assets/imagenes/fuego.png';
import Navegacion from './components/NavBar/Navegacion';

import {Esquema1} from './Models/Objetos.json';
import React,{ Component } from 'react';

class App extends Component  {

  
  constructor(){
    super();
    this.state={
      Esquema1:Esquema1
    }
  }

  render(){
    
    const Tem = this.state.Esquema1.map((Esquema,i)=>{
      return(
        <div className="card">
          {Esquema.titulo}
        </div>
      )

    })

    return (

      <div className="App">
        
        <Navegacion titulo="TEMPERATURA223"></Navegacion>

       {Tem}

        <img src={fuego} className="App-logo" alt="logo" />
  
      </div>
    )
  }


  
}

export default App;
