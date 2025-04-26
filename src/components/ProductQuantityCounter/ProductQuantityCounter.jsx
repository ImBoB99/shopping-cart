import styles from "./ProductQuantityCounter.module.css";

function ProductQuantityCounter({count, decrease, increase, handleChange}) {

  return (
    <div className={styles.counterContainer}>
      <button onClick={decrease} aria-label="Decrease quantity">–</button>
      <input
        type="number"
        name="productQuantity"
        min={1}
        max={999}
        value={count}
        onChange={handleChange}
      />
      <button onClick={increase} aria-label="Increase quantity">+</button>
    </div>
  );
}

export default ProductQuantityCounter;
