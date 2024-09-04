import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import AddProduct from "./Components/AddProduct/AddProduct.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path: "/add-product",
        element : <AddProduct></AddProduct>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </StrictMode>
);
