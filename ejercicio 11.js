fs = require("fs");

function asyncMap(list, f, callback2) {
  contador = 0;
  lista_resultado = [];
  list.forEach((elemento, i) => {
    f("./"+elemento, function(error, contenido){
      lista_resultado[i] = contenido+"";
      contador++;
      if(error != null || contador == list.length){
        callback2(error, lista_resultado);
      }
    })
  });
}
asyncMap(['a1.txt','a2.txt'], fs.readFile, function (a, b) { console.log(b) })
