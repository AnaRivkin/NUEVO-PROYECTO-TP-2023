const URL = "http://127.0.0.1:5000/";
// Capturamos el evento de envío del formulario
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitamos que se envie el form
    var formData = new FormData();

    formData.append("nombre", document.getElementById("nombre").value);
    formData.append(
      "descripcion",
      document.getElementById("descripcion").value
    );
    formData.append("urlImagen", document.getElementById("urlImagen").value);
    formData.append(
      "participantesMin",
      document.getElementById("participantesMin").value
    );
    formData.append(
      "participantesMax",
      document.getElementById("participantesMax").value
    );
    formData.append("urlVideo", document.getElementById("urlVideo").value);

    fetch(URL + "juegos", {
      method: "POST",
      body: formData, // Aquí enviamos formData en lugar de JSON
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (data) {
        alert("Juego agregado correctamente.");
        
        document.getElementById("nombre").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("urlImagen").value = "";
        document.getElementById("participantesMin").value = "";
        document.getElementById("participantesMax").value = "";
        document.getElementById("urlVideo").value = "";
      })
      .catch(function (error) {
        // Mostramos el error, y no limpiamos el form.
        alert("Error al agregar el Juego.");
      });
  });
