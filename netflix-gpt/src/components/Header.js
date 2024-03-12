import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAuth, signOut } from "firebase/auth";
// import { auth } from "../utils/firebaseConfig";

import { removeUser } from "../store/slices/userSlice";
import LOGO from "../constants/codeofmohit_logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state.user;
  });

  // on first load only setting up user info from redux store into local state
  useEffect(() => {
    setUserState(user);
  }, [user]);

  const signOutHandler = () => {
    console.log("coming in signout handler");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        console.log("user signed out successfully!");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log("user signedout error!" + error);
      });
  };

  return (
    <div className="absolute flex justify-around items-center w-5/6">
      <div className="logo">
        <Link to="/">
          <img
            className=" p-6 ml-16 bg-gradient-to-b from-transparent to-black w-64"
            src={LOGO}
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar ">
        <ul className="flex justify-around items-center">
          <li className="p-2 m-4 font-medium  text-lg bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
            <Link to="/">Home</Link>
          </li>
          {user && (
            <li className="p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
              <Link to="/browse">browse</Link>
            </li>
          )}
          {!user ? (
            <li className="p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
              <Link to="/login">Sign In</Link>
            </li>
          ) : (
            <li className="p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
              <button
                className="flex justify-center items-center"
                to="/"
                onClick={signOutHandler}
              >
                <img
                  className="rounded-[50%] h-12 w-12"
                  src={userState?.photoURL}
                  alt="profile"
                />
                <p>&nbsp;{userState?.displayName}&nbsp;</p>
                <span>(Sign Out)</span>
              </button>
            </li>
          )}
          {/* for forced signout -- let it be */}
          {/* <li className="p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
            <button to="/" onClick={signOutHandler}>
              Sign Out
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
