// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7_6HPFANxQrNkpErVsUBWNNM80BD4jFY",
  authDomain: "cadastro-vagas-e7067.firebaseapp.com",
  projectId: "cadastro-vagas-e7067",
  storageBucket: "cadastro-vagas-e7067.firebasestorage.app",
  messagingSenderId: "875763941070",
  appId: "1:875763941070:web:31b6009740f054654d5a9f",
  measurementId: "G-N0VGVH26X8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app)