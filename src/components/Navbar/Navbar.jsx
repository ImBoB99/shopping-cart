import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ShoppingCart } from "lucide-react";


function Navbar() {
  return (
    <nav className={styles.navContainer}>
        <h1 className={styles.brandTitle}>
          <span className={styles.odin}>Odin</span>
          <span className={styles.buyGradient}>Buy</span>
        </h1>
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
        <Link to="/shopping-cart"><ShoppingCart className={styles.cartIcon} /></Link>
    </nav>
  );
}

export default Navbar;
