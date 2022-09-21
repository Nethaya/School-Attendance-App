 import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBW4jz0pYohFEXnOdBGZoTM4XTk-sGofPE",
  authDomain: "school-attendance-25ed7.firebaseapp.com",
  databaseURL: "https://school-attendance-25ed7-default-rtdb.firebaseio.com/",
  projectId: "school-attendance-25ed7",
  storageBucket: "school-attendance-25ed7.appspot.com",
  messagingSenderId: "817158898863",
  appId: "1:817158898863:web:39ec63eafad74a5be9c05a"
};

 if(!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
export default firebase.database() 
 

  