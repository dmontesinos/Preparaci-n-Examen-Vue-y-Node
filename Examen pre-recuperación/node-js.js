function delayPromise(a, t){
  var timeOutActivado = false;
  var funcionResolve = null;
  var valorResolve = null;

  setTimeout(() => {
    timeOutActivado = true;
    if(funcionResolve != null){
      funcionResolve(valorResolve);
    }
  }, t);

  return new Promise(function(resolve, reject) {
    a.then(valor => {
      if(timeOutActivado){
        resolve(valor);
      } else {
        funcionResolve = resolve;
        valorResolve = valor;
      }
    }, reject);
  })
}

const startTime = new Date().getTime();
const timeOffset = (v) => {console.log("v is " + v + " at " + (new Date().getTime() - startTime) + " ms")};

const resolveIn = (v, t) => new Promise(function(resolve, reject) { setTimeout(() => resolve(v), t) });
const rejectIn = (v, t) => new Promise(function(resolve, reject) { setTimeout(() => reject(v), t) });

var p = delayPromise(Promise.reject(1), 10); 
p.catch(timeOffset);
