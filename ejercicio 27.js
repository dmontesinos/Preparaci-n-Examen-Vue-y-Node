fs = require("fs");

function callbackToPromise(funcionRecibida){
  return function readIntoPromise2(archivo){
    return new Promise(function(resolve, reject){
      funcionRecibida("./"+archivo, function(error, contenido){
        if(error){
          reject(error);
        } else {
          resolve(contenido);
        }
      })
    })
  }
}


readToPromise2 = callbackToPromise(fs.readFile);
readToPromise2("a1.txt").then(x => console.log("Contents: ", x))
.catch(x => console.log("Error: ", x));
