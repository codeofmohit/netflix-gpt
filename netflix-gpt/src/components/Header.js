import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

import { removeUser } from "../store/slices/userSlice";
import LOGO from "../constants/codeofmohit_logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  // user from redux store (will use for using properties), initial value of state
  const userFromRedux = useSelector((state) => state.user);

  const [userState, setUserState] = useState(userFromRedux);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // user from firebase auth (will use for navigational redirections[protected ones])
  const user = auth.currentUser;

  // onAuthStateChanged : using it to handle redirections when sign in/up/out + making routes protected
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signed in or up
        setUserState(user);
        navigate("/browse");
      } else {
        // signed out or not signed in
        setUserState(null);
        navigate("/login");
      }
    });

    // unsubscribing from onAuthChanged which behaves as an event listener to clean up
    return () => {
      unsubscribe();
    };
  }, []);

  // function to handle signout
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        console.log("user signed out successfully!");
      })
      .catch((error) => {
        // An error happened.
        console.log("user signedout error!" + error);
      });
  };

  return (
    <div className="absolute flex justify-between items-center w-full bg-gradient-to-r from-black to-transparent z-20">
      <div className="logo">
        <Link to="/login">
          <img className="p-6 ml-6 w-48" src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className="navbar ">
        <ul className="flex justify-around items-center">
          {user && (
            <li className="p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
              <button
                className="flex justify-center items-center"
                to="/"
                onClick={signOutHandler}
              >
                <img
                  className="rounded h-8 w-8"
                  src={userState?.photoURL}
                  alt="profile"
                />
                <p>&nbsp;&nbsp;{userState?.displayName}&nbsp;&nbsp;</p>
                <span>(Sign Out)</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
