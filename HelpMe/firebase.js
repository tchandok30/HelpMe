{/* <script type="module">
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
  import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';
  import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

  const firebaseConfig = {
    apiKey: "AIzaSyDhw5V3kKl1HmV0E2fW0DdwaI8OgQ7cnzs",
    authDomain: "helpme2304-2d5ab.firebaseapp.com",
    projectId: "helpme2304-2d5ab",
    storageBucket: "helpme2304-2d5ab.appspot.com",  // ✅ corrected
    messagingSenderId: "175477767471",
    appId: "1:175477767471:web:d2ba5d45b6a21fd24575da"
  };

  // ✅ Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // ✅ Firebase services
  const auth = getAuth(app);
  const db = getFirestore(app);

  // ✅ SOS Button click handler
  document.getElementById("sos-button").addEventListener("click", async () => {
    try {
      await addDoc(collection(db, "sos-alerts"), {
        timestamp: new Date().toISOString(),
        message: "🚨 SOS Triggered!",
      });
      alert("🚨 SOS sent!");
    } catch (error) {
      console.error("Error sending SOS:", error);
      alert("❌ Failed to send SOS: " + error.message);
    }
  });
</script> */}
