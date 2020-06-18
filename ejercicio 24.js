/*function antipromise(promesa){
  return promesa.then(function(valor) {
    console.log("He entrado en resolve (pero hago reject).");
    return Promise.reject(valor);
  }, function(valor) {
    console.log("He entrado en reject (pero hago resolve).");
    return Promise.resolve(valor);
  })
}*/


function antipromise(promesaRecibida){
  return promesaRecibida.then(function(valor) { //En valor tenemos el texto de la promesa
    console.log("Resolve A: "+valor);
    return Promise.reject(valor);
  }, function(valor){
    console.log("Resolve B: "+valor);
    return Promise.resolve(valor);
  })
}


antipromise(Promise.reject("Hola que ase")).then(console.log);
antipromise(Promise.resolve("Hola que dise")).catch(console.log);
