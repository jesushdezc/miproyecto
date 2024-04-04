let letrero="DGCFT"; 
letrero+=" Cecati "; 
console.log(letrero+" 132"); //DGCFT Cecati 132 
function prueba(a) { 
console.log(a/5); 
} 
prueba();  //NaN 

x="4"; y=4; 
if (x===y) {  
 console.log("string '4' equivale al número 4"); 
} 
else { 
 console.log("En estricto '4' NO equivale a 4"); 
} 
 
/*La llave de inicio va en la línea de definición de función u objeto*/ 
function A() { 
 return {  
 nombre:"Alejandro" 
 }; 
} 
 
function B() { 
 return {nombre:"Cecati"}; 
} 
 
console.log(A()); //undefined 
console.log(B()); //{nombre:'Cecati'} 

suma=0; 
for (i=0; i<6; i++) { 
 console.log(i); 
 suma=suma+i; 
} 
console.log("La suma de 0 a 5 es: " +suma);