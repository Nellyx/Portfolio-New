import React from "react";
import { useRoutes } from "react-router";
import Landing from "./pages/Landing/landing";
import MainLayout from "./layout/mainLayout";
import Projects from "./pages/Projects/projects";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
  ]);
};

export default Router;
