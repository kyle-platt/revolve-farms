<template>
  <div class="InputMeasures">
    <input v-model="measure.date" placeholder="enter date"><br>
    <button class="revolve-btn" v-on:click="publish">Publish</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {

  data () {
    return {
      measure: {
        date: ""
      },
    }
  },
  methods: {
    publish: function(){
      this.$http.post('https://revolve-farms.firebaseio.com/measures.json', this.measure);
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
