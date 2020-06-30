function functionPromiseComposer(f1, f2){
  return function(valor){
    return f2(valor).then(f2);
  }
}



var f1 = x => new Promise((resolve, reject) => resolve(x + 1));
functionPromiseComposer(f1, f1)(3).then(console.log);


var f3 = x => new Promise((resolve, reject) => reject("always fails"));
functionPromiseComposer(f1, f3)(3).catch(console.log);
