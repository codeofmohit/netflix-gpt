/*

- Brief design doc (dev only)
- Login : a protected route component 🚀
    - Header which will have logo ✅
    - background cover image ✅
    - sign in + sign up form ✅
    - validation of form fields, using validate.js utility function ✅
      - showing error message as per validation ✅
      - validation for name, email, password ✅
      - using useRef instead for local state variable for input field's values ✅
        -- email and password : useRef ✅
        -- name : local state using useState ✅

*/

import { useRef, useState } from "react";
import Header from "./Header";

import { validateFields } from "../utils/validate";
import { firebaseSignInUp } from "../utils/firebaseSignInUp";

import LOGIN_BG from "../constants/codeofmohit_bg.jpeg";

const Login = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();

  const [isSignIn, setIsSignIn] = useState(true);

  const signInUpToggler = () => {
    setIsSignIn(!isSignIn);
    // clearning form fields on toggle
    email.current.value = "";
    password.current.value = "";
    setName("");
    setErrorMessage(null);
  };

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
    // execution of code will come here only if form is successfully validated
    // sign in/up logic
    firebaseSignInUp(
      isSignIn,
      name,
      email.current.value,
      password.current.value,
      setErrorMessage
    );
  };

  return (
    <div>
      <Header />
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
            onChange={(e) => {
              setName(e.target.value);
            }}
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
