import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
getAuth,
connectAuthEmulator,
signInWithEmailAndPassword} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAZDR0JIKMOxO5XMMrBk4Zh7Il8z3CBcNs",
  authDomain: "final-f9da3.firebaseapp.com",
  projectId: "final-f9da3",
  storageBucket: "final-f9da3.appspot.com",
  messagingSenderId: "380134219305",
  appId: "1:380134219305:web:6c8cc305eff826a5748638",
  measurementId: "G-SY49R865LC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)


connectAuthEmulator(auth, "http://localhost:9099")

export const loginEmailPassword = async (email, password) => {
    console.log(email)
    console.log(password)
    
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential.user);
    }catch(error){
        console.log(error)
    }
    
}