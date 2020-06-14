f4 = function(a,b) {
  return a+b;
};

listaA = [1,2,3,4];

listaB = listaA.map(elemento => f4(elemento, 23));

console.log(listaB);
