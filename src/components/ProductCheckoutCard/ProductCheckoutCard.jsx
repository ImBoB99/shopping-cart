import styles from "./ProductCheckoutCard.module.css";
import generateStars from "../../helpers/generateStars";

function ProductCheckoutCard({ id, title, price, category, image, rating, ratingCount, quantity, removeFromCart }) {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={image} alt={title} />
      <div className={styles.productDetails}>
        <span className={styles.productCategory}>{category}</span>
        <h3 className={styles.productTitle}>{title}</h3>
        <div className={styles.productPrice}>{price}</div>
        <div className={styles.productRating}>
          <span className={styles.stars}>{generateStars(rating)}</span>
          <span className={styles.count}>({ratingCount})</span>
        </div>
        <div className={styles.productQuantity}>Quantity: {quantity}</div>
      </div>
      <button className={styles.deleteProduct} onClick={() => removeFromCart(id)}>✖</button>
    </div>
  );
}

export default ProductCheckoutCard;