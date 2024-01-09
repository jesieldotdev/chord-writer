import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: "chord-writter",
  storageBucket: "chord-writter.appspot.com",
  messagingSenderId: "2304916338",
  appId: "1:2304916338:web:3daf188e1ce9a163befbeb"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};


const auth = getAuth();

const logout = () => {
  signOut(auth).then(() => {
    // Deslogado com sucesso
  }).catch((error) => {
    // Ocorreu um erro ao deslogar
  });
};

export {signInWithGoogle, logout}