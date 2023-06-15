import { initializeApp } from "firebase/app";
import { Firestore, GetFirestore, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQLpG2lTg3YoxBT8QhGEc4yX5Mshzjvt8",
  authDomain: "garbossa-proyecto-2de0d.firebaseapp.com",
  projectId: "garbossa-proyecto-2de0d",
  storageBucket: "garbossa-proyecto-2de0d.appspot.com",
  messagingSenderId: "798181964225",
  appId: "1:798181964225:web:77099bab77a80d40305740"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);