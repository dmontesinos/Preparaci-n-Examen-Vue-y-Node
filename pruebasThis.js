var jane = {
  name: 'Jane',
  friends: [ 'Tarzan', 'Cheeta' ],
  printFriends: function () {
    this.friends.forEach(
    function (friend) {
      name = "dani"; //El this hace referencia a este elemento y no al exterior.
      console.log(this.name +' knows '+friend); //that.name !!!!
    });
  }
};

jane.printFriends();

//Solución a poder utilizar el THIS dentro de la función anónima
var jane2 = {
  name: 'Jane2',
  friends: [ 'Tarzan', 'Cheeta' ],
  printFriends: function () {
    var that = this; //Guarem la referència a l'objecte jane en una variable.
    this.friends.forEach(
    function (friend) {
      console.log(that.name +' knows '+friend); //that.name !!!!
    });
  }
};

jane2.printFriends();

//Solución 2 mediante arrow functions. El this hace referencia al exterior de la arrow.
var jane3 = {
  name: 'Jane3',
  friends: [ 'Tarzan', 'Cheeta' ],
  printFriends: function () {
    this.friends.forEach( (friend) => { //estem definint una arrow function.
      console.log(this.name +' knows '+friend);
    });
  }
};

jane3.printFriends();
