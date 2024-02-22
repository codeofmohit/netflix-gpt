import Header from "./Header";

import LOGIN_BG from "../constants/codeofmohit_bg.jpeg";

const Home = () => {
  return (
    <div>
      <Header />
      <img src={LOGIN_BG} alt="background" />

      <p className=" text-red-600 font-medium mx-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[rgba(0,0,0,0.8)] p-8 rounded text-2xl py-22">
        Desclaimer : This is just a dummy project to showcase my skills & for
        learning purpose. This is not an actual streaming website, do not enter
        your actual credential here.
      </p>
    </div>
  );
};
export default Home;
