import Home from "../pages/Home"
import Checkout from "../pages/Checkout"
import Shop from "../pages/Shop"
import AppLayout from "../layouts/AppLayout"

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home></Home>},
      { path: "/shop", element: <Shop></Shop>},
      { path: "/checkout", element: <Checkout></Checkout>},
    ]
  }
]