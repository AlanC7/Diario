

document.addEventListener("DOMContentLoaded", () => {
    const usuarioNombre = sessionStorage.getItem("usuario") || "Usuario"; // Obtiene el nombre de sessionStorage
    document.getElementById("usuarioNombre").textContent =" " + usuarioNombre;
});