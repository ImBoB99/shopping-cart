import styles from "./ProductCard.module.css";
import ProductQuantityCounter from "../ProductQuantityCounter/ProductQuantityCounter";
import { useState } from "react";
import generateStars from "../../helpers/generateStars";

function ProductCard({ id, title, price, category, image, rating, ratingCount, addToCart }) {
  const [count, setCount] = useState(1);

  function decrease() {
    count > 1 ? setCount(count - 1) : setCount(1);
  }

  function increase() {
    count < 999 ? setCount(count + 1) : setCount(999);
  }

  function handleChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCount(Math.min(Math.max(value, 1), 999));
    }
  }

  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={image} alt={title} />
      <span className={styles.productCategory}>{category}</span>
      <h3 className={styles.productTitle}>{title}</h3>
      <div className={styles.productPrice}>{price}</div>
      <div className={styles.productRating}>
        <span className={styles.stars}>{generateStars(rating)}</span>
        <span className={styles.count}>({ratingCount})</span>
      </div>
      <ProductQuantityCounter
        key={id}
        count={count}
        decrease={decrease}
        increase={increase}
        handleChange={handleChange}
      ></ProductQuantityCounter>
      <button onClick={() => addToCart(id, count)} className={styles.productCartButton}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
