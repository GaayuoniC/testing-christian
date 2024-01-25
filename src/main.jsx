import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { RootLayout } from "./pages/RootLayout";
import { HomePage } from "./pages/HomePage";
import { History } from "./pages/History";
import { Gallery } from "./pages/Gallery";
import { Tourism } from "./pages/Tourism";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "history", element: <History /> },
      { path: "gallery", element: <Gallery /> },
      { path: "tourism", element: <Tourism /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
