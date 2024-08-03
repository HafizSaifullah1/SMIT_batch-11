// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
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
const db = getFirestore();

let uploadLink = document.getElementById("uploadLink")
let loginLink = document.getElementById("loginLink")
let signupLink = document.getElementById("signupLink")
let logoutBtn = document.getElementById("logoutBtn")



function init() {
    let userObj = localStorage.getItem("user");
    userObj = JSON.parse(userObj);
    console.log("All products: ",products);


    if (userObj) {
        loginLink.style.display("none")
        signupLink.style.display("none")

        if (userObj.userType === "user") {
            uploadLink.style.display("none")
        }
        // if (userObj.userType === "admin") {
        //     uploadLink.style.display("block")
        // }
        logoutBtn.className = "text-white mx-4 inline-block bg-blue-500 p-2 rounded"
    };
};

init()

window.logout = () => {
    signOut(auth)
        .then(() => {
            localStorage.removeItem("product")
            init()
        })
        .catch((err) => {
            alert(err.message)

        });

};

let products = [];
async function getProduct() {
    let refernce = collection(db, "product")
    let dt = await getDocs(refernce)
    console.log(dt);
    console.log(refernce);
    dt.forEach(element => {
        let obj = {
            id: element.id,
            ...element.data()
        }
        products.push(obj)
renderProduct();
    });

}

let parentElement = document.getElementById("parentElement")

function renderProduct() {

    parentElement.innerHTML = ''

    products.forEach(obj => {
        parentElement.innerHTML += ` <div class="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="${obj.productImage}" alt="Product Image" class="w-full h-56 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">${obj.productName}</h3>
                    <p class="text-gray-600 mb-4">${obj.productPrice}</p>
                    <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</a>
                </div>
            </div>`

    })

};

getProduct();