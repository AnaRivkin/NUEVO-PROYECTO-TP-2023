const form = document.getElementById('formOpinion');
const tipoContacto = document.getElementById('tipoContacto');

tipoContacto.addEventListener('change', (e) => {
    const nombreCampoTexto = document.getElementById('nombreCampoTexto');
    const campoConsulta = document.getElementById('campoConsulta');

    if (e.target.value === 'consulta') {
        nombreCampoTexto.textContent = 'Consulta:';
        campoConsulta.placeholder = 'Escribí tu consulta...';
    } else if (e.target.value === 'opinion') {
        nombreCampoTexto.textContent = 'Opinión:';
        campoConsulta.placeholder = 'Escribí tu opinión...';
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('firstname').value;
    const apellido = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const tipoContactoValue = tipoContacto.value;

    const tipoConsulta = document.querySelector('input[name="consulta"]:checked').value;

    if (nombre && apellido && email && tipoConsulta && tipoContacto) {
        swal(`Muchas gracias, ${nombre}!`, `Tu ${tipoContactoValue} fue enviada!`, "success");
        form.reset();
    }
    else {
        swal(`Faltan datos`, `Faltan completar campos del formulario...`, "error");
    }
})