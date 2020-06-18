var vm = new Vue({
  el: '#app',
  data: {
    celsius: true,
    forecast: [
      { weekday: "Wednesday", type: "Rainy",  temperature: 20, scale: "celsius" },
      { weekday: "Thursday", type: "Storms", temperature: 15, scale: "celsius" },
      { weekday: "Friday", type: "Rainy",  temperature: 16, scale: "celsius" },
      { weekday: "Saturday", type: "Clowdy", temperature: 21, scale: "celsius" },
      { weekday: "Sunday", type: "Sunny",  temperature: 29, scale: "celsius" },
      { weekday: "Monday", type: "Sunny", temperature: 30, scale: "celsius" },
      { weekday: "Tuesday", type: "Clowdy", temperature: 25, scale: "celsius" },
      { weekday: "Wednesday", type: "Rainy",  temperature: 20, scale: "celsius" },
      { weekday: "Thursday", type: "Storms", temperature: 15, scale: "celsius" },
      { weekday: "Friday", type: "Rainy",  temperature: 10, scale: "celsius" },
      { weekday: "Saturday", type: "Clowdy", temperature: 5, scale: "celsius" },
      { weekday: "Sunday", type: "Sunny",  temperature: 0, scale: "celsius" },
    ],
  },
  methods: {
    cambiarEstado: function() {
      if(this.celsius == true){
        this.celsius = false;
      } else {
        this.celsius = true;
      }
    },

  },
  watch: {
    celsius: function(){
      for(let i=0; i<this.forecast.length; i++){
        if (this.forecast[i].scale == "celsius") { // Convert to FAHRENHEIT_SCALE
          this.forecast[i].scale = "fahrenheit";
          this.forecast[i].temperature = this.forecast[i].temperature * 1.8 + 32;
        } else { // Convert to CELSIUS_SCALE
          this.forecast[i].scale = "celsius"
          this.forecast[i].temperature = (this.forecast[i].temperature - 32) / 1.8;
        }
      }
    },
  },
  template: `<div>
    View in
    <button v-bind:disabled="celsius" v-on:click="cambiarEstado()">ºC</button>
    <button v-bind:disabled="!celsius" v-on:click="cambiarEstado()">ºF</button>

    <hr />
    <table>
      <tr>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr>
      <tr>
        <td v-for="dia in this.forecast">
          <span class="event">{{dia.type}}</span>
          <span v-if="dia.scale == 'celsius'" class="temperature" >{{dia.temperature}} ºC</span>
          <span v-if="dia.scale != 'celsius'" class="temperature" >{{dia.temperature}} ºF</span>
        </td>
      </tr>
    </table>
    </div>
  `,
});
