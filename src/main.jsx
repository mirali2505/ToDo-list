import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./componet/AppLayout.jsx";
import App from "./App.jsx";
import { Router, RouterProvider } from "react-router-dom";
import React from "react";
import { ModeContextProvider } from "./context/Mode_context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <React.StrictMode>
    <ModeContextProvider>
      <RouterProvider router={router} />
    </ModeContextProvider>
  </React.StrictMode>
  // </StrictMode>,
);
