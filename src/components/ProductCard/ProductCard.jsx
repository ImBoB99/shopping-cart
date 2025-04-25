import styles from "./ProductCard.module.css"
import ProductQuantityCounter from "../ProductQuantityCounter/ProductQuantityCounter"

function ProductCard() {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
      <span className={styles.productCategory}>Men's Clothing</span>
      <h3 className={styles.productTitle}>Men's Cotton Jacket</h3>
      <div className={styles.productPrice}>109.99</div>
      <div className={styles.productRating}>
        <span className={styles.stars}>★★★★☆</span>
        <span className={styles.count}>(120)</span>
      </div>
      <ProductQuantityCounter></ProductQuantityCounter>
      <button className={styles.productCartButton}>Add to Cart</button>
    </div>
  )
}


export default ProductCard