document.getElementById('enviar').addEventListener('click', () => {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const motivo = document.getElementById('motivo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar los campos
    if (nombre && apellido && email && motivo && mensaje) {
        // Interpolación de cadenas usando ES6
        const alertMessage = `De: ${nombre} ${apellido} (${email})\n\nAsunto: ${motivo}\n\nMensaje:\n${mensaje}`;
        
        // Mostrar la alerta
        alert(alertMessage);
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
