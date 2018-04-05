<template>
  <div class="home">
    <button style="position: absolute; right: 0; margin-right: 100px;" v-on:click="addMeasures">Add Measures</button>
    <button style="position: absolute; right: 0; margin-right: 40px;" v-on:click="logout">Logout</button><br><br><br>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import firebase from 'firebase';
import LineChart from '../LineChart.js';
import { Aref } from '../firebase';

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
        labels: this.getLabel(),
        datasets: [
          {
            label: 'pH',
            backgroundColor: '#f87979',
            data: this.getPh(),
          }, {
            label: 'temperature',
            backgroundColor: '#22A7F0',
            data: this.getTemp(),
          }, {
            label: 'ammonia',
            backgroundColor: '#26A65B',
            data: this.getAmmonia(),
          }, {
            label: 'nitrite',
            backgroundColor: '#F4D03F',
            data: this.getNitrite(),
          }, {
            label: 'nitrate',
            backgroundColor: '#F9690E',
            data: this.getNitrate(),
          }
        ]
      }
    },
    getPh: function() {
    var phArray = [];
    var refKeyForPh;
    var aRef = firebase.database().ref();
    aRef.on("value", function(snapshot) {
       var theKeysPh = snapshot.val();
       var x;
       for (x in theKeysPh) {
          refKeyForPh = firebase.database().ref(x);
          refKeyForPh.on("value", function(snapshot) {
             phArray.push(Number(snapshot.val().ph));
          });
       }
    });
    return phArray
    },
    getLabel: function() {
    var dateArray = [];
    var refKeyForDate;
    var aRef = firebase.database().ref();
    aRef.on("value", function(snapshot) {
       var theKeysDate = snapshot.val();
       var x;
       for (x in theKeysDate) {
          refKeyForDate = firebase.database().ref(x);
          refKeyForDate.on("value", function(snapshot) {
             dateArray.push(snapshot.val().date);
          });
       }
    });
    return dateArray
    },
    getTemp: function() {
    var tempArray = [];
    var refKeyForTemp;
    var aRef = firebase.database().ref();
    aRef.on("value", function(snapshot) {
       var theKeysTemp = snapshot.val();
       var x;
       for (x in theKeysTemp) {
          refKeyForTemp = firebase.database().ref(x);
          refKeyForTemp.on("value", function(snapshot) {
             tempArray.push(Number(snapshot.val().temperature));
          });
       }
    });
    return tempArray
    },
    getAmmonia: function() {
    var ammoniaArray = [];
    var refKeyForAmmonia;
    var aRef = firebase.database().ref();
    aRef.on("value", function(snapshot) {
       var theKeysAmmonia = snapshot.val();
       var x;
       for (x in theKeysAmmonia) {
          refKeyForAmmonia = firebase.database().ref(x);
          refKeyForAmmonia.on("value", function(snapshot) {
             ammoniaArray.push(Number(snapshot.val().ammonia));
          });
       }
    });
    return ammoniaArray
    },
    getNitrate: function() {
    var nitrateArray = [];
    var refKeyForNitrate;
    var aRef = firebase.database().ref();
    aRef.on("value", function(snapshot) {
       var theKeysNitrate = snapshot.val();
       var x;
       for (x in theKeysNitrate) {
          refKeyForNitrate = firebase.database().ref(x);
          refKeyForNitrate.on("value", function(snapshot) {
             nitrateArray.push(Number(snapshot.val().nitrate));
          });
       }
    });
    return nitrateArray
    },
    getNitrite: function() {
    var nitriteArray = [];
    var refKeyForNitrite;
    var aRef = firebase.database().ref();
    aRef.on("value", function(snapshot) {
       var theKeysNitrite = snapshot.val();
       var x;
       for (x in theKeysNitrite) {
          refKeyForNitrite = firebase.database().ref(x);
          refKeyForNitrite.on("value", function(snapshot) {
             nitriteArray.push(Number(snapshot.val().temperature));
          });
       }
    });
    return nitriteArray
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
