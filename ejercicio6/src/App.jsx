import React, { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a || a === 0) {
      setMensaje('Por favor ingresar valores válidos');
      setColor('gray');
      setImc(null);
      return;
    }

    const resultado = p / (a * a);
    setImc(resultado.toFixed(2));

    if (resultado < 18.5) {
      setMensaje('Nivel bajo de IMC');
      setColor('yellow');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setMensaje('Nivel normal de IMC');
      setColor('green');
    } else if (resultado >= 25 && resultado <= 29.9) {
      setMensaje('Nivel de sobrepeso');
      setColor('orange');
    } else {
      setMensaje('Nivel de obesidad');
      setColor('red');
    }
  };

  return (
    <div className="App">
      <h2>Calculadora IMC</h2>

      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      /><br />

      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div className="resultado" style={{ color: color }}>
          <p>Tu IMC es: {imc}</p>
          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
}

export default App;
