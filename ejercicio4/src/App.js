import React, { useState } from "react";
import "./App.css";

function App() {
  const [activo, setActivo] = useState("izquierdo");

  const manejarClick = (boton) => {
    setActivo(boton === "izquierdo" ? "derecho" : "izquierdo");
  };

  return (
    <div className="App">
      <h2>Ejercicio 4</h2>

      <button
        onClick={() => manejarClick("izquierdo")}
        disabled={activo !== "izquierdo"}
      >
        Izquierdo
      </button>

      <button
        onClick={() => manejarClick("derecho")}
        disabled={activo !== "derecho"}
        style={{ marginLeft: "10px" }}
      >
        Derecho
      </button>
    </div>
  );
}

export default App;