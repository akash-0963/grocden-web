import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBKtbieA4UDOXQM5yygg5sJyI1z6u3NBhc",
  authDomain: "my-grocden-project.firebaseapp.com",
  projectId: "my-grocden-project",
  storageBucket: "my-grocden-project.appspot.com",
  messagingSenderId: "99931200912",
  appId: "1:99931200912:web:f9e64fda7760ff1a7e6715",
  measurementId: "G-FLK9SQEPWM"
};


const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { app, firestore };