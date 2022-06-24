// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Cookies from "js-cookie";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAUd-KCUeVkDviVtFEBlM-ZMo_KJaL5sFc",
  authDomain: "shopwise-2d326.firebaseapp.com",
  projectId: "shopwise-2d326",
  storageBucket: "shopwise-2d326.appspot.com",
  messagingSenderId: "1097903523003",
  appId: "1:1097903523003:web:5e00172239a4d392b6959e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "user@example.com",
});
export const AddToStore = async (user) => {
  const data = {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    shippingInfo: null,
  };
  try {
    const docRef = await setDoc(doc(db, "users", `${user.uid}`), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const CreateWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user);
      if (user) {
        window.location = "/";
      }
      console.log("user");
      Cookies.set("userInfo", JSON.stringify(user), {
        expires: 7,
      });
      AddToStore(user);

      //logging into state
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
export const CreateWithGithub = () => {
  const provider = new GithubAuthProvider();
  // provider.addScope("repo");
  // provider.setCustomParameters({
  //   allow_signup: "false",
  // });
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      if (user) {
        window.location = "/";
      }
      console.log("user");
      Cookies.set("userInfo", JSON.stringify(user), {
        expires: 7,
      });
      AddToStore(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
};
export const SignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      //logging into state

      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
export const createUserWithEmail = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Adding to store
      const user = userCredential.user;
      AddToStore(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // ..
    });
};
export const signInWithEmail = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Adding to store
      const user = userCredential.user;
      // ...
      // const Router = useRouter();
      // Router.back()

      if (user) {
        window.location = "/";
      }
      // if (user) {
      //   window.location = "/";
      console.log("user");
      Cookies.set("userInfo", JSON.stringify(user), {
        expires: 7,
      });
      // }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      // OpenUp();
    });
};
export const signingOut = async () => {
  await signOut(auth).then(
    function () {
      Cookies.remove("userInfo");
    },
    function (error) {
      console.error("Sign Out Error", error);
    }
  );
};
export const UpdateCart = async (newState, userId) => {
  const data = {
    cart: newState,
  };
  try {
    const docRef = await setDoc(doc(db, "users", `${userId}`), data, {
      merge: true,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { auth };
export { provider };
export { db };
