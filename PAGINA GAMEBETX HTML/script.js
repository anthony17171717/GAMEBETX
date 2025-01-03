// Función para validar el formulario
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let errorMessage = '';

    // Validación del correo electrónico
    if (!email || !email.includes('@')) {
        errorMessage += 'Por favor ingrese un correo electrónico válido.\n';
    }

    // Validación de la contraseña
    if (!password) {
        errorMessage += 'Por favor ingrese una contraseña.\n';
    }

    // Si hay errores, muestra un mensaje
    if (errorMessage) {
        alert(errorMessage);
        return false; // Impide que el formulario se envíe
    }

    // Si todo es correcto, se puede enviar el formulario
    alert('¡Inicio de sesión exitoso!');
    return true;
}

// Opcional: Función para manejar el inicio de sesión con Google y Facebook
document.querySelector('.google-btn').addEventListener('click', function() {
    alert('Iniciar sesión con Google (simulado)');
});

document.querySelector('.facebook-btn').addEventListener('click', function() {
    alert('Iniciar sesión con Facebook (simulado)');
});