import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import FeaturedCard from "../components/FeaturedCard/FeaturedCard";
import { Truck, ShieldCheck, Tag, Undo } from "lucide-react";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <h2 className={styles.brandTitle}>
          Welcome to
          <span className={styles.odin}> Odin</span>
          <span className={styles.buyGradient}>Buy</span>
        </h2>
        <p className={styles.brandDescription}>
          Discover our amazing collection of high-quality products. From cheap to premium brands, we
          have a ton of products just for you.
        </p>
        <Link className={styles.brandCTA} to="/shop">
          Shop Now
        </Link>
      </div>
      <div className={styles.featuredCardsGrid}>
        <FeaturedCard
          icon={<Truck size={32} />}
          title="Fast Shipping"
          description="Get your products delivered in 1-2 days. Shipped by Odin himself!"
        />
        <FeaturedCard
          icon={<ShieldCheck size={32} />}
          title="Secure Payments"
          description="Your payment info is protected with us."
        />
        <FeaturedCard
          icon={<Tag size={32} />}
          title="Best Deals"
          description="We offer competitive pricing every day."
        />
        <FeaturedCard
          icon={<Undo size={32} />}
          title="Easy Returns"
          description="Hassle-free 30-day return policy."
        />
      </div>
    </div>
  );
}

export default Home;
