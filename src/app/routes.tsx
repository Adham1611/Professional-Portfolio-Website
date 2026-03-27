import { createBrowserRouter } from "react-router";
import Portfolio from "./Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
], {
  basename: import.meta.env.BASE_URL,
});
