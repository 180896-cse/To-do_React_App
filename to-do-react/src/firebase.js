import firebase from "firebase";      // fixed tremplet can use with every code of firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgsC9sFskFYYVdfQdovy6zIjmN4j8DfCc",
  authDomain: "todo-reactapp-87190.firebaseapp.com",
  projectId: "todo-reactapp-87190",
  storageBucket: "todo-reactapp-87190.appspot.com",
  messagingSenderId: "623713117463",
  appId: "1:623713117463:web:04283df701e9cfcdb78352",
  measurementId: "G-XYB063WRNL"

});
const db=firebaseApp.firestore();
 export default db;