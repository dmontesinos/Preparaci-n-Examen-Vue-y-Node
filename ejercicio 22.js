var asyncComposer = function(f1, f2){
  return function(valor, callback) { // Resultado F3
    f2(valor, function(error, resultado){
      // En la función de "Resultat" podemos observar como si f1 se completa
      // satisfactoriamente, se llama al callback de la función y se deja a null
      // el error de la función. f1 = function(a, callback)
      if(!error){
        f1(resultado, callback);
      } else {
        console.log("error");
      }
    })
  };
}



// En caso de resultado satisfactorio
f1 = function(a, callback) {
  callback(null, a + 1)
}

f3 = asyncComposer(f1, f1)
f3(3, function(error, result) {
  console.log(result)
})

// En caso de error
f1 = function(a, callback) {
  callback(null, a + 1)
}

f2 = function(a, callback) {
  callback("error", "") // Marcamos un error!!! dejamos result vacio ""
}

f3 = asyncComposer(f1, f2)
f3(3, function(error, result) {
  console.log(error, result)
})
