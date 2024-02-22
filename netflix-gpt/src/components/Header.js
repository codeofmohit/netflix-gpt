/* 

Header : a comann header for both login and browse routes
        - simple and neat
        - will have logo that't it

*/

import { Link } from "react-router-dom";

import LOGO from "../constants/codeofmohit_logo.png";

const Header = () => {
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
          <li className="p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-2 m-4 font-medium text-lg bg-[rgba(0,0,0,0.8)] text-white rounded hover:text-[rgb(250,40,54)]">
            <Link to="/browse">browse</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
