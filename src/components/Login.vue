<template>
  <div class="login">
    <img src="../assets/Revolve-farms-logo.png" width="400" height="300"><br>
    <h3>Sign In</h3>
    <input type="text" v-on:keyup.13="signIn" v-model="email" placeholder="Email"><br>
    <input type="password" v-on:keyup.13="signIn" v-model="password" placeholder="Password"><br>
    <button class="revolve-btn" v-on:click="signIn">Log in</button>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
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
