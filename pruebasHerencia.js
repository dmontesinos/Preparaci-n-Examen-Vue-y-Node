//Prototipos
var person = {
  details: function () {
    console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old.');
    return 'My name is ' + this.name + ' and I am ' + this.age + ' years old.';
  }
};

var mar = {
  __proto__: person, //mar inherits from person.
  name: 'mar',
  age: 20,
};

mar.details();


//Constructor de clases

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.details = function () {
    return 'My name is ' + this.name + ' and I am ' + this.age + ' years old.';
  }
}

var jane = new Person('Jane', 20); //Creamos una nueva instancia de Person -> jane

jane.details(); //Ejecutamos la función de jane.
Object.getPrototypeOf(jane); //Preguntamos tipo de objeto.
jane.friends = ['Tarzan', 'Cheetah']; //añadimos nueva propiedad friends.
