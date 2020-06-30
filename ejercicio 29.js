function mergedPromise(promesaRecibida){
  return new Promise((resolve, reject) => {
    promesaRecibida.then(resolve);
    promesaRecibida.catch(resolve);
  })
}


mergedPromise(Promise.resolve(0)).then(console.log);
mergedPromise(Promise.reject(1)).then(console.log);
