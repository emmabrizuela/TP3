let boton = document.getElementById("calcular");
let operacion = document.getElementById("operacion");

operacion.addEventListener("change", function () {
  if (operacion.value === "division") {
    boton.disabled = true;
  } else {
    boton.disabled = false;
  }
});

boton.addEventListener("click", function () {
  let num1 = document.getElementById("numero1").value;
  let num2 = document.getElementById("numero2").value;
  let resultado = document.getElementById("resultado");

  num1 = Number(num1);
  num2 = Number(num2);
  let total = 0;

  if (operacion.value === "suma") {
    total = num1 + num2;
  } else if (operacion.value === "resta") {
    total = num1 - num2;
  } else if (operacion.value === "multiplicacion") {
    total = num1 * num2;
  }

  resultado.innerText = "El resultado es: " + total;
});