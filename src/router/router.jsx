import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import RootLayout from "../Layout/RootLayout";
import AllProducts from "../pages/AllProducts/AllProducts";
import Register from "../components/Register/Register";
import MyProducts from "../pages/MyProducts/MyProducts";
import MyBids from "../pages/MyBids/MyBids";
import Login from "../components/Login/Login";
import ProductDetails from "../components/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allProducts",
        element: <AllProducts />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      { path: "myProducts", element: <MyProducts /> },
      { path: "myBids", element: <MyBids /> },
      {
        path: "productDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: <ProductDetails />,
      },
    ],
  },
]);
