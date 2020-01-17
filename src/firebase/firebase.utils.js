import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAmUMxCWU4z6GbBoLGpyvTDHwLrdYNTH5Q",
  authDomain: "react-ecommerce-60084.firebaseapp.com",
  databaseURL: "https://react-ecommerce-60084.firebaseio.com",
  projectId: "react-ecommerce-60084",
  storageBucket: "react-ecommerce-60084.appspot.com",
  messagingSenderId: "525211126829",
  appId: "1:525211126829:web:ed11c59ce7b585609d3ca4",
  measurementId: "G-C2B4S0C60R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc("users/" + userAuth.uid);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
