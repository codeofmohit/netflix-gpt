import { useRef, useState, useMemo } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import { addUser } from "../store/slices/userSlice";
import { auth } from "../utils/firebaseConfig";

import Header from "./Header";
import { validateFields } from "../utils/validate";

import LOGIN_BG from "../constants/codeofmohit_bg.jpeg";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const signInUpBtn = useRef();
  const [name, setName] = useState("");

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  // memoizing header
  const memoizedHeader = useMemo(() => {
    return <Header />;
  }, []);

  // toggler to switch between sign in and sign up functionality
  const signInUpToggler = () => {
    setIsSignIn(!isSignIn);
    // clearning form fields on toggle
    email.current.value = "";
    password.current.value = "";
    setName("");
    setErrorMessage(null);
  };

  // adding user to redux store
  const addUserToReduxStore = (user) => {
    const { accessToken, displayName, email, uid, photoURL } = user;
    const userInfo = { accessToken, displayName, email, uid, photoURL };
    dispatch(addUser(userInfo));
  };

  const updateUserWithName = (user) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      //dummyphotoURL as of now
      photoURL:
        "https://ik.imagekit.io/3buj7rcwco/user_icon.png?updatedAt=1710247789248",
    })
      .then(() => {
        // Profile updated!
        console.log("Profile updated with name & photo url...");
        // once profile updated with name then add it to the redux store
        addUserToReduxStore(user);
      })
      .catch((error) => {
        console.log("Error in updating the profile" + error);
      });
  };

  // handing submission of the form based on either sign in or sign up via firebase
  const submitHandler = (e) => {
    e.preventDefault();
    const validationMessage = validateFields(
      name,
      email.current.value,
      password.current.value,
      isSignIn
    );
    setErrorMessage(validationMessage);

    // if not validated return from here
    if (validationMessage !== true) {
      return;
    }

    // adding loader for signin up/in stage
    signInUpBtn.current.innerHTML = `<div class="flex justify-center items-center"><span>signing in/up ...  </span> &nbsp; &nbsp;<div class="loader"></div></div>`;

    // sign in/up via firebase
    if (isSignIn) {
      // Signing users in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // storing user in redux store via action addUser
          addUserToReduxStore(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - sign in err - " + errorMessage);
        });
    } else {
      // Registering users up (sign-up)
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // update user with name and then storing user in redux [taken care in updateUserWithName]
          updateUserWithName(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - sign UP err - " + errorMessage);
        });
    }
  };

  // returned JSX
  return (
    <div>
      {/* memoized version of header to prevent not needed renders  */}
      {memoizedHeader}
      <img src={LOGIN_BG} alt="background" />
      {/* sing in + sign up form  */}
      <form className="flex flex-col mx-auto p-8 m-4 rounded bg-[rgba(0,0,0,0.75)] top-[20%] left-[50%] translate-x-[-50%] absolute w-[450px]">
        {/* form heading */}
        <h1 className="p-3 text-white text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <p className=" text-red-600 font-medium py-3 mx-3">
          Desclaimer : This is just a dummy project to showcase my skills & for
          learning purpose. This is not an actual streaming website, do not
          enter your actual credential here.
        </p>
        {/* name input on signUp only  */}
        {!isSignIn && (
          <input
            className="p-3 m-2 border rounded bg-slate-100"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {/* email input  */}
        <input
          className="p-3 m-2 border rounded bg-slate-100"
          type="text"
          placeholder="email"
          ref={email}
        />
        {/* password input  */}
        <input
          className="p-3 m-2 border rounded bg-slate-100"
          type="password"
          placeholder="password"
          ref={password}
        />
        {/* error message  */}
        {errorMessage && (
          <p className=" text-red-600 font-medium py-3 mx-3">{errorMessage}</p>
        )}
        {/* submit button  */}
        <button
          className="p-3 m-2 bg-red-600 text-white font-bold rounded-md"
          onClick={submitHandler}
          ref={signInUpBtn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {/* sign in/up toggler  */}
        <p
          className="p-3 m-2 cursor-pointer text-white hover:underline"
          onClick={signInUpToggler}
        >
          {isSignIn
            ? "Not registered yet! Sign up now"
            : "Already a customer! Sign in"}
        </p>
      </form>
    </div>
  );
};
export default Login;
