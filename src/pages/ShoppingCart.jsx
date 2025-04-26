import { useOutletContext } from "react-router-dom";
import ProductCheckoutCard from "../components/ProductCheckoutCard/ProductCheckoutCard";
import styles from "./ShoppingCart.module.css";

function ShoppingCart() {
  const { productsData, cartItems, removeFromCart } = useOutletContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <h2 className={styles.title}>Your Shopping Cart</h2>
        <div className={styles.cartContainer}>
          {cartItems.map((product) => {
            const item = productsData.find((item) => product.id === item.id);
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
            ></ProductCheckoutCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
