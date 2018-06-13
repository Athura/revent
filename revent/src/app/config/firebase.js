import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVJ71jQLhR0QpO_Kfcm5SKJzlVR2DRbbk",
    authDomain: "revents-6d5c5.firebaseapp.com",
    databaseURL: "https://revents-6d5c5.firebaseio.com",
    projectId: "revents-6d5c5",
    storageBucket: "revents-6d5c5.appspot.com",
    messagingSenderId: "537864399040"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;