// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
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
const db = getFirestore()

let productName = document.getElementById("productName")
let productDescription = document.getElementById("productDescription")
let productPrice = document.getElementById("productPrice")
let productCategory = document.getElementById("productCategory")
let productImage = document.getElementById("productImage")


window.sendProduct = async () => {
    let obj = {
        productName: productName.value,
        productDescription: productDescription.value,
        productPrice: productPrice.value,
        productCategory: productCategory.value,
        productImage: productImage.value,
    }
    console.log(obj)


    let refernce = collection(db, "product")
    let res = await addDoc(refernce, obj)
    console.log(res)
    
};
sendProduct()
