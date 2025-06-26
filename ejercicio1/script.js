let boton = document.getElementById("calcular");
let operacion = document.getElementById("operacion");
let inputnum1 = document.getElementById("numero1");
let inputnum2 = document.getElementById("numero2");
let mensaje = document.getElementById("mensaje");
let resultado = document.getElementById("resultado");

// Función para verificar si se deshabilita el botón
function verificarBoton() {
  let oper = operacion.value;
  let num2 = Number(inputnum2.value);

  if (oper === "division" && num2 === 0) {
    boton.disabled = true;
    mensaje.innerText = "No se puede dividir por 0";
    mensaje.style.color = "red";
    console.log("Mensaje activado");
  } else {
    boton.disabled = false;
    mensaje.innerText = "";
  }
}
function limpiarResultados() {
  resultado.innerText = "";
  mensaje.innerText = "";
}

// Verifica al cambiar operación o valor del segundo número
operacion.addEventListener("change", verificarBoton);
inputnum2.addEventListener("input", verificarBoton);
inputnum2.addEventListener("change", verificarBoton);
inputnum1.addEventListener("input", verificarBoton);
// Eventos para limpiar resultados al cambiar valores
inputnum1.addEventListener("input", limpiarResultados);
inputnum2.addEventListener("input", limpiarResultados);
operacion.addEventListener("change", limpiarResultados);


boton.addEventListener("click", function () {
  let num1 = Number(inputnum1.value);
  let num2 = Number(inputnum2.value);
  let total = 0;

  if (operacion.value === "suma") {
    total = num1 + num2;
  } else if (operacion.value === "resta") {
    total = num1 - num2;
  } else if (operacion.value === "multiplicacion") {
    total = num1 * num2;
  } else if (operacion.value === "division") {
    total = num1 / num2;
  }

  resultado.innerText = "El resultado es: " + total;
});