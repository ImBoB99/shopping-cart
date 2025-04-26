import { useOutletContext } from "react-router-dom";
import ProductCheckoutCard from "../components/ProductCheckoutCard/ProductCheckoutCard";
import styles from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { productsData, cartItems, removeFromCart } = useOutletContext();

  const totalPrice = cartItems.reduce((acc, product) => {
    const item = productsData.find((i) => i.id === product.id);
    if (!item) return acc;
    return acc + item.price * product.quantity;
  }, 0);
  
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <h2 className={styles.title}>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className={styles.cartEmpty}>Oops...seems that your cart is empty.</p>
        ) : (
          <div className={styles.cartContainer}>
            {cartItems.map((product) => {
              const item = productsData.find((item) => product.id === item.id);
              if (!item) return null; // safety check
              return (
                <ProductCheckoutCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  rating={item.rating.rate}
                  ratingCount={item.rating.count}
                  quantity={product.quantity}
                  removeFromCart={removeFromCart}
                />
              );
            })}
            <p className={styles.finalPrice}>Final Price: €{formattedTotalPrice}</p>
            <div className={styles.buttonsContainer}>
              <Link className={styles.shoppingButton} to="/shop">
                Continue Shopping
              </Link>
              <button className={styles.checkoutButton}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
