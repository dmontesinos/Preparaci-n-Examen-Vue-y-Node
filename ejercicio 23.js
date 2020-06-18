/Ejemplo que no tiene nada que ver con el ejercicio 23.
variable = false;

p = new Promise((resolve, reject) => {
  if(variable){
    resolve('Es true');
  }else{
    reject('No es true');
  }
});



p.then(resultado => {
  console.log('El then es: '+resultado);
}).catch(resultado => {
  console.log('El catch es: '+resultado);
});
