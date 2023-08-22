import firebase from '@react-native-firebase/app';
import '@react-native-firebase/analytics'; // Add this line

// Your Firebase configuration object
const firebaseConfig = {
  // Replace with your actual Firebase configuration
  apiKey: "AIzaSyBIsfKjFCL4poLSQF4T1tvx7vpUQPKVAf8",
  authDomain: "proact-staff.firebaseapp.com",
  projectId: "proact-acdf7",
  storageBucket: "proact-acdf7.appspot.com",
  messagingSenderId: "830055568438",
  appId: "1:220747443796:android:fa384a11a9c7748c8487c1",
};

// Check if a Firebase app instance already exists
if (!firebase.apps.length) {
  // Initialize the Firebase app
  firebase.initializeApp(firebaseConfig);
}

export default firebase;