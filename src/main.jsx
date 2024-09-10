import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import AddProduct from "./Components/AddProduct/AddProduct.jsx";
import Registration from "./Components/Auth/Registration.jsx";
import ContextAPI from "./Components/ContextAPI/ContextAPI.jsx";
import PrivateRoute from "./Components/Private/PrivateRoute.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><App></App></PrivateRoute>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>
      },
      
    ]
  },
  {
    path: '/auth',
    element: <Registration></Registration>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextAPI>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </ContextAPI>
  </StrictMode>
);
