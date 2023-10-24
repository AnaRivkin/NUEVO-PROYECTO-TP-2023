const body = document.body;
body.onload = agregarCita();

async function agregarCita() {
    const res = await fetch('https://frasedeldia.azurewebsites.net/api/phrase');
    const json = await res.json();

    const cita = document.getElementById('quote');
    const autor = document.getElementById('author');

    // console.log(json)

    cita.textContent = json.phrase;
    autor.textContent = json.author;
};