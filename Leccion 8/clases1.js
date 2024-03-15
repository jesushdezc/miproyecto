/* function Circulo(radio) {
  this.radio = radio;
}

circulo1 = new Circulo(10);
console.log(circulo1);

function Circulo(radio) {
  this.radio = radio;
  this.obtArea = function () {
    return Math.PI * Math.pow(this.radio, 2);
  };
}
circulo1 = new Circulo(10);
console.log(circulo1.obtArea()); */

function Circulo(radio) { 
    this.radio=radio; 
    } 
    Circulo.prototype.obtArea=function(){ 
    return Math.PI*Math.pow(this.radio,2); 
    }; 
    circulo1=new Circulo(10); 
    console.log(circulo1); 
    circulo2=new Circulo(20); 
    console.log(circulo2); 