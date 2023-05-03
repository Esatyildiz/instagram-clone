import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0f4fQ96ygOnhXdW7bAMZcDFStxG9C72I",
    authDomain: "react-instagram-c4b10.firebaseapp.com",
    projectId: "react-instagram-c4b10",
    storageBucket: "react-instagram-c4b10.appspot.com",
    messagingSenderId: "1072676947530",
    appId: "1:1072676947530:web:590d056bcfd2f305da08b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, user => {
    userHandle(user || false)
})

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log({ response });
        toast.success('Giriş Yapıldı')


    } catch (err) {
        toast.error("Girdiğiniz bilgiler hatalı")
    }
}

export const logaut = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        toast.error(err.code)
    }
}
