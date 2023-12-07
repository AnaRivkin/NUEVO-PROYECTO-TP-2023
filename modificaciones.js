URL = "http://127.0.0.1:5000/" 

const app = Vue.createApp({ 
    data() { return { 
        codigo: '', 
        nombre: '', 
        descripcion: '', 
        participantesMin: '', 
        participantesMax: '', 
        urlImagen: '', 
        urlVideo: null,
        imagenUrlTemp: null, 
        mostrarDatosJuego: false, 
    }; 
},
 methods: { 
    obtenerJuego() { 
        fetch(URL + 'juegos/' + this.codigo) 
        .then(response => response.json()) 
        .then(data => {
            // console.log(data) 
            this.nombre = data.nombre; 
            this.descripcion = data.descripcion; 
            this.participantesMin = data.participantes_min; 
            this.participantesMax = data.participantes_max;
            this.urlImagen = data.url_imagen; 
            this.urlVideo = data.url_video;
            this.mostrarDatosJuego = true; 
        }) 
        .catch(error => console.error('Error:', error)); 
    }, 
    seleccionarImagen(event) { 
        const file = event.target.files[0]; 
        this.imagenSeleccionada = file; 
        this.imagenUrlTemp = URL.createObjectURL(file); // Crea una URL temporal para la vista previa
    },
        guardarCambios() { 
        const formData = new FormData(); 

        formData.append('codigo', this.codigo); 
        formData.append('nombre', this.nombre); 
        formData.append('descripcion', this.descripcion);
        formData.append('participantesMin', this.participantesMin); 
        formData.append('participantesMax', this.participantesMax);
        formData.append('urlImagen', this.urlImagen); 
        formData.append('urlVideo', this.urlVideo);

        if (this.imagenSeleccionada) { 
            formData.append('imagen', this.imagenSeleccionada, this.imagenSeleccionada.name); 
        } 
        
        fetch(URL + 'juegos/' + this.codigo, { 
            method: 'PUT', 
            body: formData, 
        }) 
            .then(response => response.json()) 
            .then(data => { 
                alert('Juego actualizado correctamente'); 
                console.log(data)
                this.limpiarFormulario(); 
            }) 
            .catch(error => { 
                console.error('Error:', error); 
                alert('Error al actualizar el juego'); 
            }); 
        }, 
        limpiarFormulario() { 
            this.codigo = ''; 
            this.nombre = ''; 
            this.descripcion = ''; 
            this.urlImagen = ''; 
            this.participantesMin = ''; 
            this.participantesMax = '';
            this.urlVideo = '';
            this.imagenSeleccionada = null; 
            this.imagenUrlTemp = null; 
            this.mostrarDatosJuego = false; 
        } 
    } 
}); 

app.mount('#app');