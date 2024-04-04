// console.log(document.getElementById("nombre")); 

console.log(document instanceof Document);
function saludar() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = "<h2>¡Hola " + nombre + "!</h2>";
    document.getElementById("contenido")
    .innerHTML=mensaje;
    if (nombre = "estudiante" || nombre==="ESTUDIANTE" ) {
        var titulo=document
        .querySelector("#titulo").textContent;
        titulo+=" desde CECATI 132!";
        document.querySelector("h1").textContent=titulo;
    }
}