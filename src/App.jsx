import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setinput] = useState("0");

  const agregarInput = val => {
    // No permite agregar ni operar si el input contiene error
    if(input !== "Error!") {
      input === "0" ? setinput(val): setinput(input + val)
    }
  }

  const operarInput = () => {
    // Si el input esta vacio no operar
    if(input !== "0") {
      // En caso de que el usuario ingrese mal algun dato
      try {
        setinput(evaluate(input.replace('÷','/').replace('×','*')))
      } catch(e) {
        // Mostrar error en pantalla
        setinput("Error!")
      } 
    }
    
  }

  const limpiarInput = () => {
    setinput("0")
  }

  return (
    <div className="App">
      <div className="contenedor">
        <div className="contenedor-calculadora">
            <Pantalla input={ input } />
          <div className="contenedor-numeros">
            <Boton clic={limpiarInput}>C</Boton>
            <Boton clic={agregarInput}>÷</Boton>
            <Boton clic={agregarInput}>×</Boton>
            <Boton clic={agregarInput}>-</Boton>
            <Boton clic={agregarInput}>7</Boton>
            <Boton clic={agregarInput}>8</Boton>
            <Boton clic={agregarInput}>9</Boton>
            <Boton clic={agregarInput}>+</Boton>
            <Boton clic={agregarInput}>4</Boton>
            <Boton clic={agregarInput}>5</Boton>
            <Boton clic={agregarInput}>6</Boton>
            <Boton clic={agregarInput}>1</Boton>
            <Boton clic={agregarInput}>2</Boton>
            <Boton clic={agregarInput}>3</Boton>
            <Boton clic={operarInput}>=</Boton>
            <Boton clic={agregarInput}>0</Boton>
            <Boton clic={agregarInput}>.</Boton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
