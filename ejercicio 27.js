fs = require("fs");

function readToPromise2(funcion){
  return function()
  return new Promise(function(resolve, reject){
    funcion().
  })
}





readToPromise2 = callbackToPromise(fs.readFile);
readToPromise2("a1.txt").then(x => console.log("Contents: ", x))
.catch(x => console.log("Error: ", x));
