import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyDbZ49mKjauw3lJd0WUWfwcjVXnNKuZQcg",
  authDomain: "revolve-farms.firebaseapp.com",
  databaseURL: "https://revolve-farms.firebaseio.com",
  projectId: "revolve-farms",
  storageBucket: "revolve-farms.appspot.com",
  messagingSenderId: "78612602380"
});

export const db = app.database();
export const dateRef = db.ref('date');
