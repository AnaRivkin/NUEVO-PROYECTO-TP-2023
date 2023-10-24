const body = document.body;
body.onload = agregarCita();

async function agregarCita() {
    const res = await fetch('https://zenquotes.io/api/today');
    const [json] = await res.json();

    const cita = document.getElementById('quote');
    const autor = document.getElementById('author');

    cita.textContent = json.q;
    autor.textContent = json.a;
};