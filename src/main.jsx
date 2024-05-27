import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
