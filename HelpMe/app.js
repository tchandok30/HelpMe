// app.js
import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById("sos-btn").addEventListener("click", async () => {
  try {
    await addDoc(collection(db, "sos_alerts"), {
      timestamp: serverTimestamp(),
      location: "User clicked SOS",
    });
    document.getElementById("status").textContent = "✅ SOS sent!";
  } catch (e) {
    console.error("Error sending SOS: ", e);
    document.getElementById("status").textContent = "❌ Failed to send SOS.";
  }
});
