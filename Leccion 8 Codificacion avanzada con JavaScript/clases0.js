function prueba(){ 
    console.log(this); 
    this.nombre='Alejandro'; 
   } 
    
   prueba(); 
   console.log(window.nombre);

   class Persona { 
    constructor(nombre,edad) { 
      this.nombre=nombre; 
      this.edad=edad; 
    } 
    saludo(){ 
      return `¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`; 
    } 
  } 

  let juan=new Persona("Juan",25);
  console.log(juan.saludo());

  let persona={ 
    nombre:"Juan", 
    edad:25, 
    saludo:function() { 
     return `¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`; 
    } 
   }; 
    
   console.log(persona.saludo()); //¡Hola! Mi nombre es Juan y tengo 25 años.