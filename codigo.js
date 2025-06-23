const titulo = document.querySelector('#titulo');
const apunte = document.querySelector('#apunte');
const lista = document.querySelector('#lista');
const botonAgg = document.querySelector('#btn-agregar');
const fecha = document.querySelector('#fecha');

function FechaSistema() {
    var Dia, dianum, mes, anio;
    var ObtenerFecha = new Date();
    Dia = ObtenerFecha.getDay();
    dianum = ObtenerFecha.getDate();
    mes = ObtenerFecha.getMonth();
    anio = ObtenerFecha.getFullYear();
    var Dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    fecha.innerHTML = Dias[Dia] + ", " + dianum + "/" + (mes + 1) + "/" + anio;
}

setInterval(FechaSistema, 1000);

function AgregarTarea(t, a, imgSrc) {
    const elementos = `
        <li id="objeto">
            <h4 class="Titulo-tarea">${t}</h4>
            <div class="Contenedor-terea-agg">
                ${imgSrc ? `<img class="imagen-sub" src="${imgSrc}" alt="Imagen de la tarea">` : ""}
                <textarea class="lista contenidoAP" readonly>${a}</textarea>
                <button class="Eliminar">Eliminar</button>
            </div>
        </li>`;

    lista.insertAdjacentHTML("beforeend", elementos);
}

botonAgg.addEventListener('click', () => {
    const t = titulo.value;
    const a = apunte.value;
    const imgInput = document.getElementById("imagenInput");
    const archivo = imgInput.files[0];
    const imgSrc = archivo ? URL.createObjectURL(archivo) : null;

    if (t && a) {
        AgregarTarea(t, a, imgSrc);
        titulo.value = "";
        apunte.value = "";
        imgInput.value = ""; // Resetea el input file
        document.getElementById("imagenMostrada").src = ""; // Limpia la vista previa
    } else {
        alert("El campo título o el apunte están vacíos");
    }
});

lista.addEventListener('click', function (event) {
    const elemento = event.target;
    if (elemento && elemento.tagName === 'BUTTON') {
        elemento.closest("li").remove();
    }
});

document.getElementById("imagenInput").addEventListener("change", function (event) {
    var imagen = document.getElementById("imagenMostrada");
    var archivo = event.target.files[0];

    if (archivo) {
        imagen.src = URL.createObjectURL(archivo);
        imagen.style.display = "block";
    }
});
const usuarioNombre = localStorage.getItem("usuario") || "Usuario";
document.getElementById("usuarioNombre").textContent = usuarioNombre;

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

document.getElementById("cerrar").addEventListener("click", (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del botón

            document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = "login.html"; // Redirige a la nueva página
        }, 500);
});
