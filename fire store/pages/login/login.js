// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxD6jk7QMyu_1dS_ZRE3sQ9rodkWE5Log",
  authDomain: "sastabazar-82a8b.firebaseapp.com",
  projectId: "sastabazar-82a8b",
  storageBucket: "sastabazar-82a8b.appspot.com",
  messagingSenderId: "246279486066",
  appId: "1:246279486066:web:8081c1a83906e8921160eb",
  measurementId: "G-88BP7LN4TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db =getFirestore()

let email = document.getElementById("email")
let password = document.getElementById("password")

window.loginUser = () => {
  let obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj)

  signInWithEmailAndPassword(auth, obj.email, obj.password)

    .then(async (res) => {
      let id = res.user.uid;
      let refernce = doc(db, "users", id)
      let snap = await getDoc(refernce);

      if (snap.exists()) {
        localStorage.setItem("user", JSON.stringify(snap.data()))
        window.location.replace("../../index.html")

      } else {
        alert("Data not found")
      };
    })
    .catch((err) => {
      alert(err.message)
    });
};