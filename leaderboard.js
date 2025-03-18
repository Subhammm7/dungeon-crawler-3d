import { db } from "./firebase-config.js";
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

async function loadLeaderboard() {
    const querySnapshot = await getDocs(collection(db, "leaderboard"));
    const leaderboardList = document.getElementById("leaderboard");
    leaderboardList.innerHTML = "";
    querySnapshot.forEach((doc) => {
        let li = document.createElement("li");
        li.textContent = `${doc.data().name} - ${doc.data().score}`;
        leaderboardList.appendChild(li);
    });
}

async function saveScore(name, score) {
    await addDoc(collection(db, "leaderboard"), { name, score });
}

loadLeaderboard();
