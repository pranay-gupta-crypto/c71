import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDf5J5KNQ-B_XU0ehvHn9UNxu_mPnmmuks",
    authDomain: "c71-22a39.firebaseapp.com",
    projectId: "c71-22a39",
    storageBucket: "c71-22a39.appspot.com",
    messagingSenderId: "862976015983",
    appId: "1:862976015983:web:c9a480f126a62269bc979a"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
