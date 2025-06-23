// Definir usuario y contraseña válidos
const usuarioValido = "Alan";
const contraseñaValida = "1234";

document.getElementById("btn-login").addEventListener("click", (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del botón

    const usuarioIngresado = document.getElementById("usuario").value.trim();
    const contraseñaIngresada = document.getElementById("contraseña").value.trim();

    if (usuarioIngresado === usuarioValido && contraseñaIngresada === contraseñaValida) {
        sessionStorage.setItem("usuario", usuarioIngresado); // Guarda el nombre en sessionStorage
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = "index.html"; // Redirige a la nueva página
        }, 500);
    } else {
        document.getElementById("usuario").value = "";
        document.getElementById("contraseña").value = "";
        mostrarModal();
        
    }
});




function mostrarModal() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("modal").style.display = "none";
}

