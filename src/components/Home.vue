<template>
  <div class="home">
    <line-chart :chart-data="datacollection"></line-chart>
    <button v-on:click="fillData">Randomize</button>
    <button v-on:click="addMeasures">Add Measures</button>
    <button v-on:click="logout">Logout</button>
    <p>{{ dates }}</p>
  </div>
</template>

<script>
import firebase from 'firebase';
import LineChart from '../LineChart.js';
import { ref } from '../firebase';

export default {
  components: {
    LineChart
  },
  name: 'home',
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  firebase: function() {
    return {
      dates: ref
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addMeasures: function() {
      this.$router.replace('input-measures')
    },
    fillData: function() {
      var pH = [32, 43, 21, 13, 18];
      this.datacollection = {
        labels: ["2018/03/04", "2018/03/04", "2018/03/14","2018/03/21", "2018/03/29"],
        datasets: [
          {
            label: 'pH',
            backgroundColor: '#f87979',
            data: pH
          }, {
            label: 'temperature',
            backgroundColor: '#22A7F0',
            data: [ this.getRandomInt() , this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'ammonia',
            backgroundColor: '#26A65B',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'nitrite',
            backgroundColor: '#F4D03F',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'nitrate',
            backgroundColor: '#F9690E',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
