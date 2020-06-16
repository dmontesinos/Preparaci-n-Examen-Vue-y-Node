fs = require("fs");

function readIntoFuture(filename) {
  future = {
    isDone: false, //La operación ha acabado?
    result: null, //null si isDone == false, contenido si isDone != null
  }

  fs.readFile("./"+filename, function(error, contenido){
    future.result = contenido+"";
    future.isDone = true;
  })

  return future;
}

//Caso 1
console.log("Caso 1");
future = readIntoFuture('a1.txt');
console.log(future);

//Caso 2
console.log("Caso 2");
future = readIntoFuture('a1.txt');
setTimeout(function() { console.log(future) }, 1000)
