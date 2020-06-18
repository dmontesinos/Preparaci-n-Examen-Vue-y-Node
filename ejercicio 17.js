fs = require("fs");

function asyncToFuture(funcionRecibida){
  future = {
    isDone: false, //La operación ha acabado?
    result: null, //null si isDone == false, contenido si isDone != null
  }

  return function readIntoFuture(archivo){
    funcionRecibida("./"+archivo, function(error, contenido){
      future.result = contenido;
      future.isDone = true;
    })
    return future;
  }
}

readIntoFuture2 = asyncToFuture(fs.readFile);
future = readIntoFuture2('a1.txt');
setTimeout(function() { console.log(future) }, 1000);
