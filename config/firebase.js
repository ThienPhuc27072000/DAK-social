import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt_encode from 'jwt-encode'

const fireBaseConfig = {
    "apiKey" : "AIzaSyAip4hecOJfi2iYN-iMBzWaCi9965XgBXg",
    "authDomain" : "stech-login.firebaseapp.com",
    "databaseURL" : "https://stech-login-default-rtdb.asia-southeast1.firebasedatabase.app/",
    "projectId" : "stech-login",
    "storageBucket" : "stech-login.appspot.com",
    "messagingSenderId" : "47306739642",
    "appId" : "1:47306739642:web:81dbe404d0f3a3e5add783",
    "measurementId" : "G-DKPY2G15WY"
} 

const app = initializeApp(fireBaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
googleProvider.addScope("email");


async function setCookie(data) {
    const credentials = data;

    axios.post("./api/login", credentials);

}

// Google login
export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).
    then((result) => {

        var info = {
            "name": result.user.displayName,
            "background_img": result.user.photoURL,
            "username": (result.user.displayName.split(' ')[result.user.displayName.split(' ').length-1] + result.user.displayName.split(' ')[0]).toLowerCase(),
            "identity": result.user.uid.toString(),
            "account_type": 3,
            "email": result.user.providerData[0],
        }
        
        var data = info;

        var config = {
            method: 'post',
            url: 'http://115.79.140.218:9008/api/auth/login-social',
            headers: { 
                'Authorization': `Bearer ${result.user.accessToken}`, 
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
            .then(function (response) {
                const cookies = new Cookies();
                setCookie(data)
                location.replace("http://localhost:3000");
            })
            .catch(function (error) {
                console.log(error);
            });
    }).catch((error) => {
        console.log(error)
    })
}

   
// Facebook login
export const signInWithFaceBook = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
        var data = {
            "name": result.user.displayName,
            "background_img": result._tokenResponse.rawUserInfo.split(',')[7].replaceAll('\"','').replace('url','').replace(':',''),
            "username": (result.user.displayName.split(' ')[result.user.displayName.split(' ').length-1] + result.user.displayName.split(' ')[0]).toLowerCase(),
            "identity": result.user.uid.toString(),
            "account_type": 2,
            "email": result.user.providerData[0].email,
        };

        var config = {
            method: 'post',
            url: 'http://115.79.140.218:9008/api/auth/login-social',
            headers: { 
                'Authorization': `Bearer ${result.user.accessToken}`, 
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
            .then(function (response) {
                const cookies = new Cookies();
                setCookie(data)
                location.replace("http://localhost:3000");
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }).catch((error) => {
        console.log(error)
    })
}
