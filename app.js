import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyDurFcQVuH9cjxSYJrHRerlDODf6TWwjVc",
  authDomain: "market-1bc09.firebaseapp.com",
  projectId: "market-1bc09",
  storageBucket: "market-1bc09.firebasestorage.app",
  messagingSenderId: "167873369062",
  appId: "1:167873369062:web:57839306c837afa7e73c27"
};
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("loginBtn");
const userInfo = document.getElementById("userInfo");

loginBtn.onclick = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    userInfo.innerHTML = `
      <p>Signed in as:</p>
      <strong>${user.email}</strong>
    `;
  } catch (error) {
    alert("Login failed");
  }
};