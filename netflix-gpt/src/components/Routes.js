/*
1. Body == Home component of the app
2. Body > will have routing in it
    -- / : login component
    -- /browse : browse component
*/

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter}></RouterProvider>;
};
export default Body;
