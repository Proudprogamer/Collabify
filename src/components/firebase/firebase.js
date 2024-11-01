import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMfQ-7Q5U-BPBUN3afrOge82MmI-eYSF0",
  authDomain: "collabify-34b1e.firebaseapp.com",
  projectId: "collabify-34b1e",
  storageBucket: "collabify-34b1e.firebasestorage.app",
  messagingSenderId: "237143205870",
  appId: "1:237143205870:web:37ffa139e63836cb4dd0ff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app, auth}