import styles from "./Shop.module.css";
import ProductCard from "../components/ProductCard/ProductCard";

function Shop() {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <h2 className={styles.title}>Shop Odin's products today</h2>
        <p className={styles.description}>
          Browse our collection of high-quality items. Use the filters to find exactly what you're
          looking for.
        </p>

        {/* Need to add styling, search input and category switcher */}
        <div className={styles.shopControls}>
          
        </div>

        <div className={styles.shopGrid}>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
}

export default Shop;
