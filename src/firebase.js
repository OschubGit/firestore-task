import app from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ271tUrITvDZyRBii5xQDDglNuayz6ws",
  authDomain: "neptune-react.firebaseapp.com",
  databaseURL: "https://neptune-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "neptune-react",
  storageBucket: "neptune-react.appspot.com",
  messagingSenderId: "18561530974",
  appId: "1:18561530974:web:bebf10757495f7e217c8cf"
};
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore()
  const auth = app.auth()


  export {db, auth, firebase};