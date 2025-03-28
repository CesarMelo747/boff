document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registroForm");
    const btnRegistro = document.getElementById("btnRegistro");
    const mensajeError = document.getElementById("mensajeError");

    form.addEventListener("input", function() {
        const usuario = document.getElementById("usuario").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (usuario && correo && password && confirmPassword) {
            btnRegistro.removeAttribute("disabled");
            mensajeError.classList.add("d-none");
        } else {
            btnRegistro.setAttribute("disabled", "true");
            mensajeError.classList.remove("d-none");
        }
    });
});