// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxD6jk7QMyu_1dS_ZRE3sQ9rodkWE5Log",
  authDomain: "sastabazar-82a8b.firebaseapp.com",
  databaseURL: "https://sastabazar-82a8b-default-rtdb.firebaseio.com",
  projectId: "sastabazar-82a8b",
  storageBucket: "sastabazar-82a8b.appspot.com",
  messagingSenderId: "246279486066",
  appId: "1:246279486066:web:8081c1a83906e8921160eb",
  measurementId: "G-88BP7LN4TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();


let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
// let obj;

window.signupUser = () => {
  // if(password.value === confirmPassword.value){
   
  // } else {
  //   alert('Password doesnt match')
  // }
  let obj = {
    userName: userName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  }
  console.log(obj)

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res) => {
      obj.id = res.user.uid;
      obj.userType = "user"
      delete obj.password
console.log(res)
      const refernce = doc(db, "users", obj.id)
      setDoc(refernce, obj)

        .then(() => {
          const userObj = JSON.stringify(obj)
          localStorage.setItem("user", userObj)
          window.location.replace("../../index.html")

        })
        .catch((err) => {
          alert(err.message)
        })
    })
    .catch((err) => {
      alert(err.message)
   })
   
};


