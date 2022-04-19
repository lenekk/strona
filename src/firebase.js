import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAy3g1yaXcvHkWC9R8s1aRzcIb_Bg5YCzQ",
    authDomain: "restauracjax-b6e85.firebaseapp.com",
    projectId: "restauracjax-b6e85",
    storageBucket: "restauracjax-b6e85.appspot.com",
    messagingSenderId: "731179182241",
    appId: "1:731179182241:web:00e5dda50a6c51f5fce8e0"
})


export const auth = app.auth()
export const db = app.firestore()
export default app
