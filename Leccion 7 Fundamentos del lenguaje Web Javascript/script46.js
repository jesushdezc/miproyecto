/* function multiplicar(n1,n2) { 
    return n1*n2; 
    } 
    console.log(multiplicar(5,3));

    multiplicar.version="v.1.0"; 
    console.log(multiplicar.version);

    function multiplicar(n1,n2) { 
        return n1*n2; 
        } 
        console.log(multiplicar(5,3)); 
        multiplicar.version="v.1.0"; 
        console.log(multiplicar.version); 
        console.log(multiplicar); 
        console.log(multiplicar.toString()); */

function hazmultiplicar(num) {
  otrafuncion = function (param) {
    return num * param;
  };
  return otrafuncion;
}
multiplicaPor3 = hazmultiplicar(3);
console.log(multiplicaPor3(100));
multiplicaPor2 = hazmultiplicar(2);
console.log(multiplicaPor2(100));

function operaSobre(param,unafuncion) { 
    return unafuncion(param); 
    } 
    result=operaSobre(500,multiplicaPor3); 
    console.log(result); 
    result=operaSobre(700, multiplicaPor2); 
    console.log(result); 