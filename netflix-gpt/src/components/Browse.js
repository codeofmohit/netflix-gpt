import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import LOGIN_BG from "../constants/codeofmohit_bg.jpeg";
import { useEffect } from "react";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });

  // checking if signed in then only allowing access to browse component
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <img src={LOGIN_BG} alt="background" />
    </>
  );
};
export default Browse;
