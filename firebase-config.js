import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjQ7OrjBHqev5btKJ1w4J1IwL2qjUtZV0",
    authDomain: "dungeon-crawler-e12e3.firebaseapp.com",
    projectId: "dungeon-crawler-e12e3",
    storageBucket: "dungeon-crawler-e12e3.appspot.com",
    messagingSenderId: "625458689311",
    appId: "1:625458689311:web:416d61ff86f156cfec2c2a",
    measurementId: "G-RHQVVQDBG5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

