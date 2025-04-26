import styles from "./Shop.module.css";
import ProductCard from "../components/ProductCard/ProductCard";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const { addToCart, productsData, fetchError } = useOutletContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <h2 className={styles.title}>Shop Odin's products today</h2>
        <p className={styles.description}>
          Browse our collection of high-quality items. Use the filters to find exactly what you're
          looking for.
        </p>

        {/* Need to add styling, search input and category switcher */}
        <div className={styles.shopControls}></div>

        <div className={styles.shopGrid}>
          {fetchError ? (
            <p>A network error was encountered</p>
          ) : (
            productsData.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
                rating={product.rating.rate}
                ratingCount={product.rating.count}
                addToCart={addToCart}
              ></ProductCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
