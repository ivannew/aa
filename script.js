function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerHTML = mensaje;
    document.getElementById("mensajeContenedor").style.display = "block";
}

function ocultarMensaje() {
    document.getElementById("mensajeContenedor").style.display = "none";
}
