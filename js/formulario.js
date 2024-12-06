document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que el formulario se envíe automáticamente
    
    // Obtiene los valores de los campos
    const name = document.getElementById("name").value.trim();
    const motivo = document.getElementById("motivo").value;
    const email = document.getElementById("email").value.trim();
    
    // Valida si los campos están vacíos
    if (!name || !motivo || !email) {
        document.getElementById("error-message").style.display = "block";
        return;
    } else {
        document.getElementById("error-message").style.display = "none";
    }

    // Valida el correo electrónico usando una expresión regular
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return;
    }

    // Si todo es correcto, puedes proceder a enviar el formulario (en este caso solo mostramos un mensaje)
    alert("Formulario enviado correctamente");

  
});
