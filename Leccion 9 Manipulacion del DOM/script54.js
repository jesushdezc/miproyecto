// function saludar(evento){ 
//     this.textContent="Entrar";
//     console.log(this); 
//     let nombre=document.getElementById("nombre").value; 
//     let mensaje="<h2>¡Hola "+nombre+"!</h2>"; 
//     document 
//      .getElementById("contenido") 
//      .innerHTML=mensaje; 
//     if (nombre==="estudiante"){ 
//      var titulo=document 
//        .querySelector("#titulo") 
//        .textContent; 
//      titulo+=" ∙ CECATI 132"; 
//      document 
//       .querySelector("h1") 
//       .textContent=titulo; 
//     } 
//    } 
//    document.querySelector("button").addEventListener("click",saludar); 


// document.addEventListener("DOMContentLoaded",function(evento){ 
//     function saludar(evento){ 
//     console.log(evento); //para ver tipo de evento 
//     this.textContent="Entrar"; 
//     var nombre=document.getElementById("nombre").value; 
//     var mensaje="<h2>¡Hola "+nombre+"!</h2>"; 
//     document .getElementById("contenido").innerHTML=mensaje; 
//     if (nombre==="estudiante"){ 
//     var titulo=document.querySelector("#titulo").textContent; 
//     titulo+=" ∙ CECATI 132"; 
//     document.querySelector("h1").textContent=titulo; 
//     } 
//     } 
//     document.querySelector("button") 
//     .addEventListener("click",saludar); 
//     });

document.addEventListener("DOMContentLoaded",function(evento){ 
    function saludar(evento){ 
    this.textContent="Entrar"; 
     var nombre=document.getElementById("nombre").value; 
     var mensaje="<h2>¡Hola "+nombre+"!</h2>"; 
     document.getElementById("contenido").innerHTML=mensaje; 
     if (nombre==="estudiante"){ 
      var titulo=document.querySelector("#titulo").textContent; 
      titulo+=" ∙ CECATI 132"; 
      document.querySelector("h1").textContent=titulo; 
     } 
    } 
    document.querySelector("button").addEventListener("click",saludar); 
    document.querySelector("body").addEventListener("mousemove",function(evento){ 
      if (evento.shiftKey===true) { 
       console.log("x: " +evento.clientX); 
       console.log("y: " +evento.clientY); 
      } 
     } 
    ); 
   });