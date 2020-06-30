function promiseBarrier(valorN) {
  var lista = [];
  var listaParametros = [];
  var funciones = [];
  var contador = 0;

  for(let i=0; i<valorN; i++){
    lista[i] = function(param){
      contador++;
      return new Promise(function(resolve, reject){
        listaParametros[i] = param;
        funciones[i] = resolve;

        if(contador == valorN){
          for(let iterador=0; iterador<valorN; iterador++){
            funciones[iterador](listaParametros[iterador]);
          }
        }
      });
    }
  }
  return lista;
}




// Ejemplo de uso 1
var [f1, f2] = promiseBarrier(2);
Promise.resolve(0)
.then(x => { console.log("c1 s1"); return x; })
.then(x => { console.log("c1 s2"); return x; })
.then(x => { console.log("c1 s3"); return x; })
.then(x => { console.log("c1 s4"); return x; })
.then(f1)
Promise.resolve(0)
.then(f2)
.then(x => { console.log("c2 s1"); return x; })
.then(x => { console.log("c2 s2"); return x; })

// Ejemplo de uso 2
var [f1, f2, f3] = promiseBarrier(3);
Promise.resolve(0)
.then(x => { console.log("c1 s1"); return x; })
.then(x => { console.log("c1 s2"); return x; })
.then(x => { console.log("c1 s3"); return x; })
.then(f1)
.then(x => { console.log("c1 s4"); return x; })
Promise.resolve(0)
.then(x => { console.log("c2 s1"); return x; })
.then(f2)
.then(x => { console.log("c2 s2"); return x; })
Promise.resolve(0)
.then(f3)
.then(x => { console.log("c3 s1"); return x; })
.then(x => { console.log("c3 s2"); return x; })
.then(x => { console.log("c3 s3"); return x; })
