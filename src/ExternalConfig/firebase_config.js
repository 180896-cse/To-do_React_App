import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyANJaJULP1BH1fHOt0_Mw2i3qYQg9E9c0U",
    authDomain: "todoapp-77087.firebaseapp.com",
    projectId: "todoapp-77087",
    storageBucket: "todoapp-77087.appspot.com",
    messagingSenderId: "1066232929174",
    appId: "1:1066232929174:web:c614c3a5f0283daf08dbb7"
  };

  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();

  export{db};