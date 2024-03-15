import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDokIwOOkgPVszJ5v7MjAjfN2rzF4b_H50",
  authDomain: "erpthiagobarbosa.firebaseapp.com",
  projectId: "erpthiagobarbosa",
  storageBucket: "erpthiagobarbosa.appspot.com",
  messagingSenderId: "88937093081",
  appId: "1:88937093081:web:1a6c7c47129a168ba72bc8",
};

export const fbConfig = initializeApp(firebaseConfig);
export const firestoreInit = getFirestore(fbConfig);
export const auth = getAuth(fbConfig);
