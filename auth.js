// Firebase v12
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDyiJfd42ChHIEXTbqtaUtnWPYOuThU0fE",
  authDomain: "trial-website-52f78.firebaseapp.com",
  projectId: "trial-website-52f78",
  storageBucket: "trial-website-52f78.appspot.com",
  messagingSenderId: "20272237580",
  appId: "1:20272237580:web:8498d63d87c217c4afb229",
  measurementId: "G-2NH9QNFVVS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup
window.signupUser = function () {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Account Created!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}

// Login
window.loginUser = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Login Successful!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}

// Logout
window.logoutUser = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
}

// Protect dashboard
onAuthStateChanged(auth, user => {
  if (window.location.pathname.includes("dashboard.html")) {
    if (!user) window.location.href = "login.html";
    else document.getElementById("userEmail").textContent = user.email;
  }
});