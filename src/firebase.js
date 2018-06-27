import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "Enter key when used",
  authDomain: "revolve-farms.firebaseapp.com",
  databaseURL: "https://revolve-farms.firebaseio.com",
  projectId: "revolve-farms",
  storageBucket: "revolve-farms.appspot.com",
  messagingSenderId: "78612602380"
});

export const db = app.database();
export const ref = db.ref();
