function cambiarPrimitivo(numero) { 
    console.log("Variable en cambiarPrimitivo:",numero); 
    numero=5; 
    console.log("Se cambió número a:", numero); 
    } 
    function cambiaDicc(diccionario) { 
    console.log("Este es el diccionario:",diccionario); 
    diccionario.clave=5; 
    console.log("Se cambió dicc.clave a:",diccionario); 
    } 
    variable=7; 
    console.log("Variable=", variable); 
    cambiarPrimitivo(variable); 
    console.log("Variable sigue en:",variable); 
    objetoD={clave:777}; 
    console.log("ObjetoD=",objetoD); 
    cambiaDicc(objetoD); 
    console.log("Y afectó a ObjetoD:",objetoD); 