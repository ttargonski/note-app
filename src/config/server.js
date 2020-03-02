import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLscC5S6pXVVJkmhOoIDcMZPMq_gmDW3c",
  authDomain: "note-app-react-20bea.firebaseapp.com",
  databaseURL: "https://note-app-react-20bea.firebaseio.com",
  projectId: "note-app-react-20bea",
  storageBucket: "note-app-react-20bea.appspot.com",
  messagingSenderId: "869788691386",
  appId: "1:869788691386:web:c871fa5fa66b0c750c4b83",
  measurementId: "G-B7CTFVWV8H"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
