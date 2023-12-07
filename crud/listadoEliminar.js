const URL = "http://127.0.0.1:5000/" 
const app = Vue.createApp({ 
    data() { 
        return { 
            juegos: [] 
        } 
    }, 
    methods: { 
        obtenerJuegos() { 
            // Obtenemos el contenido del inventario 
            fetch(URL + 'juegos') 
            .then(response => { 
                // Parseamos la respuesta JSON 
                if (response.ok) { return response.json(); } 
            }) 
            .then(data => { 
                // El código Vue itera este elemento para generar la tabla 
                this.juegos = data; 
            }) 
            .catch(error => { 
                console.log('Error:', error); 
                alert('Error al obtener los juegos.'); 
            }); 
        }, 
        eliminarJuego(id) { 
            if (confirm('¿Estás seguro de que quieres eliminar este juego?')) { 
                fetch(URL + `juegos/${id}`, { method: 'DELETE' }) 
                .then(response => { 
                    if (response.ok) { 
                        this.juegos = this.juegos.filter(juego => juego.id !== id); 
                        alert('Juego eliminado correctamente.'); 
                        this.obtenerJuegos();
                    } 
                }) 
                .catch(error => { 
                    alert(error.message); 
                }); 
            } 
        } 
    }, 
    mounted() { 
        //Al cargar la página, obtenemos la lista de productos 
        this.obtenerJuegos(); 
    } 
}); 
app.mount('body');