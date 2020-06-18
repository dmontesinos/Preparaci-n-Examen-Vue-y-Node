var fs = require("fs");

var when = function(f1) {
  return {
    do: function(f2){
      return f1(f2);
    }
  }
}


f1 = function(callback) { fs.readFile('a1.txt', callback) }
f2 = function(error, result) { console.log(result+"") }
when(f1).do(f2)
