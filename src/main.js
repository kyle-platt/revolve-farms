// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyDbZ49mKjauw3lJd0WUWfwcjVXnNKuZQcg",
   authDomain: "revolve-farms.firebaseapp.com",
   databaseURL: "https://revolve-farms.firebaseio.com",
   projectId: "revolve-farms",
   storageBucket: "revolve-farms.appspot.com",
   messagingSenderId: "78612602380"
 };
 
 firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
