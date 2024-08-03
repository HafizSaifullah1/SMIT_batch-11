// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
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

// Array to hold student data
const students = [];

// Function to fetch student data from Firestore
const getStudents = async () => {
    try {
        const reference = collection(db, "studentData");
        const querySnapshot = await getDocs(reference);

        // Clear previous data
        students.length = 0;

        querySnapshot.forEach((doc) => {
            const student = {
                id: doc.id,
                ...doc.data(),
            };
            students.push(student);
        });

        console.log(students);
        console.log("Data fetched successfully");

        // Call the function to render data
        renderStudentData();
    } catch (error) {
        console.error("Error fetching student data:", error);
    }
};

// Function to render student data into the table
const renderStudentData = () => {
    const tbody = document.getElementById('student-table-body');
    tbody.innerHTML = ''; // Clear existing rows

    students.forEach((student) => {
        const row = document.createElement('tr');
        row.className = 'border-b hover:bg-gray-100';

        row.innerHTML = `
            <td class="px-4 py-2">${student.name || 'N/A'}</td>
            <td class="px-4 py-2">${student.email || 'N/A'}</td>
            <td class="px-4 py-2">${student.course || 'N/A'}</td>
            <td class="px-4 py-2">${student.age || 'N/A'}</td>
            <td class="px-4 py-2">${student.gender || 'N/A'}</td>
        `;

        tbody.appendChild(row);
    });
};

// Fetch and render student data when the page loads
document.addEventListener('DOMContentLoaded', getStudents);
