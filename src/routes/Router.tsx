import React from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/index";
import Signup from "../pages/Signup/index";
import Error from "../pages/error/index";
import Dashboard from "../pages/dashboard/index";
import Layout from "../layout/index";
import Upload from "../upload/files";

import { createBrowserRouter, useRoutes } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
      },
      {
        path: "user",
        element: <h1>user</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
]);

export default Router;
