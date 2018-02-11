<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Enter Phone Number"><br>
    <button v-on:click="login">Connection</button>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data: function() {
      return {}
    },
    methods: {
      login: function() {
        this.$router.replace('home')
      }
    }
  }
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
</style>
