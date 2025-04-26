import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useState, useEffect } from "react";

export default function AppLayout() {
  const [cartItems, setCartItems] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched products:", data);
        setProductsData(data);
      })
      .catch((error) => setFetchError(error));
  }, []);

  function addToCart(productId, productQuantity) {
    setCartItems((prevItems) => [...prevItems, { id: productId, quantity: productQuantity }]);
    console.log(cartItems);
  }

  function removeFromCart(productId) {
    const updatedCart = cartItems.filter((item) => item.id !== productId)
    setCartItems(updatedCart)
  }

  return (
    <>
      <Navbar cartItemQuantity={cartItems.length}></Navbar>
      <main>
        <Outlet context={{ cartItems, addToCart, removeFromCart, productsData, fetchError }}></Outlet>
      </main>
    </>
  );
}
