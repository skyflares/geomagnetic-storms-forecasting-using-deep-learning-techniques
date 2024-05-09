import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "normalize.css";
import "./index.css";
import Root from "./routes";
import ErrorPage from "./error-page";
import routes from "./routes/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routes,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
