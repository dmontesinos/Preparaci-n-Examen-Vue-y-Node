function promiseToCallback(funcionIsEven) {
  return function(valor, callback){
    funcionIsEven(valor).then(function(valor){
      callback(valor, null);
    }, function(valor){
      callback(null, valor);
    });
  }
}

var isEven = function(x){
  return new Promise((resolve, reject) => {
    if(x % 2){ //Comprobamos x si es par o no
      reject(x); //Volvemos a enviar x por el reject
    }else {
      resolve(x); //Volvemos a enviar x por el resolve
    }
  });
}

var isEvenCallback = promiseToCallback(isEven);
isEven(2).then(() => console.log("OK"), () => console.log("KO"));
isEvenCallback(2, (res, err) => console.log(res, err));
isEven(3).then(() => console.log("OK"), () => console.log("KO"));
isEvenCallback(3, (res, err) => console.log(res, err));
