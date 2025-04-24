import styles from './FeaturedCard.module.css';

function FeaturedCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default FeaturedCard;
