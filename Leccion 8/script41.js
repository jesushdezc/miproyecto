var mensaje="Estoy en global"; 
console.log("Variable en ámbito global: "+mensaje); 
A=function() { 
let mensaje="Estoy declarado en la función A"; 
console.log("mensaje a: " + mensaje); 
function B() { 
console.log("mensaje b: " + window.mensaje); 
} 
B(); 
} 
A(); 