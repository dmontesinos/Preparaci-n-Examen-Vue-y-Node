var fs = require("fs");

var when = function(f1) {
  return {
    and: function(f2){
      return {
        do: function(f3){
          var error1 = null;
          var resultado1 = null;
          var error2 = null;
          var resultado2 = null;

          var parteLeida = false;


          f1(function(error, resultado){
            error1 = error;
            resultado1 = resultado;

            if(parteLeida){
              f3(error1, error2, resultado1, resultado2);
            } else {
              parteLeida = true;
            }
          })

          f2(function(error, resultado){
            error2 = error;
            resultado2 = resultado;

            if(parteLeida){
              f3(error1+"", error2+"", resultado1+"", resultado2+"");
            } else {
              parteLeida = true;
            }
          })
        }
      }
    }
  }
}


f1 = function(callback) { fs.readFile("a1.txt", callback) }
f2 = function(callback) { fs.readFile("a2.txt", callback) }
f3 = function(err1, err2, res1, res2) { console.log(res1, res2) }
when(f1).and(f2).do(f3)
