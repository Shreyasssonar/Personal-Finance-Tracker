import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLNte_vR6d3vXHelaJcYXBJtPVCYuCn3s",
  authDomain: "personal-finance-tracker-e91e1.firebaseapp.com",
  projectId: "personal-finance-tracker-e91e1",
  storageBucket: "personal-finance-tracker-e91e1.appspot.com",
  messagingSenderId: "204978339862",
  appId: "1:204978339862:web:6e950da3f09af0fbb37537",
  measurementId: "G-ZJ18KKXFT5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };