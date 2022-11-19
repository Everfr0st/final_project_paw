import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAO2OCPpHuZPoVCodZOIAQoMpzicVanXiw",
    authDomain: "projecto-web-4d1fd.firebaseapp.com",
    projectId: "projecto-web-4d1fd",
    storageBucket: "projecto-web-4d1fd.appspot.com",
    messagingSenderId: "26762448294",
    appId: "1:26762448294:web:b8af579e211e88fc2f9367"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth}