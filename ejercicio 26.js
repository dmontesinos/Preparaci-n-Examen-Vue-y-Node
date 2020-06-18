fs = require("fs")
function readToPromise(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile("./"+file, function(error, contenido) {
      if(error){
        reject(error);
      } else {
        resolve(contenido);
      }
    })
  });
}

readToPromise("a1.txt").then(x => console.log("Contents: ", x))
.catch(x => console.log("Error: ", x));

readToPromise("notfound.txt").then(x => console.log("Contents: ", x))
.catch(x => console.log("Error: ", x));
