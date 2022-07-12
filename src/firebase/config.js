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
  updateProfile,
  updatePassword,
} from "firebase/auth";
// Your web app's Firebase configuration
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

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

      console.log("user");
      Cookies.set("userInfo", JSON.stringify(user), {
        expires: 7,
      });

      AddToStore(user).then(() => {
        window.location = "/";
      });

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

export const createUserWithEmail = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Adding to store
      const user = userCredential.user;
      Cookies.set("userInfo", JSON.stringify(user), {
        expires: 7,
      });
      AddToStore(user).then(() => {
        window.location = "/";
      });

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Cookies.set("error", JSON.stringify(errorCode), {
        expires: 7,
      });
      toast.error(errorMessage);

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

      // if (user) {
      //   window.location = "/";
      console.log("user");
      Cookies.set("userInfo", JSON.stringify(user), {
        expires: 7,
      });
      AddToStore(user).then(() => {
        window.location = "/";
      });

      // }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage, "jdjdj");
      // OpenUp();
      Cookies.set("error", JSON.stringify(errorCode), {
        expires: 7,
      });
      toast.error(errorMessage);
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
export const AddToShippingInfo = async (values, userId) => {
  const data = {
    shippingInfo: {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      address: values.address,
    },
  };
  try {
    const docRef = await setDoc(doc(db, "users", `${userId}`), data, {
      merge: true,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
//Reset Password
export const resetPassword = (newPassword) => {
  updatePassword(auth.currentUser, newPassword)
    .then(() => {
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
};

//Updating Profile

export const AddToProfileInfo = async (values, userId) => {
  const data = {
    displayName: values.displayName,
    email: values.email,
    phoneNumber: values.phoneNumber,
    photoURL: values.photoURL,
  };
  try {
    updateProfile(auth.currentUser, data).then(() => {
      // Profile updated!
      setDoc(doc(db, "users", `${userId}`), data, { merge: true });
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { auth };
export { provider };
export { db };
