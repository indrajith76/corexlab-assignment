import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Inventory from "../pages/Inventory/Inventory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/", // inventory
        element: <Inventory />,
      },
    ],
  },
]);
