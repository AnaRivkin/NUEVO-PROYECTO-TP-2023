const body = document.body;
body.onload = agregarCita();

async function agregarCita() {
    try {
        const url = 'https://quote-garden.onrender.com/api/v3/quotes';
        const res = await fetch(url);

        const { data } = await res.json();

        const cita = document.getElementById('quote');
        const autor = document.getElementById('author');

        console.log(data)

        const nroAleatorio = Math.floor(Math.random() * 10);

        cita.textContent = data[nroAleatorio].quoteText;
        autor.textContent = data[nroAleatorio].quoteAuthor;
    } catch (error) {
        console.log(error);
    }
};