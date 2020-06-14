fs = require("fs");

f6 = function(lista, callback_final) {
  lista_resultado = [];
  contador = 0;

  lista.forEach((elemento, i) => {
    fs.readFile("./"+elemento, function(error, contenido){
      lista_resultado[i] = contenido+"";
      contador++;
      if(contador == lista.length){
        callback_final(lista_resultado);
      }
    });
  });
}

f6(['a1.txt','a2.txt'], function(result) {console.log(result)});
