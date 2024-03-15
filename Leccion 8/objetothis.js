literalCirculo = {
  radio: 10,
  obtArea: function () {
    self = this;
    console.log("Radio de literalCirculo:", this.radio);
    agrandar = function () {
      self.radio = 20;
    };
    agrandar();
    console.log("Después Radio:", this.radio);
    return Math.PI * Math.pow(this.radio, 2);
  },
};

console.log("Área usando radio=20:", literalCirculo.obtArea());
console.log("Window.radio es:", window.radio);
