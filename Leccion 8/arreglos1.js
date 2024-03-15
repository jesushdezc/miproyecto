/* vectorA=new Array(); 
vectorA[0]="Alejandro"; 
vectorA[1]=132; 
vectorA[2]=function(nombre){ 
console.log("Ing. " +nombre); 
}; 

vectorA[3]={curso:"HTML, CSS & JS"}; 
console.log(vectorA); 
vectorA[2]("Alejandro"); 
vectorA[2](vectorA[0]); 
console.log(vectorA[3].curso); */ 

/* nombres1=["Nano","Alex","Armi"]; 
console.log(nombres1); 
for ( i=0; i<nombres1.length; i++) { 
console.log("Hola " +nombres1[i]); 
} 
*/

/* nombres2=["Luis","Paco","Juan"]; 
nombres2[100]="Mazatlán"; 
for ( i=0; i<nombres2.length; i++) { 
  console.log("Hola " +nombres2[i]); 
} 
console.log('***************'); 
for ( nombre in nombres2) { 
 console.log("Hola " +nombres2[nombre]); 
}
*/

/* miObj={ 
    nombre:"Minibit", 
    curso:"HTML/CSS/JS", 
    plataforma:"CECATI 132" 
  }; 
  for ( prop in miObj) { 
    console.log(prop + ": " +miObj[prop]); 
  }
  */

  nombres3=["Gaby","Gaeta","Ibarra"]; 
  nombres3.saludar="BuenDía!"; 
  for ( nombre in nombres3) { 
    console.log("Hola " +nombres3[nombre]); 
  }

  contador=0; 
mivector=["Gaby",2,{cecati:132}]; 
for ( i=0; i<mivector.length; i++) { 
contador++; 
} 
console.log(contador); 

