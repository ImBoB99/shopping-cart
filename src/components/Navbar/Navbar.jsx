import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/checkout">Checkout</Link>
    </>
  );
}

export default Navbar;
