function raceN(lista, N){
  var listaResultante = [];
  var numeroPeq = 0;

  if(lista.length < N){
    if(lista.length = 0){
      return;
    }
    numeroPeq = lista.length;
  } else {
    numeroPeq = N;
  }

  return new Promise(function(resolve, reject) {
    for(let i=0; i<numeroPeq; i++){
      lista[i].then(valor => {
        listaResultante.push(valor);

        if(listaResultante.length == N){
          resolve(listaResultante);
        }
      }).catch(valor => {
        reject(valor);
      })
    }
  })
}

// 1
p = raceN([Promise.resolve(1),Promise.resolve(2)], 1);
p.then(console.log);
// Resultat: [1]
// 2
p = raceN([Promise.resolve(1),Promise.resolve(2)], 2);
p.then(console.log);
// Resultat: [1, 2]
// 3
var plate = new Promise(function(resolve, reject) {
setTimeout(() => resolve(1), 500);
});
p = raceN([plate,Promise.resolve(2)], 1);
p.then(console.log);
// Resultat: [2]
// 4
var plate = new Promise(function(resolve, reject) {
setTimeout(() => reject(1), 500);
});
p = raceN([plate,Promise.resolve(2)], 2);
p.then(console.log).catch(e => console.log("err: " + e));
// Resultat: err: 1
