import React, { useState } from 'react';
import './App.css';

function App() {
  // Estados para los números, operación y resultado
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState('suma');
  const [resultado, setResultado] = useState(null);
  const [mensaje, setMensaje] = useState('');

  
  const calcularResultado = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    let total = 0;

    if (operacion === 'suma') {
      total = n1 + n2;
    } else if (operacion === 'resta') {
      total = n1 - n2;
    } else if (operacion === 'multiplicacion') {
      total = n1 * n2;
    } else if (operacion === 'division') {
      total = n1 / n2;
    }

    setResultado(`El resultado es: ${total}`);
    setMensaje('');
  };
    //Deshabilita el boton si intenta dividir por 0
  const deshabilitarBoton = operacion === 'division' && Number(num2) === 0;

  if (deshabilitarBoton && mensaje !== "No se puede dividir por 0") {
    setMensaje("No se puede dividir por 0");
    setResultado(null);
  }

    return (
    <div className="App">
      <h2>Calculadora con React</h2>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => {
          setNum1(e.target.value);
          setMensaje('');
          setResultado(null);
        }}
      /><br />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => {
          setNum2(e.target.value);
          setMensaje('');
          setResultado(null);
        }}
      /><br />

      <select
        value={operacion}
        onChange={(e) => {
          setOperacion(e.target.value);
          setMensaje('');
          setResultado(null);
        }}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select><br />

      <button onClick={calcularResultado} disabled={deshabilitarBoton}>
        Calcular
      </button>

      {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default App;