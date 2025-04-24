import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
import Shop from "../pages/Shop";
import AppLayout from "../layouts/AppLayout";

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/shopping-cart", element: <ShoppingCart></ShoppingCart> },
    ],
  },
];
