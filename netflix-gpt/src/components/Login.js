/*

- Login : a protected route component
    - Header which will have logo
    - background cover image
    - sign in + sign up form

*/

import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInUpToggler = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background"
      />
      {/* sing in + sign up form  */}
      <form className="flex flex-col mx-auto p-8 m-4 rounded bg-[rgba(0,0,0,0.75)] top-[20%] left-[50%] translate-x-[-50%] absolute w-[450px]">
        <h1 className="p-3 text-white text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          className="p-3 m-2 border rounded bg-slate-100"
          type="text"
          placeholder="email"
        />
        {!isSignIn && (
          <input
            className="p-3 m-2 border rounded bg-slate-100"
            type="text"
            placeholder="name"
          />
        )}
        <input
          className="p-3 m-2 border rounded bg-slate-100"
          type="password"
          placeholder="password"
        />
        <button className="p-3 m-2 bg-red-600 text-white font-bold rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
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
