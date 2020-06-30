fs = require("fs");

function enhancedFutureToPromise(enhancedFuture){
  return new Promise(function(resolve, reject){ //Devolvemos una promesa
    enhancedFuture.registerCallback(function(ef){ //Cuando llamamos a registerCallBack,
      //ejecutamos la función que queramos, en este caso un resolve del resultado de ef (ej18).
      resolve(ef.result);
    })
  })
}
