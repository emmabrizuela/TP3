const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const btnFiltrar = document.getElementById("btn-filtrar");
const inputFiltro = document.getElementById("filtro");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

btnFiltrar.addEventListener("click", function () {
  const texto = inputFiltro.value.trim().toLowerCase();
  resultado.innerHTML = "";
  mensaje.textContent = "";

  if (texto === "") {
    mensaje.textContent = "Por favor ingresá una palabra.";
    mensaje.style.color = "red";
    return;
  }

  const filtradas = palabras.filter(p => p.toLowerCase().includes(texto));

  if (filtradas.length === 0) {
    mensaje.textContent = "No se encontraron coincidencias.";
    mensaje.style.color = "orange";
  } else {
    filtradas.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      resultado.appendChild(li);
    });
  }
});
inputFiltro.addEventListener("input", function () {
  mensaje.textContent = "";
});