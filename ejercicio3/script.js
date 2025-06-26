const listaTareas = document.getElementById("lista-tareas");
const contador = document.getElementById("contador");
const btnActualizar = document.getElementById("btn-actualizar");

function cargarTareas() {
  listaTareas.innerHTML = "";
  contador.textContent = "Cargando tareas...";

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(tareas => {
      const completadas = tareas.filter(t => t.completed === true);

      if (completadas.length > 0) {
        contador.textContent = `Total de tareas completadas: ${completadas.length}`;
        completadas.forEach(tarea => {
          const li = document.createElement("li");
          li.textContent = tarea.title;
          listaTareas.appendChild(li);
        });
      } else {
        contador.textContent = "No hay tareas completadas.";
      }
    })
    .catch(error => {
      contador.textContent = "Error al cargar las tareas.";
      console.log("Se produjo un error al cargar las tareas:", error);
    });
}

// Carga las tareas al inicio
cargarTareas();

// para recargar
btnActualizar.addEventListener("click", cargarTareas);