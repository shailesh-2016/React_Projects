import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ_Lx3EXMJ9MXqZUXVA3arM532J-XRDZU",
  authDomain: "fir-b62d7.firebaseapp.com",
  databaseURL: "https://fir-b62d7-default-rtdb.firebaseio.com",
  projectId: "fir-b62d7",
  storageBucket: "fir-b62d7.appspot.com",
  messagingSenderId: "56721659985",
  appId: "1:56721659985:web:5156351a5ce28688f80070",
  measurementId: "G-L3YKSXMS3J"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db