console.printaki2 = function() {
  contador = 0;
  return function(){
    contador = contador + 1;
    console.log('Aquí '+contador);
  };
}();

console.printaki2();
console.printaki2();
console.printaki2();
