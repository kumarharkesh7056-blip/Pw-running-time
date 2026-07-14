<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA7QiDQJzVb0V8e20NakVBPzbXiGjjnqzw",
    authDomain: "pw-running-time-5deb3.firebaseapp.com",
    projectId: "pw-running-time-5deb3",
    storageBucket: "pw-running-time-5deb3.firebasestorage.app",
    messagingSenderId: "4542815071",
    appId: "1:4542815071:web:49079750ef4354954074ea",
    measurementId: "G-2RMSF18LPT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
