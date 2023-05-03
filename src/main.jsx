import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Page/Navbar";
import Footer from "./Component/Page/Footer";
import Main from "./Component/Page/Main";
import Home from "./Component/Page/Home";
import AuthProvider from "./Component/Provider/AuthProvider";
import Blog from "./Component/Page/Blog";
import Login from "./Component/Page/Login";
import Register from "./Component/Page/Register";
import ChefRecipe from "./Component/Page/ChefRecipe";
import VeiwDetails from "./Component/Page/VeiwDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from "./Component/Page/About";
import ClientReview from "./Component/Page/ClientReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/chefdetails/:id",
        element: <VeiwDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
