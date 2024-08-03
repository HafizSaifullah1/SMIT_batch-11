import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();


let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm-password")
let phone = document.getElementById("phone")
let dob = document.getElementById("dob")
let course = document.getElementById("course")
let gender = document.getElementById("gender")


window.submitForm = () => {
    
  let obj = {
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    phone: phone.value,
    dob: dob.value,
    course: course.value,
    gender: gender.value
  }

  console.log(obj);

  dataSend(obj)

  console.log("Data send ho gya bhai");
     
}

const dataSend = async (obj) => {
    const reference = collection(db, "studentData")
    let res = await addDoc(reference, obj)
    // console.log(res.id);
}