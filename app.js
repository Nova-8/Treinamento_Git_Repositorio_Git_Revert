document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto");

    titulo.addEventListener("mouseover", function() {
        titulo.style.color = "blue";
    });

    titulo.addEventListener("mouseout", function() {
        titulo.style.color = "white";
    });

    texto.addEventListener("mouseover", function() {
        texto.style.color = "red";
    });

    texto.addEventListener("mouseout", function() {
        texto.style.color = "gray";
    });
});
