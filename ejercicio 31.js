function parallelPromise(promise1, promise2) {
  var promesa1Acabada = false;
  var promesa2Acabada = false;
  var promesa1Valor;
  var promesa2Valor;

  return new Promise((resolve, reject) => {
    promise1.then((valor)=>{
      promesa1Acabada = true;
      promesa1Valor = valor;

      if(promesa1Acabada && promesa2Acabada){
        resolve([promesa1Valor, promesa2Valor]);
      }
    })
    promise2.then((valor)=>{
      promesa2Acabada = true;
      promesa2Valor = valor;

      if(promesa1Acabada && promesa2Acabada){
        resolve([promesa1Valor, promesa2Valor]);
      }
    })
  })
}




var p2 = parallelPromise(Promise.resolve(0), Promise.resolve(1));
p2.then(console.log);
