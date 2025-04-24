import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContainerInner}>
        <h1 className={styles.brandTitle}>
          <span className={styles.odin}>Odin</span>
          <span className={styles.buyGradient}>Buy</span>
        </h1>
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/shopping-cart">ShoppingCart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
