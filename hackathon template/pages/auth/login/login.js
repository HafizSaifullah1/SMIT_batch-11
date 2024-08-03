import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
    getFirestore,
    doc,
    getDoc,
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH-FtsZwiz7VSSxjT577SPvEAepZRiRwg",
  authDomain: "mini-hackathon-101.firebaseapp.com",
  projectId: "mini-hackathon-101",
  storageBucket: "mini-hackathon-101.appspot.com",
  messagingSenderId: "335110657113",
  appId: "1:335110657113:web:75efaa6e681333823dcd48",
  measurementId: "G-PJRY4HCK3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();


let email = document.getElementById("email")
let password = document.getElementById("password")


window.login = () => {
    let obj = {
        email: email.value,
        password: password.value,
    }
    console.log(obj);

    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(async (res) => {
        const id = res.user.uid;
        const reference = doc(db, "users", obj.id);
        const snap = await getDoc(reference)
        if(snap.exists()){
            console.log("Success",res);
        } else {
            console.log("Data Not Found")
        }
    })
    .catch((e) => {
        alert("->",e.message)
    })
}
