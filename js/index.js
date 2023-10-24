const body = document.body;
body.onload = agregarCita();

async function agregarCita() {
    const res = await fetch('https://frasedeldia.azurewebsites.net/api/phrase');
    const json = await res.json();

    const cita = document.getElementById('quote');
    const autor = document.getElementById('author');

    console.log(json)

    // const citaTraducida = await traducirCita(json.q);

    cita.textContent = json.phrase;
    autor.textContent = json.author;
};

// async function traducirCita(cita) {
//     const res = await fetch("https://es.libretranslate.com/translate", {
//         method: "POST",
//         body: JSON.stringify({
//             q: cita,
//             source: "auto",
//             target: "es",
//             format: "text",
//             api_key: ""
//         }),
//         headers: { "Content-Type": "application/json" }
//     });

//     const translation = await res.json();

//     console.log(translation);

//     return
// }