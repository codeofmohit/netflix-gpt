/* 

Header : a comann header for both login and browse routes
        - simple and neat
        - will have logo that't it

*/

import { LOGO } from "../constants/imgLinks";

const Header = () => {
  return (
    <>
      <img
        className="absolute p-6 ml-16 bg-gradient-to-b from-transparent to-black w-64"
        src={LOGO}
        alt="logo"
      />
    </>
  );
};
export default Header;
