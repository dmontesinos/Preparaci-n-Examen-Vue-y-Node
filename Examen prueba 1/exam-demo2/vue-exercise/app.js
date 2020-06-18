
const shoppingList = [
  { item: "Ous", quantity: 2, units: ["dotzena", "dotzenes"] },
  { item: "Llet", quantity: 1, units: ["litre", "litres"] },
  { item: "Oli", quantity: 2, units: ["litre", "litres"] },
	/*...*/
  { item: "Patates", quantity: 15, units: ["kilogram", "kilograms"] },
];

var vm = new Vue({
  el: '#app',
  data: {
    shoppingList: [
      { item: "Ous", quantity: 2, units: ["dotzena", "dotzenes"] },
      { item: "Llet", quantity: 1, units: ["litre", "litres"] },
      { item: "Oli", quantity: 2, units: ["litre", "litres"] },
    	/*...*/
      { item: "Patates", quantity: 15, units: ["kilogram", "kilograms"] },
    ],
  },
  methods: {
    eliminarElemento: function(index) {
      this.shoppingList.splice(index,1);
    },
  },
  template: `
    <div>
      <ul v-for="(elemento, index) in this.shoppingList">
        <li v-if="elemento.quantity == 1">
          {{elemento.item}} ({{elemento.quantity}} {{elemento.units[0]}})
          <button v-on:click="eliminarElemento(index)">esborrar</button>
        </li>
        <li v-if="elemento.quantity > 1">
          {{elemento.item}} ({{elemento.quantity}} {{elemento.units[1]}})
          <button v-on:click="eliminarElemento(index)">esborrar</button>
        </li>
      </ul>
    </div>
  `,
});
