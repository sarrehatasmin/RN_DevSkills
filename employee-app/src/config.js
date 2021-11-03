import * as firebase from "firebase";
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJcJJSlipea9lyuwE-RvGnEcRDcpnntUQ",
    authDomain: "employee-app-cc626.firebaseapp.com",
    projectId: "employee-app-cc626",
    storageBucket: "employee-app-cc626.appspot.com",
    messagingSenderId: "562985711263",
    appId: "1:562985711263:web:5ee02caa9681ab131ed4aa"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }