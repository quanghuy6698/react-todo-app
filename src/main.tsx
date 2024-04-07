import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./page/Error/ErrorPage.tsx";
import HomePage from "./page/Home/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./state/AppState.ts";
import { Provider } from "react-redux";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoute} />
    </Provider>
  </React.StrictMode>
);
