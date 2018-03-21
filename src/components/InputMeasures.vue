<template>
  <div class="app">
    <input v-model="date" type="date"><br>
    <input v-model="ph" placeholder="enter ph"><br>
    <input v-model="nitrate" placeholder="enter nitrate"><br>
    <input v-model="nitrite" placeholder="enter nitrite"><br>
    <input v-model="temperature" placeholder="enter temperature"><br>
    <input v-model="ammonia" placeholder="enter ammonia"><br>
    <input v-model="user" placeholder="enter username"><br>
    <button class="revolve-btn" v-on:click="submitMeasure">Publish</button>

  </div>
</template>

<script>
import firebase from 'firebase';
import { dateRef } from '../firebase';

var decPat = /[0-9]+.?[0-9]*/;

export default {

  data () {
    return {
      date: ''
    }
  },
  methods: {
    submitMeasure() {
      if (decPat.test(this.ph) && decPat.test(this.nitrate) &&
          decPat.test(this.nitrite) && decPat.test(this.temperature) &&
          decPat.test(this.ammonia)){
        dateRef.push({ date: this.date,
          ph: this.ph,
          nitrate: this.nitrate,
          nitrite: this.nitrite,
          temperature: this.temperature,
          ammonia: this.ammonia,
          user: this.user});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.revolve-btn {
  text-align: center;
  color: #FFFFFF;
  font-size: 15px;
  font-size: 1.5rem;
  padding: 14px 80px;
  background-color: #AAD152;
  margin: 20px auto;
  width: 22%;
  cursor: pointer;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
}
.revolve-btn:hover {
  background-color: #6D8E22;
}

button.revolve-btn {
-webkit-appearance: none;
-moz-appearance: none;
}
</style>
