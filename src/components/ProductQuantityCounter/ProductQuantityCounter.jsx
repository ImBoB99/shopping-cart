import styles from "./ProductQuantityCounter.module.css";
import { useState } from "react";

function ProductQuantityCounter() {
  const [count, setCount] = useState(1);

  function decrease() {
    count > 1 ? setCount(count - 1) : setCount(1)
  }

  function increase() {
    count < 999 ? setCount(count + 1) : setCount(999)
  }

  function handleChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCount(Math.min(Math.max(value, 1), 999));
    }
  }

  return (
    <div className={styles.counterContainer}>
      <button onClick={decrease} aria-label="Decrease quantity">–</button>
      <input
        type="number"
        name="productQuantity"
        id="productQuantity"
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
