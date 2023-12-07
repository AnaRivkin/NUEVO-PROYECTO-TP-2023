const URL = "http://127.0.0.1:5000/" 
// Realizamos la solicitud GET al servidor para obtener todos los juegos 
fetch(URL + 'juegos') 
    .then(function (response) { 
        if (response.ok) { 
            return response.json(); 
        } 
    }) 
    .then(function (data) { 
        console.log(data)
        let tablaJuegos = document.getElementById('tablaJuegos'); 
        // Iteramos sobre los juegos y agregamos filas a la tabla 
        for (let juego of data) { 
            let fila = document.createElement('tr'); 
            fila.innerHTML = '<td>' + juego.codigo + '</td>' + '<td>' + juego.nombre + '</td>' + '<td>' + juego.descripcion + '</td>'  + '<td>' + juego.participantes_min + '</td>' + '<td>' + juego.participantes_max + '</td>' + '<td><img src="' + juego.url_imagen + '" width=200 /></td>'+ '<td>' + juego.url_video + '</td>'; 
            tablaJuegos.appendChild(fila); 
        } 
    }) 
    .catch(function (error) { 
        // Código para manejar errores 
        alert('Error al obtener los juegos.'); });