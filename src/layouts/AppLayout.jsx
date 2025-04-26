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
        setProductsData(data);
      })
      .catch((error) => setFetchError(error));
  }, []);

  function addToCart(productId, productQuantity) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (existingItem) {
        // Update the quantity of the existing item
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + productQuantity }
            : item
        );
      } else {
        // Add new item to the cart
        return [...prevItems, { id: productId, quantity: productQuantity }];
      }
    });
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
