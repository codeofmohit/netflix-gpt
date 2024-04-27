import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

import { removeUser } from "../store/slices/userSlice";
import { gptSearchBtnToggler } from "../store/slices/gptSlice";
import { addSelectedLang } from "../store/slices/multiLangSlice";
import LOGO from "../constants/codeofmohit_logo.png";
import { useEffect, useState } from "react";
import { multiLangOptions } from "../constants/constants";
import { clearGptMovies } from "../store/slices/gptSlice";

const Header = () => {
  // user from redux store (will use for using properties), initial value of state
  const userFromRedux = useSelector((state) => state.user);
  const isGptSearchBtnClicked = useSelector(
    (state) => state.gptSearch?.isClicked
  );

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
        navigate("/");
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
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // function to handle gptSearch
  const gptSearchBtnHandler = () => {
    dispatch(gptSearchBtnToggler());
    // dispatch a reducer to clear movies suggestions
    dispatch(clearGptMovies());
  };

  const multiLangSelectHandler = (e) => {
    dispatch(addSelectedLang(e.target.value));
  };

  return (
    <div className="absolute flex flex-col md:flex-row justify-between items-stretch md:items-center w-full bg-gradient-to-b from-black  to-[rgba(0,0,0,0.9)] md:bg-gradient-to-r md:from-black md:to-transparent z-20">
      <div className="logo">
        <Link to="/login">
          <img
            className="p-5 md:p-6  md:ml-6 w-40 md:w-48 mx-auto md:mx-[unset]"
            src={LOGO}
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar pb-4 md:pb-[unset] mt-[-0.25rem] md:mt-[unset]">
        <ul className="flex justify-around items-center">
          {user && (
            <>
              {!isGptSearchBtnClicked && (
                <li className="hidden md:block p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-black rounded">
                  <select onChange={multiLangSelectHandler}>
                    {multiLangOptions?.map((each) => {
                      return (
                        <option key={each.type} value={each.type}>
                          {each.value}
                        </option>
                      );
                    })}
                  </select>
                </li>
              )}

              <li className="md:p-2 mr-2 md:m-4 md:font-medium md:text-lg md:bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
                <button
                  className="flex justify-center items-center"
                  to="/"
                  onClick={gptSearchBtnHandler}
                >
                  <span>
                    {isGptSearchBtnClicked ? "GPT Search" : "Homepage"}
                  </span>
                </button>
              </li>
              <li className="md:p-2 md:m-4 md:font-medium md:text-lg md:bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
                <button
                  className="flex justify-center items-center"
                  to="/"
                  onClick={signOutHandler}
                >
                  <img
                    className="rounded-[50%] md:rounded h-8 w-8"
                    src={userState?.photoURL}
                    alt="profile"
                  />
                  <p>&nbsp;{userState?.displayName}&nbsp;</p>
                  <span>(sign out)</span>
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
