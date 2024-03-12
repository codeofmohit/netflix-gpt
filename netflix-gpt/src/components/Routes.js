import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";

const Routes = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
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
export default Routes;
