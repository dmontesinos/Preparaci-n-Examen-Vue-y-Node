f2 = function(a) {
  if(a >= 0) {
    return 2*a;
  } else {
    return -1
  }
}

f3 = function(lista) {
  var lista2 = [];
  lista2 = lista.map(x => f2(x) + 23);
  console.log(lista2);
}

f3([1,2,3]);
