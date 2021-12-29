import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
//import "firebase/compat/firestore";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYSFvq7PUX5gUWmVf9gL1IyIiR8lYvMC8",
    authDomain: "snapchat-clone-b.firebaseapp.com",
    projectId: "snapchat-clone-b",
    storageBucket: "snapchat-clone-b.appspot.com",
    messagingSenderId: "721043526964",
    appId: "1:721043526964:web:003d1f12b3dbef34538161"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };
  