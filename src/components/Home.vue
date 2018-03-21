<template>
  <div class="home">
    <line-chart :chart-data="datacollection"></line-chart>
    <button v-on:click="fillData">Randomize</button>
    <button v-on:click="addMeasures">Add Measures</button>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import LineChart from '../LineChart.js';
import { Aref } from '../firebase';

var phArray = [];
var dateArray = [];
var ammoniaArray = [];
var tempArray = [];
var nitriteArray = [];
var nitrateArray = [];
var refKey;
var ref = firebase.database().ref();
ref.on("value", function(snapshot) {
   var theKeys = snapshot.val();
   var x;
   for (x in theKeys) {
      refKey = firebase.database().ref(x);
      refKey.on("value", function(snapshot) {
         dateArray.push(snapshot.val().date);
         phArray.push(Number(snapshot.val().ph));
         ammoniaArray.push(Number(snapshot.val().ammonia));
         tempArray.push(Number(snapshot.val().temperature));
         nitrateArray.push(Number(snapshot.val().nitrate));
         nitriteArray.push(Number(snapshot.val().nitrite));
      }, function (error) {
         console.log("Error: " + error.code);
      });
   }
}, function (error) {
   console.log("Error: " + error.code);
});

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
      this.datacollection = {
        labels: dateArray,
        datasets: [
          {
            label: 'pH',
            backgroundColor: '#f87979',
            data: phArray
          }, {
            label: 'temperature',
            backgroundColor: '#22A7F0',
            data: tempArray
          }, {
            label: 'ammonia',
            backgroundColor: '#26A65B',
            data: ammoniaArray
          }, {
            label: 'nitrite',
            backgroundColor: '#F4D03F',
            data: nitriteArray
          }, {
            label: 'nitrate',
            backgroundColor: '#F9690E',
            data: nitrateArray
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
