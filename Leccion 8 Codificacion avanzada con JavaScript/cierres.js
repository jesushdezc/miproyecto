function multiplicar(multiplicador) {
    function interna() {
        console.log("El Multiplicador es:", multiplicador);
    }
interna();
return (function(num) { 
    return multiplicador*num; 
    }); 
    } 
    aldoble=multiplicar(2); 
    console.log("10*2=",aldoble(10)); //entorno propio 