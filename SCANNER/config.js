import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    
  apiKey: "AIzaSyAuHK4979RnmBDV8FeupRvBFNUKeHHpcSA",
  authDomain: "exam-90a99.firebaseapp.com",
  databaseURL: "https://exam-90a99-default-rtdb.firebaseio.com",
  projectId: "exam-90a99",
  storageBucket: "exam-90a99.appspot.com",
  messagingSenderId: "724257383977",
  appId: "1:724257383977:web:6d7ac56732584289939e38",
  measurementId: "G-308LZSBRHH"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };