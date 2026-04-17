import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { ProjectDetail } from "./components/ProjectDetail";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "project/:id", Component: ProjectDetail },
      { path: "about", Component: About },
    ],
  },
]);
